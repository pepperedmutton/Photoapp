import React from 'react';

const Image = ({ photo, onBack }) => (
  <div className="image-detail">
    <button onClick={onBack}>Back</button>
    <img src={photo.url} alt={photo.title} />
    <div>{photo.title}</div>
    {/* Add metadata, tags, comments here */}
  </div>
);

export default Image;