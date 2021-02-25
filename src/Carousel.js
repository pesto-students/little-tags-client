// import React from 'react';
import { useState } from "react";
import "./carousel.css";

function Slide(params) {
  return (
    <div className="mySlides fade">
      <img className="slider-image" src={params.src} alt={params.alt} />
    </div>
  );
}
function Carousel(params) {
  return (
    <>
      <div className="slideshow-container">
        <Slide src="./1.jpg" alt="Slide 1"></Slide>
        <Slide src="./2.jpg" alt="Slide 2"></Slide>
        <Slide src="./3.jpg" alt="Slide 3"></Slide>

        <a  className="prev" onClick={ShowSlides(-1)}>&#10094;</a>
        <a  className="next" onClick={ShowSlides(1)}>&#10095;</a>
      </div>
      <br />

      <div className="dot-container">
        <span className="dot" onClick={ShowSlides(1)}></span>
        <span className="dot" onClick={ShowSlides(2)}></span>
        <span className="dot" onClick={ShowSlides(3)}></span>
      </div>
    </>
  );

  function ShowSlides(n) {

    let [slideIndex, setSlideIndex] = useState(1);
  // console.log(n);
    if (slideIndex !== 1) {
      setSlideIndex(n);
    }
  // console.log(slideIndex);
    const slides = document.getElementsByClassName("mySlides");
    // console.log(slides);
    // const dots = document.getElementsByClassName("dot");
  // console.log(dots);
    // if (n > slides.length) {
    //   setSlideIndex( 1 );
    // }
    // if (n < 1) {
    //   setSlideIndex( slides.length);
    // }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // for (let i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
  }
}



export { Carousel };
