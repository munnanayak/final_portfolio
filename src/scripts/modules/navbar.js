/** Mobile navigation menu toggle. */
export function initNavbar() {
    const menu = document.querySelector('.navbar .menu');
    const toggle = document.querySelector('.navbar .menu-btn');
    if (!menu || !toggle) return;

    function setOpen(isOpen) {
        menu.classList.toggle('active', isOpen);
        toggle.querySelector('i')?.classList.toggle('active', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    }

    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('active')));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false));
}
