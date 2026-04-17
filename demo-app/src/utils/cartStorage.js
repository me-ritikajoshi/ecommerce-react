import { CART_STORAGE_KEY } from '../config/constants';

export const getCartItems = () => {
  const rawData = localStorage.getItem(CART_STORAGE_KEY);
  if (!rawData) {
    return [];
  }

  try {
    const parsedData = JSON.parse(rawData);
    return Array.isArray(parsedData) ? parsedData : [];
  } catch {
    return [];
  }
};

export const saveCartItems = items => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};
