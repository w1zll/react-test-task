import { create } from 'zustand';
import { persist } from 'zustand/middleware';

function makeKey(productId, colorId, sizeId) {
  return `${productId}-${colorId}-${sizeId}`;
}

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (payload) => {
        const key = makeKey(payload.productId, payload.colorId, payload.sizeId);

        set((state) => {
          const existing = state.items.find((i) => i.key === key);
          console.log(state.items);

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.key === key ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            };
          }

          return {
            items: [...state.items, { ...payload, key, quantity: 1 }],
          };
        });
      },

      removeItem: (key) => {
        set((state) => ({
          items: state.items.filter((i) => i.key !== key),
        }));
      },

      updateQuantity: (key, quantity) => {
        if (quantity < 1) return;

        set((state) => ({
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity } : i,
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalCount: () => {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },

      totalPrice: () => {
        return get().items.reduce(
          (sum, i) => sum + parseFloat(i.price) * i.quantity,
          0,
        );
      },
    }),
    { name: 'cart' },
  ),
);
export default useCartStore;
