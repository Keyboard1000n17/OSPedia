const path = require("node:path");

module.exports = function(eleventyConfig) {
  // split function
  eleventyConfig.addFilter("parentFolder", function(str) {
    return str.split("/").slice(0, -1).join("/");
  });

  // split content at +++
  eleventyConfig.addFilter("splitContent", function(content, index) {
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

  // windows collection (excluding home.html)
  eleventyConfig.addCollection("windows-pages", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/windows/**/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // macOS collection (excluding home.html)
  eleventyConfig.addCollection("macos-pages", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/macos/**/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  return {
    // Input/output directories
    dir: {
      input: "assets",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["html", "njk", "md"], // allow processing of HTML with frontmatter
    htmlTemplateEngine: "njk", // treat HTML as Nunjucks
    markdownTemplateEngine: "njk", // treat markdown with Nunjucks
    passthroughFileCopy: true, // enable passthrough copy
  };
};
