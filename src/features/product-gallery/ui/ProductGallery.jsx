import React, { useEffect, useState } from 'react';
import { gallery as s } from '../../../shared/ui/styles/productGallery.styles';

const ProductGallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  // images = null;
  useEffect(() => {
    setIndex(0);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className={s.empty}>Нет изображений</div>;
  }

  const canPrev = index > 0;
  const canNext = index < images.length - 1;

  return (
    <div className={s.root}>
      <div className={s.main}>
        <img
          className={s.image}
          src={images[index]}
          alt={`Фото ${index + 1}`}
        />
        {images.length > 1 && (
          <>
            <button
              className={s.arrow('prev')}
              onClick={() => setIndex((i) => i - 1)}
              disabled={!canPrev}
            >
              <span className={s.arrowText}>{'<'}</span>
            </button>
            <button
              className={s.arrow()}
              onClick={() => setIndex((i) => i + 1)}
              disabled={!canNext}
            >
              <span className={s.arrowText}>{'>'}</span>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className={s.thumbs}>
          {images.map((src, i) => {
            const isActive = i === index;
            return (
              <button
                className={`${s.thumb} ${isActive ? s.thumbActive : ''}`}
                key={src}
                onClick={() => setIndex(i)}
              >
                <img
                  className={`${s.thumbImage}`}
                  src={src}
                  alt={`Фото ${i + 1}`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
