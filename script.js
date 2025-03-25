// Animation du scroll (navigation fluide)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestion du formulaire
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message envoyé ! (Simulation)');
    form.reset();
});

// Changement de couleur de la navbar au scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#555';
    } else {
        navbar.style.background = '#333';
    }
});