const themes = [
  {
    name: "fluent-ui",
    path: "/stylesheets/fluentUI.css",
  },
];

const themeToggle = document.querySelector(".dark-mode-toggle");
let theme = "";

themeToggle.addEventListener("click", () => {
  if (
    document
      .querySelector("#setSs")
      .href.includes("/global/stylesheets/fluent-ui-light.css")
  ) {
    theme = "/global/stylesheets/fluent-ui-dark.css";
    document.querySelector("nav img").src = "/global/OSPedia-logo-dark.svg";
  } else {
    theme = "/global/stylesheets/fluent-ui-light.css";
    document.querySelector("nav img").src = "/global/OSPedia-logo.svg";
  }
  document.querySelector("#setSs").href = theme;
  document.cookie = `theme=${theme};max-age=60*60*24*7`;
});

if (document.cookie) {
  document.querySelector("#setSs").href = document.cookie
    .split(";")[0]
    .split("=")[1];

  document.querySelector("nav img").src = document
    .querySelector("#setSs")
    .href.includes("/global/stylesheets/fluent-ui-light.css")
    ? "/global/OSPedia-logo.svg"
    : "/global/OSPedia-logo-dark.svg";
}
