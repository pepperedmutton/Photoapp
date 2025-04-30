import React from 'react';

interface Photo {
  id: string | number;
  thumbnailUrl: string;
  title: string;
}

interface GalleryProps {
  photos: Photo[];
  onSelect: (photo: Photo) => void;
}

const Gallery: React.FC<GalleryProps> = ({ photos, onSelect }) => (
  <div className="gallery-grid">
    {photos.map(photo => (
      <img
        key={photo.id}
        src={photo.thumbnailUrl}
        alt={photo.title}
        onClick={() => onSelect(photo)}
        className="gallery-thumb"
      />
    ))}
  </div>
);

export default Gallery;