import React from 'react';

const Gallery = ({ photos, onSelect }) => (
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