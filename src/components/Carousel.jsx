import React from 'react';

const Carrousel = ({ photos }) => (
  <div className="carrousel">
    {photos.map(photo => (
      <img
        key={photo.id}
        src={photo.url}
        alt={photo.title}
        className="carrousel-img"
      />
    ))}
  </div>
);

export default Carrousel;