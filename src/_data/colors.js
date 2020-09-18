module.exports = {
	/**
	 * ************************ IMPORTANT *********************************
	 *  A few colors for links, blockquotes, code, etc. are set in the
	 *  /src/assets/css/tailwind.css file.
	 *  So if you can't find what you're looking for below,
	 *  check out that tailwind.css file.
	 * ********************************************************************
	 *
	 *
	 * ===== Global Site Text Color =====
	 */
	siteTextDefault: 'text-gray-900',
	siteTextCustom: '',

	/**
	 * Reason for both 'xxxDefault' and 'xxxCustom'
	 *  I could have only provided ONE set of settings. But knowing how users
	 *  actually use a system, at some point they'll want to revert to the
	 *  original color set...or at least reference it.
	 *  Providing a 'Default' and 'Custom' set allows you to keep the original
	 *  colors for future reference while setting 'Custom' overrides for entire
	 *  sets or individual elements.
	 *
	 *    If you don't care about keeping them as reference, you can just
	 *      change the "xxxDefault" key values.
	 *
	 *    "xxxCustom" values will always override "xxxDefault" values.
	 *
	 * ~~~~~ Cusomization tip ~~~~~
	 *    To quickly create a full set of custom colors,
	 *    simply select and copy the set of "Default" elements
	 *    and 'replace paste' them in the "Custom" area.
	 *    Then just change the "color" value in the middle.
	 *    This will help keep the customization values looking correct
	 *    and wil ensure no errors in "text", "bg", and "border" values.
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
		barBg: '',
		text: 'text-gray-700',
		textActive: 'text-gray-800',
		textHover: 'text-gray-800',
		textActiveBg: 'bg-gray-100',
		textFocus: 'text-gray-500',
		mobileBg: '',
		mobileBgActive: 'bg-gray-700',
		mobileBgHover: 'bg-gray-100',
		mobileBgFocus: 'bg-gray-300',
		mobileText: 'text-gray-500',
		mobileTextActive: 'text-gray-300',
		mobileTextHover: 'text-gray-600',
		mobileTextFocus: 'text-gray-700',
		mobileButton: 'text-gray-500',
		mobileButtonHover: 'text-gray-600',
		mobileButtonBgHover: 'bg-gray-100',
	},

	/**
	 * ===== Logo / SVG =====
	 */
	logoDefault: {
		desktop: 'text-teal-500',
		mobile: 'text-teal-500',
		hover: 'text-teal-600',
	},
	logoCustom: {
		desktop: 'text-gray-700',
		mobile: 'text-gray-700',
		hover: 'text-gray-800',
	},

	/**
	 * ===== Headings: H1, H2, H3, H4, H5, H6
	 *
	 * NOTE: These are for headings controled in templates.
	 * For content headings added by Editors in .md files,
	 * manage those in /src/assets/css/tailwind.css
	 */
	headingsDefault: 'text-teal-500',
	headingsCustom: 'text-gray-700',

	/**
	 * ===== Excerpts on Post Lists
	 */
	excerptDefault: 'text-gray-700',
	excerptCustom: 'text-sm leading-relaxed italic text-gray-700',

	/**
	 * ===== Author / Date Block and their Social Icons =====
	 *
	 * Manage the global Footer Icons below in the Footer section
	 */
	authorDefault: {
		name: 'text-gray-700',
		date: 'text-gray-700',
		socialIcons: 'text-gray-500',
		socialIconsHover: 'text-gray-600',
	},
	authorCustom: {
		name: '',
		date: '',
		socialIcons: '',
		socialIconsHover: '',
	},

	/**
	 * ===== Social Share Icons =====
	 *
	 * Manage the colors of the Social Share icons at the bottom of
	 * Posts detail views
	 *
	 * Manage display in /src/_data/structure.js
	 */
	socialShareDefault: {
		color: 'text-gray-700',
		hover: 'text-gray-800',
	},
	socialShareCustom: {
		color: '',
		hover: '',
	},

	/**
	 * ===== Buttons =====
	 */
	buttonDefault: {
		text: 'text-white',
		textHover: 'text-white',
		bg: 'bg-teal-700',
		bgHover: 'bg-teal-700',
		border: 'border-teal-900',
	},
	buttonCustom: {
		text: '',
		textHover: '',
		bg: '',
		bgHover: '',
		border: '',
	},

	/**
	 * ===== Pagination Settings =====
	 *
	 * === Post Listing Pills ===
	 */
	paginateDefault: {
		blockBg: '',
		blockBorder: 'border-gray-200',
		linkText: 'text-gray-600',
		linkTextActive: 'text-gray-500',
		linkTextHover: 'text-gray-700',
		linkBg: 'bg-white',
		linkBgActive: 'bg-gray-100',
		linkBgHover: 'bg-gray-200',
		linkBorder: 'border-gray-300',
		linkFocusBorder: 'border-blue-300',
	},
	paginateCustom: {
		blockBg: '',
		blockBorder: '',
		linkText: '',
		linkTextActive: '',
		linkTextHover: '',
		linkBg: '',
		linkBgActive: '',
		linkBgHover: '',
		linkBorder: '',
		linkFocusBorder: '',
	},

	/**
	 * === Previous / Next Post Detail Links
	 */
	prevNextDefault: {
		text: 'text-gray-700',
		textHover: 'text-gray-800',
		bg: '',
		bgHover: '',
	},
	prevNextCustom: {
		text: '',
		textHover: '',
		bg: '',
		bgHover: '',
	},

	/**
	 * ===== Tag Pills on Post Listings and Details
	 * You can disable these globally in /src/_data/structure.js
	 */
	tagPillDefault: {
		text: 'text-gray-700',
		textHover: 'text-gray-800',
		bg: 'bg-gray-200',
		bgHover: 'bg-gray-300',
	},
	tagPillCustom: {
		text: '',
		textHover: '',
		bg: '',
		bgHover: '',
	},

	/**
	 * ===== Footer =====
	 *
	 * === Text and Background
	 */
	footerDefault: {
		barBg: 'bg-white',
		text: 'text-teal-500',
	},
	footerCustom: {
		barBg: 'bg-gray-900',
		text: 'text-gray-100',
	},

	/**
	 * === Footer social icons
	 * Manage the Author social icons above in the Author section
	 */
	socialIconsDefault: 'text-teal-400',
	socialIconsHoverDefault: 'text-teal-500',

	socialIconsCustom: 'text-gray-100',
	socialIconsHoverCustom: 'text-gray-200',

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
