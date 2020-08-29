---
title: Featured Images
date: 2020-07-06T17:44:03.000Z
excerpt: Easily add featured images (heros) just like in Wordpress.
author: shane-robinson
seo:
  title:
  description:
  image: 2020/07/featured-image.jpg
images: # relative to /src/assets/images/
  feature: 2020/07/featured-image.jpg
  thumb: 2020/07/featured-image.jpg
  slide:
  align: object-left # object-center (default) - other options at https://tailwindcss.com/docs/object-position
tags:
  - featured-image
  - hero
---

Just like in Wordpress, it's easy to add a **Featured Image** to display at the top of the page.

> TIP: You could also use the **"hero"** Frontmatter settings, examples in the `index.md` file for all the options and features for a _video_, _graphic_, _carousel_, or _split_ hero section.

Just create an appropriate image for the Feature space above and place a relative path to it in the `images.feature` frontmatter.

For example, this page's frontmatter:

```yaml
title: Featured Images
date: 2020-07-06T17:44:03.000Z
excerpt: Easily add featured images (heros) just like in Wordpress.
author: shane-robinson
seo:
  title:
  description:
  image: 2020/07/featured-image.jpg
images: # relative to /src/assets/images/
  feature: 2020/07/featured-image.jpg
  thumb: 2020/07/featured-image.jpg
  slide:
tags:
  - featured image
  - hero
```
