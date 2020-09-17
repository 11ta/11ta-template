const markdownIt = require('markdown-it')
const svgColorDefault = 'text-indigo-500'

module.exports = {
	/**
	 * ===== SVGs =====
   * This shortcode is used in layouts and can be used in .md content. 
   * 
   * Set the default color above in the "svgColorDefault" variable.
   * 
   * The SVGs MUST exist in the /src/assets/svg/ directory and must me named 
   * according to the existing examples. 
   * 
   * Attributes:
   *    name ; required, must be same as SVG file name in /src/assets/svg/ (without ".svg")
   *    classes : optional but required if you want to control size, color, etc. 
   *    desc : optional when used in .md content files
   *    location : optional when used in .md content files
   * 
	 * Usage by Editors in .md content files:
   *  {% svg "name", "any TailwindCSS classes" %}
   * 
   * Example:
   *  {% svg "instagram", "h-12 w-12 text-blue-500" %}

   * Sensible fallback defaults are in place. ;-)
   * "desc" and "location" attribures are required for accessibility and Lighthouse validations
   * and are hardcoded in the layouts to provide unique values as required by Lighthouse.
   * 
   * Used in Layouts:
   *  /src/authors.njk 
   *  /src/_includes/partials/footer.njk 
   *  /src/_includes/components/socialshare.njk 
   *  /src/_includes/components/nav.njk (for the logos)
	 */
	svg: function (name, classes, desc, location) {
		const nameAttr = name ? name : 'piedpiper'
		const classesAttr = classes
			? `${classes} fill-current`
			: `${svgColorDefault} fill-current`
		const descAttr = desc ? desc : `${nameAttr} icon`
		const locationAttr = location ? location : 'content'
		return `<svg class="${classesAttr}" aria-describedby="symbol-${nameAttr}-desc" aria-labelledby="symbol-${nameAttr}-desc" role="group">
                <desc id="symbol-${nameAttr}-desc-${locationAttr}">${descAttr}</desc>
                <use xlink:href="#symbol-${nameAttr}"></use>
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
	 * vratio  = "w:h" : optional : default = "16:9"
	 * vstart  = "4:20" : optional
	 *
	 * Usage in .md file
	 *  {% youtube "1234567", "Your Custom Title", "4:3", "1:23" %}
	 *
	 * If you'd like the default title = "YouTube Video", 16:9 ratio, and start at the beginning,
	 * you only need the following:
	 *  {% youtube "1234567" %}
	 */
	youtube: function (vid, vtitle, vratio, vstart) {
		const slug = vid ? vid : 'oHg5SJYRHA0'
		const title = vtitle ? vtitle : 'YouTube Video'
		const ratio = vratio ? vratio : '16:9'
		const start = vstart
			? vstart
					.split(':')
					.reduce((minute, seconds) => Number(minute) * 60 + Number(seconds))
			: ''
		const padding = ratio
			.split(':')
			.reduce((first, second) => (second / first) * 100)

		return `<div id="${slug}" style="position:relative; width:100%; padding-bottom:${padding}%"><iframe style="position:absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%" width="100%" height="100%" title="${title}" src="https://www.youtube.com/embed/${slug}${
			start ? `?start=${start}` : ''
		}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
	},
}
