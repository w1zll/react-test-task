export const gallery = {
  root: 'flex flex-col gap-4',
  main: 'relative aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden',
  image: 'w-full h-full object-cover',
  empty:
    'flex items-center justify-center aspect-[3/4] bg-zinc-900 rounded-xl text-zinc-600',
  arrow: (side) =>
    `absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-zinc-950/70 hover:bg-zinc-950/90 text-white text-2xl rounded-full transition-all disabled:opacity-20 disabled:cursor-not-allowed ${side === 'prev' ? 'left-3' : 'right-3'}`,
  arrowText: 'h-full',
  thumbs: 'flex gap-2 overflow-x-auto pb-1',
  thumb:
    'flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-zinc-500 transition-colors cursor-pointer',
  thumbActive:
    'flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-white cursor-pointer',
  thumbImage: 'w-full h-full object-cover',
};
