-- Tabel Struktur Organisasi
CREATE TABLE struktur_organisasi (
    struktur_id SERIAL PRIMARY KEY,
    nama VARCHAR(50) ,
    jabatan VARCHAR(50),
    posisi VARCHAR(50),
    tanggal_input DATE DEFAULT CURRENT_DATE

);

-- Tabel Struktur Organisasi
CREATE TABLE struktur_organisasi_tanggap (
    struktur_tanggap_id SERIAL PRIMARY KEY,
    nama_tanggap VARCHAR(100) ,
    jabatan_tanggap VARCHAR(100),
    posisi_tanggap VARCHAR(100),
    tanggal_input_tanggap DATE DEFAULT CURRENT_DATE
);

-- Tabel Personel Ahli K3 & P3K
CREATE TABLE personel_k3 (
    personel_k3_id SERIAL PRIMARY KEY,           
    nama VARCHAR(50),   
    keahlian VARCHAR(100),     
    batas_masa_berlaku DATE
);

-- Tabel Rekap Data Kehilangan Jam Kerja & Kecelakaan
CREATE TABLE rekap_data_k3 (
    rekapdata_id SERIAL PRIMARY KEY,
    tahun INT
    bulan VARCHAR(50),
    jumlah_karyawan NUMERIC,
    jumlah_hari_kerja NUMERIC,
    jumlah_jam_kerja NUMERIC,
    kecelakaan_berat NUMERIC,
    kecelakaan_ringan NUMERIC,
    kecelakaan_meninggal NUMERIC,
    near_miss NUMERIC,
    fire_accident NUMERIC,
    damaged_property NUMERIC,
    jumlah_hari_hilang NUMERIC,
    jumlah_hari_tanpa_hilang NUMERIC,
    lti NUMERIC,
    man_hour NUMERIC,
    frequency_rate NUMERIC,
    severity_rate NUMERIC,
    inchident_rate NUMERIC,
    atlr NUMERIC
);

-- Tabel Kecelakaan K3
CREATE TABLE kecelakaan_kerja (
    kecelakaankerja_id SERIAL PRIMARY KEY,
    tanggal DATE,
    nik VARCHAR(20),
    nama VARCHAR(100),
    jabatan VARCHAR(50),
    unit VARCHAR(50),
    tempat_kejadian TEXT,
    kategori_kecelakaan VARCHAR(50),
    tindak_lanjut TEXT,
    perawatan_rs DATE,
    keterangan TEXT
);

-- Tabell Kejadian Kerja
CREATE TABLE kejadian_darurat (
    kejadian_id SERIAL PRIMARY KEY,
    kejadian_darurat VARCHAR(100),
    lokasi VARCHAR(100),
    kronologi_kejadian TEXT,
    tindak_lanjut TEXT,
    evidence BYTEA
);

-- Tabell Checklist K3
CREATE TABLE checklist_k3 (
    checklist_id SERIAL PRIMARY KEY,
    section TEXT,  
    indikator_k3 TEXT,
    expired_date BYTEA,
    checklist_pemeriksaan BYTEA,
    apar BYTEA,
    rambu_apar BYTEA,
    kelengkapan_box_hydrant BYTEA,
    ruang_laktasi BYTEA,
    ruang_p3k BYTEA,
    organik BYTEA,
    non_organik BYTEA,
    limbah_b3 BYTEA,
    smoking_area BYTEA,
    dll BYTEA
);

--Tabel Akun 
CREATE TABLE akun (
    akun_id SERIAL PRIMARY KEY,
    akun VARCHAR(100),
    pass TEXT
);

























