function populateDropdown(selectElementId, options) {
    const selectElement = document.getElementById(selectElementId);
    if (!selectElement) {
        console.error(`Element with ID ${selectElementId} not found.`);
        return;
    }

    // Clear existing options (if needed)
    selectElement.innerHTML = '<option value="" disabled selected>-- Pilihan --</option>';

    // Populate new options
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

// Panggil fungsi dengan data dari file dropdown-data.js
document.addEventListener("DOMContentLoaded", () => {
    populateDropdown("jabatan", jabatanOptions); // Untuk modal Tambah
    populateDropdown("posisi", posisiOptions); // Dropdown untuk tambah data
    populateDropdown("edit-jabatan", jabatanOptions); // Untuk modal Edit
    populateDropdown("edit-posisi", posisiOptions); // Dropdown untuk edit data


    populateDropdown("jabatan-tanggap", jabatanTanggapOptions, "Pilih Jabatan");
    populateDropdown("posisi-tanggap", posisiTanggapOptions, "Pilih Posisi");
    populateDropdown("edit-jabatan-tanggap", jabatanTanggapOptions, "Pilih Jabatan");
    populateDropdown("edit-posisi-tanggap", posisiTanggapOptions, "Pilih Posisi");

    populateDropdown("keahlian-personel", KeahlianOptions); // Untuk tambah data
    populateDropdown("keahlian-tambahan-personel", KeahlianOptions); // Untuk tambah data
    populateDropdown("edit-keahlian-personel", KeahlianOptions); // Untuk edit data
    populateDropdown("edit-keahlian-tambahan-personel", KeahlianOptions); // Untuk edit data

    populateDropdown("jabatan-kecelakaan", jabatanOptions); // Untuk modal Tambah
    populateDropdown("edit-jabatan-kecelakaan", jabatanOptions); // Untuk modal Edit









});


