//JavaScript for the hamburger menu

const menu = document.querySelector(".hamburger-menu");
const menuIcon = document.querySelector(".hamburger-menu-icon");
const menuBlur = document.querySelector(".hamburger-menu-blur");
const menuClose = document.querySelector(".hamburger-menu-close");

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

// PageFind search box

window.addEventListener("DOMContentLoaded", () => {
  new PagefindUI({
    element: "#search",
    resetStyles: true,
  });
});

// Blur for PageFind drawer

const observer = new MutationObserver(() => {
  const blur = document.querySelector(".pagefind-ui__blur");
  if (
    document.querySelector(
      ".pagefind-ui__drawer.svelte-e9gkc3.pagefind-ui__hidden",
    )
  ) {
    blur.style.display = "none";
  } else {
    blur.style.display = "block";
  }
});

observer.observe(document.body, { childList: true, subtree: true });

// Contents quick links generator
const headings = document.querySelectorAll("main h2");
let linkString = "";
const links = document.createElement("div");
links.classList = "links";
for (let i = 0; i < headings.length; i++) {
  if (headings[i].matches("h2.level-three")) {
    linkString += `<a href="" class="subsubheadings">${headings[i].textContent}</a>`;
  } else if (headings[i].matches("h2.level-two")) {
    linkString += `<a href="" class="subheadings">${headings[i].textContent}</a>`;
  } else {
    linkString += `<a href="">${headings[i].textContent}</a>`;
  }
  links.innerHTML = linkString;
  document
    .querySelector(".contents h2")
    .insertAdjacentElement("afterend", links);
}

document.querySelectorAll("div.links a").forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let a = headings[index].offsetTop;
    let b =
      document.querySelector("main div.content").scrollHeight -
      document.querySelector("main div.content").clientHeight;
    const c = a <= b ? a : b;
    const d =
      window.innerWidth > 768
        ? document.querySelector("main div.content")
        : window;
    d.scrollTo({
      top: c,
      behavior: "smooth",
    });
  });
});

if (
  window.innerWidth < 1366 &&
  document.querySelector(".insertHere, #info, .info")
) {
  const contentsEl = document.querySelector("div.contents").cloneNode(true);
  document.querySelector("div.contents").remove();
  document
    .querySelector(".insertHere, #info, .info")
    .insertAdjacentElement("beforebegin", contentsEl);
}

// Back to top button

if (window.innerWidth < 1366 && window.innerWidth > 768) {
  const backToTop = document.querySelector("div#back-to-top");
  backToTop.addEventListener("click", () => {
    document.querySelector("main").scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

if (window.innerWidth < 768) {
  const backToTop = document.querySelector("div#back-to-top");
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
