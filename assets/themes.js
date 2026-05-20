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
        document.querySelector("body").dataset.pfTheme =
          window.theme === "light" ? "light" : "dark";
        console.log(`attrs changed for ${el}! theme was ${window.theme}`);
        console.log(el);
      });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", actuallyChangeAttributes);
  else actuallyChangeAttributes();
}

function setTheme(theme, maxAge = 0) {
  window.theme = theme;
  document.querySelector("#setSs").href = themes[theme].path.sitewide;
  if (document.querySelector("#setDemoSs"))
    document.querySelector("#setDemoSs").href = themes[theme].path.demos;
  if (document.querySelector("#setIndexSs"))
    document.querySelector("#setIndexSs").href = themes[theme].path.home;
  document.cookie =
    maxAge != 0
      ? `theme=${theme};max-age=${maxAge};path=/;SameSite=Lax`
      : `theme=${theme};path=/;SameSite=Lax`;
  changeAttributes();
}

if (!document.cookie) {
  const query = window.matchMedia("(prefers-color-scheme: light)");
  setTheme(query.matches ? "light" : "dark");
  query.addEventListener("change", (e) => {
    console.log(e.matches);
    window.theme = e.matches ? "light" : "dark";
    setTheme(window.theme);
  });
} else {
  setTheme(document.cookie.split(";")[0].split("=")[1]);
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".dark-mode-toggle");

  themeToggle.addEventListener("click", () => {
    setTheme(
      !document.cookie || window.theme === "light" || !window.theme
        ? "dark"
        : "light",
    );
  });
});
