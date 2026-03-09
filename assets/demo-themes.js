const themes = [
  {
    name: "light",
    path: {
      sitewide: "/global/stylesheets/fluent-ui-light.css",
      demos: "/global/stylesheets/demos-light.css",
    },
  },
  {
    name: "dark",
    path: {
      sitewide: "/global/stylesheets/fluent-ui-dark.css",
      demos: "/global/stylesheets/demos-dark.css",
    },
  },
];

if (document.cookie) {
  if (document.cookie.split(";")[0].split("=")[1] === "dark") {
    document.querySelector("#setSs").href = themes[1].path.sitewide;
    document.querySelector("#setDemoSs").href = themes[1].path.demos;
  } else {
    document.querySelector("#setSs").href = themes[0].path.sitewide;
    document.querySelector("#setDemoSs").href = themes[0].path.demos;
  }

  document.querySelector("nav img").src = document
    .querySelector("#setSs")
    .href.includes("/global/stylesheets/fluent-ui-light.css")
    ? "/global/OSPedia-logo.svg"
    : "/global/OSPedia-logo-dark.svg";
}

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
  document.querySelector("#setSs").href = theme;
  document.cookie = `theme=${theme};max-age=${60 * 60 * 24 * 7};path=/;SameSite=Lax`;
});
