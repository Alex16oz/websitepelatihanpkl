document.addEventListener("DOMContentLoaded", function() {
    // Buat elemen div sebagai placeholder untuk footer
    const footerPlaceholder = document.createElement('div');
    footerPlaceholder.id = 'footer-placeholder';
    document.body.appendChild(footerPlaceholder);

    // Ambil konten footer.html dan masukkan ke dalam placeholder
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Gagal memuat footer. Status: " + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error saat memuat footer:', error);
            // Fallback jika fetch gagal
            document.getElementById('footer-placeholder').innerHTML = "<p style='text-align:center;padding:20px;color:red;'>Gagal memuat footer.</p>";
        });
});