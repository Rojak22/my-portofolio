// INTERAKSI HAMBURGER MENU UNTUK VERSI MOBILE/TABLET
const navToggle = document.getElementById('nav-toggle');
const sideNav = document.querySelector('.side-nav');

navToggle.addEventListener('click', () => {
    sideNav.classList.toggle('show-menu');
    
    // Animasi garis hamburger tipis berubah posisi
    const lines = navToggle.querySelectorAll('.line');
    lines.forEach(line => line.classList.toggle('active'));
});

// MENUTUP DRAWER NAVIGATION SAAT LINK DIKLIK
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideNav.classList.remove('show-menu');
    });
});

// EFFECT HIGHLIGHT MENU NAVIGASI AKTIF SESUAI POSISI SCROLL
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Cek jika posisi scroll saat ini berada di dalam batas section tertentu
        if (window.scrollY >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});