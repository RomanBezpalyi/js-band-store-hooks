import axios from 'axios';

axios.defaults.baseURL = 'https://js-band-api.glitch.me/';

export const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signin = credentials => axios.post('signin', credentials);
