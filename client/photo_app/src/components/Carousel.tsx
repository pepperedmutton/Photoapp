import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  imageUrl: string;
  caption?: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <img
          src={slides[currentIndex].imageUrl}
          alt={slides[currentIndex].caption || `Slide ${currentIndex + 1}`}
          className="carousel-image"
          />
          {slides[currentIndex].caption && <div className="carousel-caption">
            {slides[currentIndex].caption}</div>}
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            ></button>
        ))}
      </div>
    </div>
  );
};


export default Carousel;