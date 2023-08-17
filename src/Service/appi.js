import axios from 'axios';

const baseUrl = 'https://64c33b5aeb7fd5d6ebd0a253.mockapi.io/';

export const instance = axios.create({
  baseURL: baseUrl,
});


