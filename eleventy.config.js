const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  // Sass plugin
  eleventyConfig.addPlugin(eleventySass, {
    sass: {
      loadPaths: ["node_modules"],
    },
  });

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy(
    "assets/**/*.{js,json,jpg,png,gif,webp,svg,css}",
  );
  eleventyConfig.addPassthroughCopy({ "assets/global": "/" });

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

  // WinPedia collection (excluding index.html)
  eleventyConfig.addCollection("winpedia-pages", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/WinPedia/!(home).html")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // MacPedia collection (excluding index.html)
  eleventyConfig.addCollection("macpedia-pages", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/MacPedia/!(home).html")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  return {
    // Input/output directories
    dir: {
      input: "assets",
      output: "_site",
      includes: "_includes", // _includes folder is at root, outside assets
    },
    templateFormats: ["html", "njk", "md"], // allow processing of HTML with frontmatter
    htmlTemplateEngine: "njk", // treat HTML as Nunjucks
    markdownTemplateEngine: "njk", // treat markdown with Nunjucks
    passthroughFileCopy: true, // enable passthrough copy
  };
};
