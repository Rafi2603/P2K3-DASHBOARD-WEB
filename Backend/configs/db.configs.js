const { Pool } = require('pg');

const pool = new Pool({
    user: 'jasmar-p2k3_owner',
    host: 'ep-damp-credit-a1i2s10u.ap-southeast-1.aws.neon.tech',
    database: 'jasmar-p2k3',
    password: '7waulqRQZ2yG',
    port: 5432,
    ssl: {
        rejectUnauthorized: false, // Neon perlu SSL
    },
    idleTimeoutMillis: 30000, // Disconnect client idle setelah 30 detik
    connectionTimeoutMillis: 5000, // Timeout jika koneksi lambat
});

// Handle error global dari pool
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    // Jangan lempar error agar proses Node tidak mati
});

(async () => {
    try {
        const client = await pool.connect();
        console.log('Database JASMAR-P2K3 Connected');
        client.release();
    } catch (err) {
        console.error('Gagal terhubung ke database:', err.message);
        process.exit(1);
    }
})();

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool,
};
