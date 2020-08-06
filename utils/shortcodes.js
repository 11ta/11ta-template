const markdownIt = require('markdown-it')

module.exports = {
  svg: function (name, desc, classes, viewBox) {
    const viewBoxAttr = viewBox ? `viewBox="${viewBox}"` : ''
    return `<svg ${viewBoxAttr} class="${classes}" aria-describedby="symbol-${name}-desc" role="group">
                <desc id="symbol-${name}-desc">${desc}</desc>
                <use xlink:href="#symbol-${name}"></use>
            </svg>`
  },

  markdown: function (value) {
    if (!value) {
      return ''
    }

    let markdown = markdownIt({
      html: true,
    })

    return markdown.render(value)
  },
}
