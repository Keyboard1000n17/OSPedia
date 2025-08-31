const eleventySass = require("eleventy-sass");

// So, I asked Gemini to generate this config
// because I don't know bullshit, so,
// very sorry to y'all who hate vibe coding.

module.exports = function (eleventyConfig) {
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
        if ( this.page && this.page.data) {
          return this.page.data.order;
        }
        return 0;
      },
    },
  });

  eleventyConfig.addCollection("macpedia", function (collection) {
    return collection.getFilteredByTag("macpedia").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addCollection("winpedia", function (collection) {
    return collection.getFilteredByTag("winpedia").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addPassthroughCopy("assets/**/*.{jpg,png,gif,webp}");
  eleventyConfig.addPassthroughCopy("assets/MacPedia/Home/Homepage.html");
  eleventyConfig.addPassthroughCopy("assets/WinPedia/Home/Homepage.html");

  return {
    dir: {
      input: "assets",
      output: "_site",
    },
  };
};
