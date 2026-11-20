// Single source of truth for site-wide settings. Edit here, then run `npm run build`.
export const site = {
    url: 'https://jatothvinod.services',
    name: 'Jatoth Vinod',
    brand: 'Vinod.',
    locale: 'en_IN',
    ogImage: '/src/assets/images/profile/vinod-portrait.jpg',
    themeColor: '#16a34a',
    person: {
        name: 'Jatoth Vinod',
        jobTitle: 'Full-Stack Developer',
        email: 'vinodnayakj.321@gmail.com',
        phone: '+91-6309387321',
        whatsapp: '916309387321',
        github: 'https://github.com/munnanayak',
        linkedin: 'https://www.linkedin.com/in/vinod-nayak-55975a220/',
        alumniOf: 'Indian Institute of Technology Kharagpur',
    },
};

export const nav = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Services', href: '/services/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Contact', href: '/contact/' },
];

export const projects = [
    {
        name: 'Open Book 24/7',
        type: 'Education platform',
        url: 'https://openbook247.in/home',
        img: 'openbook247.png',
        alt: 'Screenshot of the Open Book 24/7 mock-test website',
        text: 'Competitive-exam mock tests in Telugu and English, with timed papers, score analysis, and answer explanations.',
    },
    {
        name: 'Nakka',
        type: 'Developer tool',
        url: 'https://nakka.in/product',
        img: 'nakka.png',
        alt: 'Screenshot of the Nakka AI coding agent website',
        text: 'An AI coding agent for VS Code that helps developers understand codebases, edit code, and debug with their own model.',
    },
    {
        name: 'Presqio',
        type: 'Workforce management',
        url: 'https://presqio.pages.dev/',
        img: 'presqio.png',
        alt: 'Screenshot of the Presqio workforce management website',
        text: 'Workforce tools for selfie and GPS attendance, staff rosters, leave management, and payroll across on-site and field teams.',
    },
    {
        name: 'Jarvis',
        type: 'Business assistant',
        url: 'https://jarvis-nlj.pages.dev/',
        img: 'jarvis.png',
        alt: 'Screenshot of the Jarvis business assistant dashboard',
        text: 'A personal assistant for multiple businesses: marketing support, automated emails, Telegram bot notifications, and chat or voice interaction.',
    },
];

export const otherProjects = [
    {
        name: 'EasiDine',
        date: 'Jan 2025 – Mar 2025',
        img: 'easidine.png',
        alt: 'EasiDine restaurant POS interface',
        text: 'QR-based POS system for restaurants, hotels and cloud kitchens with real-time operations, inventory and order management, printer support and role-based admin tools.',
        tags: ['React.js', 'Node.js', 'Firebase', 'DigitalOcean'],
    },
    {
        name: 'Meditation & Mindfulness',
        date: 'Oct 2024',
        img: 'meditation-app.png',
        alt: 'Meditation and mindfulness mobile app',
        text: 'Mobile app for guided meditations, daily affirmations and wellness tracking, with calming visuals, tab navigation and audio playback.',
        tags: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
    },
    {
        name: 'Sales Insights',
        date: 'Jun 2024 – Jul 2024',
        icon: 'fa-chart-bar',
        text: 'Analysed AtliQ Hardware sales trends for executive reviews. SQL analysis and stored procedures reduced data-corruption risk by 20%; insights helped cut operating costs by about 10%.',
        tags: ['Power BI', 'SQL'],
    },
];
