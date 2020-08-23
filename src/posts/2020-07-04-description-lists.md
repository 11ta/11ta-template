---
title: Description List - Shortcodes
date: 2020-07-04T17:44:03.000Z
author: Shane Robinson
excerpt: A custom 11ty shortcode allows you to create great looking and function Description Lists.
seo: 
  title: 
  description: 
  image: 
tags:
  - shortcodes
  - description list
---

This post uses shortcode `wrap` and **Description List** shortcodes `dl` *(description list)*, `dt` *(description term)*, and `dd` *(description description)*.

The `wrap` shortcode is optional and is used to wrap the entire list in a rounded border with a gray-200 background.

{% wrap "px-2 mt-8 mb-12 rounded-lg pb-2 border border-gray-300 bg-gray-200" %}

## Frequently asked questions

{% dl %}

{% dt %}
How can I create Definition Lists in Markdown?
{% enddt %}
{% dd "text-gray-600" %}
Use my cool shortcodes described above and in the code example below.
{% enddd %}

{% dt %}
How many List items can I have?
{% enddt %}
{% dd "text-gray-600" %}
As many as you want. Just keep adding more `dt` and `dd` blocks like this one.
{% enddd %}

{% dt %}
Is it possible to have background colors, borders, etc.?
{% enddt %}
{% dd "text-gray-600" %}
Yep. Just use the `wrap` shortcode, like in this example, and style it however you want.
{% enddd %}

{% enddl %}

{% endwrap %}

{% raw %}

```js
{% wrap "px-2 mt-8 mb-12 rounded-lg pb-2 border border-gray-300 bg-gray-200" %}

  ## Frequently asked questions

  {% dl %}

    {% dt %}
      How can I create Definition Lists in Markdown?
    {% enddt %}
    {% dd "text-gray-600" %}
      Use my cool shortcodes described above and in the code example below.
    {% enddd %}

    {% dt %}
      How many List items can I have?
    {% enddt %}
    {% dd "text-gray-600" %}
      As many as you want. Just keep adding more `dt` and `dd` blocks like this one.
    {% enddd %}

    {% dt %}
      Is it possible to have background colors, borders, etc.?
    {% enddt %}
    {% dd "text-gray-600" %}
      Yep. Just use the `wrap` shortcode, like in this example, and style it however you want.
    {% enddd %}

  {% enddl %}

{% endwrap %}
```

{% endraw %}
