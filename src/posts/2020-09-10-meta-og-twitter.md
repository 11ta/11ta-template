---
title: Site META, OG, and Twitter Cards
date: 2020-09-10T17:44:03.000Z
excerpt: Manage Site META data, open graph, and Twitter Card content at the Post and Page level
author: shane-robinson
draft: 
seo:
  title:
  description:
  image: 2020/09/twitter-card-image.png
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/09/twitter-card-image.png
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: # optional. Default = h-48 md:h-1/3
tags:
  - meta
  - open-graph
  - twitter
  - structure
  - customization
  - frontmatter
---

This system ships with the ability to manage full site META, open graph, and Twitter card data and images.

## Managing Top Level Data

Using the `/src/_data/meta.js` file, you can set top level site data, fallback data, and misc data such as Author and Addres information.

One of the first things you'll want to do upon installing and gonfiguring this 11ty starter will be to change the values in this file to your default site data.

```js
module.exports = {
	siteURL: process.env.URL || 'http://localhost:8080',
	siteName: "Shane Robinson's 11ty | TailwindCSS | Alpine.js Template",
	siteDescription:
		'A highly configurable 11ty template to quickly spin up a fully functional website with TailwindCSS and Alpine.js baked in.',
	siteImage: '/assets/images/site/default.png',
	lang: 'en',
	locale: 'en_us',
	authorName: 'Shane Robinson',
	authorURL: 'shane-robinson',
	authorEmail: 'shane@shanerobinson.com',
	twitterSite: '@shanerobinson',
	twitterCreator: '@shanerobinson',
	address: {
		street: '123 Main Street',
		city: 'Anytown',
		state: 'KZ',
		zip: '54321',
		phoneDisplay: '+1 (123) 456-7890',
		phoneCall: '+11234567890',
		email: 'hello@domain.com',
	},
}
```

## Managing META and SEO at the Page and Post Level

Using Frontmatter in the Posts and Pages .md files, you can override the default values setup in the `/src/_data/meta.js` file above.

Take for example this very page's Frontmatter:

```yaml
---
title: Site META, OG, and Twitter Cards
date: 2020-09-10T17:44:03.000Z
excerpt: Manage Site META data, open graph, and Twitter Card content at the Post and Page level
author: shane-robinson
seo:
  title:
  description:
  image: 2020/09/twitter-card-image.png
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/09/twitter-card-image.png
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: # optional. Default = h-48 md:h-1/3
tags:
  - meta
  - open-graph
  - twitter
  - structure
  - customization
  - frontmatter
---

```

The `seo: image: 2020/09/twitter-card-image.png` will be used as the Twitter card and Open Graph image if you view the HTML source of this page.

You can also see that same image is used for the `images: thumb:`. I thought about having a single image but thought some editors may want to have separate control over individual images used for OG and Twitter and the thumbnail displayed on the Posts Listing and Tags Listing pages.

> NOTE: There's an entire post about [managing Feature Post Images](/2020/09/06/featured-post-images/) which you can see if left blank in this Post.

## Fallback Data

Take a look at the `/src/_includes/head.njk` file and you'll see how the HTML HEAD content is generated based on what data is available.

For example, in a Post's Frontmatter, if the Editor does NOT provide `seo: title:` content, then the `og:description` looks for the frontmatter `excerpt` value and if that doesn't exist then it finally falls back to the `meta.siteDescription` in the `/src/_data/meta.js` file.

Here's the OG and Twitter card snippets from the `/src/_includes/partials/head.njk` file:

{% raw %}

```html
{#- Open Graph #}
<meta property="og:site_name" content="{{ meta.title }}" />
<meta
	property="og:title"
	content="{{ seo.title or title }} | {{ meta.siteName }}"
/>
<meta
	property="og:description"
	content="{{ seo.description or excerpt or meta.siteDescription }}"
/>
<meta property="og:url" content="{{ absolutePageUrl }}" />
<meta property="og:locale" content="{{ meta.locale }}" />
<meta
	property="og:image"
	content="{{ ogImage | url | absoluteUrl(build.url) }}"
/>
{#- Twitter Card #}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="{{ meta.twitterSite }}" />
<meta name="twitter:creator" content="{{ meta.twitterCreator }}" />
<meta
	name="twitter:title"
	content="{{ seo.title or title }} | {{ meta.siteName }}"
/>
<meta
	name="twitter:description"
	content="{{ seo.description or excerpt or meta.siteDescription }}"
/>
<meta
	name="twitter:image"
	content="{{ ogImage | url | absoluteUrl(build.url) }}"
/>
```

{% endraw %}

> NOTE: There's probably no reason to have a separate `/src/_includes/partials/head.njk` file. Its contents could just as easily live in the `/src/_includes/layouts/base.njk` file. But it is easier and cleaner to work in separate files... Same with the `footer.njk` file. It could just be inserted into the `base.njk` file. I may combine them in the future?
