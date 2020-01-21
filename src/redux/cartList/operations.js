import { toast } from 'react-toastify';
import * as api from '../../services/books-api';
import {
  purchaseBooksRequest,
  purchaseBooksSuccesss,
  purchaseBooksError,
} from './actions';
import { getToken } from '../session/selectors';
import { getCartList } from './selectors';

// eslint-disable-next-line import/prefer-default-export
export const purchaseBooks = () => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;
  const cartList = getCartList(getState());
  const books = [];
  cartList.forEach(book => {
    for (let i = 0; i < book.count; i += 1) {
      books.push(book.id);
    }
  });

  dispatch(purchaseBooksRequest());
  api
    .purchaseBooks(token, { books })
    .then(({ data }) => {
      dispatch(purchaseBooksSuccesss());
      toast.success(`${data.message}`);
    })
    .catch(({ message }) => {
      dispatch(purchaseBooksError(message));
      toast.error('Oops... Something went wrong. Try again.');
    });
};
