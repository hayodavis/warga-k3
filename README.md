
# 👷‍♂️ Warga K3 - Sistem Pelaporan Bahaya

Sistem Pelaporan K3 Berbasis Web (Serverless) Solusi mudah, murah, dan cepat untuk melaporkan potensi bahaya di lingkungan kerja. Tanpa biaya server bulanan!

(Ganti gambar di atas dengan screenshot Dashboard Admin Anda. Buat folder bernama "screenshots" di repo Anda)

# ✨Fitur Utama

## 📱 Mode User (Mobile First)

- Lapor Cepat: Form intuitif (Lokasi, Kategori, Foto) < 30 detik.
- Smart Upload: Foto otomatis terupload ke Google Drive.
- Feed Real-time: Transparansi laporan antar warga.
- Statistik Warga: Counter partisipasi pelaporan.

## 🔒 Mode Admin (Dashboard)

- Monitoring: Grafik & Tabel status laporan (Open, In Progress, Done).
- Manajemen: Update status & hapus laporan sampah.
- Bukti Visual: Tombol langsung menuju bukti foto.
- Secure: Login simpel via Google Sheet database.


## 📸 Galeri Tampilan

![Tampilan Pelapor (HP)](https://github.com/hayodavis/warga-k3/blob/main/screenshoot/Warga%20K3%20-%20Mobile.png)

![Tampilan Dashboard (Admin)](https://github.com/hayodavis/warga-k3/blob/main/screenshoot/Warga%20K3%20-%20Dekstop%20or%20Tablet.png)


## 🛠️ Teknologi

**Frontend:** HTML5, Tailwind CSS, Vanilla JS.

**Backend:** Google Apps Script (GAS).

**Database:** Google Spreadsheet.

**Storage:** Google Drive.



## 🚀 Cara Instalasi (Cloning)

#### 1️⃣ Persiapan Database (Google Sheet)

###### 1. Buat Spreadsheet baru di Google Sheets.
###### 2. Buat 2 Tab dengan nama persis: **Reports** dan **Settings**.
###### 3. Isi Header (Baris 1) sebagai berikut:

__sheets: Reports__
| id | category | location | description | status | userId | timestamp | imageUrl |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| (biarkan kosong) | ... | ... | ... | ... | ... | ... | ... |

__sheets: Settings__
| key | value |
| :--- | :--- |
| admin_password | rahasia123 |

*(Ganti rahasia123 dengan password admin yang Anda inginkan)*

#### 2️⃣ Setup Backend

###### 1. Di Google Sheet, **klik Extensions > Apps Script.**
###### 2. Paste kode *Code.gs* ke apps script.
###### 3. Simpan dan Jalankan fungsi test untuk memberikan izin akses Drive & Sheet (Authorization).

#### 3️⃣ Deploy Web App

###### 1. Klik tombol biru **Deploy > New Deployment**.
###### 2. Pilih type: **Web App**.
###### 3. Konfigurasi: **Execute as:** Me (Email Anda) dan **Who has access:** Anyone (Siapa saja).
###### 4. Klik **Deploy** dan **Copy URL** yang muncul.

#### 4️⃣ Setup Frontend
###### 1. Buka file *index.html* di text editor.
###### 2. Cari baris kode berikut (sekitar baris 580):
###### 3. Paste URL dari langkah 3 ke situ.
```bash
  const SCRIPT_URL = 'PASTE_URL_WEB_APP_ANDA_DISINI';
```
###### 4. Buka index.html di browser. Selesai! 🎉




## 🤝 Kontribusi

Project ini didekasikan untuk **Lomba Inovasi K3 2026** yang diselenggarakan oleh **Dewan K3 Provinsi Jawa Timur.** Kami mengundang Anda untuk melakukan Clone dan mengimplementasikannya di instansi masing-masing guna menciptakan lingkungan kerja yang lebih aman. Mari berkolaborasi—silakan Fork project ini untuk mengembangkan fitur baru seperti integrasi Notifikasi WhatsApp atau sistem Ekspor Laporan ke PDF!

*Dibuat dengan ❤️ untuk Jawa Timur yang lebih selamat.*
    