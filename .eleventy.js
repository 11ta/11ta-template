const fs = require('fs')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginNavigation = require('@11ty/eleventy-navigation')
const markdownIt = require('markdown-it')
const markdownItEmoji = require('markdown-it-emoji')

const collections = require('./utils/collections.js')
const filters = require('./utils/filters.js')
const shortcodes = require('./utils/shortcodes.js')
const transforms = require('./utils/transforms.js')
const svgsprite = require('./utils/svgsprite')


module.exports = function (eleventyConfig) {

  /**
   * Plugins
   * @link https://www.11ty.dev/docs/plugins/
   */ 
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginNavigation)

  /**
   * Filters
   * @link https://www.11ty.io/docs/filters/
   */
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  /**
   * Transforms
   * @link https://www.11ty.io/docs/config/#transforms
   */
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName])
  })

  /**
   * Shortcodes
   * @link https://www.11ty.io/docs/shortcodes/
   */
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
  })

  /**
   * Add async shortcodes
   *
   * @link https://www.11ty.dev/docs/languages/nunjucks/#asynchronous-shortcodes
   */
  eleventyConfig.addNunjucksAsyncShortcode('svgsprite', svgsprite)

  /**
   * Collections?
   * ============================
   */

  /**
   * Custom Watch Targets
   * for when the Tailwind config or .css files change... 
   * by default not watched by 11ty
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./src/assets')
  eleventyConfig.addWatchTarget('./tailwind.config.js')


  /**
   * Passthrough File Copy
   * @link https://www.11ty.dev/docs/copy/
   */
  eleventyConfig.addPassthroughCopy('src/*.png')
  eleventyConfig.addPassthroughCopy('src/*.jpg')
  eleventyConfig.addPassthroughCopy('src/*.ico')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/assets/images/')
  eleventyConfig.addPassthroughCopy('src/assets/svg/')

  /**
   * Set custom markdown library instance...
   * ...because why not control our .MD files and have Emojis built in?
   * @link https://www.11ty.dev/docs/languages/markdown/#optional-set-your-own-library-instance
   */
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  let markdownLib = markdownIt(options).use(markdownItEmoji)
  eleventyConfig.setLibrary('md', markdownLib)

  /**
   * Add layout aliases
   * @link https://www.11ty.dev/docs/layouts/#layout-aliasing
   */
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')

  /**
   * Opts in to a full deep merge when combining the Data Cascade.
   * Per the link below, "This will likely become the default in an upcoming major version."
   * So I'm going to implement it now.
   * @link https://www.11ty.dev/docs/data-deep-merge/#data-deep-merge
   */
  eleventyConfig.setDataDeepMerge(true)

  /**
   * Override BrowserSync Server options
   * This so we can have and test a 404 during local dev.
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match
        },
      },
    },
    // Set local server 404 fallback
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404/index.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      data: '_data'
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
}
