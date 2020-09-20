---
title: YouTube Video Embed
date: 2020-09-08T17:44:03.000Z
excerpt: Easily embed YouTube videos in your markdown posts.
author: shane-robinson
draft: 
seo:
  title:
  description:
  image: 2020/09/youtube-embed.jpg
images: # relative to /src/assets/images/
  feature:
  thumb: 2020/09/youtube-embed.jpg
  align: object-left # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-64 md:h-1/3 # optional. Default = h-48 md:h-1/3
tags:
  - youtube
  - video
  - embed
  - shortcodes
---

This system ships with a custom YouTube Embed shortcode that makes it easy to embed as many videos in your markdown posts/pages as you like.

## Features

- Only requires the YouTube ID _(with default fall back)_.
- Allows you to set "Title" which is required for Accessibility _(with default fall back to "YouTube Video")_.
- Allows you to set custom ratio to display older videos correctly _(with default fall back to 16:9)_.
- Allows you to set the clip start time in "mm:ss" format _(optional)_.

## Usage

Find the YouTube video you want to embed and grab the video ID. In the following example the video ID is `oHg5SJYRHA0`.

https://www.youtube.com/watch?v=oHg5SJYRHA0

We put the video ID in the first attribute.

Title in the second.

Also, in this particular example, the video is older and is not in the 16:9 format ratio. So we'll take advantage of setting a custom ratio in the last attribute. I arrived at "8:6" by checking the size of the video's embed, which is 1217 x 913, which divides to 1.33...as does 8/6.

And we can leave the fourth attribure, `start time` completely off because we want the video to start at the beginning. If we wanted it to start at 1:30 we would simple put "1:30" in the third attribute.

> NOTE: If you want the video to display at regular 16:9 ratio and start at the beginning, you don't even need to provide the empty third and fouth attributes. And if you just wanted the accessible Title to be the default "YouTube Video", you wouldn't even need the second attribute.

{% raw %}

```liquid
{% youtube "oHg5SJYRHA0", "Fun Title Here", "8:6" %}
```

{% endraw %}

{% youtube "oHg5SJYRHA0", "Fun Title Here", "8:6" %}
