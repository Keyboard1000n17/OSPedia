const path = require("path");

module.exports = {
  permalink: (data) => {
    const rel = path.relative("./assets", data.page.inputPath);
    return rel.replace(path.extname(rel), ".html");
  },
};
