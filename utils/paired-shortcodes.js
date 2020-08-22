module.exports = {
	// ++++++++++++++++++++
	// Wrap any content, or other shortcodes, in a block you can style however you want
	wrap: function (content, classes = '') {
		return `<div class="p-4 ${classes}">${content}</div>`
	},

	// ++++++++++++++++++++
	// Blockquote
	bq: function (content, classes = '') {
		return `<blockquote class="${classes}">${content}</blockquote>`
	},

	// ++++++++++++++++++++
	// Column Wrapper - required
	columns: function (content, classes = '') {
		return `<div class="flex flex-col md:flex-row ${classes}">${content}</div>`
	},

	// Cols contained within 'columns' above
	cols: function (content, classes = '') {
		return `<div class="flex-1 p-4 m-2 ${classes}">${content}</div>`
	},

	// ++++++++++++++++++++
	// Description List - wrapper - required
	dl: function (content, classes = '') {
		return `<dl class="${classes}">${content}</dl>`
	},

	//  Description List Term/Question
	dt: function (content, classes = '') {
		return `<div class="border-t border-gray-300 mt-4 pt-4 md:grid md:grid-cols-12 md:gap-8"><dt class="font-semibold md:col-span-5 ${classes}">${content}</dt>`
	},

	//  Description List Description/Answer
	dd: function (content, classes = '') {
		return `<dd class="pb-4 md:col-span-7 md:mt-0  ${classes}">${content}</dd></div>`
	},
	// end
}
