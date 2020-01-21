import { toast } from 'react-toastify';
import * as api from '../../services/books-api';
import {
  getSelectedBookRequest,
  getSelectedBookSuccesss,
  getSelectedBookError,
} from './actions';
import { getToken } from '../session/selectors';

// eslint-disable-next-line import/prefer-default-export
export const getBook = id => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  dispatch(getSelectedBookRequest());
  api
    .getBook(token, id)
    .then(({ data }) => dispatch(getSelectedBookSuccesss(data)))
    .catch(({ message }) => {
      dispatch(getSelectedBookError(message));
      toast.error(`${message}`);
    });
};
