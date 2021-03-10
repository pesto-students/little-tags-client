// import React from 'react';
import { useState } from "react";
import "./product-carousel.css";
import one from "../../assets/product/1.jpeg";
import two from "../../assets/product/2.jpeg";
import three from "../../assets/product/3.jpeg";
import four from "../../assets/product/5.jpeg";

// import { useIntl } from 'react-intl';

function ProductCarousel(params) {
  const slides = [
    {
      image: one,
      alt: "sport-shoes",
    },
    {
      image: two,
      alt: "mens-banner",
    },
    {
      image: three,
      alt: "sport-shoes",
    },
    {
      image: four,
      alt: "sport-shoes",
    },
  ];

  let [slideIndex, setSlideIndex] = useState(0);
  const length =4;

  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  const showSlide = (slideNumber) => {
    setSlideIndex(slideNumber);
  };

  return (
    <>
      <div className="product-carousel-container">
        {slides.map((slide, index) => {
          return (
            <div className={index === slideIndex ? "" : "mySlides"} key={index}>
              <center>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="product-carousel-image"
                />
              </center>
            </div>
          );
        })}

        <span className="prev" onClick={prevSlide}>
          &#10094;
        </span>
        <span className="next" onClick={nextSlide}>
          &#10095;
        </span>
      </div>
      <br />
      <div className="navigation-image-container">
        {slides.map((slide, index) => {
          const divStyle = {
            backgroundImage: "url(" + slide.image + ")",
          };

          return (
            <div  key={index} className={`new-navigation-container ${slideIndex === index ? "active" : ""}`} onClick={() => {
                  showSlide(index);
                }} style={divStyle}>

            </div>    
          );
        })}
      </div>
      {/* <div className="dot-container">
        <span className="dot" onClick={() =>{ showSlide(0)}}></span>
        <span className="dot" onClick={() =>{ showSlide(1)}}></span>
        <span className="dot" onClick={() =>{ showSlide(2)}}></span>
      </div> */}
    </>
  );
}

export { ProductCarousel };
