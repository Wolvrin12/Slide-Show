const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const slideIndex = 1;

const moveSlide = (n) => {
  showSlides((slideIndex += n));
};

const changeSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

showSlides(slideIndex);
