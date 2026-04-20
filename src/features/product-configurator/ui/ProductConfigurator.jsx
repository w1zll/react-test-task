import React from 'react';
import { configurator as s } from '../../../shared/ui/styles/productConfigurator.styles';

const ProductConfigurator = ({
  product,
  sizes,
  selectedColor,
  selectedSizeId,
  onColorChange,
  onSizeChange,
}) => {
  // console.log(`selectedColor - ${selectedColor}`);
  return (
    <div className={s.root}>
      <div className={s.section}>
        <p className={s.label}>
          Цвет: <span className={s.labelValue}>{selectedColor?.name}</span>
        </p>
        <div className={s.colors}>
          {product.colors.map((color) => {
            const isSelected = color.id === selectedColor?.id;
            return (
              <button
                className={`${s.colorBtn} ${isSelected ? s.colorBtnActive : ''}`}
                key={color.id}
                onClick={() => onColorChange(color.id)}
              >
                {color.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className={s.section}>
        <p className={s.label}>Размер:</p>
        <div className={s.sizes}>
          {sizes.map((size) => {
            // console.log(selectedColor);
            const isAvailable = selectedColor?.sizes.includes(size.id);
            const isSelected = size.id === selectedSizeId;

            return (
              <button
                className={`${s.sizeBtn} ${isSelected ? s.sizeBtnActive : ''} ${!isAvailable ? s.sizeBtnDisabled : ''}`}
                key={size.id}
                onClick={() => isAvailable && onSizeChange(size.id)}
                disabled={!isAvailable}
              >
                {size.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductConfigurator;
