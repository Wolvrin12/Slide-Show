const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

let slideIndex = 1;

for (let i = 0; i < slides.length; i++) {
  if (slides[i].classList.contains("overflow")) {
    slides[i].style.overflowY = "scroll";
  }
}

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

prev.addEventListener("click", () => {
  showSlides((slideIndex += -1));
});

next.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});

dots[0].addEventListener("click", () => {
  showSlides((slideIndex = 1));
});

dots[1].addEventListener("click", () => {
  showSlides((slideIndex = 2));
});

dots[2].addEventListener("click", () => {
  showSlides((slideIndex = 3));
});

dots[3].addEventListener("click", () => {
  showSlides((slideIndex = 4));
});
