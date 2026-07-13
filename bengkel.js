// MOBILE TECH PANEL NAVIGATION TOGGLE
const navTrigger = document.getElementById('nav-trigger');
const techLinks = document.querySelector('.nav-links');

navTrigger.addEventListener('click', () => {
    techLinks.classList.toggle('active');
    
    // Animasi perubahan bar sederhana
    const bars = navTrigger.querySelectorAll('.trigger-bar');
    bars.forEach(bar => bar.classList.toggle('active'));
});

// MENUTUP DRAWER KETIKA NAVIGASI DIKLIK
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        techLinks.classList.remove('active');
    });
});

// DETEKSI SCROLL UNTUK MERAMPINGKAN TOP NAVBAR PANEL
window.addEventListener('scroll', () => {
    const techNav = document.querySelector('.tech-nav');
    if (window.scrollY > 80) {
        techNav.style.backgroundColor = 'rgba(11, 12, 14, 0.98)';
        techNav.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.5)';
    } else {
        techNav.style.backgroundColor = 'rgba(11, 12, 14, 0.95)';
        techNav.style.boxShadow = 'none';
    }
});