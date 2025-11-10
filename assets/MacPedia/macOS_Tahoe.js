rows = [
  ["26.0", "25A8353", "—", "Preinstalled on 14-inch M5 MacBook Pro", ""],
  ["", "25A354", "September 15, 2025	", "", ""],
];

function output(rn) {
  // rn means row number
  let data = "";
  for (let i = 0; i < rows[rn].length; i++) {
    data += "<td>" + rows[rn][i] + "</td>";
  }
  const tr = "<tr>" + data + "</tr>";
  // tr.innerHTML = data;
  document.querySelector("tbody").innerHTML += tr;
  return data;
}

function span() {
  const trs = document.querySelectorAll("tbody > tr");
  for (let i = 1; i < rows.length; i++) {
    const cellsAbove = trs[i - 1].querySelectorAll("td");
    for (let j = 0; j < rows[i].length; j++) {
      if (rows[i][j] === "" && cellsAbove[j]) {
        const thisRow = trs[i].querySelectorAll("td");
        const thisCell = thisRow[j];
        let cellAbove = cellsAbove[j];
        let currentRowspan = parseInt(cellAbove.getAttribute("rowspan")) || 1;
        cellAbove.rowSpan = currentRowspan + 1;
        thisCell.remove();
      }
    }
  }
}

for (let i = 0; i < rows.length; i++) {
  output(i);
}
span();
