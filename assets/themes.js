const themes = {
  light: {
    path: {
      sitewide: "/global/stylesheets/fluent-ui-light.css",
      demos: "/global/stylesheets/demos-light.css",
      home: "/global/stylesheets/index-page-styles-light.css",
    },
  },
  dark: {
    path: {
      sitewide: "/global/stylesheets/fluent-ui-dark.css",
      demos: "/global/stylesheets/demos-dark.css",
      home: "/global/stylesheets/index-page-styles-dark.css",
    },
  },
};

function changeAttributes() {
  function actuallyChangeAttributes() {
    document
      .querySelectorAll(
        `img[src="/global/OSPedia-logo.svg"], img[src="/global/OSPedia-logo-dark.svg"]`,
      )
      .forEach((el) => {
        el.src =
          window.theme === "light"
            ? "/global/OSPedia-logo.svg"
            : "/global/OSPedia-logo-dark.svg";
        console.log(`attrs changed for ${el}! theme was ${window.theme}`);
        console.log(el);
      });
    document.body.dataset.pfTheme = window.theme === "light" ? "light" : "dark";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", actuallyChangeAttributes);
  } else actuallyChangeAttributes();
}

const mainStylesheet = document.querySelector("#setSs");
const demoStylesheet = document.querySelector("#setDemoSs");
const indexStylesheet = document.querySelector("#setIndexSs");

function setTheme(theme) {
  window.theme = theme;
  mainStylesheet.href = themes[theme].path.sitewide;
  if (demoStylesheet) demoStylesheet.href = themes[theme].path.demos;
  if (indexStylesheet) indexStylesheet.href = themes[theme].path.home;
  sessionStorage.setItem("theme", theme);
  changeAttributes();
}

if (!sessionStorage.getItem("theme")) {
  const query = window.matchMedia("(prefers-color-scheme: light)");
  setTheme(query.matches ? "light" : "dark");
  query.addEventListener("change", (e) => {
    console.log(e.matches);
    window.theme = e.matches ? "light" : "dark";
    setTheme(window.theme);
  });
} else {
  setTheme(sessionStorage.getItem("theme"));
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".dark-mode-toggle");

  themeToggle.addEventListener("click", () => {
    setTheme(window.theme === "light" ? "dark" : "light");
  });
});
