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
hero: video # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  headingText: Is your data lost in the forest, or the trees?
  headingTextColor: # text-gray-800 # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  subheadingText: This is some pithy text that explains why you should hire us without reading any further. Or is it farther?
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  buttonText: Contact Us... # no button generated if left blank
  buttonURL: /contact/ # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor: # leave blank to inherit from /src/_data/colors.buttonCustom.bg or buttonDefault.bg
  image: /assets/images/home/plane.jpg # image URL
  imagePosition: left # options = left, center, right
  imageOpacity: 50 # options = 25, 50, 75 (default is 100)
  imageOpacityFilter: black # options = black or white (default) -> really depends on your background image
  carousel:
    images:
      - /assets/images/home/6.jpg
      - /assets/images/home/7.jpg
      - /assets/images/home/8.jpg
      - /assets/images/home/9.jpg
  video:
    url: /assets/video/forestfire.mp4 # local relative to site root, or full https://... if remote?
    opacityMobile: 50 # options 25, 50, 75, 100 (default)
    opacityDesktop: # options 25, 50, 75, 100 (default)
---

We set out to build a starter project template for [11ty](https://11ty.dev '11ty Static Site Generator') that has [TailwindCSS](https://tailwindcss.com 'TailwindCSS Utility-First CSS Framework') and [Alpine.js](https://github.com/alpinejs/alpine 'Alpine.js : Think of it like Tailwind for JavaScript') baked in.

It turned into a text-based CMS for managing small websites with simple text configuration files in the `/src/_data` directory.

You can completely control:

- Multiple Authors in `/src/_data/authors.json`
- Colors of the NavBar, Headings, Buttons, etc. in `/src/_data/colors.js`
- Site META and defaults in `/src/_data/meta.js`
- Social Links in the Footer in `/src/_data/social.json`
- And site-wide structures like max-width and display of different content blocks in `/src/_data/structure.js`

The **Frontmatter** in files also allows you to manage:

- Heros _(like on this home page)_ of types: **carousel, graphic, video,** and **split**.
  - Actually, you can add those Hero types to **ANY** Page or Post just be usign the Frontmatter.
- Featured Images _(full-width banners at the top of the page just like in Wordpress)_.
- SEO overrides for OG and Twitter cards for Title, Description, and Images.

And there are several **Shortcodes** _(both single and paired)_ and **Filters** to allow Editors to manage:

- Multi-column content _(without writing CSS)_
- Description Lists for content like FAQs, Lists, etc.
- Wrapper for managing blocks with background images, borders, etc.
- YouTube embed that allows you to control add an iFrame title (required for accessability), width/height ratio, and set the start time in "m:ss" format so you don't have to manually count the seconds.

#### This is all in Version 1... Lots more to come!
