import * as firebase from 'firebase';
import { TwilioChatService } from 'app-service';

import {
  chatInitSuccess,
  chatInitError,
} from '../modules/init';

/**
 * To init a chat room, to get the channel, it could
 * be different channelId for different chat room, so
 * should always bring the channel to the dedicated room.
 *
 * @param dispatch
 */
export const onInit = dispatch => (email, channelId) => {
  /*
   FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot) => {
   dispatch(loadMessagesSuccess(snapshot.val()))
   }, (errorObject) => {
   dispatch(loadMessagesError(errorObject.message))
   })
   */

  if (TwilioChatService.client) {
    const client = TwilioChatService.client;
    const channel = TwilioChatService.getChannelById(channelId);
    if (channel) {
      channel.getMessages()
        .then((messages) => {
          console.log(messages);
          chatInitSuccess(channel.sid);
        })
        .catch((err) => {
          chatInitError(err.description);
        });

      return;
    }

    client.getChannelBySid(channelId)
      .then((ch) => {
        TwilioChatService.addChannel(ch);
        chatInitSuccess(ch.sid);
      })
      .catch((err) => {
        chatInitError(err);
      });

    return;
  }

  TwilioChatService.login(
    email,
    (client) => {
      console.log('twilio login success: ');
      client.getChannelBySid(channelId)
        .then((ch) => {
          TwilioChatService.addChannel(ch);
          if (ch.status !== 'joined') {
            ch.join()
              .then(() => {
                dispatch(chatInitSuccess(ch.sid));
              })
              .catch((err) => {
                dispatch(chatInitError(err.description));
              });
          } else {
            dispatch(chatInitSuccess(ch.sid));
          }
        })
        .catch((err) => {
          console.info('get channel error');
          dispatch(chatInitError(err.description));
        });
    },
    (error) => {
      dispatch(chatInitError(error.toString()));
    },
  );
};
