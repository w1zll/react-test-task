import { useState } from 'react';

const PROMO_CODES = {
  SALE10: { type: 'percent', value: 10, label: '-10%' },
  SALE20: { type: 'percent', value: 20, label: '-20%' },
  FLAT50: { type: 'fixed', value: 50, label: '-50 ₽' },
};

const usePromoCode = () => {
  const [input, setInput] = useState('');
  const [applied, setApplied] = useState(null);
  const [error, setError] = useState(null);

  const apply = () => {
    const code = input.trim().toUpperCase();
    const promo = PROMO_CODES[code];

    if (!promo) {
      setError('Промокод не найден');
      setApplied(null);
      return;
    }

    setApplied({ code, ...promo });
    setError(null);
  };

  const reset = () => {
    setApplied(null);
    setInput('');
    setError(null);
  };

  const calcTotal = (subtotal) => {
    if (!applied) return subtotal;
    if (applied.type === 'percent') return subtotal * (1 - applied.value / 100);
    return Math.max(0, subtotal - applied.value);
  };

  const discountAmount = (subtotal) => {
    if (!applied) return 0;
    if (applied.type === 'percent')
      return (subtotal * (applied.value / 100)).toFixed(2);
    return Math.min(subtotal, applied.value).toFixed(2);
  };

  return {
    input,
    setInput,
    error,
    applied,
    apply,
    reset,
    calcTotal,
    discountAmount,
  };
};

export default usePromoCode;
