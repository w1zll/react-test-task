import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router';

const useProductConfig = (product) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const colorId = Number(
    searchParams.get('color') || product?.colors[0]?.id || null,
  );
  const sizeId = Number(searchParams.get('size') || null);

  const selectedColor =
    product?.colors.find((c) => c.id === colorId) ?? product?.colors[0] ?? null;
  useEffect(() => {
    if (!selectedColor || !sizeId) return;
    const isAvailable = selectedColor.sizes.includes(sizeId);
    if (!isAvailable) {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.delete('size');
        return next;
      });
    }
  }, [colorId, selectedColor, sizeId, setSearchParams]);

  const setColor = useCallback(
    (id) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set('color', String(id));
        next.delete('size');
        return next;
      });
    },
    [setSearchParams],
  );

  const setSize = useCallback(
    (id) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set('size', String(id));
        return next;
      });
    },
    [setSearchParams],
  );

  return {
    selectedColor,
    selectedSizeId: sizeId,
    setColor,
    setSize,
  };
};

export default useProductConfig;
