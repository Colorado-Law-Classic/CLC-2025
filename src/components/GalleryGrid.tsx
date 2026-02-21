'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  src: string;
  alt: string;
  year: string;
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState('all');

  const years = Array.from(new Set(items.map(item => item.year))).sort((a, b) => b.localeCompare(a));
  const filteredItems = filter === 'all' ? items : items.filter(item => item.year === filter);

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
          <a
            key={i}
            href={item.src}
            className="glightbox"
            data-gallery="clc-gallery"
            data-year={item.year}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </a>
        ))}
      </div>
    </>
  );
}
