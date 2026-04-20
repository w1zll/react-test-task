import React, { useState } from 'react';
import useCartStore from '../../../entities/cart/model/cartStore';
import { addToCart as s } from '../../../shared/ui/styles/pages.styles';

const AddToCartButton = ({ product, selectedColor, selectedSizeId, sizes }) => {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const canAdd = selectedColor && selectedSizeId;

  const handleAdd = () => {
    if (!canAdd) return;

    const size = sizes.find((s) => s.id === selectedSizeId);
    // console.log('В корзину добавлен товар:', product );
    // console.log('Размер:', selectedSizeId );
    addItem({
      productId: product.id,
      colorId: selectedColor.id,
      sizeId: selectedSizeId,
      productName: product.name,
      colorName: selectedColor.name,
      sizeName: size?.name,
      image: selectedColor.images[0],
      price: selectedColor.price,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 300);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={!canAdd}
      className={`${s.btn} ${!canAdd && s.btnDisabled} ${isAdded && 'bg-green-400 hover:bg-green-400'}`}
    >
      {isAdded
        ? 'Добавлено'
        : !selectedSizeId
          ? 'Выберите размер'
          : 'Добавить в корзину'}
    </button>
  );
};

export default AddToCartButton;
