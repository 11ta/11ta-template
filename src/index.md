---
# This is a full listing of available Frontmatter options, available for any content (.md) file.
title: Let's talk about static sites!
layout: page
excerpt: # used for page excerpts and META (will be overwritten if SEO used below)
author: shane-robinson # only displayed on Post lists and detail views. Defaults to _data/meta.authorURL
eleventyNavigation: # Required if want to display in Main Nav Bar
  key: main # "main" is required
  title: Welcome # as it will appear in the nav
  order: 1 # order to display in the nav (index = 1)
seo: # SEO values are used for OG and will overwrite 'title' and 'excerpt' above
  title:
  description:
  image: # used for OG:image and Twitter:image. Overrides default set in _data/meta.siteImage
hero: graphic # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  bg:
    color: # default bg-black
    image: home/plane.jpg # relative to /assets/images/
    imagePosition: # options = bg-center (default), bg-left, bg-right
    video: pixabay-john-macdougall.mp4 # local relative /assets/video/, or full https://... if remote?
    opacityMobile: opacity-50 # options opacity-n, 5, 10, 15, 20, 25, 50, 75, 100 (default)
    opacityDesktop: opacity-75 # Leave blank to inherit opacityMobile, use same options as opacityMobile
  headingText: Is your data lost in the forest,<br>or the trees?
  headingTextColor: # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  headingTextCase: # default = as typed - options: uppercase, lowercase, capitalize
  subheadingText: This is some pithy text that explains why you should hire us without reading any further... Or is it farther?
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  buttonText: Contact Us... # no button generated if left blank
  buttonURL: /contact/ # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor: # leave blank to inherit from /src/_data/colors.buttonCustom.bg or buttonDefault.bg
  buttonBgHover: # leave blank to inherit from /src/_data/colors.buttonCustom.bgHover or buttonDefault.bgHover
  buttonBorder: # leave blank to inherit from /src/_data/colors.buttonCustom.border or buttonDefault.border
  carousel:
    images:
      - home/6.jpg
      - home/7.jpg
      - home/8.jpg
      - home/9.jpg
---

