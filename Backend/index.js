const express = require('express');
const session = require('express-session'); 
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('./configs/db.configs.js');
const path = require('path');
const cors = require('cors');

//file input handle
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Middleware (session)

app.use(cors({
    origin: '*', // Izinkan semua origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Izinkan metode HTTP yang diinginkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Izinkan header yang diinginkan
    optionsSuccessStatus: 200
}));


app.use(
    session({
        secret: 'ini contoh secret',
        saveUninitialized: false,
        resave: false
    })
);

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(express.static('public'));

app.use('/files', express.static(path.join(__dirname, 'uploads')));


// Route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Middleware for authorization
function authorizeUser(req, res, next) {
    if (req.session && req.session.userRole === 'user') { // Ensure 'userRole' matches the session name
        // User is authorized
        next();
    } else {
        // User is not authorized, redirect to denied.html
        res.redirect('/denied.html');
    }
}


function authorizeAdmin(req, res, next) {
    if (req.session && req.session.userRole === 'admin') { // Pastikan 'userRole' sesuai dengan nama di sesi
        // User is authorized
        next();
    } else {
        // User is not authorized, respond with JSON
        res.status(403).json({ message: 'Access denied. Unauthorized admin.' });
    }
}


// ROUTE REGISTER
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username dan Password wajib diisi' });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const result = await db.query(
        'INSERT INTO akun (username, password) VALUES ($1, $2)',
        [username, hashedPassword]
      );
  
      res.status(201).json({ message: 'Registrasi berhasil', data: result.rows[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan saat registrasi' });
    }
});

// ROUTE LOGIN
router.post('/login-encrypt', async (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT username, password FROM akun WHERE username = $1;';

    try {
        const results = await db.query(query, [username]);

        if (results.rowCount < 1) {
            return res.status(401).json({ message: 'Username salah', showItems: [] });
        }

        const { password: storedPassword } = results.rows[0];

        const isMatch = await bcrypt.compare(password, storedPassword);
        if (!isMatch) {
            return res.status(401).json({ message: 'Password salah', showItems: [] });
        }

        // Set session after successful login
        req.session.username = username;
        req.session.isLoggedIn = true;
        
        return res.status(200).json({
            message: "Login successful",
            showItems: results.rows
        });

    } catch (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Internal Server Error', showItems: [] });
    }
});

// ROUTE LOGOUT
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Logout failed');
        }
        res.send('Logout successful');
    });
});

// ROUTING TABEL STRUKTUR ORGANISASI
// GET Struktur Organisasi
router.get('/getstruktur', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM struktur_organisasi ORDER BY struktur_id');
        res.status(200).json({ message: 'Data Found', data: result.rows });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// ADD Struktur Organisasi
router.post('/addstruktur', async (req, res) => {
    const { nama, jabatan, posisi } = req.body;

    if (!nama || !jabatan || !posisi) {
        return res.status(400).json({ message: 'Nama, jabatan, dan posisi wajib diisi' });
    }

    try {
        await db.query(
            'INSERT INTO struktur_organisasi (nama, jabatan, posisi) VALUES ($1, $2, $3)',
            [nama, jabatan, posisi]
        );
        res.status(201).json({ message: 'Data berhasil ditambahkan' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ message: 'Error inserting data' });
    }
});

// UPDATE Struktur Organisasi
router.put('/updatestruktur', async (req, res) => {
    const { struktur_id, nama, jabatan, posisi } = req.body;

    if (!struktur_id || !nama || !jabatan || !posisi) {
        return res.status(400).json({ message: 'Semua field wajib diisi' });
    }

    try {
        const result = await db.query(
            'UPDATE struktur_organisasi SET nama = $1, jabatan = $2, posisi = $3 WHERE struktur_id = $4 RETURNING *',
            [nama, jabatan, posisi, struktur_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }

        res.status(200).json({ message: 'Data berhasil diperbarui', data: result.rows[0] });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Error updating data' });
    }
});

// DELETE Struktur Organisasi
router.delete('/deletestruktur', async (req, res) => {
    const { struktur_id } = req.body;

    if (!struktur_id) {
        return res.status(400).json({ message: 'ID struktur wajib diisi' });
    }

    try {
        const result = await db.query(
            'DELETE FROM struktur_organisasi WHERE struktur_id = $1',
            [struktur_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }

        res.status(200).json({ message: 'Data berhasil dihapus', data: result.rows[0] });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Error deleting data' });
    }
});

// DELETE MULTIPLE DATA STRUKTUR
router.delete('/delete-multiple-struktur', async (req, res) => {
    const { ids } = req.body;
  
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "Tidak ada ID yang diterima untuk dihapus." });
    }
  
    try {
      const placeholders = ids.map((_, index) => `$${index + 1}`).join(", ");
      const query = `DELETE FROM struktur_organisasi WHERE struktur_id IN (${placeholders})`;
      await db.query(query, ids);
  
      res.status(200).json({ message: "Data berhasil dihapus." });
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).json({ message: "Error deleting data." });
    }
});


