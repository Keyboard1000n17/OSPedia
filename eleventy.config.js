const path = require("node:path");

module.exports = function (eleventyConfig) {
  // windows collection (excluding home.html)
  eleventyConfig.addCollection("windows-pages", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/windows/**/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // macOS collection (excluding home.html)
  eleventyConfig.addCollection("macos-pages", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/macos/**/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // split function
  eleventyConfig.addFilter("parentFolder", function (str) {
    return str.split("/").slice(0, -1).join("/");
  });

  // split content at +++
  eleventyConfig.addFilter("splitContent", function (content, index) {
    if (typeof content !== "string") {
      return content;
    } else if (index > 1) {
      throw new Error(
        "splitContent: Index can only be 0 or 1, modify config to change this.",
      );
    } else {
      const slices = content.split(/\+\+\+/, 2);
      return index === 0 ? slices[0] : slices[1];
    }
  });

  // Get tags of page

  eleventyConfig.addFilter("getCollection", function (page, collections) {
    console.log("RUNNING: getCollection");
    if (collections) {
      if (collections["windows-pages"].some((item) => item.url === page.url)) {
        console.log("\033[1;32mWINDOWS\033[0m");
        return collections["windows-pages"];
      } else if (
        collections["macos-pages"].some((item) => item.url === page.url)
      ) {
        return collections["macos-pages"];
      }
    } else {
      return null;
    }
  });

  // Get next article

  eleventyConfig.addFilter("getNext", function (collection, page) {
    const index = collection.findIndex((item) => item.url === page.url);
    return index !== -1 && index < collection.length - 1
      ? collection[index + 1]
      : null;
  });

  // Get previous article

  eleventyConfig.addFilter("getPrev", function (collection, page) {
    const index = collection.findIndex((item) => item.url === page.url);
    return index !== -1 && index < collection.length - 1
      ? collection[index - 1]
      : null;
  });

  // Get a property of previous or next article

  eleventyConfig.addFilter("getArticleProperty", function (page, property) {
    if (property === "favicon") {
      return `../${page.fileSlug}/${page.data.favicon}`;
    } else {
      return page.data[property];
    }
  });

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy(
    "assets/**/*.{js,json,wasm,bin,img,jpg,png,gif,webp,svg,css}",
  );
  eleventyConfig.addPassthroughCopy({ "assets/global": "/global/" });

  // Computed navigation data (optional)
  eleventyConfig.addGlobalData("eleventyComputed", {
    eleventyNavigation: {
      get key() {
        return this.title;
      },
      get order() {
        return this.page?.data?.order ?? 0;
      },
    },
  });

  return {
    // Input/output directories
    dir: {
      input: "assets",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["html", "njk", "md"], // allow processing of HTML with frontmatter
    htmlTemplateEngine: "njk", // treat HTML as Nunjucks
    markdownTemplateEngine: "njk", // treat markdown with Nunjucks
    passthroughFileCopy: true, // enable passthrough copy
  };
};
