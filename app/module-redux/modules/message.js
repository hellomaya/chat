/**
 * messaging redux module
 *
 * - send message to twilio service
 * - message added to chat room, invoke callback
 * - message send success
 * - message send error (timeout)
 *
 */

'use strict';

const MESSAGE_SEND_SUCC = 'module-redux/message/MESSAGE_SEND_SUCC';
const MESSAGE_SEND_ERROR = 'module-redux/message/MESSAGE_SEND_ERROR';
const MESSAGE_RECEIVE_SUCC = 'module-redux/message/MESSAGE_RECEIVE_SUCC';
const MESSAGE_RECEIVE_ERROR = 'module-redux/message/MESSAGE_RECEIVE_ERROR';

const initialState = {
  userId: '',
  email: '',
  text: '',
  created: 0,
  error: null,
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MESSAGE_SEND_SUCC:
      return {
        ...state,
        user: { ...action.payload.user },
      };
    case MESSAGE_SEND_ERROR:
      return {
        ...state,
        user: null,
        error: action.error,
      };
    case MESSAGE_RECEIVE_SUCC:
      return {
        ...state,
        history: [...action.payload.history],
        error: null,
      };
    case MESSAGE_RECEIVE_ERROR:
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
export const chatInitSucc = user => ({
  type: CHAT_INIT_SUCC,
  payload: {
    user,
  },
});

export const chatInitError = error => ({
  type: CHAT_INIT_ERROR,
  payload: {
    user: null,
  },
  error,
});

export const chatLoadHistorySucc = history => ({
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

