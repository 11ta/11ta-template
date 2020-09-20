---
title: Blockquotes - Shortcodes
date: 2020-09-05T17:44:03.000Z
excerpt: Blockquotes are easy, even in Markdown. But what if you want to style them?
author: shane-robinson
draft: 
seo:
  title:
  description:
  image: 2020/09/blockquote.jpg
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/09/blockquote.jpg
  slide:
tags:
  - blockquote
  - shortcodes
  - emoji
  - markdown
---

## Basic Markdown Blockquote

Below is a basic blockquote in Markdown.

```md
> this is a blockquote. this is a blockquote.
```

Which generates this:

> this is a blockquote. this is a blockquote.

The minimal styling is managed in `/src/assets/css/tailwind.css` which sets left padding and margins of 1rem _(16px)_ and a left border of 4px colored gray-500:

```css
blockquote {
	@apply pl-4 m-4 border-l-4 border-gray-500;
}
```

## Blockquote Paired Shortcode

With a simple `bq` shortcode, you can override the default CSS and style it however you like. For example:

{% raw %}

```js
{% bq "p-4 border-red-500 italic text-blue-500 border-t-4 bg-gray-200" %}
this is another blockquote via the `bq` paired shortcode located in `/utils/paired-shorcodes.js`.
{% endbq %}
```

{% endraw %}

Generates the customized blockquote below:

{% bq "p-4 border-red-500 italic text-blue-500 border-t-4 bg-gray-200" %}
this is another blockquote via the `bq` paired shortcode located in `/utils/paired-shorcodes.js`.
{% endbq %}

## Adding Emoji to Blockquotes _(or anywhere you want)_

Because this system uses [markdown-it-emoji](https://www.npmjs.com/package/markdown-it-emoji) we can insert Emojis anywhere by using their `:code:` as in the exmaple below:

```md
> :bulb: **NOTE:** A blockquote with a nice Emoji to draw attention.
```

Generates the following blockquote:

> :bulb: **NOTE:** A blockquote with a nice Emoji to draw attention.
