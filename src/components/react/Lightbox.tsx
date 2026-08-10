import { useCallback, useEffect, useState } from 'react';

interface Props {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <img
        className="lightbox__img"
        src={images[index]}
        alt={`Product ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        className="lightbox__close"
        aria-label="Close"
        onClick={onClose}
      >
        &times;
      </button>
      <button type="button" className="lightbox__nav lightbox__nav--prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); prev(); }}>
        &lsaquo;
      </button>
      <button type="button" className="lightbox__nav lightbox__nav--next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); next(); }}>
        &rsaquo;
      </button>
    </div>
  );
}
