// Static site generator: node tools/build.mjs  (or `npm run build`)
// Writes every page plus sitemap.xml, robots.txt, site.webmanifest and 404.html.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, nav } from './site.config.mjs';
import { pages } from './pages.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const P = site.person;
const today = new Date().toISOString().slice(0, 10);

const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: P.name,
    jobTitle: P.jobTitle,
    url: `${site.url}/`,
    image: `${site.url}${site.ogImage}`,
    email: P.email,
    telephone: P.phone,
    alumniOf: { '@type': 'CollegeOrUniversity', name: P.alumniOf, url: 'https://www.iitkgp.ac.in/' },
    worksFor: { '@type': 'Organization', name: 'BernAI Lab' },
    knowsAbout: ['Web development', 'React', 'Node.js', 'NestJS', 'React Native', 'SEO'],
    sameAs: [P.github, P.linkedin],
};
const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: `${site.name} – Web Developer`,
    inLanguage: 'en-IN',
    publisher: { '@id': `${site.url}/#person` },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;

function breadcrumb(page) {
    if (page.path === '/') return null;
    const name = nav.find((n) => n.href === page.path)?.label ?? page.title;
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
            { '@type': 'ListItem', position: 2, name, item: `${site.url}${page.path}` },
        ],
    };
}

function header(current) {
    const links = nav
        .map((n) => `<li><a href="${n.href}" class="nav-link"${n.href === current ? ' aria-current="page"' : ''}>${n.label}</a></li>`)
        .join('\n                ');
    return `<header class="site-header">
    <nav class="navbar" aria-label="Main navigation">
        <div class="max-width">
            <div class="logo"><a href="/" aria-label="${site.name} – home">Vinod<span>.</span></a></div>
            <ul class="menu" id="primary-menu">
                ${links}
                <li><a href="/contact/" class="nav-cta">Hire me</a></li>
            </ul>
            <button class="menu-btn" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-menu">
                <i class="fas fa-bars" aria-hidden="true"></i>
            </button>
        </div>
    </nav>
</header>`;
}

function footer() {
    return `<footer class="site-footer">
    <div class="max-width footer-grid">
        <div>
            <div class="footer-brand">Vinod<span>.</span></div>
            <p>Full-stack developer and IIT Kharagpur alumnus building websites and web apps for businesses.</p>
        </div>
        <nav aria-label="Footer navigation">
            <h2>Pages</h2>
            <ul>${nav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}</ul>
        </nav>
        <div>
            <h2>Contact</h2>
            <ul>
                <li><a href="mailto:${P.email}">${P.email}</a></li>
                <li><a href="tel:${P.phone}">6309387321</a></li>
                <li><a href="${P.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="${P.github}" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
        </div>
    </div>
    <p class="copyright">© ${new Date().getFullYear()} ${site.name}. IIT Kharagpur alumnus.</p>
</footer>`;
}

function render(page) {
    const canonical = `${site.url}${page.path}`;
    const og = `${site.url}${site.ogImage}`;
    const robots = page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1';
    const graph = page.noindex ? [] : [personLd, websiteLd, breadcrumb(page), ...(page.jsonLd ?? [])].filter(Boolean);
    const scripts = ['/src/scripts/main.js', ...(page.scripts ?? [])];

    return `<!DOCTYPE html>
<html lang="en-IN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}">
    <meta name="robots" content="${robots}">
    <meta name="author" content="${site.name}">
    <meta name="theme-color" content="${site.themeColor}">
    <link rel="canonical" href="${canonical}">

    <meta property="og:type" content="${page.path === '/' ? 'website' : 'article'}">
    <meta property="og:site_name" content="${site.name}">
    <meta property="og:locale" content="${site.locale}">
    <meta property="og:title" content="${esc(page.title)}">
    <meta property="og:description" content="${esc(page.description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${og}">
    <meta property="og:image:alt" content="Jatoth Vinod, IIT Kharagpur alumnus and full-stack developer">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(page.title)}">
    <meta name="twitter:description" content="${esc(page.description)}">
    <meta name="twitter:image" content="${og}">

    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="/src/styles/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    ${graph.map(ld).join('\n    ')}
</head>
<body class="${page.bodyClass ?? ''}">
    <a class="skip-link" href="#main">Skip to content</a>
    <button class="scroll-up-btn" type="button" aria-label="Back to top"><i class="fas fa-angle-up" aria-hidden="true"></i></button>
    ${header(page.path)}
    <main id="main">${page.body}
    </main>
    ${footer()}
${scripts.map((s) => `    <script type="module" src="${s}"></script>`).join('\n')}
</body>
</html>
`;
}

async function out(rel, content) {
    const file = join(root, rel);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, content, 'utf8');
    console.log('wrote', rel);
}

const notFound = {
    path: '/404.html',
    file: '404.html',
    title: 'Page not found | Jatoth Vinod',
    description: 'The page you are looking for does not exist.',
    bodyClass: 'page-inner',
    noindex: true,
    body: `
<section class="not-found">
    <div class="max-width">
        <h1>404</h1>
        <p>Sorry, that page does not exist.</p>
        <a class="btn" href="/">Back to home</a>
    </div>
</section>`,
};

for (const page of [...pages, notFound]) await out(page.file, render(page));

await out(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map((p) => `  <url>\n    <loc>${site.url}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`)
    .join('\n')}
</urlset>
`,
);
await out('robots.txt', `User-agent: *\nAllow: /\nDisallow: /archive/\n\nSitemap: ${site.url}/sitemap.xml\n`);
await out(
    'site.webmanifest',
    JSON.stringify(
        { name: `${site.name} – Web Developer`, short_name: site.name, start_url: '/', display: 'standalone', background_color: '#ffffff', theme_color: site.themeColor, icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }] },
        null,
        2,
    ),
);
await out(
    'favicon.svg',
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0b1b2e"/><text x="32" y="45" font-family="Arial,Helvetica,sans-serif" font-size="40" font-weight="700" text-anchor="middle" fill="#fff">V<tspan fill="#4ade80">.</tspan></text></svg>\n`,
);
