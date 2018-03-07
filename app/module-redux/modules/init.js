/**
 * chat initialize redux module
 *
 * - chat by twilio should be initialized first
 * - could be success or error
 * - chat service will be initialized after auth success
 * - subscribed by chat screen & error container
 *
 * work-flow
 *
 * - trying to get token from self-host twilio gateway
 * - trying to init the client by twilio service
 * - trying to init the channel by twilio service
 * - trying to join the channel
 *
 * result handle
 *
 * - if it success, then dispatch CHAT_INIT_SUCC
 * - if it error, then dispatch CHAT_INIT_ERROR
 *
 */

'use strict';

const CHAT_INIT_SUCC = 'module-redux/init/CHAT_INIT_SUCC';
const CHAT_INIT_ERROR = 'module-redux/init/CHAT_INIT_ERROR';
const CHAT_LOAD_HISTORY_SUCC = 'module-redux/init/CHAT_LOAD_HISTORY_SUCC';
const CHAT_LOAD_HISTORY_ERROR = 'module-redux/init/CHAT_LOAD_HISTORY_ERROR';

const initialState = {
  channelId: null,
  history: [],
  error: {
    code: 0,
    message: '',
  },
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHAT_INIT_SUCC:
      return {
        ...state,
        channelId: action.payload.channelId,
        error: { code: 0, message: null },
      };
    case CHAT_INIT_ERROR:
      return {
        ...state,
        channelId: null,
        error: { code: 0, message: action.error },
      };
    case CHAT_LOAD_HISTORY_SUCC:
      return {
        ...state,
        history: [...action.payload.history],
        error: null,
      };
    case CHAT_LOAD_HISTORY_ERROR:
      return {
        ...state,
        // history: [...action.payload.history],
        error: action.error,
      };
    default:
      return state;
  }
};

// Action Creators
export const chatInitSuccess = channelId => ({
  type: CHAT_INIT_SUCC,
  payload: {
    channelId,
  },
});

export const chatInitError = error => ({
  type: CHAT_INIT_ERROR,
  payload: {
    user: null,
  },
  error,
});

export const chatLoadHistorySuccess = history => ({
  type: CHAT_LOAD_HISTORY_SUCC,
  payload: {
    history,
  },
});


export const chatLoadHistoryError = error => ({
  type: CHAT_INIT_SUCC,
  payload: {
    history: [],
  },
  error,
});

