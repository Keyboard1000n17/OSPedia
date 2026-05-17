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
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      for (const img of document.querySelectorAll(
        `img[src="/global/OSPedia-logo.svg"], img[src="/global/OSPedia-logo-dark.svg"]`,
      )) {
        img.src =
          window.theme === "light"
            ? "/global/OSPedia-logo.svg"
            : "/global/OSPedia-logo-dark.svg";
      }
      if (window.theme === "dark")
        document.querySelector("body").dataset.pfTheme = "dark";
    });
  } else {
    for (const img of document.querySelectorAll(
      `img[src="/global/OSPedia-logo.svg"], img[src="/global/OSPedia-logo-dark.svg"]`,
    )) {
      img.src =
        window.theme === "light"
          ? "/global/OSPedia-logo-dark.svg"
          : "/global/OSPedia-logo.svg";
    }
    if (window.theme === "dark")
      document.querySelector("body").dataset.pfTheme = "dark";
  }
}

function setTheme(theme, maxAge = 0) {
  document.querySelector("#setSs").href = themes[theme].path.sitewide;
  if (document.querySelector("#setDemoSs"))
    document.querySelector("#setDemoSs").href = themes[theme].path.demos;
  if (document.querySelector("#setIndexSs"))
    document.querySelector("#setIndexSs").href = themes[theme].path.home;
  document.cookie =
    maxAge != 0
      ? `theme=${theme};max-age=${maxAge};path=/;SameSite=Lax`
      : `theme=${theme};path=/;SameSite=Lax`;

  document.addEventListener("DOMContentLoaded", changeAttributes());
  changeAttributes();
  window.theme = theme;
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
