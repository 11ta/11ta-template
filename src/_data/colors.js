module.exports = {
	/**
	 * "xxxDefault" key values should generally be kept for reference so:
	 *    1. You can easily revert to the original colors if needed.
	 *    2. You can use them as reference for customizing your color set.
	 *
	 *    If you don't care about keeping them as reference, you can just
	 *      change the "xxxDefault" key values.
	 *
	 *    "xxxCustom" values will always override "xxxDefault" values.
	 */
	navDefault: {
		barBg: 'bg-white',
		text: 'text-teal-500',
		textActive: 'text-teal-600',
		textHover: 'text-teal-600',
		textActiveBg: 'bg-teal-100',
		textFocus: 'text-teal-500',
		mobileBg: '',
		mobileBgActive: 'bg-teal-700',
		mobileBgHover: 'bg-teal-100',
		mobileBgFocus: 'bg-teal-300',
		mobileText: 'text-teal-500',
		mobileTextActive: 'text-teal-300',
		mobileTextHover: 'text-teal-600',
		mobileTextFocus: 'text-teal-700',
		mobileButton: 'text-teal-500',
		mobileButtonHover: 'text-teal-600',
		mobileButtonBgHover: 'bg-teal-100',
	},
	/**
	 *  NOTE: You MUST keep all Custom variable keys, even if their values are empty and you don't intend to use them.
	 *  If you delete any variable keys, 11ty won't work.
	 */
	navCustom: {
		barBg: 'bg-gray-800',
		text: '',
		textActive: '',
		textHover: '',
		textActiveBg: '',
		textFocus: '',
		mobileBg: '',
		mobileBgActive: '',
		mobileBgHover: '',
		mobileBgFocus: '',
		mobileText: '',
		mobileTextActive: '',
		mobileTextHover: '',
		mobileTextFocus: '',
		mobileButton: '',
		mobileButtonHover: '',
		mobileButtonBgHover: '',
	},

	logoDefault: {
		desktop: 'text-teal-500',
		mobile: 'text-teal-500',
		hover: 'text-teal-600',
	},
	logoCustom: {
		desktop: '',
		mobile: '',
		hover: '',
	},

	headingsDefault: 'text-teal-500',
	headingsCustom: '',

	authorDefault: {
		name: 'text-gray-600',
		date: 'text-gray-500',
		socialIcons: 'text-gray-500',
		socialIconsHover: 'text-gray-600',
	},
	authorCustom: {
		name: '',
		date: '',
		socialIcons: '',
		socialIconsHover: '',
	},

	tagPillDefault: {
		text: 'text-gray-500',
		textHover: 'text-gray-600',
		bg: 'bg-gray-200',
		bgHover: 'bg-gray-300',
	},
	tagPillCustom: {
		text: '',
		textHover: '',
		bg: '',
		bgHover: '',
	},

	footerDefault: {
		barBg: 'bg-white',
		text: 'text-teal-500',
	},
	footerCustom: {
		barBg: 'bg-gray-800',
		text: '',
	},

	socialIconsDefault: 'text-teal-400',
	socialIconsHoverDefault: 'text-teal-500',

	socialIconsCustom: '',
	socialIconsHoverCustom: '',

	// Generally I use borders as replacements for <hr> tags.
	// You may need to update Layouts and Templates if you want to use these
	// border settings in other contexts.
	borderDefault: {
		borders: 'border-b',
		color: 'border-gray-300',
	},
	borderCustom: {
		border: '',
		color: '',
	},
}
