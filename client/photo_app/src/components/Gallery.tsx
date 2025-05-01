import React from 'react';

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
}

const Gallery: React.FC<GalleryProps> = ({ photos, onSelectPhoto }) => {
  return (
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
        );
};

export default Gallery;