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
];

// 2. Kode untuk membuat slide secara otomatis
const slideshowContainer = document.querySelector('.slideshow-container');

if (slideshowContainer) {
    const totalImages = imageFiles.length;
    const animationDuration = 20; 

    imageFiles.forEach((file, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${imageFolder}${file})`;
        
        const delay = -(animationDuration / totalImages) * (totalImages - (index + 1));
        slide.style.animationDelay = `${delay}s`;

        slideshowContainer.prepend(slide); 
    });
}

// --- SCRIPT UNTUK MENU HAMBURGER ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
});

// --- SCRIPT UNTUK CARD SLIDER ---
const cardWrapper = document.querySelector('.card-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (cardWrapper && prevBtn && nextBtn) {
    const cardWidth = document.querySelector('.card').offsetWidth + 30; // Lebar kartu + margin

    nextBtn.addEventListener('click', () => {
        cardWrapper.scrollLeft += cardWidth;
    });

    prevBtn.addEventListener('click', () => {
        cardWrapper.scrollLeft -= cardWidth;
    });
}


// --- SCRIPT UNTUK INTEGRASI SUPABASE ---

// 1. Ganti dengan URL dan Kunci Anon Proyek Supabase Anda
const SUPABASE_URL = 'https://krgivhcsdnstremfzjbt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZ2l2aGNzZG5zdHJlbWZ6amJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNTczNzAsImV4cCI6MjA2ODczMzM3MH0._ob-RBuadEFxcIHg2GEQDSlb-K_mry3HeqSzFuoPRSM';

// 2. Inisialisasi Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 3. (Opsional) Verifikasi koneksi di console browser
console.log('Koneksi ke Supabase berhasil dibuat:', supabaseClient);