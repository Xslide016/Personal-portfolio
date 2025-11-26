// Animate skill bars on scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            skill.style.width = skill.dataset.width || skill.parentElement.querySelector('h4').dataset.width;
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});