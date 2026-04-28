const bottomBar = document.querySelector("div.bottom-bar");

if (window.innerWidth < 1200) {
  const newEl = document.querySelector("section.fun-fact").cloneNode(true);
  document
    .querySelector("div.wrapper")
    .insertAdjacentElement("afterend", newEl);
  bottomBar.addEventListener("click", (e) => {
    const getsOpened = e.target.closest("div").dataset.opensElement;
    if (getsOpened === "carousel") {
      document
        .querySelector("section.carousel-wrapper")
        .classList.toggle("hidden");
      document
        .querySelector("div.carousel-backdrop")
        .classList.toggle("hidden");
    } else if (getsOpened === "section.fun-fact") {
      newEl.classList.toggle("show");
    } else {
      document.querySelector(getsOpened).classList.toggle("show");
    }
  });

  document.querySelector("img.contents-close").addEventListener("click", () => {
    document.querySelector("div.contents").classList.toggle("show");
  });
}
