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

interface ImageViewProps {
  photo: Photo | null;
  onBack: () => void;
}

const ImageView: React.FC<ImageViewProps> = ({ photo, onBack }) => {
  if (!photo) return <p>Photo not found</p>;

  return (
    <div className="image-view">
      <button className="button" onClick={onBack} style={{ marginBottom: '1rem' }}>🔙
        Back to Gallery</button>
        <img
          src={photo.url}
          alt={photo.metadata.name}
          style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }}
          />
        <h2>{photo.metadata.name}</h2>
        <p><strong>Camera:</strong> {photo.metadata.camera}</p>
        <p><strong>Lens:</strong> {photo.metadata.lens}</p>
        <p><strong>ISO:</strong> {photo.metadata.iso}</p>
        <p><strong>Shutter:</strong> {photo.metadata.shutter}</p>
        <p><strong>Aperture:</strong> {photo.metadata.aperture}</p>
        </div>
  );
};
  
export default ImageView;