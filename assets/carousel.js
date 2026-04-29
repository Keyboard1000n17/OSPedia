let index = 0;
const carousel = document.querySelector("div.carousel");
const carouselWrapper = document.querySelector("section.carousel-wrapper");
const carouselBackdrop = document.querySelector("div.carousel-backdrop");
const carouselOpen = document.querySelector("button.carousel-open");
const carouselClose = document.querySelector("img.carousel-close");
const carouselSlides = document.querySelectorAll("div.carousel figure");
const carouselPrev = document.querySelector(
  "section.carousel-wrapper div.carousel-prev",
);
const carouselNext = document.querySelector(
  "section.carousel-wrapper div.carousel-next",
);

function goToSlide(i) {
  carouselSlides[i].scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
}

carouselOpen.addEventListener("click", () => {
  carouselWrapper.classList.remove("hidden");
  carouselBackdrop.classList.remove("hidden");
});

carouselClose.addEventListener("click", () => {
  carouselWrapper.classList.add("hidden");
  carouselBackdrop.classList.add("hidden");
});

carouselPrev.addEventListener("click", () => {
  index = index - 1 < 0 ? index + carouselSlides.length - 1 : index - 1;
  goToSlide(index);
});

carouselNext.addEventListener("click", () => {
  index = index + 1 > carouselSlides.length - 1 ? 0 : index + 1;
  goToSlide(index);
});

carousel.addEventListener("scroll", () => {
  index = Math.round(carousel.scrollLeft / carouselSlides[0].offsetWidth);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    carouselWrapper.classList.add("hidden");
    carouselBackdrop.classList.add("hidden");
  }
});
