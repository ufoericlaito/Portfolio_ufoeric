/**
 * SlideShow Component
 * A presentation slider with left/right arrow navigation
 */
import React, { useState } from 'react';
import './SlideShow.css';

interface SlideShowProps {
  slides: string[];
  title?: string;
}

const SlideShow: React.FC<SlideShowProps> = ({ slides, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slideshow-container">
      {title && <h3 className="slideshow-title">{title}</h3>}
      
      {/* Main Slide Display */}
      <div className="slideshow-main">
        <button className="slideshow-arrow left" onClick={prevSlide}>
          ‹
        </button>

        <div className="slideshow-slide">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="slideshow-image"
          />
        </div>

        <button className="slideshow-arrow right" onClick={nextSlide}>
          ›
        </button>
      </div>

      {/* Slide Counter */}
      <div className="slideshow-counter">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Slide Indicators */}
      <div className="slideshow-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slideshow-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;

