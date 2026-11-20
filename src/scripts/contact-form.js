/** Contact page: turns the enquiry form into a prefilled email. */
const form = document.getElementById('enquiry-form');
const EMAIL = 'vinodnayakj.321@gmail.com';

form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `Website enquiry: ${data.get('type')}`;
    const body = [
        `Name: ${data.get('name')}`,
        `Contact: ${data.get('contact')}`,
        `Need: ${data.get('type')}`,
        '',
        data.get('message'),
    ].join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
