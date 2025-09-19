const eleventySass = require("eleventy-sass");

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
        return this.page?.data?.order ?? 0;
      },
    },
  });

  eleventyConfig.addCollection("winpedia-pages", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/WinPedia/!(index).html")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.addCollection("macpedia-pages", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("assets/MacPedia/!(index).html")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.addPassthroughCopy(
    "assets/**/*.{js,jpg,png,gif,webp,svg,css}",
  );
  eleventyConfig.addPassthroughCopy({
    "assets/WinPedia/index.html": "WinPedia/index.html",
    "assets/MacPedia/index.html": "MacPedia/index.html",
  });

  return {
    dir: {
      input: "assets",
      output: "_site",
    },
  };
};
