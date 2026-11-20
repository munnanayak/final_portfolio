// Page content. Each page: path, title, description, body, optional bodyClass / jsonLd.
import { site, projects, otherProjects } from './site.config.mjs';

const P = site.person;
const img = (f) => `/src/assets/images/projects/${f}`;
const mailto = `mailto:${P.email}?subject=Website%20enquiry`;
const wa = `https://wa.me/${P.whatsapp}?text=${encodeURIComponent("Hi Vinod, I'd like to discuss a website/app project.")}`;

const services = [
    { icon: 'fa-globe', name: 'Business Websites', text: 'Fast, mobile-first websites for businesses, clinics, institutes and startups, written for search engines from day one.' },
    { icon: 'fa-laptop-code', name: 'Web Applications', text: 'Dashboards, portals, booking and admin tools built with React, Node.js and NestJS, backed by SQL or Firebase.' },
    { icon: 'fa-shopping-cart', name: 'Online Stores & Ordering', text: 'Catalogues, QR ordering and POS systems, as in EasiDine, with inventory, orders and role-based access.' },
    { icon: 'fa-mobile-alt', name: 'Mobile Apps', text: 'Cross-platform Android and iOS apps with React Native and Expo, from prototype to store release.' },
    { icon: 'fa-search', name: 'SEO & Performance', text: 'Technical SEO, structured data, sitemaps, Core Web Vitals and Google Search Console setup so customers can find you.' },
    { icon: 'fa-robot', name: 'AI & Automation', text: 'Automated emails, Telegram notifications and AI assistants that remove repetitive work from your business.' },
];

const serviceCard = (s) => `
    <article class="service-card">
        <i class="fas ${s.icon}" aria-hidden="true"></i>
        <h3>${s.name}</h3>
        <p>${s.text}</p>
    </article>`;

const liveCard = (p) => `
    <article class="live-project-card">
        <div class="live-project-top">
            <span class="live-project-type">${p.type}</span>
            <span class="live-status">Live in production</span>
        </div>
        <a class="live-project-preview" href="${p.url}" target="_blank" rel="noopener noreferrer">
            <img src="${img(p.img)}" alt="${p.alt}" width="1280" height="720" loading="lazy" decoding="async">
        </a>
        <div class="live-project-copy">
            <h3>${p.name}</h3>
            <p>${p.text}</p>
        </div>
        <a class="live-project-link" href="${p.url}" target="_blank" rel="noopener noreferrer">Visit live site <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
    </article>`;

const otherCard = (p) => `
    <article class="card">
        <div class="box">
            ${p.img
                ? `<img src="${img(p.img)}" alt="${p.alt}" width="150" height="150" loading="lazy" decoding="async">`
                : `<div class="project-placeholder" aria-hidden="true"><i class="fas ${p.icon}"></i></div>`}
            <h3 class="text">${p.name}</h3>
            <p class="project-date">${p.date}</p>
            <p>${p.text}</p>
            <ul class="project-tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
        </div>
    </article>`;

const ctaBand = `
<section class="cta-band">
    <div class="max-width">
        <h2>Need a website or web app for your business?</h2>
        <p>Tell me what you want to build. I reply within one working day with ideas and a clear plan.</p>
        <div class="btn-row">
            <a class="btn" href="/contact/">Get a free quote</a>
            <a class="btn btn-outline" href="${wa}" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp me</a>
        </div>
    </div>
</section>`;

const pageHero = (h1, lead) => `
<header class="page-hero">
    <div class="max-width">
        <h1>${h1}</h1>
        <p>${lead}</p>
    </div>
</header>`;

const faqs = [
    ['How long does a business website take?', 'A typical 5–8 page business website takes 1–3 weeks from content approval to launch. Web applications take longer depending on features; I give a clear timeline before we start.'],
    ['Will my website appear on Google?', 'Every site I build includes technical SEO: clean page structure, meta tags, sitemap, robots.txt, structured data and fast loading. I also help you register with Google Search Console so your pages get indexed.'],
    ['Do you build mobile apps as well?', 'Yes. I build Android and iOS apps with React Native and Expo, and connect them to the same backend as your website.'],
    ['Who will I be working with?', 'Directly with me. I am an IIT Kharagpur graduate and a full-stack developer, so you talk to the person who actually builds your product.'],
    ['Can you maintain the site after launch?', 'Yes. I can handle hosting, domain setup, updates and new features after launch.'],
];

