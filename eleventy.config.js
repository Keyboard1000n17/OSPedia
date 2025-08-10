const eleventySass = require("eleventy-sass");

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
        return this.order;
      }
    }
  });

  eleventyConfig.addCollection("macpedia", function(collection) {
    return collection.getFilteredByTag("macpedia").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

 eleventyConfig.addCollection("winpedia", function(collection) {
    return collection.getFilteredByTag("winpedia").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });


  eleventyConfig.addPassthroughCopy("assets/**/*.{jpg,png,gif,webp}");

  return {
    dir: {
      input: "assets",
      output: "_site"
    }
  };
};
