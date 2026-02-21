'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface GalleryItem {
  src: string;
  alt: string;
  year: string;
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const years = Array.from(new Set(items.map(item => item.year))).sort((a, b) => b.localeCompare(a));
  const filteredItems = filter === 'all' ? items : items.filter(item => item.year === filter);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      <div className="gallery-buttons" role="group" aria-label="Filter photos by year">
        <button
          data-filter="all"
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
          aria-label="Show all photos"
        >
          All
        </button>
        {years.map(year => (
          <button
            key={year}
            data-filter={year}
            className={filter === year ? 'active' : ''}
            onClick={() => setFilter(year)}
            aria-label={`Show ${year} photos`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item, i) => (
          <button
            key={i}
            className="gallery-item"
            onClick={() => openLightbox(i)}
            data-year={item.year}
            aria-label={`View ${item.alt}`}
            type="button"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              type="button"
            >
              &times;
            </button>
            {filteredItems.length > 1 && (
              <button
                className="lightbox-prev"
                onClick={goPrev}
                aria-label="Previous image"
                type="button"
              >
                &#8249;
              </button>
            )}
            <Image
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              width={1200}
              height={900}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '80vh', width: 'auto', height: 'auto' }}
              priority
            />
            {filteredItems.length > 1 && (
              <button
                className="lightbox-next"
                onClick={goNext}
                aria-label="Next image"
                type="button"
              >
                &#8250;
              </button>
            )}
            <p className="lightbox-caption">{filteredItems[lightboxIndex].alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
