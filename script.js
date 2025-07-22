// --- SCRIPT UNTUK SLIDESHOW DINAMIS ---

// 1. Tentukan folder dan daftar gambar Anda di sini
const imageFolder = 'images/';
const imageFiles = [
    'foto1.jpg', 
    'foto2.jpg', 
    'foto3.jpeg',
    'foto4.jpg',
    'foto5.webp',
    'foto6.jpg'
    // Untuk menambah gambar, letakkan file di folder /images
    // lalu tambahkan nama filenya di sini, contoh: 'foto4.jpg',
];

// 2. Kode untuk membuat slide secara otomatis
const slideshowContainer = document.querySelector('.slideshow-container');
const totalImages = imageFiles.length;
const animationDuration = 20; // Durasi total animasi dalam detik (harus sama dengan di CSS)

imageFiles.forEach((file, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = `url(${imageFolder}${file})`;
    
    // Mengatur delay animasi agar setiap slide mendapat giliran
    const delay = -(animationDuration / totalImages) * (totalImages - (index + 1));
    slide.style.animationDelay = `${delay}s`;

    slideshowContainer.prepend(slide); // Menggunakan prepend agar elemen .content tetap berada di atas
});


// --- SCRIPT UNTUK MENU HAMBURGER ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
});