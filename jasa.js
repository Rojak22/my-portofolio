// MENAMPILKAN & MENYEMBUNYIKAN MENU DI LAYOUT RESPONSIVE MOBILE
const laundryHamburger = document.getElementById('laundry-hamburger');
const menuLaundry = document.getElementById('menu-laundry');

laundryHamburger.addEventListener('click', () => {
    menuLaundry.classList.toggle('active');
});

// MEMASTIKAN DROPDOWN NAVBAR OTOMATIS TERTUTUP SAAT STRIP MENU DIKLIK
const linksMenu = document.querySelectorAll('.nav-links a');
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuLaundry.classList.remove('active');
    });
});