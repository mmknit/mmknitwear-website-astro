# M.M. Knitwear Ltd. — Website (Astro)

## Description

A complete mirror of [www.mmknitwear.com](https://www.mmknitwear.com) rebuilt in [Astro](https://astro.build) with a fresh cyan/teal brand palette, an image-only hero slider, and React components for the mobile nav and hero.

The original static site (a WordPress export) lives in `mmknitwear.com-html/` (git-ignored, reference only). All pages were converted to Astro components and layouts while keeping the original markup, styles, and assets.

## About

[M.M. Knitwear Ltd.](https://www.mmknitwear.com/about-us/) is a 100% export-oriented knit composite manufacturer in Bangladesh. Since 2001, it has been producing high-quality knitted apparel for leading international brands from a vertically integrated knit composite facility in Konabari, Gazipur — covering yarn dyeing, circular knitting, sewing, printing, and embroidery in-house, with a daily output of more than 200,000 garments.

## Pages

- `/` — Home
- `/about-us/`
- `/compliance/`
- `/projects/`
- `/portfolio/`
- `/contact/`
- `/newspaper/`
- `/out-projects/`

## Tech

- Astro 7 (static output)
- React components (mobile nav, hero slider)
- Original theme assets (CSS, JS, fonts, images) served from `public/`
- Deployed to GitHub Pages (gh-pages branch)

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # build to dist/
npm run preview  # preview the production build
```

## Deployment

```sh
npm run build
# contents of dist/ are pushed to the gh-pages branch
```