// ROUTING TABEL STRUKTUR ORGANISASI TIM TANGGAP DARURAT
// GET Struktur Organisasi Tanggap
router.get("/getstruktur_tanggap", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM struktur_organisasi_tanggap ORDER BY struktur_tanggap_id");
        res.status(200).json({ message: "Data Found", data: result.rows });
    } catch (error) {
        console.error("Error fetching Struktur Tanggap data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

// ADD Struktur Organisasi Tanggap
router.post("/addstruktur_tanggap", async (req, res) => {
    const { nama_tanggap, jabatan_tanggap, posisi_tanggap } = req.body;

    if (!nama_tanggap || !jabatan_tanggap || !posisi_tanggap) {
        return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    try {
        await db.query(
            "INSERT INTO struktur_organisasi_tanggap (nama_tanggap, jabatan_tanggap, posisi_tanggap) VALUES ($1, $2, $3)",
            [nama_tanggap, jabatan_tanggap, posisi_tanggap]
        );
        res.status(201).json({ message: "Data berhasil ditambahkan" });
    } catch (error) {
        console.error("Error adding Struktur Tanggap data:", error);
        res.status(500).json({ message: "Error adding data" });
    }
});

// UPDATE Struktur Organisasi Tanggap
router.put("/updatestruktur_tanggap", async (req, res) => {
    const { struktur_tanggap_id, nama_tanggap, jabatan_tanggap, posisi_tanggap } = req.body;

    if (!struktur_tanggap_id || !nama_tanggap || !jabatan_tanggap || !posisi_tanggap) {
        return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    try {
        const query = `
            UPDATE struktur_organisasi_tanggap
            SET nama_tanggap = $1, jabatan_tanggap = $2, posisi_tanggap = $3
            WHERE struktur_tanggap_id = $4
        `;
        const values = [nama_tanggap, jabatan_tanggap, posisi_tanggap, struktur_tanggap_id];

        await db.query(query, values);
        res.status(200).json({ message: "Data berhasil diperbarui" });
    } catch (error) {
        console.error("Error updating Struktur Tanggap data:", error);
        res.status(500).json({ message: "Error updating data" });
    }
});

// DELETE Struktur Organisasi Tanggap
router.delete("/deletestruktur_tanggap", async (req, res) => {
    const { struktur_tanggap_id } = req.body;

    if (!struktur_tanggap_id) {
        return res.status(400).json({ message: "ID wajib diisi" });
    }

    try {
        const result = await db.query(
            "DELETE FROM struktur_organisasi_tanggap WHERE struktur_tanggap_id = $1",
            [struktur_tanggap_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }

        res.status(200).json({ message: "Data berhasil dihapus" });
    } catch (error) {
        console.error("Error deleting Struktur Tanggap data:", error);
        res.status(500).json({ message: "Error deleting data" });
    }
});

// DELETE MULTIPLE Struktur Organisasi Tanggap
router.delete("/delete-multiple-struktur_tanggap", async (req, res) => {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ message: "Tidak ada ID yang diterima untuk dihapus." });
    }

    try {
        const placeholders = ids.map((_, index) => `$${index + 1}`).join(", ");
        const query = `DELETE FROM struktur_organisasi_tanggap WHERE struktur_tanggap_id IN (${placeholders})`;

        await db.query(query, ids);
        res.status(200).json({ message: "Data berhasil dihapus." });
    } catch (error) {
        console.error("Error deleting Struktur Tanggap data:", error);
        res.status(500).json({ message: "Error deleting data." });
    }
});


// ROUTING TABEL PERSONEL K3
// GET PERSONEL
router.get('/getpersonel', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM personel_k3 ORDER BY personel_k3_id');
        res.status(200).json({ message: 'Data Found', data: result.rows });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});


// ADD PERSONEL
router.post("/addpersonel", async (req, res) => {
    const { nama, keahlian, batas_masa_berlaku } = req.body;
  
    if (!nama || !keahlian || !batas_masa_berlaku) {
      return res.status(400).json({ message: "Semua field wajib diisi" });
    }
  
    try {
      await db.query(
        "INSERT INTO personel_k3 (nama, keahlian, batas_masa_berlaku) VALUES ($1, $2, $3)",
        [nama, keahlian, batas_masa_berlaku]
      );
      res.status(201).json({ message: "Data berhasil ditambahkan" });
    } catch (error) {
      console.error("Error adding personel data:", error);
      res.status(500).json({ message: "Error adding data" });
    }
});

// UPDATE PERSONEL
router.put("/updatepersonel", async (req, res) => {
    const { personel_k3_id, nama, keahlian, batas_masa_berlaku } = req.body;

    //console.log("Received data:", req.body); // Log data yang diterima

    if (!personel_k3_id || !nama || !keahlian || !batas_masa_berlaku) {
        return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    try {
        const query = `
            UPDATE personel_k3
            SET nama = $1, keahlian = $2, batas_masa_berlaku = $3
            WHERE personel_k3_id = $4
        `;
        const values = [nama, keahlian, batas_masa_berlaku, personel_k3_id];

        await db.query(query, values);
        res.status(200).json({ message: "Data berhasil diperbarui" });
    } catch (error) {
        console.error("Error updating personel data:", error.message);
        res.status(500).json({ message: "Error updating data" });
    }
});

// DELETE PERSONEL
router.delete('/deletepersonel', async (req, res) => {
    const { personel_k3_id } = req.body;

    if (!personel_k3_id) {
        return res.status(400).json({ message: 'ID struktur wajib diisi' });
    }

    try {
        const result = await db.query(
            'DELETE FROM personel_k3 WHERE personel_k3_id = $1',
            [personel_k3_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }

        res.status(200).json({ message: 'Data berhasil dihapus', data: result.rows[0] });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Error deleting data' });
    }
});

// DELETE MULTIPLE DATA PERSONEL
router.delete('/delete-multiple-personel', async (req, res) => {
    const { ids } = req.body;

    // Validasi input
    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ message: "Tidak ada ID yang diterima untuk dihapus." });
    }

    try {
        // Buat placeholder untuk query
        const placeholders = ids.map((_, index) => `$${index + 1}`).join(", ");
        const query = `DELETE FROM personel_k3 WHERE personel_k3_id IN (${placeholders})`;

        // Eksekusi query dengan array ID
        await db.query(query, ids);

        res.status(200).json({ message: "Data berhasil dihapus." });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ message: "Error deleting data." });
    }
});


