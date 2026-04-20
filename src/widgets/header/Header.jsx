import React from 'react';
import { Link } from 'react-router';
import useCartStore from '../../entities/cart/model/cartStore';
import { header as s } from '../../shared/ui/styles/header.styles';

const Header = () => {
  const totalCount = useCartStore((state) => state.totalCount());
  const totalPrice = useCartStore((state) => state.totalPrice());

  return (
    <header className={s.root}>
      <div className={s.inner}>
        <Link to="/" className={s.logo}>
          ITCASE
        </Link>

        <Link to="/cart" className={s.cartBtn}>
          <span>Корзина</span>
          {totalCount > 0 && (
            <>
              <span className={s.cartBadge}>{totalCount}</span>
              <span className="text-zinc-400 text-xs">
                {totalPrice} ₽
              </span>
            </>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
