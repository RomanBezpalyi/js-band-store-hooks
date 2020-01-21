import { combineReducers } from 'redux';
import { ActionTypes } from './actions';

const username = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return payload.username;
    case ActionTypes.HANDLE_LOGOUT:
      return null;
    default:
      return state;
  }
};

const avatar = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
    case ActionTypes.REFRESH_USER_SUCCESS:
      return payload.avatar;
    case ActionTypes.HANDLE_LOGOUT:
      return null;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return payload.token;
    case ActionTypes.HANDLE_LOGOUT:
      return null;
    default:
      return state;
  }
};

const isAuthentificated = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
    case ActionTypes.REFRESH_USER_SUCCESS:
      return true;
    case ActionTypes.HANDLE_LOGOUT:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  username,
  avatar,
  token,
  isAuthentificated,
});
