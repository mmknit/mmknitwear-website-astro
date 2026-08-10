import { useState } from 'react';
import Lightbox from './Lightbox';

interface Props {
  images: string[];
}

export default function PortfolioGrid({ images }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <div className="portfolio-grid">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="portfolio-item"
            aria-label={`Open product image ${i + 1}`}
            onClick={() => setOpen(i)}
          >
            <img src={src} alt={`Knitwear product ${i + 1} – M.M. Knitwear Ltd. Bangladesh`} loading={i < 8 ? 'eager' : 'lazy'} width="400" height="400" />
            <span className="portfolio-item__overlay">
              <span>View product</span>
            </span>
          </button>
        ))}
      </div>
      {open !== null && (
        <Lightbox images={images} initialIndex={open} onClose={() => setOpen(null)} />
      )}
    </div>
  );
}
