const themes = {
  light: {
    path: {
      sitewide: "/global/stylesheets/fluent-ui-light.css",
      demos: "/global/stylesheets/demos-light.css",
    },
  },
  dark: {
    path: {
      sitewide: "/global/stylesheets/fluent-ui-dark.css",
      demos: "/global/stylesheets/demos-dark.css",
    },
  },
};

function setTheme(theme) {
  document.querySelector("#setSs").href = themes[theme].path.sitewide;
  if (document.querySelector("#setDemoSs"))
    document.querySelector("#setDemoSs").href = themes[theme].path.demos;
  document.cookie = `theme=${theme};max-age=${60 * 60 * 24 * 7};path=/;SameSite=Lax`;

  document.addEventListener("DOMContentLoaded", () => {
    for (const img of document.querySelectorAll(
      'img[src="/global/OSPedia-logo.svg"], img[src="/global/OSPedia-logo-dark.svg"]',
    )) {
      img.src =
        theme === "light"
          ? "/global/OSPedia-logo.svg"
          : "/global/OSPedia-logo-dark.svg";
    }
  });
}

if (document.cookie) {
  setTheme(document.cookie.split(";")[0].split("=")[1]);
  window.theme = document.cookie.split(";")[0].split("=")[1];
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".dark-mode-toggle");

  themeToggle.addEventListener("click", () => {
    setTheme(theme === "light" ? "dark" : "light");
  });
});

window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", (e) => {
    window.theme = e.matches ? "light" : "dark";
    setTheme(window.theme);
  });
