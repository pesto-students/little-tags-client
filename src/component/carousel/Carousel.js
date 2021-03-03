// import React from 'react';
import { useState } from "react";
import "./carousel.css";
import { FormattedMessage } from "react-intl";
import banner1 from "../../assets/carousel-images/1.png";
import banner2 from "../../assets/carousel-images/2.png";
// import { women } from "../../assets/carousel-images/women.jpg";

function Carousel(params) {
  const slides = [
    {
      image: banner1,
      alt:'women-banner',
      'id1':'message11',
      'id2':'message12'
    },
    {
      image: banner2,
      alt:'mens-banner',
      'id1':'message21',
      'id2':'message22'
    },
  ];

  let [slideIndex, setSlideIndex] = useState(0);
  const length = 2;

  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };


  return (
    <>
      <div className="slideshow-container">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === slideIndex ? 'fade' : 'mySlides'}
            key={index}
          >
              <img src={slide.image} alt={slide.alt} className='image' />
          </div>
        );
      })}

        <span  className="prev" onClick={prevSlide}>&#10094;</span>
        <span className="next" onClick={nextSlide}>&#10095;</span>
      </div>
      <br />
    </>
  );
}

export { Carousel };