We set out to build a starter project template for [11ty](https://11ty.dev '11ty Static Site Generator') that has [TailwindCSS](https://tailwindcss.com 'TailwindCSS Utility-First CSS Framework') and [Alpine.js](https://github.com/alpinejs/alpine 'Alpine.js : Think of it like Tailwind for JavaScript') baked in.

Version 1.0.0 morphed into a fully-configurable text-based CMS for managing small websites with easy-to-manage configuration files in the `/src/_data` directory.

{% wrap "mt-4 bg-indigo-100 border border-indigo-300 text-lg italic rounded-full text-center" %}

**[START HERE:](/blog/) The [Blog Posts](/blog/) cover the main features of the system.**

{% endwrap %}

## Install and Deploy

To automatically deploy this Template to [Netlify for free hosting](https://www.netlify.com/pricing/), make sure you're logged in to your Netlify account and then simply click the `Deploy to netlify` button below.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/11ta/11ta-template"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

**Want to install and develop locally?** Hop over to the [GitHub repo](https://github.com/11ta/11ta-template/) and follow the instructions in the README.

{% wrap "border-t border-b border-indigo-300 mt-4 "%}

|                            |                                                                                                                                                           |
| :------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Current Deploy Status:** | [![Netlify Status](https://api.netlify.com/api/v1/badges/e6eb38e1-d081-46ea-a4f6-4d3d36ab7036/deploy-status)](https://app.netlify.com/sites/11ta/deploys) |

{% endwrap %}

## :fire: Credit :fire:

First and foremost, I want to credit the [11ty](https://11ty.dev) community, especially those listed in the [starter projects](https://www.11ty.dev/docs/starter/)!

Specifically, the following starter projects helped me understand the power and flexibility of 11ty and from their examples I was able to extend the functionality to build this system:

- :fire: [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) by [Zach Leatherman](https://twitter.com/zachleat)
- :fire: [eastslopestudio-eleventy-starter](https://github.com/eastslopestudio/eleventy-starter) by [Ryan Scherler](https://twitter.com/ryanscherler)
- :fire: [eleventyone](https://github.com/philhawksworth/eleventyone) by [Phil Hawksworth](https://twitter.com/philhawksworth)
- :fire: [eleventy-tailwind-alpinejs-starter](https://github.com/gregwolanski/eleventy-tailwindcss-alpinejs-starter) by [Greg Wolanski](https://gregwolanski.com/)
- :fire: [jet](https://github.com/marcamos/jet) by [Marc Amos](https://twitter.com/marcamos)

## Features

In addition to the Structural, Color, and Frontmatter contols listed below, the system also has the following features baked in:

- **SIAB** _(site in a box)_ ... Update the site settings in `/src/_data/meta.js`, content on the `index.md` and `about.md` pages, replace the `/src/posts/*.md` files with your own content and your new site is fully functional and ready to publish!
- **100 Lighthouse scores** across the site's Pages and Posts (_not just on pages with a little text and no images_ :wink:).
- ATOM feed at [/feed.xml](/feed.xml).
- Inlined CSS for the [Prism Okaidia](https://prismjs.com/) syntax highlight theme.
- Webpack to bundle up [Alpine.js](https://github.com/alpinejs/alpine) and any custom JS you want to include.
- Purged CSS and Minified source on production builds.
- [Custom 404](/asdf) which lists 10 most recent Posts.
- Contact form automagically works if [hosted at Netlify](https://docs.netlify.com/forms/setup/).
- ...other things I'm probably forgetting but will add when I think of them.

## Structural and Color Controls

You can completely control:

- Multiple Authors in `/src/_data/authors.json`.
- FOUR native [Posts List](/blog/) and [Tags List](/tags/frontmatter/) layout in the `src/_data/structures.js` file via, `postListStyle:` and `tagListStyle:` keys.
- Colors of the NavBar, Headings, Buttons, etc. in `/src/_data/colors.js`.
- Site META and defaults in `/src/_data/meta.js`.
- Social Links icons in the Footer in `/src/_data/social.json`.
- Social Share icons in the `/src/_includes/components/socialshare.njk` file.
- And site-wide structures like max-width and display toggles of different content blocks in `/src/_data/structure.js`.

## Frontmatter Controls

The **Frontmatter** in your .md Posts and Pages files also allows you to manage:

- [Heros](/2020/09/11/manage-hero-graphics-carousels-splits-and-video/) _(like on this home page)_ of types: **carousel, graphic, video,** and **split**. _(Actually, you can add those Hero types to **ANY** Page or Post just be using the Frontmatter.)_
- [Featured Images](/2020/09/06/featured-post-images/) _(full-width banners at the top of the page just like in Wordpress)_.
- [SEO overrides for OG and Twitter cards](/2020/09/10/site-meta-og-and-twitter-cards/) for Title, Description, and Images.

## Native Shortcodes for Content Controls

There are several **Shortcodes** _(both single and paired)_ and **Filters** to allow Editors to manage:

- [Multi-column content](/2020/09/03/wrap-and-columns-shortcodes/) _(without writing CSS)_.
- [SVG Sprites](/2020/09/09/svg-shortcode/) controls across the system and for inserting in .md Posts and Pages files.
- Custom Date display formats at the point of use.
- [Description Lists](/2020/09/04/description-list-shortcodes/) for content like FAQs, Lists, etc.
- [Wrapper](/2020/09/03/wrap-and-columns-shortcodes/) for managing blocks with background images, borders, etc.
- [YouTube embed shortcode](/2020/09/08/youtube-video-embed/) that allows you to control and add an iFrame title _(required for accessability and Lighthouse scores)_, width/height ratio, and set the start time in "m:ss" format so you don't have to manually count the seconds.

## Planned

- Search
- More Structural controls for Index Page
- Easy add Collections: Projects, Services, Jobs, etc.
- "Themed" versions for Portfolios/Creatives, Agencies, Digital Gardens, etc.
- Fully documented migration of Wordpress to 11ty
- [Snipcart](https://snipcart.com/) integration
