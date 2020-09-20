---
title: Featured Post Images
date: 2020-09-06T17:44:03.000Z
excerpt: Easily add featured images (heros) just like in Wordpress.
author: shane-robinson
draft: 
seo:
  title:
  description:
  image: 2020/09/featured-image.jpg
images: # relative to /src/assets/images/
  feature: 2020/09/featured-image.jpg # https://source.unsplash.com/random/800x600
  thumb: 2020/09/featured-image.jpg
  align: object-left # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-64 md:h-1/3 # optional. Default = h-48 md:h-1/3
tags:
  - featured-image
  - hero
  - frontmatter
  - tailwindcss
---

Just like in Wordpress, it's easy to add a **Featured Image** to display at the top of the page.

Unlike in Wordpress, you can also easily manage the height of the Featured Image at any of the [TailwindCSS breakpoints](https://tailwindcss.com/docs/breakpoints).

> :bulb: TIP: You could also use the **"hero"** Frontmatter settings, examples in the `index.md` file for all the options and features for a _video_, _graphic_, _carousel_, or _split_ hero section.

## How to manage Featured Post Images in this system

- **Local Image**
  - Create an image in your favorite image editor.
  - Generally it's best if the image is landscape and not portrait orientation.
  - Place it wherever you like in the `/src/assets/images/` directory or sub-directories.
  - Enter the path to the image relative to `/src/assets/images/`
    - For example, if the image file is "featured-image.jpg" and you placed it in `/src/assets/images/2020/09/` then you'd enter `2020/09/featured-image.jpg` in the `images:feature:` frontmatter.
- **External Image**
  - If you'd like to use an externally hosted image _([like from Unsplash](https://unsplash.com/))_
  - Enter the full URL in the `images:feature:` frontmatter.

## Set Featured Image Height

Default image height is currently set to `h-48 md-1/3` which is [basic TailwindCSS](https://tailwindcss.com/docs/height#app) except for that custom theme height at medium and above of `md-1/3` which is set in `/tailwind.config.js`.

You can override this with any TailwindCSS height settings, plus the custom settings in `/tailwind.config.js` for any of TailwindCSS's default breakpoints.

## Set Featured Image Position

Lastly, you can set the image's position within the container by using [TailwindCCS's Object Position](https://tailwindcss.com/docs/object-position).

Default is set to `object-center` but if your image's focus area is off center, you can try `object-left` or `object-right` to see if that placement is better

For example, this page's frontmatter currently looks like this:

```yaml
# /src/posts/2020-09-06-featured-images.md
title: Featured Post Images
date: 2020-09-06T17:44:03.000Z
excerpt: Easily add featured images (heros) just like in Wordpress.
author: shane-robinson
seo:
  title:
  description:
  image: 2020/09/featured-image.jpg
images: # relative to /src/assets/images/
  feature: 2020/09/featured-image.jpg # https://source.unsplash.com/random/800x600
  thumb: 2020/09/featured-image.jpg
  align: object-left # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-64 md:h-1/3 # optional. Default = h-48 md:h-1/3
tags:
  - featured-image
  - hero
  - frontmatter
  - tailwindcss
```
