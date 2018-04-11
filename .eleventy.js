module.exports = function(eleventyConfig) {
	return {
		templateFormats: [
      "md",
      "njk",
      "html",
      "jstl",
      "png",
      "jpg",
      "css"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "false",
    passthroughFileCopy: true
  };
};