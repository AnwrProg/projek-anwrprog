const tombol = document.getElementById('tombolAksi');
const hasil = document.getElementById('hasil');
let hitung = 0;

tombol.addEventListener('click', function() {
    hitung++;
    hasil.textContent = `🎉 Berhasil diklik ${hitung} kali!`;
    hasil.classList.add('terlihat');
    
    // Efek getar saat diklik
    tombol.style.transform = 'scale(0.92)';
    setTimeout(() => tombol.style.transform = '', 200);
});