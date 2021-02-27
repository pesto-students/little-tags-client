// import React from 'react';
import { useState } from "react";
import "./carousel.css";
import Button from '@material-ui/core/Button';
function Carousel(params) {
  const slides = [
    {
      image: "./women.jpg",
      alt:'women-banner',
      'message1':'Exclusive offer for her',
      'message2':'Wear The Season\'s Latest Trends',
      'btn-text':'Buy Now'

    },
    {
      image: "./mens.jpg",
      alt:'mens-banner',
      'message1':'Exclusive offer for Him',
      'message2':'We know what you will wear this summer',
      'btn-text':'Buy Now'
    },
    {
      image: "./kids.jpg",
      alt:'kids-banner',
      'message1':'Exclusive offer for your Kids',
      'message2':'Catch the best deals',
      'btn-text':'Buy Now'
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
                <h1 className="message1">{slide.message1}</h1>
                <h1 className="message2">{slide.message2}</h1>
                <button className='buy-now'>{slide["btn-text"]}</button>
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
