import React from 'react';

interface Photo {
  id: string | number;
  url: string;
  title?: string;
}

interface CarouselProps {
  photos: Photo[];
}

const Carousel: React.FC<CarouselProps> = ({ photos }) => (
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

export default Carousel;