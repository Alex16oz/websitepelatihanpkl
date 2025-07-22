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
// PERBAIKAN: Cek dulu apakah elemen slideshow ada di halaman ini
const slideshowContainer = document.querySelector('.slideshow-container');

// Jalankan kode slideshow HANYA jika elemennya ditemukan
if (slideshowContainer) {
    const totalImages = imageFiles.length;
    // Durasi total animasi dalam detik (harus sama dengan di CSS)
    const animationDuration = 20; 

    imageFiles.forEach((file, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${imageFolder}${file})`;
        
        // Mengatur delay animasi agar setiap slide mendapat giliran
        const delay = -(animationDuration / totalImages) * (totalImages - (index + 1));
        slide.style.animationDelay = `${delay}s`;

        // Menggunakan prepend agar elemen .content tetap berada di atas
        slideshowContainer.prepend(slide); 
    });
}


// --- SCRIPT UNTUK MENU HAMBURGER ---
// Kode ini sekarang akan selalu berjalan di setiap halaman tanpa terhalang error
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
});

// --- SCRIPT UNTUK INTEGRASI SUPABASE ---

// 1. Ganti dengan URL dan Kunci Anon Proyek Supabase Anda
const SUPABASE_URL = 'https://krgivhcsdnstremfzjbt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZ2l2aGNzZG5zdHJlbWZ6amJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNTczNzAsImV4cCI6MjA2ODczMzM3MH0._ob-RBuadEFxcIHg2GEQDSlb-K_mry3HeqSzFuoPRSM';

// 2. Inisialisasi Supabase Client
// Baris ini membuat koneksi awal ke proyek Supabase Anda
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 3. (Opsional) Verifikasi koneksi di console browser
console.log('Koneksi ke Supabase berhasil dibuat:', supabaseClient);