---
title: Hello World
layout: base
eleventyNavigation:
  key: main
  title: Welcome # as it will appear in the nav
  order: 1 # order to display in the nav
seo: # uncomment 'seo' and then any elements to use them
  title:
  description:
hero: carousel # options: carousel, graphic, video, split (text & iamge)
heroSettings:
  headingText: Is your data lost in the forest, or the trees?
  headingTextColor: # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  subheadingText: This is some pithy text that explains why you should hire us without reading any farther. Or is it further?
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  buttonText: Hello World # no button generated if left blank
  buttonURL: # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data.colors.js
  buttonBgColor: # leave blank to inherit from /src/_data.colors.js
  image: /assets/images/home/plane.jpg # image URL
  imagePosition: left # options = left, center, right
  imageOpacity: 50 # options = 25, 50, 75 (default is 100)
  imageOpacityFilter: black # options = white, black (default is white) -> really depends on your background image
  height:
    mobile: 9/10 # options = 1/1 (default = full screen), 1/2, 1/3, 3/4, 9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  carousel:
    images:
      - /assets/images/home/1.jpg
      - /assets/images/home/2.jpg
      - /assets/images/home/3.jpg
  video: # just a video URL?
---

This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text.

This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text.

This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text. This is a bunch of text.
