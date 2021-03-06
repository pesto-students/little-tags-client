// import React from 'react';
import { useState } from "react";
import "./carousel.css";
import banner1 from "../../assets/carousel-images/1.webp";
import banner2 from "../../assets/carousel-images/2.webp";
import hiBanner1 from "../../assets/carousel-images/hi/1.webp";
import hiBanner2 from "../../assets/carousel-images/hi/2.webp";
import { useIntl } from "react-intl";
import { Link, useHistory } from "react-router-dom";

function Carousel(params) {
  const intl = useIntl();
  const history = useHistory();
  let image1 = banner1;
  let image2 = banner2;

  if (intl.locale === "hi") {
    image1 = hiBanner1;
    image2 = hiBanner2;
  }

  const slides = [
    {
      image: image1,
      alt: "women-banner",
      id1: "message11",
      id2: "message12",
    },
    {
      image: image2,
      alt: "mens-banner",
      id1: "message21",
      id2: "message22",
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

  const handleCarouselClick = () => {
    history.push(`/products?category=jeans`);
  };

  return (
    <>
      <div className="slideshow-container">
        {slides.map((slide, index) => {
          return (
            <div onClick={handleCarouselClick}>
              <div
                className={index === slideIndex ? "fade" : "mySlides"}
                key={index}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="product-image"
                />
              </div>
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
    </>
  );
}

export { Carousel };
