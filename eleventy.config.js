const eleventySass = require("eleventy-sass");
const path = require("path");

// So, I asked Gemini to generate this config
// because I don't know bullshit, so,
// very sorry to y'all who hate vibe coding.

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass, {
    sass: {
      loadPaths: ["node_modules"],
    },
  });

  eleventyConfig.addGlobalData("eleventyComputed", {
    eleventyNavigation: {
      get key() {
        return this.title;
      },
      get order() {
        if (this.page && this.page.data) {
          return this.page.data.order;
        }
        return 0;
      },
    },
  });

  eleventyConfig.addCollection("winpedia-pages", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/WinPedia/!(Homepage).html")
      .sort((a, b) => {
        return (a.data.order || 0) - (b.data.order || 0);
      });
  });

  eleventyConfig.addCollection("macpedia-pages", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/MacPedia/!(Homepage).html")
      .sort((a, b) => {
        return (a.data.order || 0) - (b.data.order || 0);
      });
  });

  // eleventyConfig.addTemplateFormats("html");
  eleventyConfig.addPassthroughCopy("assets/**/*.{jpg,png,gif,webp,svg,css}");
  eleventyConfig.addPassthroughCopy("assets/MacPedia/index.html");
  eleventyConfig.addPassthroughCopy("assets/WinPedia/index.html");

  return {
    dir: {
      input: "assets",
      output: "_site",
    },
  };
};
