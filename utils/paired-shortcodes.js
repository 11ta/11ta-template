module.exports = {
	/**
	 * ===== Wrapper =====
	 *
	 * You can't add DIVs to native Markdown. Using this wrapper you can
	 * wrap any content, or other shortcodes, in a block you can style however you want.
	 * It also inserts a "wrapper" class you can style for externally in /src/assets/css/tailwind.css
	 * And a padding of 1rem (16px) which you may or may not want to delete depending on your design updates.
	 *
	 * Usage in .md files:
	 *  {% wrap "tailwind classes here" $} Content goes here {% endwrap %}
	 */
	wrap: function (content, classes = '') {
		return `<div class="wrapper p-4 ${classes}">${content}</div>`
	},

	/**
	 * ===== Blockquote =====
	 *
	 * Usage in .md files:
	 *  {% bq "tailwind classes here" %} Content goes here {% endbq %}
	 */
	bq: function (content, classes = '') {
		return `<blockquote class="${classes}">${content}</blockquote>`
	},

	/**
	 * ===== Column Wrapper & Cols - REQUIRED =====
	 *
	 * Using this column wrapper and 'cols' below
	 * you can create columnar content in your .md files.
	 *
	 * Usage in .md files:
	 *  {% columns "optional additional tailwind classes" %}
	 *    {% cols "optional add'l tailwind classes" %} Content for left column {% endcols %}
	 *    {% cols "optional add'l tailwind classes" %} Content for right column {% endcols %}
	 *  {% endcolumns %}
	 */
	columns: function (content, classes = '') {
		return `<div class="flex flex-col md:flex-row ${classes}">${content}</div>`
	},

	/** See usage example above.
	 * You can add as many 'cols' as you want columns
	 */
	cols: function (content, classes = '') {
		return `<div class="flex-1 p-4 m-2 ${classes}">${content}</div>`
	},

	/** ===== Description List Wrapper, Term, and Description
	 *
	 * Native Markdown doesn't support Description Lists
	 * which you may want to use for FAQs or other listed content for which
	 * regular UL and OL lists are not appropriate.
	 *
	 * Much like Columns above, you'll need to use the 'dl' wrapper around
	 * a series of 'dt' and 'dd' shortcodes.
	 *
	 * Also you may want to adjust the TailwindCSS colors and paddings attached
	 * to the 'dt' and 'dd' shortcodes for your specific display requirements.
	 *
	 * Example post: /2020/09/04/description-list-shortcodes/
	 *
	 * Usage in .md files
	 *  {% dl %}
	 *    {% dt %} Question one. {% enddt %}
	 *    {% dd %} The answer for question one. {% enddd %}
	 *
	 *    {% dt %} Question two. {% enddt %}
	 *    {% dd %} The answer for question two. {% enddd %}
	 *
	 *    {% dt %} Question three. {% enddt %}
	 *    {% dd %} The answer for question three. {% enddd %}
	 *  {% enddl %}
	 */
	dl: function (content, classes = '') {
		return `<dl class="${classes}">${content}</dl>`
	},

	/** Description List: Term/Question
	 *    See example usage above
	 */
	dt: function (content, classes = '') {
		return `<div class="border-t border-gray-300 mt-4 pt-4 md:grid md:grid-cols-12 md:gap-8"><dt class="font-semibold md:col-span-5 ${classes}">${content}</dt>`
	},

	/** Description List: Description/Answer
	 *    See example usage above
	 */
	dd: function (content, classes = '') {
		return `<dd class="pb-4 md:col-span-7 md:mt-0  ${classes}">${content}</dd></div>`
	},
}
