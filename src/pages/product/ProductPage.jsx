import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { fetchProduct, fetchSizes } from '../../shared/api/productsApi';
import useProductConfig from '../../features/product-configurator/model/useProductConfig';
import ProductGallery from '../../features/product-gallery/ui/ProductGallery';
import ProductConfigurator from '../../features/product-configurator/ui/ProductConfigurator';
import AddToCartButton from '../../features/add-to-cart/ui/AddToCartButton';
import { productPage as s } from './../../shared/ui/styles/pages.styles';
import { page, state } from './../../shared/ui/styles/shared.styles';
import Loader from '../../shared/ui/Loader';

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    setError(null);

    Promise.all([fetchProduct(id), fetchSizes()])
      .then(([productData, sizesData]) => {
        setProduct(productData);
        setSizes(sizesData);
      })
      .catch((err) => {
        if (err.message?.includes('not found')) {
          setNotFound(true);
        } else {
          setError('Не удалось загрузить товар');
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const { selectedColor, selectedSizeId, setColor, setSize } =
    useProductConfig(product);

  if (loading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader absolute={true} />
      </div>
    );
  if (notFound)
    return (
      <div className={state.notFound}>
        <p>Товар не найден</p>
        <Link to="/" className={state.notFoundLink}>
          Вернуться в каталог
        </Link>
      </div>
    );
  if (error) return <div className={state.error}>{error}</div>;

  return (
    <div className={page.container}>
      <Link to="/" className={page.back}>
        Вернуться в каталог
      </Link>

      <div className={s.layout}>
        <ProductGallery images={selectedColor?.images ?? []} />

        <div className={s.details}>
          <p className={s.brand}>{product?.brand}</p>
          <h1 className={s.name}>{product?.name}</h1>
          <p className={s.price}>
            {selectedColor
              ? `${parseFloat(selectedColor.price)} ₽`
              : 'Цена не указана'}
          </p>

          {selectedColor && (
            <p className={s.description}>{selectedColor.description}</p>
          )}

          <ProductConfigurator
            product={product}
            sizes={sizes}
            selectedColor={selectedColor}
            selectedSizeId={selectedSizeId}
            onColorChange={setColor}
            onSizeChange={setSize}
          />

          <AddToCartButton
            product={product}
            selectedColor={selectedColor}
            selectedSizeId={selectedSizeId}
            sizes={sizes}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
