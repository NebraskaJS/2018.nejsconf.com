const CleanCSS = require('clean-css');
const UglifyJS = require("uglify-js");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("manifest.webmanifest");
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy(".htaccess");

	eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
	});

	eleventyConfig.addFilter("jsmin", function(code) {
		let minified = UglifyJS.minify(code);
		if( minified.error ) {
			console.log("UglifyJS error: ", minified.error);
			return code;
		}

		return minified.code;
	});

	return {
		templateFormats: [
			"md",
			"njk",
			"html",
			"css"
		],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: false,
		passthroughFileCopy: true,
		pathPrefix: "/"
	};
};