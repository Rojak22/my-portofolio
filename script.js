// Intersection Observer untuk mendeteksi elemen saat di-scroll (Animasi Efek Muncul)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        // Jika elemen belum masuk ke area pandang layar, abaikan
        if (!entry.isIntersecting) {
            return;
        } else {
            // Jika elemen masuk, tambahkan class 'appear' untuk memicu animasi CSS
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

// Daftarkan semua elemen dengan class .fade-in ke observer
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});