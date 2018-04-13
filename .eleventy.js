module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");

	return {
		templateFormats: [
			"md",
			"njk",
			"html",
			"jstl",
			"css"
		],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "false",
		passthroughFileCopy: true
	};
};