# Nota Dinas Puskesau

Aplikasi web React untuk Pusat Kesehatan TNI Angkatan Udara (Puskesau) yang menyediakan:

- Informasi dan panduan Nota Dinas sesuai pedoman internal TNI AU.
- Form pembuatan Nota Dinas dengan preview susunan resmi.
- Penyimpanan data Nota Dinas sementara (localStorage).
- Ekspor dokumen preview ke PDF menggunakan `html2canvas` + `jsPDF`.
- Login internal sederhana untuk membatasi akses form dan daftar nota.

## Fitur

1. **Beranda**: deskripsi Puskesau, identitas aplikasi, dan navigasi cepat.
2. **Panduan Nota Dinas**: definisi, wewenang, penandatanganan, susunan, format nomor, dan ketentuan penting.
3. **Formulir Nota Dinas**:
   - Input: kode klasifikasi (SR/R/B), nomor urut, bulan Romawi, tahun, kode satuan, kepada, dari, perihal, isi nota, tembusan multi-item.
   - Preview otomatis format nota dinas.
   - Tombol **Simpan** ke daftar nota.
   - Tombol **Unduh PDF**.
4. **Daftar Nota Dinas**: tabel dengan pencarian/penyaring.
5. **Autentikasi**: login demo internal (`internal / puskesau123`).

## Teknologi

- React (functional components)
- React Router
- Material UI
- React Context (Auth & Nota state)
- html2canvas
- jsPDF

## Menjalankan Secara Lokal

```bash
npm install
npm start
```

Akses di `http://localhost:3000`.

## Build Produksi

```bash
npm run build
```

Output build berada pada folder `build`.

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Import project di Vercel.
3. Gunakan pengaturan:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. Deploy.

Opsional konfigurasi sudah disediakan di `vercel.json`.

## Catatan

- Data nota disimpan di browser (localStorage), belum menggunakan backend database.
- Login bersifat demo internal dan tidak untuk produksi tanpa peningkatan keamanan.
