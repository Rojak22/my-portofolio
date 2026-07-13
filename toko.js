// MENU BURGER INTERAKTIF (MOBILE NAVIGATION)
const menuBtn = document.getElementById('menu-btn');
const navLinksList = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinksList.classList.toggle('active');
    
    // Efek perubahan ikon burger menjadi silang (X) tipis secara bergantian
    const bars = menuBtn.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
});

// MENUTUP NAV-LINKS SAAT SALAH SATU MENU DIKLIK (KHUSUS LAYAR HP)
const menuItems = document.querySelectorAll('.nav-links a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinksList.classList.contains('active')) {
            navLinksList.classList.remove('active');
        }
    });
});

// MERUBAH PADDING & BLUR NAVBAR SECARA OTOMATIS SAAT DI-SCROLL
window.addEventListener('scroll', () => {
    const mainNav = document.querySelector('.navbar');
    if (window.scrollY > 60) {
        mainNav.style.padding = '8px 0';
        mainNav.style.backgroundColor = 'rgba(8, 9, 10, 0.98)';
    } else {
        mainNav.style.padding = '18px 0';
        mainNav.style.backgroundColor = 'rgba(8, 9, 10, 0.96)';
    }
});