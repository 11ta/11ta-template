---
title: Full Frontmatter Example
date: 2020-09-07T17:44:03.000Z
excerpt: There is a LOT of control options in the frontmatter.
author: shane-robinson
draft: 
seo:
  title:
  description:
  image: 2020/09/index-frontmatter.jpg
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/09/index-frontmatter.jpg
  slide:
tags:
  - frontmatter
  - structure
  - hero
  - featured-image
---

Currently, the frontmatter in the `index.md` file houses all the values and controls currently available...even if they aren't used on the home page.

Any of the frontmatter elements used on the home page can be used on ANY Page or Post in this system.

As of this posting, the `index.md` frontmatter looks like this:

```yaml
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
    mobile: # options = 1/1 (default = full screen), 1/2, 1/3, 3/4, 9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  headingText: Is your data lost in the forest, or the trees?
  headingTextColor: # text-gray-800 # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  subheadingText: This is some pithy text that explains why you should hire us without reading any further. Or is it farther?
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  buttonText: Contact Us... # no button generated if left blank
  buttonURL: /contact/ # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
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
```
