let currentPagePersonel = 1;
let rowsPerPagePersonel = 5; // Default jumlah baris per halaman

function renderTablePersonelWithPagination(data) {
  const totalPages = Math.ceil(data.length / rowsPerPagePersonel);

  // Render tabel berdasarkan halaman saat ini
  renderTablePersonel(
    data.slice(
      (currentPagePersonel - 1) * rowsPerPagePersonel,
      currentPagePersonel * rowsPerPagePersonel
    )
  );

  // Render navigasi pagination
  renderPaginationPersonel(totalPages, data);
}

function renderPaginationPersonel(totalPages, data) {
  const paginationContainer = document.getElementById('pagination-container-personel');
  paginationContainer.innerHTML = '';

  // Tombol "Previous"
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPagePersonel === 1;
  prevButton.addEventListener('click', () => {
    currentPagePersonel--;
    renderTablePersonelWithPagination(data);
  });
  paginationContainer.appendChild(prevButton);

  // Tombol halaman
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.className = currentPagePersonel === i ? 'active' : '';
    pageButton.addEventListener('click', () => {
      currentPagePersonel = i;
      renderTablePersonelWithPagination(data);
    });
    const pageItem = document.createElement('div');
    pageItem.className = 'page-item';
    pageItem.appendChild(pageButton);
    paginationContainer.appendChild(pageItem);
  }

  // Tombol "Next"
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPagePersonel === totalPages;
  nextButton.addEventListener('click', () => {
    currentPagePersonel++;
    renderTablePersonelWithPagination(data);
  });
  paginationContainer.appendChild(nextButton);
}

// Event listener untuk mengubah jumlah baris per halaman
document.getElementById('rows-per-page-personel').addEventListener('change', (e) => {
  rowsPerPagePersonel = parseInt(e.target.value, 10); // Perbarui jumlah baris per halaman
  currentPagePersonel = 1; // Reset ke halaman pertama
  renderTablePersonelWithPagination(personelData); // Render ulang tabel dengan data terbaru
});
