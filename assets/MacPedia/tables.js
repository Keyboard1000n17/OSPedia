let content = [];
async function init() {
  const response = await fetch(window.jsonData);
  content = await response.json();
  for (let i = 0; i < content.length; i++) {
    output(i);
  }

  span();
  const tbody = document.querySelector("tbody");
}

function output(i) {
  const template = document.querySelector("template").content.cloneNode(true);
  const tds = template.querySelectorAll("td");
  tds[0].innerHTML = content[i].version;
  tds[1].innerHTML = content[i].build;
  tds[2].innerHTML = content[i].release;
  tds[3].innerHTML = content[i].darwinVersion;
  tds[4].innerHTML = content[i].description;
  tds[0].classList.add(content[i].class);
  document.querySelector("tbody").appendChild(template);
}

function span(i) {
  const tbody = document.querySelector("tbody");
  const trs = Array.from(document.querySelectorAll("tbody > tr"));
  if (!trs.length) return;
  for (let i = 0; i < trs.length; i++) {
    const cols = trs[i].querySelectorAll("td").length;
    for (let col = 0; col < cols; col++) {
      let lastNonEmptyCell = null;
      let currentRowspan = 1;
      for (let row = 0; row < trs.length; row++) {
        const cell = trs[row].querySelectorAll("td")[col];
        if (!cell) continue;
        if (cell.textContent.trim() === "") {
          if (lastNonEmptyCell) {
            currentRowspan++;
            lastNonEmptyCell.rowSpan = currentRowspan;
            cell.remove();
          }
        } else {
          lastNonEmptyCell = cell;
          currentRowspan = 1;
        }
        if (row === trs.length - 1 && lastNonEmptyCell) {
          if (cols === 5 && col === 0) {
            lastNonEmptyCell.classList.add("bottom-left");
            lastNonEmptyCell.classList.remove("left");
            lastNonEmptyCell.classList.remove("bottom");
          } else if (col === cols - 1) {
            lastNonEmptyCell.classList.add("bottom-right");
            lastNonEmptyCell.classList.remove("right");
            lastNonEmptyCell.classList.remove("bottom");
          } else {
            lastNonEmptyCell.classList.add("bottom");
          }
        }
      }
    }
  }
}

init();
