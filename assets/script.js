//JavaScript for the hamburger menu

const menu = document.querySelector(".hamburger-menu");
const menuIcon = document.querySelector(".hamburger-menu-icon");
const menuBlur = document.querySelector(".hamburger-menu-blur");
const menuClose = document.querySelector(".hamburger-menu-close");

window.scrollContainer = document.querySelector("main");

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // stop event from bubbling up
  menu.classList.toggle("show");
  menuBlur.classList.toggle("show");
});

function setVh() {
  const vh = window.visualViewport
    ? `${window.visualViewport.height - 15}px`
    : `${window.innerHeight - 15}px`;
  document.querySelector("html").style.setProperty("--vh", vh);
}

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) || e.target === menuClose) {
    menu.classList.remove("show");
    menuBlur.classList.remove("show");
  }
});

// Listens for changes in viewport height
if (window.innerWidth <= 768) {
  setVh();
  window.addEventListener("resize", setVh);
}

// Background and blur for PageFind drawer

document.addEventListener("DOMContentLoaded", () => {
  const pagefindResultsList = document.querySelector(
    "div.pagefind-container ul.pf-results",
  );
  const pagefindContainer = document.querySelector("div.pagefind-container");
  console.log(pagefindResultsList);
  const observer = new MutationObserver(() => {
    pagefindResultsList.children.length > 0
      ? pagefindContainer.classList.add("active")
      : pagefindContainer.classList.remove("active");
  });
  observer.observe(pagefindResultsList, { childList: true, subtree: true });
});

// Contents quick links generator
const headings = document.querySelectorAll(
  "main h2, main h3, main h4, main h5, main h6",
);
let linkString = "";
const links = document.createElement("div");
links.classList = "links";
for (let i = 0; i < headings.length; i++) {
  if (headings[i].matches("h6")) {
    linkString += `<a href="#" class="subsubsubsubheadings">${headings[i].textContent}</a>`;
  } else if (headings[i].matches("h5")) {
    linkString += `<a href="#" class="subsubsubheadings">${headings[i].textContent}</a>`;
  } else if (
    headings[i].matches("h2.level-three") ||
    headings[i].matches("h4")
  ) {
    linkString += `<a href="#" class="subsubheadings">${headings[i].textContent}</a>`;
  } else if (headings[i].matches("h2.level-two") || headings[i].matches("h3")) {
    linkString += `<a href="#" class="subheadings">${headings[i].textContent}</a>`;
  } else {
    linkString += `<a href="#">${headings[i].textContent}</a>`;
  }
  links.innerHTML = linkString;
  document
    .querySelector(".contents h2")
    .insertAdjacentElement("afterend", links);
}

if (window.innerWidth < 768 && document.querySelector(".info")) {
  const contentsEl = document.querySelector("div.contents").cloneNode(true);
  document.querySelector("div.contents").remove();
  document
    .querySelector(".info")
    .insertAdjacentElement("beforebegin", contentsEl);
}

document.querySelectorAll("div.links a").forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let a =
      headings[index].getBoundingClientRect().top +
      scrollContainer.scrollTop -
      scrollContainer.getBoundingClientRect().top;
    let b = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const c = Math.min(a, b);
    scrollContainer.scrollTo({
      top: c,
      behavior: "smooth",
    });
  });
});

// Back to top button

if (window.innerWidth < 1440) {
  const backToTop = document.querySelector("div.back-to-top");
  backToTop.addEventListener("click", () => {
    scrollContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
