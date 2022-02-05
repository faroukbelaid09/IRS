const nextSlide = document.querySelector(".slide-arrow.next-slide");
const previwesSlide = document.querySelector(".slide-arrow.previews-slide");
const title = document.getElementsByClassName("slide-container");
const titleContent =
  document.getElementsByClassName("slide-container").textContent;

var slideIndex = 1;
showSlides(slideIndex);

nextSlide.addEventListener("click", () => {
  console.log("RIGHT");
  plusSlides(1);
});

previwesSlide.addEventListener("click", (event) => {
  console.log("Left");
  plusSlides(-1);
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-container");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}
