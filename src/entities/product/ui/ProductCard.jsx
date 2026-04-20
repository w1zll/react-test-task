import React from 'react';
import { getMinPrice, isInStock } from '../../../shared/api/productsApi';
import { Link } from 'react-router';
import { productCard as s } from '../../../shared/ui/styles/productCard.styles';

const ProductCard = ({ product }) => {
  const minPrice = getMinPrice(product);
  const inStock = isInStock(product);
  const previewImage = product.colors[0]?.images[0];

  return (
    <Link to={`/product/${product.id}`} className={s.root}>
      <div className={s.imageWrapper}>
        {previewImage ? (
          <img src={previewImage} alt={product.name} className={s.image} />
        ) : (
          <div className={s.noImage}>
            <p>Нет изображения</p>
          </div>
        )}
        {!inStock && <p className={s.badgeOut}>Нет в наличии</p>}
      </div>

      <div className={s.info}>
        <p className={s.brand}>{product.brand}</p>
        <h3 className={s.name}>{product.name}</h3>
        <p className={s.price}>от {minPrice} ₽</p>
      </div>
    </Link>
  );
};

export default ProductCard;
