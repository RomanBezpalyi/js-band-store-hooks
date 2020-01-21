export const ActionTypes = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_PRICE: 'SET_PRICE',
};

export const setFilter = (type, value) => ({
  payload: value,
  type,
});
