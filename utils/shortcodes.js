const markdownIt = require('markdown-it')

module.exports = {
	/**
	 * I still have to add instructions for this SVG shortcode
	 *
	 */
	svg: function (name, desc, classes, location, viewBox) {
		const viewBoxAttr = viewBox ? `viewBox="${viewBox}"` : ''
		return `<svg ${viewBoxAttr} class="${classes}" aria-describedby="symbol-${name}-desc" aria-labelledby="symbol-${name}-desc" role="group">
                <desc id="symbol-${name}-desc-${location}">${desc}</desc>
                <use xlink:href="#symbol-${name}"></use>
            </svg>`
	},

	/**
	 * I honestly don't remember why I added this markdown shortcode?
	 * I'm guessing at one point I wanted to use markdown in a .njk file (for some reason)
	 * and so added this markdown processor shortcode.
	 */
	markdown: function (value) {
		if (!value) {
			return ''
		}

		let markdown = markdownIt({
			html: true,
		})

		return markdown.render(value)
	},

	/**
	 * My YouTube embed with Title, Start (optional) and Ratio (optional)
	 * vid     = "youtubeID" : required : default = "oHg5SJYRHA0"
	 * vtitle  = "Your title for this video" : required : default = "YouTube Video"
	 * vstart  = "4:20" : optional
	 * vratio  = "w:h" : optional : default = "16:9"
	 *
	 * Usage in .md file
	 *  {% youtube "1234567", "Your Custom Title", "1:23", "4:3" %}
	 *
	 * If you'd like the default title = "YouTube Video", start at the beginning, and 16:9 ratio,
	 * you only need the following:
	 *  {% youtube "1234567" %}
	 */
	youtube: function (vid, vtitle, vstart, vratio) {
		const slug = vid ? vid : 'oHg5SJYRHA0'
		const title = vtitle ? vtitle : 'YouTube Video'
		const start = vstart
			? vstart
					.split(':')
					.reduce((minute, seconds) => Number(minute) * 60 + Number(seconds))
			: ''
		const ratio = vratio ? vratio : '16:9'
		const padding = ratio
			.split(':')
			.reduce((first, second) => (second / first) * 100)

		return `<div id="${slug}" style="position:relative; width:100%; padding-bottom:${padding}%"><iframe style="position:absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%" width="100%" height="100%" title="${title}" src="https://www.youtube.com/embed/${slug}${
			start ? `?start=${start}` : ''
		}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
	},
}
