/** Sticky navbar and back-to-top button. */
export function initScroll() {
    const navbar = document.querySelector('.navbar');
    const topButton = document.querySelector('.scroll-up-btn');
    const alwaysSolid = document.body.classList.contains('page-inner');

    function update() {
        const y = window.scrollY;
        navbar?.classList.toggle('sticky', alwaysSolid || y > 20);
        topButton?.classList.toggle('show', y > 500);
    }

    window.addEventListener('scroll', update, { passive: true });
    topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    update();
}
