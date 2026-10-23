# Dodo & Co. website

The public website for Dodo & Co. pediatric sleep consulting, live at https://dodocosleep.com.

Built with [Astro](https://astro.build) and hosted on Netlify. Every push to `main` deploys automatically.

## Pages

| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| About Alexa | `src/pages/about.astro` |
| Sleep support | `src/pages/sleep-support.astro` |
| Get started (intake form) | `src/pages/get-started.astro` |
| Form thank-you | `src/pages/success.astro` |

Shared header, footer and styles live in `src/components/` and `src/styles/global.css`. Photos are in `public/img/`.

## Intake form

The Get started form uses Netlify Forms (`name="intake"`). Submissions appear in Netlify under **Forms**, and Netlify can email each one to Alexa (Site configuration > Notifications > Form submission notifications).

## Run it locally

```
npm install
npm run dev
```
