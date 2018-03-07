
export const sendMessage = message => {
  return (dispatch) => {
    dispatch(chatMessageLoading())

    let currentUser = firebaseService.auth().currentUser
    let createdAt = new Date().getTime()
    let chatMessage = {
      text: message,
      createdAt: createdAt,
      user: {
        id: currentUser.uid,
        email: currentUser.email
      }
    }
    /*

     FIREBASE_REF_MESSAGES.push().set(chatMessage, (error) => {
     if (error) {
     dispatch(chatMessageError(error.message))
     } else {
     dispatch(chatMessageSuccess())
     }
     })

     */

    if (twilioChatService.app.channel) {
      const msg = {
        text: message,
        user: {
          email: currentUser.email,
        },
        me: twilioChatService.app.client.userInfo.identity === currentUser.email,
        createdAt: Date.now(),
      };

      console.log('send message success');
      twilioChatService.app.channel.sendMessage(message);
      dispatch(chatMessageSuccess(msg));

    }
  }
}

export const updateMessage = text => {
  return (dispatch) => {
    dispatch(chatUpdateMessage(text))
  }
}

export const loadMessages = () => {
  return (dispatch) => {
    /*
     FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot) => {
     dispatch(loadMessagesSuccess(snapshot.val()))
     }, (errorObject) => {
     dispatch(loadMessagesError(errorObject.message))
     })
     */

    if (twilioChatService.app.channel) {

      //sdispatch(sess)
      const channel = twilioChatService.app.channel;

      console.log('twilio chat loading messages');

      channel.getMessages(10)
        .then((list) => {
          console.log('twilio messages from server');
          console.log(list);
          // alert(list.length);
        })
        .catch((err) => {
          alert(err.toString());
        });

      const messages = {
        data: [
          {
            text: 'hi',
            user: {
              email: 'nice@gmail.com'
            },
            createdAt: Date.now() - 60 * 1000,
          }
        ]
      };
      twilioChatService.app.channel.onMessageAdded = message => {
        // dispatch(updateMessage(message.body)

        console.log(message);

        dispatch(chatNewMessageAdded({
          text: message.body,
          user: {
            email: message.author,
          },
          me: twilioChatService.app.client.userInfo.identity === message.author,
          createdAt: Date.parse(message.timestamp.toUTCString()),
        }))
      }



      dispatch(loadMessagesSuccess(messages));
    }


  }
}