import React from 'react';

const Loader = ({ absolute }) => {
  return (
    <div
      className={`${absolute && 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} flex items-center justify-center`}
    >
      <div
        className={`
          w-8
          h-8
          border-2
          border-gray-300
          border-t-transparent
          rounded-full
          animate-spin
        `}
      />
    </div>
  );
};

export default Loader;
