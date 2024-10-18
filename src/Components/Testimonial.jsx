import React, { useState, useRef } from 'react';
import imgmen from '../assets/imagesmen.jpeg';

const testimonials = [
  {
    name: 'Roger Scott',
    role: 'Marketing Manager',
    image: imgmen,
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'John Doe',
    role: 'Product Manager',
    image: imgmen,
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Jane Doe',
    role: 'CEO',
    image: imgmen,
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Alice Smith',
    role: 'HR Manager',
    image: imgmen,
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Bob Johnson',
    role: 'CTO',
    image: imgmen,
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Eve Walker',
    role: 'Designer',
    image: imgmen,
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerSlide = 3;

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / testimonialsPerSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / testimonialsPerSlide)) % Math.ceil(testimonials.length / testimonialsPerSlide));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleGesture();
  };

  const handleGesture = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    containerRef.current.classList.add('select-none');
  };

  const handleMouseUp = (e) => {
    touchEndX.current = e.clientX;
    handleGesture();
    containerRef.current.classList.remove('select-none');
  };

  return (
    <div className="max-w-4xl mx-auto text-center mt-28 mb-32 py-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-14">CLIENTS SAY ABOUT US?</h2>
      <div
        className="relative cursor-grab"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        ref={containerRef}
      >
        {/* Slider content */}
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4">
          {testimonials
            .slice(currentSlide * testimonialsPerSlide, currentSlide * testimonialsPerSlide + testimonialsPerSlide)
            .map((testimonial, index) => (
              <div
                key={index}
                className="p-6 w-full md:max-w-xs bg-gray-100 rounded-md shadow-lg transition-transform duration-500 ease-in-out mb-4 md:mb-0"
              >
                <div className="text-left">
                  <span className="text-4xl md:text-5xl lg:text-6xl text-red-500 mb-4">&ldquo;</span>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6">{testimonial.quote}</p>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full mr-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl lg:text-2xl tracking-widest font-semibold">{testimonial.name}</h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Dots for Slide Navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerSlide) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
