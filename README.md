# Jatoth Vinod – Website

Multi-page static website for Jatoth Vinod (IIT Kharagpur alumnus, full-stack developer), built to attract clients for website, web app and mobile app work.

## Pages (clean URLs)

| URL | Purpose |
|---|---|
| `/` | Home: IIT brand hero, services preview, live work, CTA |
| `/about/` | IIT Kharagpur background, experience, skills |
| `/services/` | Services, process, FAQ |
| `/projects/` | Live products and other projects |
| `/contact/` | Phone, WhatsApp, email, enquiry form |
| `/404.html` | Not-found page (noindex) |

## Folder structure

```
├── index.html, about/, services/, projects/, contact/, 404.html   (generated)
├── sitemap.xml, robots.txt, site.webmanifest, favicon.svg          (generated)
├── tools/
│   ├── site.config.mjs   # domain, contact details, nav, project data
│   ├── pages.mjs         # page content
│   └── build.mjs         # generates all pages + SEO files
├── src/
│   ├── assets/           # images, resume PDF
│   ├── scripts/          # main.js, contact-form.js, modules/
│   └── styles/           # main.css, base/, components/, sections/
└── archive/              # old unused files
```

## Workflow

Edit `tools/*.mjs` (not the generated HTML), then:

```
npm run build   # regenerate pages, sitemap, robots
npm start       # build + serve on http://localhost:3000
```

## Before going live

1. Set the real domain in `tools/site.config.mjs` (`site.url`), then `npm run build`.
2. Replace the social-share image (`site.ogImage`) with a 1200×630 branded image.
3. Deploy at the domain root (Cloudflare Pages, Netlify, GitHub Pages with custom domain).
4. Add the site to Google Search Console and submit `/sitemap.xml`.
