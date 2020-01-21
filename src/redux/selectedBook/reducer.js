import { ActionTypes } from './actions';

const selectedBook = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_SELECTED_BOOK_SUCCESS:
      return payload;
    case ActionTypes.REMOVE_SELECTED_BOOK_FROM_STORE:
      return null;
    default:
      return state;
  }
};

export default selectedBook;
