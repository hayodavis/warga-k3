👷‍♂️ Warga K3 - Sistem Pelaporan Bahaya

Sistem Pelaporan K3 Berbasis Web (Serverless) Solusi mudah, murah, dan cepat untuk melaporkan potensi bahaya di lingkungan kerja. Tanpa biaya server bulanan!

(Ganti gambar di atas dengan screenshot Dashboard Admin Anda. Buat folder bernama "screenshots" di repo Anda)

✨ Fitur Utama

📱 Mode User (Mobile First)

Lapor Cepat: Form intuitif (Lokasi, Kategori, Foto) < 30 detik.

Smart Upload: Foto otomatis terupload ke Google Drive.

Feed Real-time: Transparansi laporan antar warga.

Statistik Warga: Counter partisipasi pelaporan.

🔒 Mode Admin (Dashboard)

Monitoring: Grafik & Tabel status laporan (Open, In Progress, Done).

Manajemen: Update status & hapus laporan sampah.

Bukti Visual: Tombol langsung menuju bukti foto.

Secure: Login simpel via Google Sheet database.

📸 Galeri Tampilan

Tampilan Pelapor (HP)

Tampilan Dashboard (Admin)

Formulir Laporan

Manajemen Data

🛠️ Teknologi

Frontend: HTML5, Tailwind CSS, Vanilla JS.

Backend: Google Apps Script (GAS).

Database: Google Spreadsheet.

Storage: Google Drive.

🚀 Cara Instalasi (Cloning)

Ikuti 4 langkah mudah ini untuk memiliki sistem K3 sendiri.

1️⃣ Persiapan Database (Google Sheet)

Buat Spreadsheet baru di Google Sheets.

Buat 2 Tab dengan nama persis: Reports dan Settings.

Isi Header (Baris 1) sebagai berikut:

Tab: Reports
| id | category | location | description | status | userId | timestamp | imageUrl |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| (biarkan kosong) | ... | ... | ... | ... | ... | ... | ... |

Tab: Settings
| key | value |
| :--- | :--- |
| admin_password | rahasia123 |

(Ganti rahasia123 dengan password admin yang Anda inginkan)

2️⃣ Setup Backend

Di Google Sheet, klik Extensions > Apps Script.

Paste kode backend-script.js ke Code.gs.

Simpan dan Jalankan fungsi test untuk memberikan izin akses Drive & Sheet (Authorization).

3️⃣ Deploy Web App

Klik tombol biru Deploy > New Deployment.

Pilih type: Web App.

Konfigurasi:

Execute as: Me (Email Anda).

Who has access: Anyone (Siapa saja).

Klik Deploy dan Copy URL yang muncul.

4️⃣ Setup Frontend

Buka file index.html di text editor.

Cari baris kode berikut (sekitar baris 580):

const SCRIPT_URL = 'PASTE_URL_WEB_APP_ANDA_DISINI';

Paste URL dari langkah 3 ke situ.

Buka index.html di browser. Selesai! 🎉

🤝 Kontribusi

Project ini Open Source (MIT License). Silakan Fork dan kembangkan fitur baru seperti notifikasi WA atau Export PDF!

Dibuat dengan ❤️ untuk keselamatan kerja.
