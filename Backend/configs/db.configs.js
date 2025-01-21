const { Client } = require('pg');


//Insiasi koneksi ke database
const db = new Client({
    user: 'jasmar-p2k3_owner',
    host: 'ep-damp-credit-a1i2s10u.ap-southeast-1.aws.neon.tech',
    database: 'jasmar-p2k3',
    password: '7waulqRQZ2yG',
    port: 5432,
    ssl: {
        rejectUnauthorized: false, // Atur SSL untuk koneksi aman
    },
});

//Melakukan koneksi dan menunjukkan indikasi database terhubung
db.connect((err) => {
    if (err) {
        console.error('Gagal terhubung ke database:', err.message);
        process.exit(1); // Keluar dari aplikasi jika koneksi gagal
    } else {
        console.log('Database JASMAR-P2K3 Connected');
    }
});

module.exports = db