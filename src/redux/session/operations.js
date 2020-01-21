import * as api from '../../services/session-api';
import {
  signInRequest,
  signInSuccesss,
  refreshUserRequest,
  refreshUserSuccess,
  signInError,
  refreshUserError,
} from './actions';
import { getToken, getUsername } from './selectors';

export const signin = credentials => dispatch => {
  dispatch(signInRequest());

  api
    .signin(credentials)
    .then(({ data }) => dispatch(signInSuccesss(data)))
    .catch(({ message }) => dispatch(signInError(message)));
};

export const refreshUser = () => (dispatch, getState) => {
  const token = getToken(getState());
  const username = getUsername(getState());
  if (!token || !username) return;

  dispatch(refreshUserRequest());
  api
    .signin({ username })
    .then(({ data }) => dispatch(refreshUserSuccess(data)))
    .catch(({ message }) => dispatch(refreshUserError(message)));
};
