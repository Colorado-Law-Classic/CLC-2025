import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import { getContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View photos from past Colorado Law Classic tournaments.',
};

export default function GalleryPage() {
  const content = getContent();

  return (
    <>
      <header className="page-header" id="main-content">
        <div className="container">
          <h1>Gallery</h1>
          <p className="page-subtitle">Highlights from recent Colorado Law Classic tournaments. Click on each year to filter photos.</p>
        </div>
      </header>

      <section className="container">
        <GalleryGrid items={content.gallery} />
      </section>
    </>
  );
}
