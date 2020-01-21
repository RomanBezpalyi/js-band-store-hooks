export const ActionTypes = {
  GET_SELECTED_BOOK_REQUEST: 'GET_SELECTED_BOOK_REQUEST',
  GET_SELECTED_BOOK_SUCCESS: 'GET_SELECTED_BOOK_SUCCESS',
  GET_SELECTED_BOOK_ERROR: 'GET_SELECTED_BOOK_ERROR',

  REMOVE_SELECTED_BOOK_FROM_STORE: 'REMOVE_SELECTED_BOOK_FROM_STORE',
};

export const getSelectedBookRequest = () => ({
  type: ActionTypes.GET_SELECTED_BOOK_REQUEST,
});

export const getSelectedBookSuccesss = response => ({
  type: ActionTypes.GET_SELECTED_BOOK_SUCCESS,
  payload: response,
});

export const getSelectedBookError = error => ({
  type: ActionTypes.GET_SELECTED_BOOK_ERROR,
  payload: error,
});

export const removeSelectedBookFromStore = () => ({
  type: ActionTypes.REMOVE_SELECTED_BOOK_FROM_STORE,
});
