import React from 'react';

interface Photo {
  url: string;
  title: string;
}

interface ImageProps {
  photo: Photo;
  onBack: () => void;
}

const Image: React.FC<ImageProps> = ({ photo, onBack }) => (
  <div className="image-detail">
    <button onClick={onBack}>Back</button>
    <img src={photo.url} alt={photo.title} />
    <div>{photo.title}</div>
    {/* Add metadata, tags, comments here */}
  </div>
);

export default Image;