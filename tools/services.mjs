// Content for SEO service landing pages (Phase 1 / P0). One object per page.
// `proof` entries link to real live work; no invented statistics or prices.

export const serviceHubIntro = 'Pick the service that matches what you need. Every page explains what you get, how it works and what it costs to get started.';

export const servicePages = [
    {
        slug: 'website-development',
        nav: 'Website Development',
        short: 'Custom, fast, SEO-ready business websites.',
        title: 'Professional Website Development Services in India',
        description: 'Custom website development in India by an IIT Kharagpur graduate: fast, mobile-first, SEO-ready business websites on React and Node.js. Get a free quote.',
        h1: 'Professional Website Development Services in India',
        lead: 'Custom, fast, mobile-first websites for businesses that want to be found on Google and trusted by customers. Built and launched end to end by one developer.',
        deliver: [
            'Custom design, not a recycled template',
            'Mobile-first, responsive layout for every screen size',
            'On-page SEO: titles, descriptions, headings, schema, sitemap',
            'Fast loading, optimised images and clean code',
            'Contact form, WhatsApp and call buttons that bring enquiries',
            'Hosting, domain and Google Search Console setup',
        ],
        sections: [
            {
                h2: 'Custom website design that fits your business',
                p: [
                    'A good website explains what you do in a few seconds and makes it easy to contact you. I start from your customers and your offer, then design the page structure, content flow and visuals around them.',
                    'Websites are built with modern tools such as HTML, CSS, JavaScript and React, so they load quickly and stay easy to extend when your business grows.',
                ],
            },
            {
                h2: 'Professional website design built for search',
                p: [
                    'Search visibility is planned into the site from the first day: one clear H1 per page, keyword-focused headings, descriptive meta tags, structured data, an XML sitemap and Core Web Vitals-friendly performance.',
                    'After launch I help you register with Google Search Console and submit your sitemap so your pages can be indexed.',
                ],
            },
        ],
        audience: ['Clinics, schools, coaching institutes and local service businesses', 'Shops and brands that want a professional online presence', 'Startups that need a credible company website quickly'],
        proof: ['presqio', 'openbook'],
        pricing: 'The price depends on the number of pages, content, design effort and features such as booking or payments. Send me a short brief and I will reply within one working day with a clear quote.',
        faqs: [
            ['How long does a business website take?', 'A typical 5 to 8 page business website takes 1 to 3 weeks after content is ready. I confirm the timeline before we begin.'],
            ['Do you provide hosting and a domain?', 'I set up hosting, your domain and SSL, and the domain stays registered in your name.'],
            ['Can I update the website myself later?', 'Yes. I can structure the site so you can update text and images easily, or I can handle updates for you.'],
        ],
        related: ['small-business-websites', 'website-redesign', 'website-development-cost'],
    },
    {
        slug: 'small-business-websites',
        nav: 'Small Business Websites',
        short: 'Affordable websites that bring local customers.',
        title: 'Affordable Website Design for Small Businesses',
        description: 'Affordable small business website design in India: professional, mobile-friendly websites with SEO, WhatsApp enquiries and fast delivery. Get a free quote.',
        h1: 'Affordable Website Design for Small Businesses',
        lead: 'A clear, professional website that turns local searches and word of mouth into calls, WhatsApp messages and enquiries, without agency-level costs.',
        deliver: [
            'Simple, focused site: home, services, about and contact',
            'Click-to-call and WhatsApp buttons on every page',
            'Google Maps location and Google Business Profile guidance',
            'Mobile-first design, because most local visitors use phones',
            'Basic on-page SEO so you appear for local searches',
            'Fast delivery and a clear, fixed scope',
        ],
        sections: [
            {
                h2: 'Small business website design that stays affordable',
                p: [
                    'Small businesses do not need a complicated site. They need a clear page that shows services, proof and a way to contact. I keep the scope focused, so you pay for what helps you win customers.',
                    'Working directly with the developer, without agency layers, keeps both cost and delay low.',
                ],
            },
            {
                h2: 'Business website development that brings enquiries',
                p: [
                    'Every page has a clear call to action. Visitors can call, WhatsApp or send an enquiry in one tap. Contact details, opening hours and service areas are structured so Google can read them too.',
                ],
            },
        ],
        audience: ['Local shops, salons, gyms and restaurants', 'Clinics, tutors and coaching centres', 'Freelancers and consultants who need a professional presence'],
        proof: ['presqio', 'openbook'],
        pricing: 'Small business sites are scoped tightly to keep them affordable. Tell me your business and the pages you need, and I will send a fixed quote within one working day.',
        faqs: [
            ['What does a small business website need?', 'At minimum: what you do, who you serve, proof such as photos or reviews, and easy ways to contact you. Extra pages can be added later.'],
            ['Will people find my business on Google?', 'The site is built with local SEO basics. Ranking takes time, and I also guide you on setting up Google Business Profile, which matters a lot for local searches.'],
            ['Can I start small and add features later?', 'Yes. I build the site so pages and features such as booking or an online store can be added later.'],
        ],
        related: ['website-development', 'ecommerce-development', 'website-development-cost'],
    },
    {
        slug: 'website-development-cost',
        nav: 'Pricing & Packages',
        short: 'What decides website cost, and how to get a quote.',
        title: 'Website Development Cost in India: Pricing & Packages',
        description: 'What decides website development cost in India, typical package types and how to get a clear fixed quote for your business website or web app.',
        h1: 'Website Development Cost in India: Pricing and Packages',
        lead: 'Website prices vary a lot because projects vary a lot. Here is what actually decides the cost, and how I give you a clear quote before any work starts.',
        deliver: [
            'Written scope: pages, features and deliverables listed clearly',
            'Fixed quote, so there are no surprise charges',
            'Milestone-based delivery with previews you can open and test',
            'Hosting, domain and SEO setup included in the scope you approve',
        ],
        sections: [
            {
                h2: 'What decides website design charges',
                p: [
                    'Cost is driven mainly by scope: number of pages, amount of custom design, content writing, integrations (payments, booking, WhatsApp, CRM), and whether you need an admin panel or user logins.',
                    'A simple brochure website for a local business is a very different project from a platform with accounts, payments and dashboards.',
                ],
            },
            {
                h2: 'Website development packages',
                p: ['Most projects fall into one of three types. Exact pricing is confirmed after I understand your requirements.'],
            },
        ],
        packages: [
            { name: 'Starter website', text: 'Small business or personal site with a few pages, contact and WhatsApp buttons, and basic SEO.' },
            { name: 'Business website', text: 'Multi-page custom design, service pages, blog or portfolio, advanced SEO, analytics and Search Console setup.' },
            { name: 'Web app or store', text: 'Logins, dashboards, payments, orders or inventory, built on React, Node.js and a database. Scoped per project.' },
        ],
        audience: ['Business owners comparing quotes', 'Startups planning a budget', 'Anyone asking how much a website should cost'],
        proof: ['presqio', 'openbook'],
        pricing: 'I do not quote numbers without understanding the scope, because that is how clients end up overpaying or under-delivered. Share your requirements on WhatsApp or the contact form and I will reply within one working day with a clear written quote.',
        faqs: [
            ['Why do website prices differ so much?', 'Because the scope differs: a five-page brochure site and a custom platform with payments and dashboards are very different amounts of work.'],
            ['Are there hidden costs?', 'No. The quote lists what is included. Yearly costs such as domain and hosting are explained upfront.'],
            ['Do you take payment in stages?', 'Yes. Work is split into milestones, so you see progress before each payment.'],
        ],
        related: ['website-development', 'small-business-websites', 'web-application-development'],
    },
    {
        slug: 'ecommerce-development',
        nav: 'E-commerce Development',
        short: 'Online stores, QR ordering and POS systems.',
        title: 'E-commerce Website Development Services in India',
        description: 'E-commerce website and online store development in India: product catalogues, orders, inventory, QR ordering and POS, built on React and Node.js.',
        h1: 'E-commerce Website Development Services',
        lead: 'Online stores and ordering systems that are fast on mobile, simple to manage and built around how your customers actually buy.',
        deliver: [
            'Product catalogue with categories, search and filters',
            'Cart, checkout and order management',
            'Inventory and admin dashboard with role-based access',
            'QR-based ordering and POS for restaurants and cafes',
            'Mobile-first design, because most shoppers use phones',
            'SEO for product and category pages',
        ],
        sections: [
            {
                h2: 'Online store development that is simple to run',
                p: [
                    'A store is only useful if you can manage it comfortably. I build clean admin tools for products, stock, orders and staff roles, so day-to-day work does not need a developer.',
                ],
            },
            {
                h2: 'Shopping website development with real-world experience',
                p: [
                    'I built EasiDine, a QR-based POS and ordering system for restaurants, hotels and cloud kitchens with real-time orders, inventory, printer support and role-based admin tools, using React, Node.js and Firebase.',
                    'The same approach applies to retail stores, catalogues and any business that takes orders online.',
                ],
            },
        ],
        audience: ['Shops and brands moving online', 'Restaurants, cafes and cloud kitchens', 'Wholesalers and local suppliers'],
        proof: ['easidine'],
        pricing: 'Store pricing depends on the number of products, payment methods, delivery rules and admin features. Send me your requirements and I will reply with a clear quote within one working day.',
        faqs: [
            ['Which payment gateways can you integrate?', 'I can integrate common Indian payment gateways. The best choice depends on your business, and I will advise during scoping.'],
            ['Can I manage products and orders myself?', 'Yes. The admin panel is built so you can add products, update stock and handle orders without technical help.'],
            ['Do you build QR ordering for restaurants?', 'Yes, EasiDine is a live example of a QR-based ordering and POS system.'],
        ],
        related: ['web-application-development', 'website-development', 'mobile-app-development'],
    },
    {
        slug: 'web-application-development',
        nav: 'Web Application Development',
        short: 'Dashboards, portals and custom business software.',
        title: 'Custom Web Application Development Services',
        description: 'Custom web application development in India: dashboards, portals, SaaS and business software on React, Node.js and NestJS with secure role-based access.',
        h1: 'Custom Web Application Development Services',
        lead: 'Dashboards, portals, booking tools and internal business software, built on React, Node.js and NestJS with secure access and clean, maintainable code.',
        deliver: [
            'Requirement analysis and a clear feature list',
            'React front end with a REST API on Node.js or NestJS',
            'SQL or Firebase database design',
            'Login, roles and permissions',
            'Dashboards, reports and data tables',
            'Deployment, CI/CD and cloud hosting',
        ],
        sections: [
            {
                h2: 'Web app development services for real business workflows',
                p: [
                    'Many businesses run on spreadsheets and chat groups. A custom web app puts the workflow in one place: customers, staff, orders, attendance, billing or reports, each with the right access.',
                    'Presqio, a workforce platform I built, handles selfie and GPS attendance, staff rosters, leave and payroll for on-site and field teams.',
                ],
            },
            {
                h2: 'Business software development you can grow with',
                p: [
                    'In my work at BernAI Lab I build React interfaces and NestJS APIs with shared TypeScript types and SQL-backed analytics. The same disciplined approach keeps your software reliable as features are added.',
                ],
            },
        ],
        audience: ['Companies replacing spreadsheets with software', 'Startups building their first product', 'Teams that need internal dashboards or customer portals'],
        proof: ['presqio', 'nakka'],
        pricing: 'Web apps are scoped by features and complexity. I break the project into phases, so you can launch a first version early and add features after. Share your idea for a clear estimate.',
        faqs: [
            ['Which technology do you use?', 'Mainly React, Node.js, NestJS, TypeScript with SQL databases or Firebase, hosted on cloud platforms.'],
            ['Can you take over an existing project?', 'Yes. I can review existing code, fix issues and add features.'],
            ['Will I own the code?', 'Yes. Source code and accounts are handed over to you.'],
        ],
        related: ['startup-mvp-development', 'ecommerce-development', 'ai-automation'],
    },
    {
        slug: 'mobile-app-development',
        nav: 'Mobile App Development',
        short: 'Android and iOS apps with React Native.',
        title: 'Mobile App Development Services in India',
        description: 'Android and iOS mobile app development in India with React Native and Expo: from prototype to store release, connected to your website and backend.',
        h1: 'Mobile App Development Services in India',
        lead: 'Cross-platform Android and iOS apps built with React Native and Expo, from first prototype to store release, connected to your backend and website.',
        deliver: [
            'One codebase for Android and iOS',
            'Clean, fast UI with smooth navigation',
            'Login, notifications and API integration',
            'Backend and admin panel if you need one',
            'Testing on real devices',
            'Help with Play Store and App Store release',
        ],
        sections: [
            {
                h2: 'Android app developer and iOS in one project',
                p: [
                    'With React Native, one codebase serves Android and iOS, which cuts cost and keeps both apps consistent. I hold a React Native specialization from Coursera and build apps with Expo, TypeScript and NativeWind.',
                ],
            },
            {
                h2: 'Hire a mobile app developer for the full journey',
                p: [
                    'I built a meditation and mindfulness app with guided audio, daily affirmations and wellness tracking. From idea to release, you work directly with one developer who handles design, code and deployment.',
                ],
            },
        ],
        audience: ['Businesses that want an app for customers or staff', 'Startups validating a mobile idea', 'Existing website owners who want an app version'],
        proof: ['meditation'],
        pricing: 'App cost depends on screens, features and backend needs. Share your idea and I will reply with a phased plan and a clear quote.',
        faqs: [
            ['Do you build both Android and iOS apps?', 'Yes, with React Native and Expo from a single codebase.'],
            ['Can the app use my existing website backend?', 'Yes. I can connect the app to your existing APIs or build a new backend.'],
            ['Do you help publish the app?', 'Yes. I guide you through Play Store and App Store submission.'],
        ],
        related: ['web-application-development', 'startup-mvp-development', 'ecommerce-development'],
    },
    {
        slug: 'startup-mvp-development',
        nav: 'Startup MVP Development',
        short: 'Launch your first version fast and lean.',
        title: 'MVP Development Services for Startups',
        description: 'MVP development for startups in India: launch a lean, scalable first version of your web or mobile product quickly with React, Node.js and cloud hosting.',
        h1: 'MVP Development Services for Startups',
        lead: 'Launch your first version quickly. I help founders cut scope to what proves the idea, build it cleanly and ship it to real users.',
        deliver: [
            'Scope workshop: what to build first and what to postpone',
            'Clickable design before coding',
            'Web and mobile MVP built on a scalable stack',
            'Auth, payments and admin where required',
            'Analytics so you learn from real users',
            'Deployment and a roadmap for version two',
        ],
        sections: [
            {
                h2: 'Startup website development and MVP, built lean',
                p: [
                    'The fastest way to waste money is to build everything first. I help you pick the smallest version that tests your idea, then build it with technology that can grow when the idea works.',
                ],
            },
            {
                h2: 'SaaS and product development experience',
                p: [
                    'I have shipped several live products: Nakka, an AI coding agent for VS Code, Jarvis, a business assistant with automation, and Presqio, a workforce platform. I understand the full product journey as a builder.',
                ],
            },
        ],
        audience: ['First-time founders with an idea', 'Startups that need to demo to investors or customers', 'Businesses launching a new digital product'],
        proof: ['nakka', 'jarvis', 'presqio'],
        pricing: 'MVPs are scoped tightly and delivered in phases. Tell me your idea and target users and I will send a plan with timeline and quote.',
        faqs: [
            ['How long does an MVP take?', 'Many MVPs ship in a few weeks to a couple of months, depending on scope. I confirm after the scope workshop.'],
            ['Can the MVP scale later?', 'Yes. I build on standard, scalable technology so you do not need a full rewrite when you grow.'],
            ['Do you sign an NDA?', 'Yes, on request, before you share your idea.'],
        ],
        related: ['web-application-development', 'mobile-app-development', 'ai-automation'],
    },
    {
        slug: 'website-redesign',
        nav: 'Website Redesign',
        short: 'Modernise and speed up an old website.',
        title: 'Professional Website Redesign Services',
        description: 'Website redesign and maintenance services in India: modernise an outdated site, improve speed, mobile experience and SEO without losing your rankings.',
        h1: 'Professional Website Redesign Services',
        lead: 'Turn an outdated, slow website into a modern, mobile-friendly one that ranks and converts, while protecting the search traffic you already have.',
        deliver: [
            'Audit of your current design, speed, SEO and mobile experience',
            'Fresh design and clearer content structure',
            'Faster loading and Core Web Vitals improvements',
            '301 redirects so existing rankings are protected',
            'Updated meta tags, schema and sitemap',
            'Ongoing maintenance and updates if you want them',
        ],
        sections: [
            {
                h2: 'Website redesign services that protect your SEO',
                p: [
                    'A redesign done carelessly can wipe out your Google rankings. I map your existing URLs, keep what ranks, set up proper redirects and re-submit your sitemap so search engines adapt smoothly.',
                ],
            },
            {
                h2: 'Website maintenance services after launch',
                p: [
                    'Sites need updates, security fixes and new content. I can handle hosting, backups, updates and small improvements for you on an ongoing basis.',
                ],
            },
        ],
        audience: ['Businesses with an old or slow site', 'Sites that do not work well on mobile', 'Owners who want better enquiries from their current traffic'],
        proof: ['openbook', 'presqio'],
        pricing: 'Redesign cost depends on the size of your current site and how much changes. Send me your website link and I will audit it and reply with a quote.',
        faqs: [
            ['Will I lose my Google rankings?', 'Not if it is done properly. I keep important URLs, add redirects and update your sitemap.'],
            ['Can you keep my existing content?', 'Yes. I can reuse and improve existing content.'],
            ['Can you move my site to faster hosting?', 'Yes. I can migrate hosting and domain settings safely.'],
        ],
        related: ['website-development', 'small-business-websites', 'website-development-cost'],
    },
    {
        slug: 'ai-automation',
        nav: 'AI Automation',
        short: 'Assistants, emails and Telegram automations.',
        title: 'AI Automation Services for Businesses',
        description: 'AI automation for businesses in India: AI assistants, automated emails, Telegram notifications and workflow automation that save hours every week.',
        h1: 'AI Automation Services for Businesses',
        lead: 'Remove repetitive work from your business with AI assistants, automated emails and instant notifications, built around your real processes.',
        deliver: [
            'Process review to find what is worth automating',
            'AI assistant for chat or voice interaction',
            'Automated email campaigns and follow-ups',
            'Telegram and WhatsApp-style notifications',
            'Dashboards to track what was sent and done',
            'Integration with your website or app',
        ],
        sections: [
            {
                h2: 'AI automation that fits real business workflows',
                p: [
                    'Automation works best on tasks that are repeated daily: follow-ups, reminders, reports and customer replies. I start by finding those tasks, then automate them one at a time.',
                ],
            },
            {
                h2: 'Business automation with a live example',
                p: [
                    'Jarvis, a personal assistant I built for multiple businesses, supports marketing, sends automated emails, sends Telegram bot notifications and lets users talk or message the assistant.',
                ],
            },
        ],
        audience: ['Businesses spending hours on repetitive follow-ups', 'Teams that need instant alerts and reports', 'Founders who want an AI assistant for their business'],
        proof: ['jarvis', 'nakka'],
        pricing: 'Automation cost depends on the workflows and integrations. Describe your most repetitive tasks and I will propose what to automate first, with a quote.',
        faqs: [
            ['Do I need technical knowledge?', 'No. I handle setup and explain how it works in plain language.'],
            ['Is my business data safe?', 'I follow standard security practice and only connect the data needed for the automation.'],
            ['Can automation be added to my existing website?', 'Yes. It can connect to your website, app, email or messaging tools.'],
        ],
        related: ['web-application-development', 'startup-mvp-development', 'website-development'],
    },
];
