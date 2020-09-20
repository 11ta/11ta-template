---
title: Manage Hero Graphics, Carousels, Splits, and Video
date: 2020-09-11T17:44:03.000Z
excerpt: Manage Hero content such as full screen graphics, carousels, splits, video, and buttons
author: shane-robinson
draft: 
seo:
  title:
  description:
  image: home/6.jpg
images: # relative to /src/assets/images/
  feature:
  thumb: home/6.jpg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: # optional. Default = h-48 md:h-1/3
hero: graphic # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: h-1/2 # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
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
  imageOpacity: opacity-50 # options = opacity-25, opacity-50, opacity-75, opacity-100 (default)
  imageOpacityFilter: black # options = black or white (default) -> really depends on your background image
  carousel:
    images:
      - /assets/images/home/6.jpg
      - /assets/images/home/7.jpg
      - /assets/images/home/8.jpg
      - /assets/images/home/9.jpg
  video:
    url: /assets/video/forestfire.mp4 # local relative to site root, or full https://... if remote?
    opacityMobile: opacity-50 # options 25, 50, 75, 100 (default)
    opacityDesktop: # options md:opacity-25, md:opacity-50, md:opacity-75, md:opacity-100 (default)
tags:
  - hero
  - video
  - carousel
  - slider
  - customization
  - frontmatter
---

This system ships with default support for full width Hero content of almost any height. This page is a live example of a `{{ hero }}` hero set to `{{ heroSettings.height.mobile }}` height.

- Full screen images/graphics
- Full screen carousels/sliders
- Full screen background videos
- And full screen splits *(text one side, image the other)*

An Editor can easily manage all this via Frontmatter. There are two parts to managing Hero frontmatter:

1. hero:
2. heroSettings:

> :bulb: **NOTE:** You don't need ANY of the `hero:` or `heroSettings:` frontmatter elements if you're not using a Hero. Check any of the other .md Post files and you'll see no Hero frontmatter there. 

## 1. Frontmatter -> hero:

In the `hero:` frontmatter key you choose from **carousel, graphic, split, video**.

Based on these setting, the appropriate `/src/_includes/components/*` will be engaged. If `hero;` if left blank, no components will be loaded.

Also, if a `hero: carousel` is selected, the `/src/_includes/layouts/base.njk` file will load the [required CSS and JS for the Flickity carousel](https://flickity.metafizzy.co/).

{% wrap "text-gray-700 text-sm bg-red-100 p-2 border border-red-300 rounded-lg my-4" %}

:fire: **IMPORTANT:** Always test your Hero across desktop and mobile devices to make sure the hero height is sufficient to carry any text and button content. I'm using this page's setting as an example of a `{{ heroSettings.height.mobile }}` height `{{ hero }}` hero that looks great on desktop but has too much text/button for `{{ heroSettings.height.mobile }}` height on mobile. So in this case you may want to adjust the height to be **h-1/1** on mobile and `{{ heroSettings.height.mobile }}` on **sm:** or **md:** screens.

{% endwrap %}

## 2. Frontmatter -> heroSettings:

Here's where it gets complicated for Editors. There are a series of required frontmatter `heroSettings`. Some are shared across the different heros. Some are specific to one hero type or another. 

I've commented the `heroSettings` keys in this and the `/src/index.md` files and hopefully those comments are enough to get you on your way. Here's the current relevant frontmatter for this page:

```yaml
hero: graphic # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: h-1/2 # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
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
  imageOpacity: opacity-50 # options = opacity-25, opacity-50, opacity-75, opacity-100 (default)
  imageOpacityFilter: black # options = black or white (default) -> really depends on your background image
  carousel:
    images:
      - /assets/images/home/6.jpg
      - /assets/images/home/7.jpg
      - /assets/images/home/8.jpg
      - /assets/images/home/9.jpg
  video:
    url: /assets/video/forestfire.mp4 # local relative to site root, or full https://... if remote?
    opacityMobile: opacity-50 # options 25, 50, 75, 100 (default)
    opacityDesktop: # options md:opacity-25, md:opacity-50, md:opacity-75, md:opacity-100 (default)
```

{% wrap "text-gray-700 text-sm bg-red-100 p-2 border border-red-300 rounded-lg my-4" %}

:fire: **IMPORTANT:** When writing or modifying YAML Frontmatter it's **VERY IMPORTANT** to make sure you have the indents correct. I have [VSCode](https://code.visualstudio.com/) configured to use 2 spaces for tab. 4 spaces can mess up markdown parsing so it's very important *(if you're just getting started with programming and markdown)* to configure your code editor correctly and watch those spaces/tabs in your YAML Frontmatter.

{% endwrap %}