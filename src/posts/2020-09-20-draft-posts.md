---
title: v1.1.0 Brings Draft Posts
date: 2020-09-20T17:44:03.000Z
excerpt: Not yet native in 11ty, creating draft posts is easy.
author: shane-robinson
draft: false
seo:
  title:
  description:
  image: 2020/09/draft.png
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/09/draft.png
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: # optional. Default = h-48 md:h-1/3
tags:
  - structure
  - customization
  - frontmatter
---

After quietly launching v1.0.0 yesterday _(Saturday, Sep. 19, 2020)_ I was reorganizing my TODO list on this project and saw the **"Someday: Drafts"** item.

Only intending to do a bit of searching for those who may have already tackled "drafts" in 11ty, I quickly realized I could leverage [11ty's Collections](https://www.11ty.dev/docs/collections/) and [environment variables](https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables) in a simple conditional using [custom filtering in the .eleventy.js config file](https://www.11ty.dev/docs/collections/#advanced-custom-filtering-and-sorting).

 {% wrap "my-4 border border-red-300 bg-red-100 rounded-lg" %}

 **NOTE:** I'm still interested in refactoring this conditional into a more elegant, less repetitive solution. I've found the [optional chaining (?.) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and it seems exactly what I want to do... But I haven't yet figured out how to implement it within the `return` part of the `.addCollection` function. 
 
 If you're reading this and you know how, please [ping me on Twitter](https://twitter.com/shanerobinson).

{% endwrap %}

```js
/** .eleventy.js 
 * 
 * Collections
 * ============================
 *
 * POST Collection set so we can check status of "draft:" frontmatter.
 * If set "true" then post will NOT be processed in PRODUCTION env.
 * If "false" or NULL it will be published in PRODUCTION.
 * Every Post will ALWAYS be published in DEVELOPMENT so you can preview locally.
 */
eleventyConfig.addCollection('post', (collection) => {
  if (process.env.ELEVENTY_ENV !== 'production')
    return [...collection.getFilteredByGlob('./src/posts/*.md')]
  else
    return [...collection.getFilteredByGlob('./src/posts/*.md')]
      .filter((post) => !post.data.draft)
})
```

Then just add a `draft: true/false` key/value to the Post Frontmatter:

- If `draft: true` the Post **will not** be processed by 11ty in a `production` environment.
- The Post will ALWAYS be processed by 11ty if:
  - `draft: false`
  - `draft: `
  - Or if `draft:` frontmatter is completely omitted...as in already published Posts.

Once again... Something I thought was going to be difficult and/or frustrating to figure out was a breeze in 11ty!