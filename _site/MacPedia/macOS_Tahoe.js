rows = [
  [
    "26.0",
    "25A8353",
    "—",
    "Preinstalled on 14-inch M5 MacBook Pro",
    "",
    "blue",
  ],
  ["", "25A354", "September 15, 2025", "", "", ""],
];

function output(rn) {
  // rn means row number
  const tr = document.createElement("tr");
  for (let column = 0; column < rows[rn].length - 1; column++) {
    const td = document.createElement("td");
    td.textContent = rows[rn][column];
    tr.appendChild(td);
  }
  const firstCells = document.querySelectorAll("tbody > tr > td:first-child");
  for (let i = 0; i < firstCells.length; i++) {
    if (document.querySelectorAll("tbody>tr")[rn].length === rows[rn].length) {
      firstCells[i].className = rows[rn][rows[rn].length - 1];
    }
  }
  document.querySelector("tbody").appendChild(tr);
}

function span() {
  const tbody = document.querySelector("tbody");
  const trs = Array.from(document.querySelectorAll("tbody > tr"));
  if (!trs.length) return;
  const cols = trs[0].querySelectorAll("tr").length;
  for (let col = 0; col < trs.length; col++) {
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
    }
  }
}

for (let i = 0; i < rows.length; i++) {
  output(i);
}

span();
