let content = [];
if (window.jsonData) {
  async function init() {
    const response = await fetch(window.jsonData);
    content = await response.json();
    for (let i = 0; i < content.length; i++) {
      output(i);
    }

    span();
    assignClasses();
  }

  function output(i) {
    const template = document.querySelector("template").content.cloneNode(true);
    const tds = template.querySelectorAll("td");
    tds[0].innerHTML = content[i].version;
    tds[1].innerHTML = content[i].build;
    tds[2].innerHTML = content[i].release;
    tds[3].innerHTML = content[i].darwinVersion;
    tds[4].innerHTML = content[i].description;
    if (content[i].class) tds[0].classList.add(content[i].class);
    document.querySelector(".releases tbody").appendChild(template);
  }

  const classes = [
    ".version",
    ".build",
    ".release-date",
    ".darwin-version",
    ".release-notes",
  ];

  function span(i) {
    const tbody = document.querySelector(".releases tbody");
    const trs = Array.from(document.querySelectorAll(".releases tbody > tr"));
    if (!trs.length) return;
    for (let i = 0; i < classes.length; i++) {
      const cols = document.querySelectorAll(classes[i]);
      let lastNonEmptyCell = null;
      let currentRowspan = 1;
      for (let j = 0; j < trs.length; j++) {
        const cell = cols[j];
        if (!cell) continue;
        if (cell.textContent.trim() === "" && lastNonEmptyCell) {
          currentRowspan++;
          lastNonEmptyCell.rowSpan = currentRowspan;
          cell.remove();
        } else {
          lastNonEmptyCell = cell;
          currentRowspan = 1;
        }
      }
    }
  }

  function assignClasses() {
    for (let i = 0; i < classes.length; i++) {
      const cells = document.querySelectorAll(classes[i]);
      const lastCell = cells[cells.length - 1];
      if (i === 0) {
        lastCell.classList.add("bottom-left");
        lastCell.classList.remove("left");
      } else if (i === classes.length - 1) {
        lastCell.classList.add("bottom-right");
        lastCell.classList.remove("right");
      } else {
        lastCell.classList.add("bottom");
      }
    }
  }

  init();
}