export const pages = [
    // ---------------------------------------------------------------- HOME
    {
        path: '/',
        file: 'index.html',
        title: 'Jatoth Vinod | Website & Web App Developer | IIT Kharagpur Alumnus',
        description: 'Hire Jatoth Vinod, an IIT Kharagpur graduate and full-stack developer, to build fast, SEO-ready websites, web apps and mobile apps for your business in India.',
        bodyClass: 'page-home',
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                '@id': `${site.url}/#business`,
                name: 'Jatoth Vinod – Web Development',
                url: `${site.url}/`,
                image: `${site.url}${site.ogImage}`,
                description: 'Website, web app and mobile app development by an IIT Kharagpur graduate.',
                telephone: P.phone,
                email: P.email,
                areaServed: 'IN',
                founder: { '@id': `${site.url}/#person` },
                makesOffer: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, description: s.text } })),
            },
        ],
        body: `
<section class="home" id="home">
    <div class="max-width hero-grid">
        <div class="home-content">
            <span class="iit-badge"><i class="fas fa-graduation-cap" aria-hidden="true"></i> IIT Kharagpur Alumnus · MTech</span>
            <p class="text-1">Hi, I'm Jatoth Vinod</p>
            <h1 class="text-2">Websites &amp; web apps that grow your business</h1>
            <p class="text-3">Full-stack developer from <strong>IIT Kharagpur</strong>. I design, build and launch fast, SEO-ready websites for startups, shops, institutes and growing companies.</p>
            <div class="btn-row">
                <a class="btn" href="/contact/">Get a free quote</a>
                <a class="btn btn-outline" href="/projects/">See my work</a>
            </div>
        </div>
    </div>
</section>

<section class="trust-strip" aria-label="Highlights">
    <div class="max-width">
        <ul>
            <li><strong>IIT Kharagpur</strong><span>MTech Dual Degree, 2019–2024</span></li>
            <li><strong>4 live products</strong><span>Running in production today</span></li>
            <li><strong>React · Node · NestJS</strong><span>Modern, scalable stack</span></li>
            <li><strong>SEO-ready</strong><span>Fast, mobile-first, indexable</span></li>
        </ul>
    </div>
</section>

<section class="services">
    <div class="max-width">
        <h2 class="title">What I can build for you</h2>
        <div class="services-grid">${services.map(serviceCard).join('')}
        </div>
        <p class="section-link"><a href="/services/">See all services and process <i class="fas fa-arrow-right" aria-hidden="true"></i></a></p>
    </div>
</section>

<section class="projects">
    <div class="max-width">
        <h2 class="title">Live work</h2>
        <p class="projects-intro">Real products used by real people. Open any of them live.</p>
        <div class="live-projects-grid">${projects.map(liveCard).join('')}
        </div>
        <p class="section-link"><a href="/projects/">View all projects <i class="fas fa-arrow-right" aria-hidden="true"></i></a></p>
    </div>
</section>

<section class="why">
    <div class="max-width">
        <h2 class="title">Why work with me</h2>
        <div class="why-grid">
            <div><h3>IIT-trained problem solving</h3><p>My degree is from IIT Kharagpur, one of India's top engineering institutes. I bring the same analytical rigour to your product.</p></div>
            <div><h3>You deal with the developer</h3><p>No agency layers. You talk directly to the person writing the code, so decisions are fast and nothing gets lost.</p></div>
            <div><h3>Built to be found</h3><p>Semantic HTML, structured data, sitemap and fast loading are standard in every project, not an add-on.</p></div>
            <div><h3>Shipped, not just designed</h3><p>I handle design, code, deployment, domain and hosting. My products are live and in production.</p></div>
        </div>
    </div>
</section>
${ctaBand}`,
    },

    // --------------------------------------------------------------- ABOUT
    {
        path: '/about/',
        file: 'about/index.html',
        title: 'About Jatoth Vinod | IIT Kharagpur Graduate & Full-Stack Developer',
        description: 'Jatoth Vinod is a full-stack developer with an MTech Dual Degree in Biotechnology from IIT Kharagpur. Experience at BernAI Lab and Hi Reach Broadband.',
        bodyClass: 'page-inner',
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'ProfilePage',
                mainEntity: { '@id': `${site.url}/#person` },
            },
        ],
        body: `
${pageHero('About Jatoth Vinod', 'IIT Kharagpur graduate. Full-stack developer. I build products that work and businesses that can be found online.')}

<section class="about">
    <div class="max-width">
        <div class="about-content">
            <div class="column left">
                <img src="/src/assets/images/profile/vinod-portrait.jpg" alt="Portrait of Jatoth Vinod, IIT Kharagpur graduate and full-stack developer" width="400" height="400" decoding="async">
            </div>
            <div class="column right">
                <span class="iit-badge iit-badge-dark"><i class="fas fa-graduation-cap" aria-hidden="true"></i> IIT Kharagpur Alumnus</span>
                <h2 class="text">Full-stack developer building useful products</h2>
                <p>I'm a graduate of <strong>IIT Kharagpur</strong> (MTech Dual Degree in Biotechnology, 2019–2024), one of India's most competitive engineering institutes. That training taught me to break hard problems down and ship reliable solutions, and I now apply it to web and mobile products.</p>
                <p>I currently work at <strong>BernAI Lab</strong>, building React interfaces, NestJS APIs and data visualisations. Earlier, at <strong>Hi Reach Broadband Pvt Ltd</strong>, I built customer and internal platforms, cloud deployments and broadband service tools.</p>
                <p>Alongside my job, I build and launch my own products and websites for clients. If you need a website or app, you work directly with me.</p>
                <a href="/src/assets/documents/jatoth-vinod-resume-2026.pdf" download="Jatoth-Vinod-Resume-2026.pdf">Download resume</a>
            </div>
        </div>
    </div>
</section>

<section class="education">
    <div class="max-width">
        <h2 class="title">Education</h2>
        <div class="education-summary">
            <div class="education-item"><strong>Indian Institute of Technology Kharagpur</strong><span>MTech Dual Degree, Biotechnology <span aria-hidden="true">·</span> 2019–2024</span></div>
            <div class="education-item"><strong>Sri Chaitanya Junior College</strong><span>Class 12, Telangana State Board of Intermediate Education <span aria-hidden="true">·</span> 2016–2018</span></div>
        </div>
    </div>
</section>

<section class="experience">
    <div class="max-width">
        <h2 class="title">Experience</h2>
        <div class="serv-content">
            <article class="card">
                <div class="box">
                    <img class="experience-logo" src="/src/assets/images/logos/bernailab-logo.png" alt="BernAI Lab logo" width="210" height="48" loading="lazy">
                    <h3 class="text">BernAI Lab</h3>
                    <p class="role">Full-Stack Developer <span>· Nov 2025 – Present</span></p>
                    <ul>
                        <li>Refactored a portfolio frontend around direct API-driven types, reducing complexity and improving performance.</li>
                        <li>Built NestJS REST APIs with optimised SQL for stock and industry analytics.</li>
                        <li>Introduced shared TypeScript types from JSON Schema and built AG Grid, React Query and AI insight features.</li>
                    </ul>
                </div>
            </article>
            <article class="card">
                <div class="box">
                    <i class="fas fa-network-wired" aria-hidden="true"></i>
                    <h3 class="text">Hi Reach Broadband Pvt Ltd</h3>
                    <p class="role">Full-Stack Developer <span>· Jul 2024 – Apr 2025</span></p>
                    <ul>
                        <li>Maintained internal dashboards for broadband user management and support ticket tracking.</li>
                        <li>Built secure, role-based account features for login, session history and plan upgrades.</li>
                        <li>Delivered responsive customer portals for renewals, data usage, billing and support.</li>
                        <li>Deployed client portals with CI/CD, cloud hosting and domain configuration.</li>
                    </ul>
                </div>
            </article>
        </div>
    </div>
</section>

<section class="skills">
    <div class="max-width">
        <h2 class="title">Skills &amp; interests</h2>
        <div class="skills-content">
            <div class="column left">
                <div class="text">Certification &amp; activities</div>
                <div class="resume-highlights">
                    <h3>React Native Specialization <span>· Coursera</span></h3>
                    <p>Project-based training in React Native, Expo, NativeWind, React hooks, navigation and mobile app features.</p>
                    <ul>
                        <li>Trustee at JH Nayak Foundation, supporting education, health and community welfare initiatives.</li>
                        <li>NSO Athletics team member at IIT Kharagpur (2019–2021), competing in javelin throw.</li>
                        <li>Active in bodybuilding and fitness since 2022.</li>
                    </ul>
                </div>
            </div>
            <div class="column right skill-groups">
                <div class="skill-group"><h3>Languages</h3><ul class="skill-tags"><li>Python</li><li>HTML</li><li>CSS</li><li>Java</li><li>JavaScript</li><li>TypeScript</li><li>SQL</li></ul></div>
                <div class="skill-group"><h3>Frameworks &amp; libraries</h3><ul class="skill-tags"><li>React.js</li><li>React Native</li><li>Node.js</li><li>NestJS</li><li>Tailwind CSS</li><li>NativeWind</li><li>Bootstrap</li></ul></div>
                <div class="skill-group"><h3>Tools &amp; platforms</h3><ul class="skill-tags"><li>Git</li><li>GitHub</li><li>VS Code</li><li>MySQL</li><li>Firebase</li><li>Expo</li><li>Linux</li></ul></div>
            </div>
        </div>
    </div>
</section>
${ctaBand}`,
    },

    // ------------------------------------------------------------ SERVICES
    {
        path: '/services/',
        file: 'services/index.html',
        title: 'Website & App Development Services | Jatoth Vinod, IIT Kharagpur',
        description: 'Business websites, web applications, online ordering, mobile apps, SEO and AI automation by an IIT Kharagpur graduate. Get a free quote.',
        bodyClass: 'page-inner',
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
            },
        ],
        body: `
${pageHero('Website &amp; App Development Services', 'From a simple business website to a full web application, built by an IIT Kharagpur graduate who handles everything end to end.')}

<section class="services">
    <div class="max-width">
        <div class="services-grid">${services.map(serviceCard).join('')}
        </div>
    </div>
</section>

<section class="process">
    <div class="max-width">
        <h2 class="title">How we work</h2>
        <ol class="process-steps">
            <li><span>1</span><h3>Discuss</h3><p>You share your goals, audience and budget. I suggest the simplest solution that works.</p></li>
            <li><span>2</span><h3>Design</h3><p>Page structure and visual design are agreed with you before any code is written.</p></li>
            <li><span>3</span><h3>Build</h3><p>Fast, responsive, SEO-ready development, with regular previews you can open and test.</p></li>
            <li><span>4</span><h3>Launch</h3><p>Hosting, domain, Google Search Console and analytics set up so you are live and indexed.</p></li>
            <li><span>5</span><h3>Support</h3><p>Updates, fixes and new features whenever your business needs them.</p></li>
        </ol>
    </div>
</section>

<section class="faq">
    <div class="max-width">
        <h2 class="title">Frequently asked questions</h2>
        <div class="faq-list">
            ${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n            ')}
        </div>
    </div>
</section>
${ctaBand}`,
    },

    // ------------------------------------------------------------ PROJECTS
    {
        path: '/projects/',
        file: 'projects/index.html',
        title: 'Projects & Live Websites | Jatoth Vinod, IIT Kharagpur Developer',
        description: 'Live products built by Jatoth Vinod: Open Book 24/7, Nakka, Presqio, Jarvis, EasiDine and more. See real websites and apps in production.',
        bodyClass: 'page-inner',
        jsonLd: [
            {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Projects by Jatoth Vinod',
                itemListElement: projects.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: p.url })),
            },
        ],
        body: `
${pageHero('Projects', 'Real websites and apps I have built and shipped. Open any of them live.')}

<section class="projects">
    <div class="max-width">
        <h2 class="title">Live in production</h2>
        <div class="live-projects-grid">${projects.map(liveCard).join('')}
        </div>
        <h2 class="more-projects-title">More projects</h2>
        <div class="more-projects-grid">${otherProjects.map(otherCard).join('')}
        </div>
    </div>
</section>
${ctaBand}`,
    },

    // ------------------------------------------------------------- CONTACT
    {
        path: '/contact/',
        file: 'contact/index.html',
        title: 'Contact Jatoth Vinod | Get a Free Website Quote',
        description: 'Contact Jatoth Vinod, IIT Kharagpur graduate and full-stack developer, to discuss your website, web app or mobile app. Call, WhatsApp or email.',
        bodyClass: 'page-inner',
        jsonLd: [
            { '@context': 'https://schema.org', '@type': 'ContactPage', url: `${site.url}/contact/`, mainEntity: { '@id': `${site.url}/#person` } },
        ],
        scripts: ['/src/scripts/contact-form.js'],
        body: `
${pageHero('Contact', 'Tell me about your project. I reply within one working day.')}

<section class="contact">
    <div class="max-width">
        <div class="contact-content">
            <div class="column left">
                <h2 class="text">Get in touch</h2>
                <p>For a website, web app, mobile app or SEO help, reach me any of these ways.</p>
                <div class="icons">
                    <div class="row"><i class="fas fa-phone" aria-hidden="true"></i><div class="info"><div class="head">Phone</div><div class="sub-title"><a href="tel:${P.phone}">6309387321</a></div></div></div>
                    <div class="row"><i class="fab fa-whatsapp" aria-hidden="true"></i><div class="info"><div class="head">WhatsApp</div><div class="sub-title"><a href="${wa}" target="_blank" rel="noopener noreferrer">Message me on WhatsApp</a></div></div></div>
                    <div class="row"><i class="fas fa-envelope" aria-hidden="true"></i><div class="info"><div class="head">Email</div><div class="sub-title"><a href="${mailto}">${P.email}</a></div></div></div>
                    <div class="row"><i class="fab fa-linkedin" aria-hidden="true"></i><div class="info"><div class="head">LinkedIn</div><div class="sub-title"><a href="${P.linkedin}" target="_blank" rel="noopener noreferrer">Vinod Nayak</a></div></div></div>
                    <div class="row"><i class="fab fa-github" aria-hidden="true"></i><div class="info"><div class="head">GitHub</div><div class="sub-title"><a href="${P.github}" target="_blank" rel="noopener noreferrer">github.com/munnanayak</a></div></div></div>
                </div>
            </div>
            <div class="column right contact-note">
                <h2 class="text">Tell me about your project</h2>
                <form id="enquiry-form" class="contact-form">
                    <label for="cf-name">Your name</label>
                    <input id="cf-name" name="name" type="text" required autocomplete="name">
                    <label for="cf-contact">Email or phone</label>
                    <input id="cf-contact" name="contact" type="text" required autocomplete="email">
                    <label for="cf-type">What do you need?</label>
                    <select id="cf-type" name="type">
                        <option>Business website</option>
                        <option>Web application</option>
                        <option>Online store / ordering</option>
                        <option>Mobile app</option>
                        <option>SEO &amp; performance</option>
                        <option>Something else</option>
                    </select>
                    <label for="cf-message">Project details</label>
                    <textarea id="cf-message" name="message" rows="5" required></textarea>
                    <button class="btn" type="submit">Send enquiry</button>
                    <p class="form-note">This opens your email app with the details filled in. You can also WhatsApp or call me directly.</p>
                </form>
            </div>
        </div>
    </div>
</section>`,
    },
];
