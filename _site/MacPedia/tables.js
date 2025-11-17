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
  if (i === content.length - 1) {
    tds[0].className = "bottom-left";
    tds[1].className = "bottom";
    tds[2].className = "bottom";
    tds[3].className = "bottom";
    tds[4].className = "bottom-right";
  }
  document.querySelector("tbody").appendChild(template);
}

function span() {
  const tbody = document.querySelector("tbody");
  const trs = Array.from(document.querySelectorAll("tbody > tr"));
  if (!trs.length) return;
  const cols = trs[1].querySelectorAll("td").length;
  for (let col = 0; col < cols; col++) {
    let lastNonEmptyCell = null;
    let currentRowspan = 1;
    for (let row = 0; row < trs.length; row++) {
      const cell = trs[row].querySelectorAll("td")[col];
      if (!cell) continue;
      if (cell.textContent.trim() === "") {
        if (lastNonEmptyCell) {
          currentRowspan++;
          cell.remove();
          lastNonEmptyCell.rowSpan = currentRowspan;
        }
      } else {
        lastNonEmptyCell = cell;
      }
      if (row === trs.length - 1) {
        if (col === 0) {
          lastNonEmptyCell.classList.add("bottom-left");
          lastNonEmptyCell.classList.remove("left");
        } else if (col === cols - 1) {
          lastNonEmptyCell.classList.add("botttom-right");
          lastNonEmptyCell.classList.remove("right");
        } else {
          lastNonEmptyCell.className = "bottom";
        }
      }
    }
  }
}

init();
