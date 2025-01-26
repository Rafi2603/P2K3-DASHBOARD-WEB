function populateDropdown(selectElementId, options) {
    const selectElement = document.getElementById(selectElementId);
    if (!selectElement) {
        console.error(`Element with ID ${selectElementId} not found.`);
        return;
    }

    // Clear existing options (if needed)
    selectElement.innerHTML = '<option value="" disabled selected>Pilih Jabatan</option>';

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
    populateDropdown("edit-jabatan", jabatanOptions); // Untuk modal Edit
});
