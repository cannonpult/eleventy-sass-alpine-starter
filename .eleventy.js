const moment = require('moment');
const Image = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

moment.locale('en');

/**
 * Module Exports 
 */
module.exports = function (eleventyConfig) {

  // Use SASS
  eleventyConfig.addWatchTarget("./src/styles");

  // Syntax Highlighting
  eleventyConfig.addPlugin(syntaxHighlight);
   
  // Pretty post dates
  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  }); 
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).utc().format('ll'); // E.g. May 31, 2019
  });

  // Manage Responsive Images
  async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
      widths: [300, 600],
      formats: ["avif", "jpeg"],
      outputDir: "./public/assets/img/",
      urlPath: "/assets/img/",
      useCache: true,
    });
  
    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };  
    
    return Image.generateHTML(metadata, imageAttributes);
  }
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  
  // Change 11ty's default I/O
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};