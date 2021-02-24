function Carousel(params) {
  return(<>
  <div class="slideshow-container">
    <div class="mySlides fade">
    <img class='slider-image' src="./1.jpg" />
  </div>

  <div class="mySlides fade">
    <img class='slider-image' src="./2.jpg" />
  </div>

  <div class="mySlides fade">
    <img class='slider-image' src="./3.jpg" />
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br />

<div >
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div></>
  );
}

export { Carousel };