import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const getCountryByCurrencyCode = (currencyCode) =>
  axios.get(`${API_URL}/countries/${currencyCode}`);
