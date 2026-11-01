# TaniAkses Jember

Prototype akademik berbahasa Indonesia untuk tugas Pertanian Industrial Berkelanjutan, Universitas Jember; demonstrasi kontribusi mahasiswa Fakultas Ilmu Komputer. Bukan layanan resmi universitas atau aplikasi transaksi.

## Menjalankan

Buka `index.html` langsung di browser modern. Tidak perlu instalasi, akun, atau internet. Alternatif untuk preview: jalankan `python -m http.server 8080` dari folder ini, lalu buka `http://localhost:8080`.

## Isi dan fitur

- Satu halaman: Beranda, Informasi Harga, Pasar Hasil Tani, Panduan, Tentang Prototype.
- Navigasi halus, menu HP, indikator bagian aktif; menghormati preferensi pengurangan gerak.
- Lima harga contoh: padi, jagung, cabai, kopi, tomat; satuan dan bentuk komoditas dijelaskan.
- Lima penawaran petani fiktif, pencarian nama/komoditas/lokasi, filter dan reset, keadaan hasil kosong.
- Modal kontak dengan contoh pesan dan tombol simulasi. Tidak mengirim pesan atau membuka WhatsApp.
- Modal mendukung Escape, tombol tutup, fokus kembali, dan fokus keyboard tetap di dialog bawaan browser.
- Ilustrasi SVG tertanam dan emoji lokal; tanpa font, gambar, atau layanan pihak ketiga.

## Batasan data

**Semua harga, nama petani, stok, dan penawaran fiktif. Bukan realtime, bukan hasil survei dan bukan acuan jual beli.** Tanggal 1 November 2026 adalah skenario data, bukan pembaruan otomatis. Harga nyata berbeda menurut mutu, lokasi, dan waktu. Tidak ada backend, database, login, API, analitik, cookie, maupun penyimpanan lokal. Muat ulang akan mereset simulasi. Klaim dampak keberlanjutan belum diuji.

## Berkas

- `index.html`: struktur, konten, dan ilustrasi.
- `style.css`: tampilan hijau putih dan tata letak responsif.
- `script.js`: data demo, filter, menu, dan modal.

Ubah array `crops` dalam `script.js` untuk menyunting contoh. Pertahankan label demo. Teks data saat ini adalah konstanta tepercaya; jika kelak memakai masukan pengguna, gunakan elemen DOM dan `textContent`, bukan interpolasi HTML.

## GitHub Pages

1. Buat repository publik bernama `taniakses-jember` di akun GitHub Anda.
2. Unggah `index.html`, `style.css`, `script.js`, dan `README.md` ke akar branch `main`, lalu commit.
3. Buka Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
4. Tunggu build selesai. Buka alamat yang ditampilkan GitHub Pages dan pastikan halaman serta interaksinya berjalan. Jangan menganggap alamat aktif sebelum diperiksa.

Tidak perlu build atau pengaturan base path karena semua aset memakai path relatif.

## Alur demonstrasi video

Perkenalkan masalah wawancara → tunjukkan label data demo → lihat harga → cari “Silo” di pasar → buka simulasi kontak → tekan simulasi dan tunjukkan bahwa pesan tidak dikirim → buka panduan → jelaskan batasan prototype.
