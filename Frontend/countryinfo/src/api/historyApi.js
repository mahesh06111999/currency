import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const addHistory = (search, token) =>
  axios.post(`${API_URL}/history`, search, {
    headers: { 'x-auth-token': token },
  });
export const getHistory = (token) =>
  axios.get(`${API_URL}/history`, { headers: { 'x-auth-token': token } });
