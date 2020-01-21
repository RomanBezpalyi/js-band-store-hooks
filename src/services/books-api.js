import axios from 'axios';
import { setAuthToken } from './session-api';

axios.defaults.baseURL = 'https://js-band-api.glitch.me/';

export const getBooks = token => {
  setAuthToken(token);
  return axios.get('books');
};

export const getBook = (token, id) => {
  setAuthToken(token);
  return axios.get(`books/${id}`);
};

export const purchaseBooks = (token, books) => {
  setAuthToken(token);
  return axios.post('purchase', books);
};
