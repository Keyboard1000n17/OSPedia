const carousel = document.querySelector("div.carousel");
const carouselWrapper = document.querySelector("section.carousel-wrapper");
const carouselBackdrop = document.querySelector("div.carousel-backdrop");
const carouselOpen = document.querySelector("button.carousel-open");
const carouselClose = document.querySelector("img.carousel-close");
const carouselSlides = document.querySelectorAll("div.carousel figure");

carouselOpen.addEventListener("click", () => {
  carouselWrapper.classList.remove("hidden");
  carouselBackdrop.classList.remove("hidden");
});

carouselClose.addEventListener("click", () => {
  carouselWrapper.classList.add("hidden");
  carouselBackdrop.classList.add("hidden");
});

let index = 0;
