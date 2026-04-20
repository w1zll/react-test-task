import React from 'react';
import useCartStore from '../../entities/cart/model/cartStore';
import usePromoCode from '../../features/promo-code/model/usePromoCode';
import { page, state } from '../../shared/ui/styles/shared.styles';
import { cartPage as s } from '../../shared/ui/styles/cart.styles';
import { Link } from 'react-router';
import CartItem from '../../features/cart-item/ui/CartItem';

const CartPage = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());

  const {
    applied,
    apply,
    calcTotal,
    discountAmount,
    error,
    input,
    reset,
    setInput,
  } = usePromoCode();

  const discount = discountAmount(totalPrice);
  const total = calcTotal(totalPrice).toFixed(2);

  if (!items || items.length === 0)
    return (
      <div className={page.container}>
        <h1 className={page.title}>Корзина</h1>
        <div className={state.notFound}>
          <p>Корзина пуста</p>
          <Link to="/catalog" className={state.notFoundLink}>
            Перейти в каталог
          </Link>
        </div>
      </div>
    );

  return (
    <div className={page.container}>
      <h1 className={page.title}>Корзина</h1>

      <div className={s.layout}>
        <div>
          {items.map((item) => (
            <CartItem key={item.key} item={item} />
          ))}
        </div>

        <div className={s.summary}>
          <div>
            <div className={s.promo}>
              <input
                type="text"
                placeholder="Промокод"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && apply()}
                disabled={!!applied}
                className={error ? s.promoInputError : s.promoInput}
              />
              {applied ? (
                <button onClick={reset} className={s.promoBtn}>
                  Сбросить
                </button>
              ) : (
                <button onClick={apply} className={s.promoBtn}>
                  Применить
                </button>
              )}
            </div>
            {error && <p className={s.promoError}>{error}</p>}
            {applied && (
              <p className={s.promoSuccess}>
                Промокод {applied.code} применен ({applied.label})
              </p>
            )}
          </div>

          <div className={s.summaryRow}>
            <span>Подытог</span>
            <span>{totalPrice} ₽</span>
          </div>

          {discount > 0 && (
            <div className={s.discount}>
              <span>Скидка</span>
              <span>-{discount} ₽</span>
            </div>
          )}

          <div className={s.summaryTotal}>
            <span>Итого</span>
            <span>{total} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
