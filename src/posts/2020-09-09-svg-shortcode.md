---
title: SVG - Shortcode
date: 2020-09-09T17:44:03.000Z
excerpt: Easily add and customize SVGs in your markdown posts.
author: shane-robinson
draft:
seo:
  title:
  description:
  image: 2020/09/svg-shortcode.svg
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/09/svg-shortcode.svg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: # optional. Default = h-48 md:h-1/3
tags:
  - svg
  - shortcodes
---

This template uses the [eleventy-plugin-svg-sprite](https://github.com/patrickxchong/eleventy-plugin-svg-sprite) package which compiles an SVG Sprite and installs a shortcode to display SVG in any file (Markdown, Nunjucks etc).

> :fire: Massive Thank You to [Ryan Scherler and his Eventy Starter](https://github.com/eastslopestudio/eleventy-starter) where I first learned about the svg-sprite package. Thanks also to Patrick Chong for creating [eleventy-plugin-svg-sprite](https://www.npmjs.com/package/eleventy-plugin-svg-sprite).

## SVG Sprites : Managing Display, Colors, & Links

> NOTE: The post, [Managing Social Share, Author, and Footer Icons](/2020/09/02/managing-social-share-author-and-footer-icons/) goes into a bit of detail on how to manage those elements.

SVG Sprites live in the `/src/assets/svg/` directory and are currently used in this system on:

- The icons in the Footer
  - Manage their colors in `/src/_data/colors.js`
  - Manage which icons display and their links in `/src/_data/social.json`
  - Disable them competely in `/src/_data/structure.js` by setting `g_showFooterSocialIcons: false`.
- The logo _(both desktop and mobile)_ in the Nav Bar
  - Manage their colors in `/src/_data/colors.js`
  - Create your own and name them `logo.svg` and `logo_mobile.svg` and replace the current files in `/src/assets/svg/` directory
- The Social Share icons on Post Details
  - Manage their colors in `/src/_data/colors.js`
  - Manage their functionality in `/src/_includes/components/socialshare.njk`
  - Disable them completely in `/src/_data/structure.js` by setting `g_showSocialShareIcons: false` or disable individual plaforms by setting their values to `false`.
- The Author's social websites on the Author Details
  - Manage their colors in `/src/_data/colors.js`
  - Manage which icons display and their links in `/src/_data/authors.json` for each Author

## Adding Your Own SVGs to the System

If you want to add your own SVGs for use with the SVG Sprite system and SVG Shortcode, you'll have to first add them to the `/src/assets/svg/` directory and make sure they are named using the same syntax as the SVGs already present.

You should also open those SVGs in your text/coding editor and see how they have been modified for accessibility and to return the best Lighthouse optimization scores.

## Using SVG Sprites in .md Content

If you're happily typing along on that next great blog post and you realize what it really needs is a SVG, you're in luck!

{% svg "github", "mt-1 mr-2 h-10 w-10 text-blue-500 float-left" %}

Just use the SVG Shortcode installed by [eleventy-plugin-svg-sprite](https://github.com/patrickxchong/eleventy-plugin-svg-sprite) to insert a SVG anywhere and control its size, color, padding, position, float, etc. For example, the following code returns the GitHub SVG floating to the left:

{% raw %}

```md
{% svg "github", "mt-1 mr-2 h-10 w-10 text-blue-500 float-left" %}
```

{% endraw %}
