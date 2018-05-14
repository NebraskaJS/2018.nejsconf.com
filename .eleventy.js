const CleanCSS = require('clean-css');
const UglifyJS = require("uglify-js");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");

	eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
	});

	eleventyConfig.addFilter("jsmin", function(code) {
		return UglifyJS.minify(code).code;
	});

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
		passthroughFileCopy: true,
		pathPrefix: "/"
	};
};