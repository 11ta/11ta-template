---
title: Color Settings
date: 2020-07-01T17:44:03.000Z
author: shane-robinson
excerpt: It's simple to customize almost all the colors.
seo:
  title:
  description:
  image: 2020/07/colors.jpg
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/07/colors.jpg
  slide:
tags:
  - blockquote
  - shortcodes
---

Customizing almost all the colors is easy...assuming you're familiar with how colors work in [TailwindCSS](https://tailwindcss.com/docs/customizing-colors 'TailwindCSS Utility-First CSS Framework').

Check out the `/src/\_data/colors.js` file for instructions and examples of how to customize the colors around the system.

Here's a sample snippet from the `colors.js` data file showing how to completely customize the main navbar above:

```js
/**
	 * "xxxDefault" key values should generally be kept for reference so:
	 *    1. You can easily revert to the original colors if needed.
	 *    2. You can use them as reference for customizing your color set.
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
		text: 'text-gray-500',
		textActive: 'text-gray-600',
		textHover: 'text-gray-600',
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

```

Here's how to manage buttons:

```js
	/**
	 * ===== Buttons =====
	 */
	buttonDefault: {
		text: 'text-white',
		textHover: 'text-white',
		bg: 'bg-teal-500',
		bgHover: 'bg-teal-600',
		border: 'border-teal-900',
	},
	buttonCustom: {
		text: '',
		textHover: '',
		bg: '',
		bgHover: '',
		border: '',
	},
```
