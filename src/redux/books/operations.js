import { toast } from 'react-toastify';
import * as api from '../../services/books-api';
import { getBooksRequest, getBooksSuccesss, getBooksError } from './actions';
import { getToken } from '../session/selectors';

// eslint-disable-next-line import/prefer-default-export
export const getBooks = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  dispatch(getBooksRequest());
  api
    .getBooks(token)
    .then(({ data }) => dispatch(getBooksSuccesss(data)))
    .catch(({ message }) => {
      dispatch(getBooksError(message));
      toast.error(`${message}`);
    });
};
