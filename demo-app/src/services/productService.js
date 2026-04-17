import axios from 'axios';
import { API_BASE_URL } from '../config/constants';

const productApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000
});

export const getProducts = async () => {
  const { data } = await productApi.get('/products');
  return data;
};

export const getProductById = async productId => {
  const { data } = await productApi.get(`/products/${productId}`);
  return data;
};
