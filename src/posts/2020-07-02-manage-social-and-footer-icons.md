---
title: Managing Social Share, Author, and Footer Icons
date: 2020-07-02T17:44:03.000Z
author: shane-robinson
excerpt: You can choose to display, or not, all the icons.
seo:
  title:
  description:
  image: 2020/07/social.jpg
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/07/social.jpg
  slide:
tags:
  - social
  - svg
  - authors
  - structure
---

As easily as you can manage colors, you can also control the display, or not, of SVG icons around the site.

> We are a [Font Awesome Pro](https://fontawesome.com/) member and the SVGs in the `/src/assets/svg` directory are Font Awesome SVGs that have been modified to work specifically with [TailwindCSS](https://tailwindcss.com 'TailwindCSS Utility-First CSS Framework') and the customizations of this system. If you want to add your own SVGs you'll probably need to modify them and please be sure to follow the attribution license.

For example, the icons in the Footer are controled in the `/src/_data/social.json` to allow Editors to manage without them having to work in the `_data/structure.js` file where they might create some damage.

```js
{
	"dribbble": "https://www.dribbble.com/",
	"github": "https://www.github.com/",
	"instagram": "https://www.instagram.com/",
	"linkedin": "http://www.linkedin.com/",
	"pinterest": "https://www.pinterest.com/",
	"twitter": "https://www.twitter.com/",
	"youtube": "https://www.youtube.com/"
}
```

To disable a specific platform, just set it's value to either "" or `false`. _(both work)_

```js
{
	"dribbble": "",
	"github": "https://www.github.com/",
	"instagram": "https://www.instagram.com/",
	"linkedin": "http://www.linkedin.com/",
	"pinterest": "https://www.pinterest.com/",
	"twitter": "https://www.twitter.com/",
	"youtube": false
}
```

The same is true for the social links in the `/src/_data/authors.json` where you manage social links for each author.

And in the `/src/_data/structure.js` file you can globally disable Footer and Post Share icons:

```js
	g_showFooterSocialIcons: true,
	g_showSocialShareIcons: true,
```

Also in the `/src/_data/structure.js` file you can globally disable the Author link in Post List and Detail views:

```js
	g_showAuthors: true,
```

> NOTE: We don't support Facebook and [deleted our Profiles and Pages](https://deletefacebook.com/) back in 2017. If you want FB support you should be able to easily add it given all the examples across the `_data` files and templates.
