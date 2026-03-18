const themes = {
  "light": {
    path: {
      sitewide: "/global/stylesheets/fluent-ui-light.css",
      demos: "/global/stylesheets/demos-light.css",
    },
  },
  "dark": {
    path: {
      sitewide: "/global/stylesheets/fluent-ui-dark.css",
      demos: "/global/stylesheets/demos-dark.css",
    },
  },
};

if (document.cookie) {
  document.querySelector("#setSs").href = themes[document.cookie.split(";")[0].split("=")[1]].path.sitewide
  if (document.querySelector("#setDemoSs")) document.querySelector("#setDemoSs").href = themes[document.cookie.split(";")[0].split("=")[1]].path.demos

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("nav img").src = document
      .querySelector("#setSs")
      .href.includes("/global/stylesheets/fluent-ui-light.css")
      ? "/global/OSPedia-logo.svg"
      : "/global/OSPedia-logo-dark.svg";

  })
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".dark-mode-toggle");
  let theme = "";

  themeToggle.addEventListener("click", () => {
    if (
      document
        .querySelector("#setSs")
        .href.includes("/global/stylesheets/fluent-ui-light.css")
    ) {
      theme = "dark";
      document.querySelector("nav img").src = "/global/OSPedia-logo-dark.svg";
    } else {
      theme = "light";
      document.querySelector("nav img").src = "/global/OSPedia-logo.svg";
    }
    document.querySelector("#setSs").href = themes[theme].path.sitewide;
    if (document.querySelector("#setDemoSs")) document.querySelector("#setDemoSs").href = themes[theme].path.demos;
    document.cookie = `theme=${theme};max-age=${60 * 60 * 24 * 7};path=/;SameSite=Lax`;
  });
})
