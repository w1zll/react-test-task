import { getMinPrice, isInStock } from '../../../shared/api/productsApi';

export const filterBySearch = (products, search) => {
  if (!search.trim()) return products;
  const lower = search.toLowerCase();
  return products.filter((p) => p.name.toLowerCase().includes(lower));
};

export const filterByStock = (products, onlyInStock) => {
  if (!onlyInStock) return products;
  return products.filter(isInStock);
};

export const sortByPrice = (products, direction) => {
  if (!direction) return products;
  return [...products].sort((a, b) => {
    const diff = getMinPrice(a) - getMinPrice(b);
    return direction === 'asc' ? diff : -diff;
  });
};

export const applyFilters = (
  products,
  { search, onlyInStock, sortDirection },
) => {
  let result = products;
  result = filterBySearch(result, search);
  result = filterByStock(result, onlyInStock);
  result = sortByPrice(result, sortDirection);
  return result;
};