// ROUTING TABEL REKAP DATA P2K3
// GET REKAP
router.get("/getrekap", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM rekap_data_k3 ORDER BY rekapdata_id DESC");
        res.status(200).json({ data: result.rows });
    } catch (error) {
        console.error("Error fetching Rekap Data K3:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

// ADD REKAP
// ADD REKAP DATA
router.post("/addrekap", async (req, res) => {
    const { tahun, bulan } = req.body;

    const jumlah_hari_kerja = Number(req.body.jumlah_hari_kerja);
    const jumlah_karyawan = Number(req.body.jumlah_karyawan);
    const kecelakaan_berat = Number(req.body.kecelakaan_berat);
    const kecelakaan_ringan = Number(req.body.kecelakaan_ringan);
    const kecelakaan_meninggal = Number(req.body.kecelakaan_meninggal);
    const near_miss = Number(req.body.near_miss);
    const fire_accident = Number(req.body.fire_accident);
    const damaged_property = Number(req.body.damaged_property);
    const jumlah_hari_hilang = Number(req.body.jumlah_hari_hilang);


    try {
        const jumlah_jam_kerja = jumlah_hari_kerja * 8;
        const jumlah_hari_tanpa_hilang = jumlah_karyawan * jumlah_hari_kerja;
        const lti = jumlah_hari_hilang * 8;
        const man_hour = jumlah_karyawan * 8 * jumlah_hari_kerja;
        const total_kecelakaan = kecelakaan_berat + kecelakaan_ringan + kecelakaan_meninggal + near_miss + fire_accident + damaged_property;

        const frequency_rate = (total_kecelakaan * 1000000) / (man_hour || 1); // Hindari pembagian dengan nol
        const severity_rate = (jumlah_hari_hilang * 1000000) / (man_hour || 1);

        //const inchident_rate = ((total_kecelakaan / jumlah_karyawan) * 10000);
        const inchident_rate = ((total_kecelakaan / jumlah_karyawan) * 100).toFixed(2);



        const atlr = jumlah_hari_hilang / (total_kecelakaan || 1);

        await db.query(
            `INSERT INTO rekap_data_k3 (
                tahun, bulan, jumlah_jam_kerja, jumlah_hari_kerja, jumlah_karyawan,
                kecelakaan_berat, kecelakaan_ringan, kecelakaan_meninggal, near_miss,
                fire_accident, damaged_property, jumlah_hari_hilang, jumlah_hari_tanpa_hilang, lti, man_hour,
                frequency_rate, severity_rate, inchident_rate, atlr
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`,
            [
                tahun, bulan, jumlah_jam_kerja, jumlah_hari_kerja, jumlah_karyawan,
                kecelakaan_berat, kecelakaan_ringan, kecelakaan_meninggal, near_miss,
                fire_accident, damaged_property, jumlah_hari_hilang, jumlah_hari_tanpa_hilang, lti, man_hour,
                frequency_rate, severity_rate, inchident_rate, atlr
            ]
        );
        res.status(201).json({ message: "Data berhasil ditambahkan dengan perhitungan otomatis" });
        
    } catch (error) {
        console.error("Error adding Rekap Data K3:", error);
        res.status(500).json({ message: "Error adding data" });
    }
});



// UPDATE REKAP
// Route untuk update Rekap Data K3
router.put("/updaterekap", async (req, res) => {
    const {
        rekapdata_id,
        tahun,
        bulan

    } = req.body;

    const jumlah_hari_kerja = Number(req.body.jumlah_hari_kerja);
    const jumlah_karyawan = Number(req.body.jumlah_karyawan);
    const kecelakaan_berat = Number(req.body.kecelakaan_berat);
    const kecelakaan_ringan = Number(req.body.kecelakaan_ringan);
    const kecelakaan_meninggal = Number(req.body.kecelakaan_meninggal);
    const near_miss = Number(req.body.near_miss);
    const fire_accident = Number(req.body.fire_accident);
    const damaged_property = Number(req.body.damaged_property);
    const jumlah_hari_hilang = Number(req.body.jumlah_hari_hilang);

    // Validasi input
    if (!rekapdata_id || !tahun || !bulan || !jumlah_hari_kerja || !jumlah_karyawan) {
        return res.status(400).json({
            message: "Field rekapdata_id, tahun, bulan, jumlah_hari_kerja, dan jumlah_karyawan wajib diisi"
        });
    }

    try {
        // Perhitungan formulasi
        const jumlah_jam_kerja = jumlah_hari_kerja * 8;
        const jumlah_hari_tanpa_hilang = jumlah_karyawan * jumlah_hari_kerja;
        const lti = jumlah_hari_hilang * 8;
        const man_hour = jumlah_karyawan * 8 * jumlah_hari_kerja;
        const total_kecelakaan = kecelakaan_berat + kecelakaan_ringan + kecelakaan_meninggal + near_miss + fire_accident + damaged_property;

        const frequency_rate = (total_kecelakaan * 1000000) / (man_hour || 1); // Hindari pembagian dengan nol
        const severity_rate = (jumlah_hari_hilang * 1000000) / (man_hour || 1);

        //const inchident_rate = ((total_kecelakaan / jumlah_karyawan) * 10000);
        const inchident_rate = ((total_kecelakaan / jumlah_karyawan) * 100);



        const atlr = jumlah_hari_hilang / (total_kecelakaan || 1);

        // Update data ke database
        await db.query(
            `UPDATE rekap_data_k3 SET 
                tahun = $1,
                bulan = $2,
                jumlah_jam_kerja = $3,
                jumlah_hari_kerja = $4,
                jumlah_karyawan = $5,
                kecelakaan_berat = $6,
                kecelakaan_ringan = $7,
                kecelakaan_meninggal = $8,
                near_miss = $9,
                fire_accident = $10,
                damaged_property = $11,
                jumlah_hari_hilang = $12,
                jumlah_hari_tanpa_hilang = $13,
                lti = $14,
                man_hour = $15,
                frequency_rate = $16,
                severity_rate = $17,
                inchident_rate = $18,
                atlr = $19
            WHERE rekapdata_id = $20`,
            [
                tahun,
                bulan,
                jumlah_jam_kerja,
                jumlah_hari_kerja,
                jumlah_karyawan,
                kecelakaan_berat,
                kecelakaan_ringan,
                kecelakaan_meninggal,
                near_miss,
                fire_accident,
                damaged_property,
                jumlah_hari_hilang,
                jumlah_hari_tanpa_hilang,
                lti,
                man_hour,
                frequency_rate,
                severity_rate,
                inchident_rate,
                atlr,
                rekapdata_id
            ]
        );

        res.status(200).json({ message: "Data berhasil diperbarui dengan perhitungan otomatis" });
    } catch (error) {
        console.error("Error updating Rekap Data K3:", error);
        res.status(500).json({ message: "Error updating data" });
    }
});


// DELETE REKAP
router.delete("/deleterekap", async (req, res) => {
    const { rekapdata_id } = req.body;

    if (!rekapdata_id) {
        return res.status(400).json({ message: "ID Rekap Data wajib diisi" });
    }

    try {
        await db.query("DELETE FROM rekap_data_k3 WHERE rekapdata_id = $1", [rekapdata_id]);
        res.status(200).json({ message: "Data berhasil dihapus" });
    } catch (error) {
        console.error("Error deleting Rekap Data K3:", error);
        res.status(500).json({ message: "Error deleting data" });
    }
});

// DELETE MULTIPLE DATA REKAP
router.delete('/delete-multiple-rekap', async (req, res) => {
    const { ids } = req.body;

    // Validasi input
    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ message: "Tidak ada ID yang diterima untuk dihapus." });
    }

    try {
        // Buat placeholder untuk query
        const placeholders = ids.map((_, index) => `$${index + 1}`).join(", ");
        const query = `DELETE FROM rekap_data_k3 WHERE rekapdata_id IN (${placeholders})`;

        // Eksekusi query dengan array ID
        await db.query(query, ids);

        res.status(200).json({ message: "Data berhasil dihapus." });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ message: "Error deleting data." });
    }
});


