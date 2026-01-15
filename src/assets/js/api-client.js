/*
  Simple API client demo.
  Usage:
  - If you run `npm run server` (Express) to serve dist/, open http://localhost:3000
  - If you run `gulp dev` (serves dist/ on 9201) and server separately on 3000, change API_BASE to 'http://localhost:3000'
*/

const API_BASE = window && window.location.hostname === 'localhost' && window.location.port === '3000' ? '' : 'http://localhost:3000';

async function fetchProjects() {
    try {
        const res = await fetch(`${API_BASE}/api/projects`);
        const json = await res.json();
        if (!json.ok) return console.error('API returned error', json);
        console.log('Projects:', json.projects);

        const list = document.getElementById('api-projects');
        if (list) {
            list.innerHTML = json.projects
                .map((p) => `<li><a href="${p.url}">${p.title}</a> - ${p.description}</li>`)
                .join('\n');
        }
    } catch (err) {
        console.error('Failed to fetch projects', err);
    }
}

async function sendContact(formEl) {
    const data = {
        name: formEl.querySelector('[name=name]').value,
        email: formEl.querySelector('[name=email]').value,
        message: formEl.querySelector('[name=message]').value,
    };

    const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    const json = await res.json();
    if (json.ok) {
        alert('Message sent!');
        formEl.reset();
    } else {
        alert('Failed: ' + (json.error || 'unknown'));
    }
}

// Auto-run if element exists
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('api-projects')) fetchProjects();

    const contactForm = document.getElementById('api-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            sendContact(contactForm);
        });
    }
});
