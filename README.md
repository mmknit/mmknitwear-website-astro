# M.M. Knitwear Ltd. — Website (Astro)

A complete mirror of [www.mmknitwear.com](https://www.mmknitwear.com) rebuilt in [Astro](https://astro.build).

The original static site (a WordPress export) lives in `mmknitwear.com-html/` (git-ignored, reference only). All pages were converted to Astro components and layouts while keeping the original markup, styles, and assets.

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
