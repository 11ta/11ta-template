---
title: Blockquotes - Shortcodes
date: 2020-07-05T17:44:03.000Z
excerpt: Blockquotes are easy, even in Markdown. But what if you want to style them?
author: shane-robinson
seo:
  title:
  description:
  image:
tags:
  - blockquote
  - shortcodes
images: # relative to /src/assets/images/
  feature: 2020/07/five-feature.jpg
  thumb: 2020/07/five-thumb.jpg
  slide: 2020/07/five-slide.jpg
---

Below is a basic blockquote in Markdown.

> this is a blockquote. this is a blockquote.

```js
> this is a blockquote. this is a blockquote.
```

The minimal styling is managed in `/src/assets/css/tailwind.css`:

```css
blockquote {
	@apply pl-4 mx-4 my-4 border-l-4 border-gray-500;
}
```

With a simple `bq` shortcode, you can override the default CSS and style it however you like:

{% bq "border-red-500 italic text-blue-500 border-t-4 bg-gray-200" %}
this is another blockquote via the `bq` shortcode.
{% endbq %}

{% raw %}

```js
{% bq "border-red-500 italic text-blue-500 border-t-4 bg-gray-200" %}
this is another blockquote via the `bq` shortcode.
{% endbq %}
```

{% endraw %}

> :bulb: **NOTE:** I didn't have to specify `border-l-4` in the shortcode because it is already specified in the default style. You would only specify it if you wanted to change it's thickness.
