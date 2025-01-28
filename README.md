# **Manajemen Data K3**

Proyek ini adalah sistem manajemen data untuk Keamanan dan Kesehatan Kerja (K3). Sistem ini memungkinkan pengguna untuk mengelola berbagai jenis data seperti struktur organisasi, personel ahli K3, rekap data K3, kecelakaan kerja, dan kejadian darurat.

## **Fitur Utama**

1. **Manajemen Struktur Organisasi**
   - Tambah, edit, hapus, dan pencarian data struktur organisasi.
   - Fitur pagination untuk mempermudah navigasi data.

2. **Manajemen Personel Ahli K3**
   - Tambah, edit, hapus, dan pencarian personel ahli.
   - Fitur pagination dan filter untuk menemukan data dengan mudah.

3. **Rekap Data K3**
   - Kelola rekapitulasi data tahunan dan bulanan K3.
   - Mendukung pagination dan pencarian dengan banyak kata kunci.

4. **Manajemen Kecelakaan Kerja**
   - Tambah, edit, hapus data kecelakaan kerja.
   - Fitur filter pencarian berdasarkan berbagai kriteria (tanggal, nama, NIK, dsb.).

5. **Manajemen Kejadian Darurat**
   - Kelola data kejadian darurat, termasuk upload bukti (*evidence*).
   - Sistem validasi file untuk format PDF, PNG, dan JPG.

6. **UI Dinamis dengan Tabs**
   - Sistem navigasi berbasis tab untuk mempermudah akses ke berbagai bagian sistem.
   - Desain responsif dan menarik.

---

## **Teknologi yang Digunakan**

- **Frontend:**
  - HTML5, CSS3, JavaScript (Vanilla)
  - Dynamic UI menggunakan event listeners
  - Pagination dan efek transisi animasi

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB / MySQL (sesuaikan dengan konfigurasi)

- **Lainnya:**
  - Fetch API untuk komunikasi client-server
  - Validasi data di frontend dan backend

---

## **Cara Menjalankan Proyek**

### **Prasyarat**
- Node.js (v14 atau lebih baru)
- Database (MongoDB/MySQL/PostgreSQL)

### **Langkah-Langkah**
1. **Clone Repository**
   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name
2. **Install Dependencies** Jalankan perintah berikut untuk menginstal semua dependensi backend
	 ```bash
	 npm install

3. **Konfigurasi Database**
Proyek ini menggunakan **PostgreSQL** sebagai basis data. Berikut adalah konfigurasi untuk koneksi ke database.
**Kode Konfigurasi**
```javascript
const { Client } = require('pg');

// Inisiasi koneksi ke database
const db = new Client({
    user: 'jasmar-p2k3_owner',             // Username database
    host: 'ep-damp-credit-a1i2s10u.ap-southeast-1.aws.neon.tech', // Host database
    database: '',              		  // Nama database
    password: '',            		  // Password untuk database
    port: 5432,                           // Port default PostgreSQL
    ssl: {
        rejectUnauthorized: false,        // Pengaturan SSL untuk koneksi aman
    },
});

// Koneksi ke database
db.connect()
    .then(() => console.log('Koneksi ke database berhasil!'))
    .catch(err => console.error('Koneksi ke database gagal:', err.stack));

module.exports = db;

```

4. **Jalankan Server**
   Setelah semua dependensi diinstal dan database dikonfigurasi, jalankan server menggunakan perintah berikut:
   Server akan berjalan secara default di `http://localhost:3000`.
   ```bash
   npm start
5. **Akses Aplikasi** Buka browser Anda dan akses URL berikut
   ```bash
   http://localhost:3000

## **Cara Menjalankan Proyek**
   ```bash
   ├── public/                     # Folder untuk file statis (HTML, CSS, JS)
│   ├── css/                    # File CSS
│   ├── js/                     # File JavaScript frontend
│   ├── images/                 # Gambar untuk tampilan UI
├── routes/                     # Folder untuk rute API
│   ├── strukturRoutes.js       # Rute untuk Struktur Organisasi
│   ├── personelRoutes.js       # Rute untuk Personel Ahli K3
│   ├── rekapRoutes.js          # Rute untuk Rekap Data K3
│   ├── kecelakaanRoutes.js     # Rute untuk Kecelakaan Kerja
│   ├── kejadianRoutes.js       # Rute untuk Kejadian Darurat
├── models/                     # Model untuk database
│   ├── strukturModel.js        # Model untuk Struktur Organisasi
│   ├── personelModel.js        # Model untuk Personel Ahli K3
│   ├── rekapModel.js           # Model untuk Rekap Data K3
│   ├── kecelakaanModel.js      # Model untuk Kecelakaan Kerja
│   ├── kejadianModel.js        # Model untuk Kejadian Darurat
├── .env                        # File konfigurasi environment (jika digunakan dotenv)
├── app.js                      # File utama untuk konfigurasi Express
├── database.js                 # Konfigurasi koneksi database
├── package.json                # File konfigurasi Node.js
└── README.md                   # Dokumentasi proyek
```
## **Fitur Keamanan**
1. **Validasi Input**: Semua data yang masuk divalidasi untuk menghindari SQL Injection atau kesalahan data.
2. **SSL Connection**: Koneksi ke database menggunakan SSL untuk keamanan tambahan.
3. **Environment Variables**: Informasi sensitif seperti username, password, dan host database disimpan di file `.env`.
## **Endpoint API**
### **Struktur Organisasi**
-  **GET /getstruktur**: Mendapatkan semua data struktur organisasi.
-   **POST /addstruktur**: Menambahkan data struktur organisasi.
-   **PUT /updatestruktur**: Memperbarui data struktur organisasi.
-   **DELETE /deletestruktur**: Menghapus data struktur organisasi.
### **Personel Ahli K3**
-   **GET /getpersonel**: Mendapatkan semua data personel ahli K3.
-   **POST /addpersonel**: Menambahkan data personel ahli K3.
-   **PUT /updatepersonel**: Memperbarui data personel ahli K3.
-   **DELETE /deletepersonel**: Menghapus data personel ahli K3.
### **Rekap Data K3**
-   **GET /getrekap**: Mendapatkan semua rekap data K3.
-   **POST /addrekap**: Menambahkan rekap data K3.
-   **PUT /updaterekap**: Memperbarui rekap data K3.
-   **DELETE /deleterekap**: Menghapus rekap data K3.
### **Kecelakaan Kerja**
-   **GET /getkecelakaankerja**: Mendapatkan semua data kecelakaan kerja.
-   **POST /addkecelakaankerja**: Menambahkan data kecelakaan kerja.
-   **PUT /updatekecelakaan**: Memperbarui data kecelakaan kerja.
-   **DELETE /deletekecelakaan**: Menghapus data kecelakaan kerja.
### **Kejadian Darurat**
-   **GET /getkejadian**: Mendapatkan semua data kejadian darurat.
-   **POST /addkejadian**: Menambahkan data kejadian darurat.
-   **PUT /updatekejadian**: Memperbarui data kejadian darurat.
-   **DELETE /deletekejadian**: Menghapus data kejadian darurat.
