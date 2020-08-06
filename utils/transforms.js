const htmlmin = require('html-minifier')

module.exports = {
  htmlmin: function (content, outputPath) {
    // bail if not production env
    if (process.env.ELEVENTY_ENV !== 'production') {
      return content
    }

    // returned minified content from html files
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })

      return minified
    }

    return content
  },
}
