import { ActionTypes } from './actions';

const books = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_BOOKS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default books;
