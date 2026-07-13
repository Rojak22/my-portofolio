// MENU TOGGLE UNTUK VERSI MOBILE (RESPONSIF)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animasi tombol hamburger sederhana
    const spans = mobileMenu.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// MENUTUP MENU JIKA LINK DIKLIK (PADA LAYAR HP)
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// INTERACTIVE SCROLL EFFECT UNTUK NAVBAR BACKGROUND
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = 'none';
    }
});