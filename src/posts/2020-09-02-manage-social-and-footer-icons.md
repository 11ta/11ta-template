---
title: Managing Social Share, Author, and Footer Icons
date: 2020-09-02T17:44:03.000Z
author: shane-robinson
excerpt: You can choose to display, or not, all the icons.
draft: 
seo:
  title:
  description:
  image: 2020/09/social.jpg
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/09/social.jpg
  slide:
tags:
  - social
  - svg
  - authors
  - structure
---

As easily as you can [manage colors](/2020/09/01/color-settings/), you can also control the display, or not, the SVG icons around the site.

> NOTE: We are a [Font Awesome Pro](https://fontawesome.com/) member and the SVGs in the `/src/assets/svg` directory are Font Awesome SVGs that have been modified to work specifically with [TailwindCSS](https://tailwindcss.com 'TailwindCSS Utility-First CSS Framework') and the customizations of this system. If you want to add your own SVGs you'll probably need to modify them and please be sure to **follow the attribution license**.

## Footer Social Icons

For example, the icons in the Footer are controlled in the `/src/_data/social.json` to allow Editors to manage without them having to work in the `/src/_data/structure.js` file where they might create some damage.

> NOTE: The JSON array in `/src/_data/social.json` doesn't look quite like this flattened JSON, but it'll be obvious how to manage it.

```js
{
	"dribbble":   "https://www.dribbble.com/",
	"github":     "https://www.github.com/",
	"instagram":  "https://www.instagram.com/",
	"linkedin":   "http://www.linkedin.com/",
	"piedpiper":  "http://www.piedpiper.com/",
	"pinterest":  "https://www.pinterest.com/",
	"rss":        "/feed.xml",
	"twitter":    "https://www.twitter.com/",
	"youtube":    "https://www.youtube.com/"
}
```

To disable a specific platform, just set it's value to either "" or `false`. _(both work)_

```js
{
	"dribbble":   "",
	"github":     "https://www.github.com/",
	"instagram":  "https://www.instagram.com/",
	"linkedin":   "http://www.linkedin.com/",
	"piedpiper":  "http://www.piedpiper.com/",
	"pinterest":  "https://www.pinterest.com/",
	"rss":        "/feed.xml/",
	"twitter":    "https://www.twitter.com/",
	"youtube":    false
}
```

## Author Social Icons

The same is true for the social links in the `/src/_data/authors.json` where you manage social links for each author.

## Adding SVG Icons to Content in Your .md Posts

The post [SVG - Shortcode](/2020/09/09/svg-shortcode/) goes into detai on how to manage all the SVG Sprites in the system and how to add them to your Post and Pages markdown content via a Shortcode.

## Post Social Share Icons

Posts details, such as this page, have "Social Share" icons built in so readers can easily share to their favorite platform. These SVGs, alond with the native share code for each platform are managed in the `/src/_includes/components/socialshare.njk` file.

And in the `/src/_data/structure.js` file you can globally disable Footer and Post Share icons:

```js
	g_showFooterSocialIcons: true,
	g_showSocialShareIcons: true,
```

Also in the `/src/_data/structure.js` file you can globally disable the Author link in Post List and Detail views:

```js
	g_showAuthors: true,
```

> NOTE: We don't support Facebook and [deleted our Profiles and Pages](https://deletefacebook.com/) back in 2017. If you want FB support you should be able to easily add it given all the examples across the `/src/_data/*` files and templates.
