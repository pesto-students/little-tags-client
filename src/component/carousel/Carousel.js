// import React from 'react';
import { useState } from "react";
import "./carousel.css";
import { FormattedMessage } from "react-intl";

function Carousel(params) {
  const slides = [
    {
      image: "./carousel-images/women.jpg",
      alt:'women-banner',
      'id1':'message11',
      'id2':'message12'
    },
    {
      image: "./carousel-images/mens.jpg",
      alt:'mens-banner',
      'id1':'message21',
      'id2':'message22'
    },
    {
      image: "./carousel-images/kids.jpg",
      alt:'kids-banner',
      'id1':'message31',
      'id2':'message32'
    },
  ];

  let [slideIndex, setSlideIndex] = useState(0);
  const length = 3;

  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  const showSlide = (slideNumber) => {
    setSlideIndex(slideNumber);
  }


  return (
    <>
      <div className="slideshow-container">
      {slides.map((slide, index) => {
        return (
          <div
            className={index === slideIndex ? 'fade' : 'mySlides'}
            key={index}
          >
              <div className='message-container'>
                <h1 className="message1">
                  <FormattedMessage id={slide.id1} />
                </h1>
                <h1 className="message2">
                  <FormattedMessage id={slide.id2} />
                </h1>
                <button className='buy-now'>
                  <FormattedMessage id="buy" />
                </button>
             </div>
              <img src={slide.image} alt={slide.alt} className='image' />
          </div>
        );
      })}

        <span  className="prev" onClick={prevSlide}>&#10094;</span>
        <span className="next" onClick={nextSlide}>&#10095;</span>
      </div>
      <br />
      <div className="dot-container">
        <span className="dot" onClick={() =>{ showSlide(0)}}></span>
        <span className="dot" onClick={() =>{ showSlide(1)}}></span>
        <span className="dot" onClick={() =>{ showSlide(2)}}></span>
      </div>
    </>
  );
}

export { Carousel };
