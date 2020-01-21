import { ActionTypes as SessionTypes } from '../session/actions';
import { ActionTypes as BookTypes } from '../books/actions';
import { ActionTypes as SelectedBookTypes } from '../selectedBook/actions';
import { ActionTypes as CartTypes } from '../cartList/actions';

const initialState = {
  sessionError: null,
  getBooksError: null,
  getSelectedBookError: null,
  purchaseBooksError: null,
};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case SessionTypes.SIGN_IN_ERROR:
    case SessionTypes.REFRESH_USER_ERROR:
      return { ...state, sessionError: payload };
    case BookTypes.GET_BOOKS_ERROR:
      return { ...state, getBooksError: payload };
    case SelectedBookTypes.GET_SELECTED_BOOK_ERROR:
      return { ...state, getSelectedBookError: payload };
    case CartTypes.PURCHASE_BOOKS_ERROR:
      return { ...state, purchaseBooksError: payload };

    case SessionTypes.SIGN_IN_SUCCESS:
    case SessionTypes.REFRESH_USER_SUCCESS:
    case SessionTypes.CLEAR_ERROR_MESSAGE:
      return { ...state, sessionError: null };
    case BookTypes.GET_BOOKS_SUCCESS:
      return { ...state, getBooksError: null };
    case SelectedBookTypes.GET_SELECTED_BOOK_SUCCESS:
      return { ...state, getSelectedBookError: null };
    case CartTypes.PURCHASE_BOOKS_SUCCESS:
      return { ...state, purchaseBooksError: null };
    default:
      return state;
  }
};

export default errors;
