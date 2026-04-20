import {
  getCategories,
  getProducts,
  getProduct,
  getSizes,
} from '../../services/api';

export const getMinPrice = (product) => {
  return Math.min(...product.colors.map((c) => parseFloat(c.price)));
};

export const isInStock = (product) => {
  return product.colors.some((c) => c.sizes.length > 0);
};

export const fetchProducts = async () => {
  return getProducts();
};

export const fetchProduct = async (id) => {
  return getProduct(id);
};

export const fetchSizes = async () => {
  return getSizes();
};

export const fetchCategories = async () => {
  return getCategories();
};
