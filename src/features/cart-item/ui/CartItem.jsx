import React from 'react';
import useCartStore from '../../../entities/cart/model/cartStore';
import { cartItem as s } from '../../../shared/ui/styles/cart.styles';

const CartItem = ({ item }) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const itemTotal = (parseFloat(item.price) * item.quantity);

  return (
    <div className={s.root}>
      {item.image ? (
        <img className={s.image} src={item.image} alt={item.productName} />
      ) : (
        <div className={s.noImage}>Нет фото</div>
      )}

      <div className={s.body}>
        <p className={s.name}>{item.productName}</p>
        <p className={s.meta}>
          {item.colorName} - {item.sizeName}
        </p>
        <p className={s.price}>{parseFloat(item.price)} ₽ / шт.</p>
        <p className={s.total}>{itemTotal} ₽</p>
      </div>

      <div className={s.actions}>
        <div className={s.qty}>
          <button
            className={s.qtyBtn}
            onClick={() => updateQuantity(item.key, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className={s.qtyValue}>{item.quantity}</span>
          <button
            className={s.qtyBtn}
            onClick={() => updateQuantity(item.key, item.quantity + 1)}
          >
            +
          </button>
        </div>

        <button className={s.removeBtn} onClick={() => removeItem(item.key)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default CartItem;
