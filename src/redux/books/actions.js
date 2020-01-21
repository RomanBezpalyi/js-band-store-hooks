export const ActionTypes = {
  GET_BOOKS_REQUEST: 'GET_BOOKS_REQUEST',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_ERROR: 'GET_BOOKS_ERROR',
};

export const getBooksRequest = () => ({
  type: ActionTypes.GET_BOOKS_REQUEST,
});

export const getBooksSuccesss = response => ({
  type: ActionTypes.GET_BOOKS_SUCCESS,
  payload: response,
});

export const getBooksError = error => ({
  type: ActionTypes.GET_BOOKS_ERROR,
  payload: error,
});
