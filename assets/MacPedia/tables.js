let content = [];
if (window.jsonData) {
  async function init() {
    // Get the data to fill the table with.
    const response = await fetch(window.jsonData);
    content = await response.json();

    // Map the JSON keys to the appropiate CSS classes
    window.classMap = {
      version: "version",
      build: "build",
      release: "release-date",
      darwinVersion: "darwin-version",
      description: "release-notes",
    };
    window.jsonKeys = Object.keys(content[0]);
    window.tableClasses = Object.values(classMap);

    for (let i = 0; i < content.length; i++) {
      output(i);
    }
    // This gets the second row of the .releases table
    // and gets the first class of each td element;
    // the classes are semantic and assigned on line 18 under output.
    window.availableClasses = [
      ...document.querySelectorAll("table.releases tbody tr:nth-child(2) td"),
    ].map((el) => el.classList[0]);
    span();
    assignClasses();
  }

  function output(i) {
    // This function inserts one <tr> into
    // the table at a time.
    let row = "<tr>";
    // The data for row[i]
    let data = Object.values(content[i]);
    // The JSON keys to compare CSS classes with
    // for assigning to the <td>.
    let keys = Object.keys(content[i]);
    for (let j = 0; j < data.length; j++) {
      if (keys[j] !== "class") {
        const key = keys[j];
        row += `<td class="${classMap[key]}">${data[j]}</td>`;
      }
    }
    row += "</tr>";
    // Add the CSS class given in JSON;
    // this CSS class shows visually the status of the
    // macOS version, like previous, current, beta, etc.
    if (data.class) tds[0].classList.add(data.class);
    document
      .querySelector(".releases tbody")
      .insertAdjacentHTML("beforeend", row);
  }

  function span() {
    const trs = [...document.querySelectorAll("table.releases tbody tr")];
    if (!trs.length) return;
    for (let i = 0; i < availableClasses.length; i++) {
      const rows = document.querySelectorAll(`.${availableClasses[i]}`);
      let lastNonEmptyCell = null;
      let currentRowspan = 1;
      for (let j = 0; j < trs.length; j++) {
        const cell = rows[j];
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
    for (let i = 0; i < availableClasses.length; i++) {
      const cells = document.querySelectorAll(`.${availableClasses[i]}`);
      for (const cell of cells) {
        if (i === 0) {
          cell.classList.add("left");
        } else if (i === availableClasses.length - 1) {
          cell.classList.add("right");
        }
      }
      const lastCell = cells[cells.length - 1];
      if (i === 0) {
        lastCell.classList.add("bottom-left");
        lastCell.classList.remove("left");
      } else if (i === availableClasses.length - 1) {
        lastCell.classList.add("bottom-right");
        lastCell.classList.remove("right");
      } else {
        lastCell.classList.add("bottom");
      }
    }
  }

  init();
}