// ROUTING TABEL KECELAKAAN KERJA
// GET Kecelakaan Kerja
router.get('/getkecelakaankerja', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM kecelakaan_kerja ORDER BY tanggal DESC');
        res.status(200).json({ message: 'Data Found', data: result.rows });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// ADD Kecelakaan Kerja
router.post('/addkecelakaankerja', async (req, res) => {
    const {
        tanggal,
        nik,
        nama,
        jabatan,
        unit,
        tempat_kejadian,
        kategori_kecelakaan,
        tindak_lanjut,
        perawatan_rs,
        keterangan
    } = req.body;

    if (!tanggal || !nama || !kategori_kecelakaan) {
        return res.status(400).json({ message: 'Tanggal, Nama, dan Kategori Kecelakaan wajib diisi' });
    }

    try {
        await db.query(
            `INSERT INTO kecelakaan_kerja (tanggal, nik, nama, jabatan, unit, tempat_kejadian, kategori_kecelakaan, tindak_lanjut, perawatan_rs, keterangan)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [tanggal, nik, nama, jabatan, unit, tempat_kejadian, kategori_kecelakaan, tindak_lanjut, perawatan_rs, keterangan]
        );
        res.status(201).json({ message: 'Data kecelakaan kerja berhasil ditambahkan' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ message: 'Error inserting data' });
    }
});

// UPDATE Kecelakaan Kerja
router.put('/updatekecelakaan', async (req, res) => {
    const {
        kecelakaankerja_id,
        tanggal,
        nik,
        nama,
        jabatan,
        unit,
        tempat_kejadian,
        kategori_kecelakaan,
        tindak_lanjut,
        perawatan_rs,
        keterangan
    } = req.body;

    if (!kecelakaankerja_id || !tanggal || !nama || !kategori_kecelakaan) {
        return res.status(400).json({ message: 'Semua field wajib diisi' });
    }

    try {
        const result = await db.query(
            `UPDATE kecelakaan_kerja
             SET tanggal = $1, nik = $2, nama = $3, jabatan = $4, unit = $5, tempat_kejadian = $6, kategori_kecelakaan = $7, tindak_lanjut = $8, perawatan_rs = $9, keterangan = $10
             WHERE kecelakaankerja_id = $11 RETURNING *`,
            [tanggal, nik, nama, jabatan, unit, tempat_kejadian, kategori_kecelakaan, tindak_lanjut, perawatan_rs, keterangan, kecelakaankerja_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }

        res.status(200).json({ message: 'Data kecelakaan kerja berhasil diperbarui', data: result.rows[0] });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Error updating data' });
    }
});

// DELETE Kecelakaan Kerja
router.delete('/deletekecelakaan', async (req, res) => {
    const { kecelakaankerja_id } = req.body;

    if (!kecelakaankerja_id) {
        return res.status(400).json({ message: 'ID Kecelakaan Kerja wajib diisi' });
    }

    try {
        const result = await db.query(
            'DELETE FROM kecelakaan_kerja WHERE kecelakaankerja_id = $1',
            [kecelakaankerja_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }

        res.status(200).json({ message: 'Data kecelakaan kerja berhasil dihapus', data: result.rows[0] });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Error deleting data' });
    }
});


router.delete('/delete-multiple-kecelakaan', async (req, res) => {
    const { ids } = req.body;
  
    // Validasi input
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "Tidak ada ID yang diterima untuk dihapus." });
    }
  
    try {
      // Buat placeholder untuk query
      const placeholders = ids.map((_, index) => `$${index + 1}`).join(", ");
      const query = `DELETE FROM kecelakaan_kerja WHERE kecelakaankerja_id IN (${placeholders})`;
  
      // Eksekusi query dengan array ID
      await db.query(query, ids);
  
      res.status(200).json({ message: "Data berhasil dihapus." });
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).json({ message: "Error deleting data." });
    }
  });
  


// ROUTING TABEL KEJADIAN DARURAT
// GET KEJADIAN DARURAT
router.get('/getkejadian', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM kejadian_darurat ORDER BY kejadian_id');
        const kejadianData = result.rows.map((item) => {
            const base64Evidence = item.evidence
                ? `data:image/jpeg;base64,${item.evidence.toString('base64')}`
                : null;

            return {
                ...item,
                evidence: base64Evidence,
            };
        });

        res.status(200).json({ message: 'Data Found', data: kejadianData });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});




// ADD KEJADIAN DARURAT
router.post('/addkejadian', upload.single('evidence'), async (req, res) => {
    //console.log('Body:', req.body);
    //console.log('File:', req.file);

    const { kejadian_darurat, lokasi, kronologi_kejadian, tindak_lanjut } = req.body;
    const evidence = req.file ? req.file.buffer : null;

    if (!kejadian_darurat || !lokasi || !kronologi_kejadian || !tindak_lanjut) {
        return res.status(400).json({ message: 'Semua field wajib diisi' });
    }

    try {
        await db.query(
            'INSERT INTO kejadian_darurat (kejadian_darurat, lokasi, kronologi_kejadian, tindak_lanjut, evidence) VALUES ($1, $2, $3, $4, $5)',
            [kejadian_darurat, lokasi, kronologi_kejadian, tindak_lanjut, evidence]
        );
        res.status(201).json({ message: 'Data berhasil ditambahkan' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ message: 'Error inserting data' });
    }
});

  


// UPDATE KEJADIAN DARURAT
router.put("/updatekejadian", upload.single("evidence"), async (req, res) => {
  const { kejadian_id, kejadian_darurat, lokasi, kronologi_kejadian, tindak_lanjut } = req.body;
  const evidence = req.file ? req.file.buffer : null;

  if (!kejadian_id || !kejadian_darurat || !lokasi || !kronologi_kejadian || !tindak_lanjut) {
    return res.status(400).json({ message: "Semua field wajib diisi." });
  }

  try {
    if (evidence) {
      // Update dengan evidence baru
      await db.query(
        "UPDATE kejadian_darurat SET kejadian_darurat = $1, lokasi = $2, kronologi_kejadian = $3, tindak_lanjut = $4, evidence = $5 WHERE kejadian_id = $6",
        [kejadian_darurat, lokasi, kronologi_kejadian, tindak_lanjut, evidence, kejadian_id]
      );
    } else {
      // Update tanpa mengganti evidence
      await db.query(
        "UPDATE kejadian_darurat SET kejadian_darurat = $1, lokasi = $2, kronologi_kejadian = $3, tindak_lanjut = $4 WHERE kejadian_id = $5",
        [kejadian_darurat, lokasi, kronologi_kejadian, tindak_lanjut, kejadian_id]
      );
    }

    res.status(200).json({ message: "Data berhasil diperbarui." });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Error updating data." });
  }
});


// DELETE KEJADIAN DARURAT
router.delete('/deletekejadian', async (req, res) => {
    const { kejadian_id } = req.body;

    if (!kejadian_id) {
        return res.status(400).json({ message: 'ID kejadian wajib diisi' });
    }

    try {
        const result = await db.query(
            'DELETE FROM kejadian_darurat WHERE kejadian_id = $1',
            [kejadian_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }

        res.status(200).json({ message: 'Data berhasil dihapus', data: result.rows[0] });

    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Error deleting data' });
    }
});


// DELETE MULTIPLE DATA KEJADIAN DARURAT
router.delete('/delete-multiple-kejadian', async (req, res) => {
    const { ids } = req.body;

    // Validasi input
    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ message: "Tidak ada ID yang diterima untuk dihapus." });
    }

    try {
        // Buat placeholder untuk query
        const placeholders = ids.map((_, index) => `$${index + 1}`).join(", ");
        const query = `DELETE FROM kejadian_darurat WHERE kejadian_id IN (${placeholders})`;

        // Eksekusi query dengan array ID
        await db.query(query, ids);

        res.status(200).json({ message: "Data berhasil dihapus." });
    } catch (error) {
        console.error("Error deleting kejadian darurat data:", error);
        res.status(500).json({ message: "Error deleting data." });
    }
});



// ROUTING TABEL CHECKLIST K3
// GET CHECKLIST K3
router.get('/getchecklist', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM checklist_k3 ORDER BY checklist_id');
        const checklistData = result.rows.map((item) => {
            return {
                ...item,
                checklist_pemeriksaan: item.checklist_pemeriksaan
                    ? `data:image/jpeg;base64,${item.checklist_pemeriksaan.toString('base64')}`
                    : null,
                apar: item.apar
                    ? `data:image/jpeg;base64,${item.apar.toString('base64')}`
                    : null,
                rambu_apar: item.rambu_apar
                    ? `data:image/jpeg;base64,${item.rambu_apar.toString('base64')}`
                    : null,
                kelengkapan_box_hydrant: item.kelengkapan_box_hydrant
                    ? `data:image/jpeg;base64,${item.kelengkapan_box_hydrant.toString('base64')}`
                    : null,
                ruang_laktasi: item.ruang_laktasi
                    ? `data:image/jpeg;base64,${item.ruang_laktasi.toString('base64')}`
                    : null,
                ruang_p3k: item.ruang_p3k
                    ? `data:image/jpeg;base64,${item.ruang_p3k.toString('base64')}`
                    : null,
                organik: item.organik
                    ? `data:image/jpeg;base64,${item.organik.toString('base64')}`
                    : null,
                non_organik: item.non_organik
                    ? `data:image/jpeg;base64,${item.non_organik.toString('base64')}`
                    : null,
                limbah_b3: item.limbah_b3
                    ? `data:image/jpeg;base64,${item.limbah_b3.toString('base64')}`
                    : null,
                smoking_area: item.smoking_area
                    ? `data:image/jpeg;base64,${item.smoking_area.toString('base64')}`
                    : null,
                dll: item.dll
                    ? `data:image/jpeg;base64,${item.dll.toString('base64')}`
                    : null,
            };
        });

        res.status(200).json({ message: 'Data Found', data: checklistData });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});



// ADD KEJADIAN DARURAT
router.post('/addchecklist', upload.fields([
    { name: 'checklist_pemeriksaan' },
    { name: 'apar' },
    { name: 'rambu_apar' },
    { name: 'kelengkapan_box_hydrant' },
    { name: 'ruang_laktasi' },
    { name: 'ruang_p3k' },
    { name: 'organik' },
    { name: 'non_organik' },
    { name: 'limbah_b3' },
    { name: 'smoking_area' },
    { name: 'dll' }
]), async (req, res) => {
    const {
        section,
        indikator_k3,
        expired_date
    } = req.body;

    // Ambil file dari request
    const checklist_pemeriksaan = req.files['checklist_pemeriksaan'] ? req.files['checklist_pemeriksaan'][0].buffer : null;
    const apar = req.files['apar'] ? req.files['apar'][0].buffer : null;
    const rambu_apar = req.files['rambu_apar'] ? req.files['rambu_apar'][0].buffer : null;
    const kelengkapan_box_hydrant = req.files['kelengkapan_box_hydrant'] ? req.files['kelengkapan_box_hydrant'][0].buffer : null;
    const ruang_laktasi = req.files['ruang_laktasi'] ? req.files['ruang_laktasi'][0].buffer : null;
    const ruang_p3k = req.files['ruang_p3k'] ? req.files['ruang_p3k'][0].buffer : null;
    const organik = req.files['organik'] ? req.files['organik'][0].buffer : null;
    const non_organik = req.files['non_organik'] ? req.files['non_organik'][0].buffer : null;
    const limbah_b3 = req.files['limbah_b3'] ? req.files['limbah_b3'][0].buffer : null;
    const smoking_area = req.files['smoking_area'] ? req.files['smoking_area'][0].buffer : null;
    const dll = req.files['dll'] ? req.files['dll'][0].buffer : null;

    // Validasi input
    if (!section || !indikator_k3 || !expired_date) {
        return res.status(400).json({ message: 'Field section, indikator_k3, dan expired_date wajib diisi.' });
    }

    try {
        // Insert data ke database
        await db.query(
            `INSERT INTO checklist_k3 (
                section, indikator_k3, expired_date, checklist_pemeriksaan, apar,
                rambu_apar, kelengkapan_box_hydrant, ruang_laktasi, ruang_p3k,
                organik, non_organik, limbah_b3, smoking_area, dll
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
            [
                section,
                indikator_k3,
                expired_date,
                checklist_pemeriksaan,
                apar,
                rambu_apar,
                kelengkapan_box_hydrant,
                ruang_laktasi,
                ruang_p3k,
                organik,
                non_organik,
                limbah_b3,
                smoking_area,
                dll
            ]
        );

        res.status(201).json({ message: 'Data checklist K3 berhasil ditambahkan.' });
    } catch (error) {
        console.error('Error inserting data into checklist_k3:', error);
        res.status(500).json({ message: 'Error inserting data.' });
    }
});



router.put("/updatechecklist", upload.fields([
    { name: "checklist_pemeriksaan" },
    { name: "apar" },
    { name: "rambu_apar" },
    { name: "kelengkapan_box_hydrant" },
    { name: "ruang_laktasi" },
    { name: "ruang_p3k" },
    { name: "organik" },
    { name: "non_organik" },
    { name: "limbah_b3" },
    { name: "smoking_area" },
    { name: "dll" }
]), async (req, res) => {
    const { checklist_id, section, indikator_k3, expired_date } = req.body;
    const files = req.files;
    const fileColumns = [
        "checklist_pemeriksaan", "apar", "rambu_apar", "kelengkapan_box_hydrant",
        "ruang_laktasi", "ruang_p3k", "organik", "non_organik", "limbah_b3",
        "smoking_area", "dll"
    ];

    try {
        const updates = [];
        const values = [section, indikator_k3, expired_date, checklist_id];

        fileColumns.forEach((column) => {
            if (files[column]) {
                updates.push(`${column} = $${values.length + 1}`);
                values.push(files[column][0].buffer);
            }
        });

        const query = `
            UPDATE checklist_k3
            SET section = $1, indikator_k3 = $2, expired_date = $3
            ${updates.length ? `, ${updates.join(", ")}` : ""}
            WHERE checklist_id = $${values.length};
        `;

        await db.query(query, values);
        res.status(200).json({ message: "Data berhasil diperbarui." });
    } catch (error) {
        console.error("Error updating data:", error);
        res.status(500).json({ message: "Error updating data." });
    }
});




// DELETE Checklist K3
router.delete('/deletechecklist', async (req, res) => {
    const { checklist_id } = req.body;

    if (!checklist_id) {
        return res.status(400).json({ message: 'ID checklist wajib diisi' });
    }

    try {
        const result = await db.query(
            'DELETE FROM checklist_k3 WHERE checklist_id = $1',
            [checklist_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }

        res.status(200).json({ message: 'Data berhasil dihapus', data: result.rows[0] });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Error deleting data' });
    }
});


// DELETE MULTIPLE DATA CHECKLIST K3
router.delete('/delete-multiple-checklist', async (req, res) => {
    const { ids } = req.body;

    // Validasi input
    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ message: "Tidak ada ID yang diterima untuk dihapus." });
    }

    try {
        // Buat placeholder untuk query
        const placeholders = ids.map((_, index) => `$${index + 1}`).join(", ");
        const query = `DELETE FROM checklist_k3 WHERE checklist_id IN (${placeholders})`;

        // Eksekusi query dengan array ID
        await db.query(query, ids);

        res.status(200).json({ message: "Data berhasil dihapus." });
    } catch (error) {
        console.error("Error deleting checklist K3 data:", error);
        res.status(500).json({ message: "Error deleting data." });
    }
});



// ROUTE SESSION
router.get('/session', (req, res) => {
    if (req.session.userRole && req.session.ruas) {
        // Jika session aktif, kirim data session
        res.json({
            message: "Session aktif",
            sessionData: req.session
        });
    } else {
        // Jika tidak ada session, kirim respons bahwa session tidak aktif
        res.json({
            message: "Tidak ada session yang aktif",
            sessionData: null
        });
    }
});


app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});


