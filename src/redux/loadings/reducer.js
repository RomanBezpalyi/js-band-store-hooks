import { ActionTypes as SessionTypes } from '../session/actions';
import { ActionTypes as BookTypes } from '../books/actions';
import { ActionTypes as SelectedBookTypes } from '../selectedBook/actions';
import { ActionTypes as CartTypes } from '../cartList/actions';

const initialState = {
  sessionLoading: false,
  getBooksLoading: false,
  getSelectedBookLoading: false,
  purchaseBooksLoading: false,
};

const loadings = (state = initialState, { type }) => {
  switch (type) {
    case SessionTypes.SIGN_IN_REQUEST:
    case SessionTypes.REFRESH_USER_REQUEST:
      return { ...state, sessionLoading: true };
    case BookTypes.GET_BOOKS_REQUEST:
      return { ...state, getBooksLoading: true };
    case SelectedBookTypes.GET_SELECTED_BOOK_REQUEST:
      return { ...state, getSelectedBookLoading: true };
    case CartTypes.PURCHASE_BOOKS_REQUEST:
      return { ...state, purchaseBooksLoading: true };

    case SessionTypes.SIGN_IN_SUCCESS:
    case SessionTypes.REFRESH_USER_SUCCESS:
    case SessionTypes.SIGN_IN_ERROR:
    case SessionTypes.REFRESH_USER_ERROR:
      return { ...state, sessionLoading: false };
    case BookTypes.GET_BOOKS_SUCCESS:
    case BookTypes.GET_BOOKS_ERROR:
      return { ...state, getBooksLoading: false };
    case SelectedBookTypes.GET_SELECTED_BOOK_SUCCESS:
    case SelectedBookTypes.GET_SELECTED_BOOK_ERROR:
      return { ...state, getSelectedBookLoading: false };
    case CartTypes.PURCHASE_BOOKS_SUCCESS:
    case CartTypes.PURCHASE_BOOKS_ERROR:
      return { ...state, purchaseBooksLoading: false };
    default:
      return state;
  }
};

export default loadings;
