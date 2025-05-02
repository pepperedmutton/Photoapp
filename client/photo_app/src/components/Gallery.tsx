import React from 'react';
import './Gallery.css';

interface Metadata {
  name: string;
  camera: string;
  lens: string; 
  iso: string;
  shutter: string;
  aperture: string;
}

interface Photo {
  id: number;
  url: string;
  metadata: Metadata;
}

interface GalleryProps {
  photos: Photo[];
  onSelectPhoto: (photoId: number) => void;
  onBack?: () => void; // Optional back handler
}

const Gallery: React.FC<GalleryProps> = ({ photos, onSelectPhoto, onBack }) => {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <button className="gallery-back-btn" onClick={onBack}>← Back</button>
        <h1>Manage Gallery</h1>
      </header>
      <div className="gallery-grid">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item"
              onClick={() => onSelectPhoto(photo.id)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={photo.url}
                alt={photo.metadata.name}
                className="gallery-img"
              />
              <div className="gallery-caption">
                <h4>{photo.metadata.name}</h4>
                <p>{photo.metadata.camera}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No photos available. Please upload some!</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;