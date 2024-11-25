import React, { useState, useEffect } from 'react';
import slider1 from '../pages/images/hosii.jpeg';
import slider2 from '../pages/images/hosii2.jpeg';
import slider3 from '../pages/images/hosii3.jpeg';
import slider4 from '../pages/images/hosii4.jpeg';
import slider5 from '../pages/images/hosii5.jpeg';

// Array of imported images
const images = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[460px]"> {/* Full width and specific height for the slider */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
      >
        &#10094;
      </button>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-lg shadow-lg" // Make image cover full width and height
      />

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
      >
        &#10095;
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
