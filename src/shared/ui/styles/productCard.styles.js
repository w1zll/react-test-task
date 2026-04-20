export const productCard = {
  root: 'group flex flex-col bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1',
  imageWrapper: 'relative aspect-[3/4] bg-zinc-800 overflow-hidden',
  image:
    'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500',
  noImage:
    'absolute inset-0 flex items-center justify-center text-zinc-600 text-sm',
  badgeOut:
    'absolute top-3 left-3 bg-zinc-950/80 text-zinc-400 text-xs px-2 py-1 rounded-md',
  info: 'p-4 flex flex-col gap-1',
  brand: 'text-xs text-zinc-500 uppercase tracking-widest',
  name: 'text-sm font-semibold text-white',
  price: 'text-sm text-zinc-400 mt-1',
};
