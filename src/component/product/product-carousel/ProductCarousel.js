import React from "react";
import { useState } from "react";
import "./product-carousel.css";

function ProductCarousel({ images }) {
  const slides = images.map((img, index) => {
    return { image: img, alt: `product image ${index}` };
  });

  let [slideIndex, setSlideIndex] = useState(0);
  const length = 4;

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
            <div
              key={index}
              className={`new-navigation-container ${
                slideIndex === index ? "active" : ""
              }`}
              onClick={() => {
                showSlide(index);
              }}
              style={divStyle}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export { ProductCarousel };
