# 11TA - 11ty, TailwindCSS, & Alpine.js Template

> **Update v2.1, 221018 - It's working again!**
> Greatly simplified. Updated all pkgs and removed those no longer necessary. All original functionality remains.
> I'll be using this template for several personal sites and so will try to keep it updated with any changes and added functionality I create for those sites.

---

> **UPDATE v2.0.0 - Breaking Changes**
> In order to provide scalability and cleaner frontmatter controls in current Posts _(and upcoming Products)_ collections, the Frontmatter keys were updated which required updates to `/src/_includes/components/*.njk`, `tailwind.config.js`, and other templates.
> I apologize for the inconvenience.

---

I set out to build a starter project template for 11ty that has TailwindCSS and Alpine.js baked in.

Version 1.0.0 morphed into a deeply customizable, full featured, text-based CMS for managing small websites with easy-to-manage configuration files in the `/src/_data/` directory.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6eb38e1-d081-46ea-a4f6-4d3d36ab7036/deploy-status)](https://app.netlify.com/sites/11ta/deploys)

![Lighthouse Performance](lighthouse/lighthouse_performance.svg) ![Lighthouse Accessibility](lighthouse/lighthouse_accessibility.svg) ![Lighthouse Best Practices](lighthouse/lighthouse_best-practices.svg) ![Lighthouse SEO](lighthouse/lighthouse_seo.svg)

---

## Live Demo

**The [live demo at "11ta.netlify.app"](https://11ta.netlify.app) provides a feature list, and the evolving blog posts each highlight and provide examples of different features, shortcodes, customizations, and frontmatter controls.**

## :fire: Credit :fire:

First and foremost, I want to credit the [11ty](https://11ty.dev) community, especially those listed in the [starter projects](https://www.11ty.dev/docs/starter/)!

Specifically, the following starter projects helped me understand the power and flexibility of 11ty and from their examples I was able to extend the functionality to build this system:

- :fire: [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) by [Zach Leatherman](https://twitter.com/zachleat)
- :fire: [eastslopestudio-eleventy-starter](https://github.com/eastslopestudio/eleventy-starter) by [Ryan Scherler](https://twitter.com/ryanscherler)
- :fire: [eleventyone](https://github.com/philhawksworth/eleventyone) by [Phil Hawksworth](https://twitter.com/philhawksworth)
- :fire: [eleventy-tailwind-alpinejs-starter](https://github.com/gregwolanski/eleventy-tailwindcss-alpinejs-starter) by [Greg Wolanski](https://gregwolanski.com/)
- :fire: [jet](https://github.com/marcamos/jet) by [Marc Amos](https://twitter.com/marcamos)

## Deploy and Host at Netlify Automatically

To automatically deploy this Template to [Netlify for free hosting](https://www.netlify.com/pricing/), make sure you're logged in to your Netlify account and then simply click the <kbd>Deploy to netlify</kbd> button below.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/11ta/11ta-template"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

## Install and Deploy Manually

- Duplicate this repository by clicking <kbd>Use this template</kbd> above
- Clone the repository locally
- Run `npm install` to install dependencies
- `npm run dev` to work locally

## Planned

- "Themed" versions for Portfolios/Creatives, Agencies, Digital Gardens, etc.
- Easy add Collections: Projects, Services, Jobs, etc.
- [Snipcart](https://snipcart.com/) integration
