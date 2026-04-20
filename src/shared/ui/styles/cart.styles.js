export const cartItem = {
  root: 'flex gap-4 py-5 border-b border-zinc-800 last:border-0',
  image: 'w-20 h-24 rounded-lg object-cover bg-zinc-800 flex-shrink-0',
  noImage:
    'w-20 h-24 rounded-lg bg-zinc-800 flex-shrink-0 flex items-center justify-center text-zinc-600 text-xs',
  body: 'flex-1 flex flex-col gap-1 min-w-0',
  name: 'text-sm font-semibold text-white truncate',
  meta: 'text-xs text-zinc-500',
  price: 'text-sm text-zinc-300 mt-auto',
  total: 'text-sm font-semibold text-white',
  actions: 'flex flex-col items-end justify-between gap-2 flex-shrink-0',
  qty: 'flex items-center gap-2',
  qtyBtn:
    'w-7 h-7 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white text-sm flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed',
  qtyValue: 'w-6 text-center text-sm text-white tabular-nums',
  removeBtn: 'text-xs text-zinc-600 hover:text-red-400 transition-colors',
};

export const cartPage = {
  layout: 'max-w-2xl mx-auto',
  empty:
    'flex flex-col items-center justify-center min-h-[40vh] gap-4 text-zinc-500',
  emptyLink:
    'text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-4',
  summary: 'mt-8 border-t border-zinc-800 pt-6 flex flex-col gap-4',
  summaryRow: 'flex justify-between items-center text-sm text-zinc-400',
  summaryTotal:
    'flex justify-between items-center text-lg font-bold text-white',
  discount: 'flex justify-between items-center text-sm text-emerald-400',
  promo: 'flex gap-2 mt-2',
  promoInput:
    'flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors',
  promoInputError:
    'flex-1 bg-zinc-900 border border-red-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors',
  promoBtn:
    'px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm text-white font-medium transition-colors',
  promoError: 'text-xs text-red-400 mt-1',
  promoSuccess: 'text-xs text-emerald-400 mt-1',
};
