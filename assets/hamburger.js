//JavaScript for the hamburger menu

const hamburgerMenu = document.querySelector(".hamburger-menu img");
const menuChild = document.querySelector(".hamburger-menu-child");

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // stop event from bubbling up
  menuChild.classList.toggle("show");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuChild.contains(e.target)) {
    menuChild.classList.remove("show");
  }
});
