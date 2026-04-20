import React, { useEffect, useState } from 'react';
import useCatalogFilters from '../../features/catalog-filters/model/useCatalogFilters';
import { fetchProducts } from '../../shared/api/productsApi';
import { applyFilters } from '../../features/catalog-filters/lib/filterProducts';
import CatalogFilters from '../../features/catalog-filters/ui/CatalogFilters';
import ProductCard from '../../entities/product/ui/ProductCard';
import { catalogPage as s } from '../../shared/ui/styles/pages.styles';
import { page } from '../../shared/ui/styles/shared.styles';
import Loader from '../../shared/ui/Loader';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { search, onlyInStock, sortDirection } = useCatalogFilters();

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(setProducts)
      .catch(() => setError('Произошла ошибка при загрузке товаров'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = applyFilters(products, {
    search,
    onlyInStock,
    sortDirection,
  });

  if (loading) return <Loader absolute={true} />;
  if (error) return <div>{error}</div>;

  return (
    <div className={page.container}>
      <h1 className={page.title}>Каталог</h1>

      <CatalogFilters />

      {filtered.length === 0 ? (
        <div>Ничего не найдено</div>
      ) : (
        <div className={s.grid}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
