import { useCallback } from 'react';
import { useSearchParams } from 'react-router';

const useCatalogFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const onlyInStock = searchParams.get('inStock') === '1';
  const sortDirection = searchParams.get('sort') ?? '';

  const setSearch = useCallback(
    (value) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (value) {
          next.set('search', value);
        } else {
          next.delete('search');
        }
        return next;
      });
    },
    [setSearchParams],
  );

  const setOnlyInStock = useCallback(
    (value) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (value) {
          next.set('inStock', '1');
        } else {
          next.delete('inStock');
        }
        return next;
      });
    },
    [setSearchParams],
  );

  const setSortDirection = useCallback(
    (value) => {
      // console.log('setSortDirection');
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (value) {
          next.set('sort', value);
        } else {
          next.delete('sort');
        }
        return next;
      });
    },
    [setSearchParams],
  );

  return {
    search,
    onlyInStock,
    sortDirection,
    setSearch,
    setOnlyInStock,
    setSortDirection,
  };
};

export default useCatalogFilters;
