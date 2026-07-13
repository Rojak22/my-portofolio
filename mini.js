// TOGGLE NAVIGASI MOBILE MENU CUTE
const mobileToggle = document.getElementById('mobile-toggle');
const menuList = document.getElementById('menu-list');

mobileToggle.addEventListener('click', () => {
    menuList.classList.toggle('show');
    
    // Ganti emoji balon saat diklik biar interaktif
    if (menuList.classList.contains('show')) {
        mobileToggle.innerText = '✨';
    } else {
        mobileToggle.innerText = '🎈';
    }
});

// KETIKA LINK MENU DIKLIK, DRAWER OTOMATIS TERTUTUP
const linksNav = document.querySelectorAll('.nav-links a');
linksNav.forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('show');
        mobileToggle.innerText = '🎈';
    });
});

// EFEK PARALLAX BUBBLE RINGAN DI BAGIAN HERO KETIKA MOUSE BERGERAK
const heroSec = document.getElementById('hero');
if(heroSec) {
    heroSec.addEventListener('mousemove', (e) => {
        const bubble1 = document.querySelector('.hero-bubble-1');
        const bubble2 = document.querySelector('.hero-bubble-2');
        
        let movingX = (e.clientX * -0.02);
        let movingY = (e.clientY * -0.02);
        
        bubble1.style.transform = `translate(${movingX}px, ${movingY}px)`;
        bubble2.style.transform = `translate(${movingX * -1}px, ${movingY * -1}px)`;
    });
}