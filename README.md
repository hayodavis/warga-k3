Warga K3 - Sistem Pelaporan Bahaya 👷‍♂️⚠️

Warga K3 adalah aplikasi berbasis web sederhana untuk melaporkan potensi bahaya K3 (Kesehatan dan Keselamatan Kerja) di lingkungan kerja atau publik. Aplikasi ini dirancang agar mudah digunakan (user-friendly), responsif di HP (mobile-first), dan menggunakan Google Sheets sebagai database gratis tanpa server berbayar.

🌟 Fitur Utama

📱 Mode User (Pelapor)

Lapor Bahaya Cepat: Form pelaporan sederhana (Kategori, Lokasi, Deskripsi, Foto).

Upload Bukti Foto: Mendukung upload foto yang otomatis tersimpan ke Google Drive.

Feed Real-time: Melihat laporan terkini dari warga lain.

Counter Laporan: Statistik total partisipasi warga.

🔒 Mode Admin

Dashboard Monitoring: Grafik statistik dan ringkasan status (Open, In Progress, Done).

Manajemen Laporan: Ubah status laporan dan hapus laporan tidak valid.

Akses Aman: Login menggunakan password yang disimpan di Google Sheet.

AI Insight: Analisa sederhana area/kategori yang paling sering bermasalah.

🛠️ Teknologi

Frontend: HTML5, Tailwind CSS (CDN), Vanilla JavaScript.

Backend: Google Apps Script (GAS).

Database: Google Spreadsheets.

Storage: Google Drive (untuk foto).

🚀 Cara Instalasi (Cloning)

Ikuti langkah-langkah ini untuk menjalankan aplikasi di tempat Anda sendiri.

Langkah 1: Persiapan Google Sheet (Database)

Buka Google Sheets dan buat Spreadsheet baru bernama Database Warga K3.

Buat 2 Tab (Sheet) dengan nama persis berikut:

Tab 1: Beri nama Reports

Tab 2: Beri nama Settings

Setup Header (Judul Kolom):

Di Tab Reports, isi baris pertama (A1-H1) dengan:
id | category | location | description | status | userId | timestamp | imageUrl

Di Tab Settings, isi baris pertama (A1-B1) dengan:
key | value

Setup Password Admin:

Di Tab Settings, isi baris kedua (A2-B2):
admin_password | rahasia123 (Ganti rahasia123 dengan password admin Anda).

Langkah 2: Setup Backend (Google Apps Script)

Di Google Sheet tadi, klik menu Extensions > Apps Script.

Hapus semua kode yang ada di file Code.gs.

Copy & Paste kode backend lengkap (lihat file backend-script.js atau kode yang disediakan terpisah).

Simpan project (Ctrl+S).

Penting: Lakukan otorisasi izin Drive:

Buat fungsi sementara function test(){ DriveApp.createFile('tes.txt','tes'); }

Jalankan fungsi test tersebut lalu setujui semua izin (Allow).

Pastikan file tes.txt muncul di Drive Anda (ini tandanya izin tulis sukses).

Langkah 3: Deploy Web App

Di editor Apps Script, klik tombol biru Deploy > New Deployment.

Pilih tipe: Web App.

Konfigurasi:

Description: Versi 1

Execute as: Me (email Anda).

Who has access: Anyone (Siapa saja).

Klik Deploy.

Salin Web App URL yang muncul (berawalan https://script.google.com/macros/s/...).

Langkah 4: Setup Frontend

Clone repository ini atau download file index.html.

Buka file index.html menggunakan text editor (VS Code, Notepad++, dll).

Cari variabel const SCRIPT_URL di bagian bawah script (sekitar baris 580).

Ganti URL di dalam tanda kutip dengan Web App URL milik Anda dari Langkah 3.

// GANTI URL INI
const SCRIPT_URL = '[https://script.google.com/macros/s/AKfycb.../exec](https://script.google.com/macros/s/AKfycb.../exec)';

Simpan file.

Selesai! 🎉

Buka file index.html di browser Anda. Aplikasi siap digunakan!

📸 Struktur Data Google Sheet

Tab: Reports
| id | category | location | description | status | userId | timestamp | imageUrl |
|----|----------|----------|-------------|--------|--------|-----------|----------|
| uuid | Fisik | Lobby | Lantai licin | Open | user_1 | ISO Date | Link Foto |

Tab: Settings
| key | value |
|-----|-------|
| admin_password | passwordAnda |

🤝 Kontribusi

Aplikasi ini bersifat Open Source. Silakan lakukan Fork dan Pull Request jika ingin menambahkan fitur seperti:

Notifikasi Email/WhatsApp.

Export Laporan ke PDF.

Peta Lokasi.

📄 Lisensi

MIT License - Bebas digunakan dan dimodifikasi untuk keperluan edukasi maupun implementasi nyata.
