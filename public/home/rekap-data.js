document.addEventListener("DOMContentLoaded", () => {
  // Struktur Organisasi
  const tableBody = document.getElementById("table-body-struktur");
  const searchBar = document.getElementById("search-bar-struktur");
  const addDataBtn = document.getElementById("add-data-btn-struktur");
  const modal = document.getElementById("add-data-modal-struktur");
  const closeModal = document.getElementById("close-modal-struktur");
  const addDataForm = document.getElementById("add-data-form-struktur");
  const editModal = document.getElementById("edit-data-modal-struktur");
  const closeEditModal = document.getElementById("close-edit-modal-struktur");
  const editDataForm = document.getElementById("edit-data-form-struktur");
  const selectAllCheckbox = document.getElementById("select-all");
  const deleteSelectedBtn = document.getElementById("delete-selected-btn");

  let currentData = [];

// Struktur Organisasi Tanggap
const tableBodyTanggap = document.getElementById("table-body-struktur-tanggap");
const searchBarTanggap = document.getElementById("search-bar-struktur-tanggap");
const addDataBtnTanggap = document.getElementById("add-data-btn-struktur-tanggap");
const addModalTanggap = document.getElementById("add-data-modal-struktur-tanggap");
const closeModalTanggap = document.getElementById("close-modal-struktur-tanggap");
const addDataFormTanggap = document.getElementById("add-data-form-struktur-tanggap");
const editModalTanggap = document.getElementById("edit-data-modal-struktur-tanggap");
const closeEditModalTanggap = document.getElementById("close-edit-modal-struktur-tanggap");
const editDataFormTanggap = document.getElementById("edit-data-form-struktur-tanggap");
const selectAllCheckboxTanggap = document.getElementById("select-all-struktur-tanggap");
const deleteSelectedBtnTanggap = document.getElementById("delete-selected-btn-struktur-tanggap");

let strukturTanggapData = [];

  // Personel Ahli K3
  const tableBodyPersonel = document.getElementById("table-body-personel");
  const searchBarPersonel = document.getElementById("search-bar-personel");
  const addDataBtnPersonel = document.getElementById("add-data-btn-personel");
  const addModalPersonel = document.getElementById("add-data-modal-personel");
  const closeModalPersonel = document.getElementById("close-modal-personel");
  const addDataFormPersonel = document.getElementById("add-data-form-personel");
  const editModalPersonel = document.getElementById("edit-data-modal-personel");
  const closeEditModalPersonel = document.getElementById("close-edit-modal-personel");
  const editDataFormPersonel = document.getElementById("edit-data-form-personel");
  const selectAllCheckboxPersonel = document.getElementById("select-all-personel");
  const deleteSelectedBtnPersonel = document.getElementById("delete-selected-btn-personel");

  let personelData = [];

  // Rekap Data K3
  const tableBodyRekap = document.getElementById("table-body-rekap");
  const searchBarRekap = document.getElementById("search-bar-rekap");
  const addDataBtnRekap = document.getElementById("add-data-btn-rekap");
  const addModalRekap = document.getElementById("add-data-modal-rekap");
  const closeModalRekap = document.getElementById("close-modal-rekap");
  const addDataFormRekap = document.getElementById("add-data-form-rekap");
  const editModalRekap = document.getElementById("edit-data-modal-rekap");
  const closeEditModalRekap = document.getElementById("close-edit-modal-rekap");
  const editDataFormRekap = document.getElementById("edit-data-form-rekap");
  const selectAllCheckboxRekap = document.getElementById("select-all-rekap");
  const deleteSelectedBtnRekap = document.getElementById("delete-selected-btn-rekap");

  let rekapData = [];

   // Kecelakaan Kerja
const tableBodyKecelakaan = document.getElementById("table-body-kecelakaan");
const searchBarKecelakaan = document.getElementById("search-bar-kecelakaan");
const addDataBtnKecelakaan = document.getElementById("add-data-btn-kecelakaan");
const addModalKecelakaan = document.getElementById("add-data-modal-kecelakaan");
const closeModalKecelakaan = document.getElementById("close-modal-kecelakaan");
const addDataFormKecelakaan = document.getElementById("add-data-form-kecelakaan");
const editModalKecelakaan = document.getElementById("edit-data-modal-kecelakaan");
const closeEditModalKecelakaan = document.getElementById("close-edit-modal-kecelakaan");
const editDataFormKecelakaan = document.getElementById("edit-data-form-kecelakaan");
const selectAllCheckboxKecelakaan = document.getElementById("select-all-kecelakaan");
const deleteSelectedBtnKecelakaan = document.getElementById("delete-selected-btn-kecelakaan");

let kecelakaanData = [];

// Kejadian Darurat
const tableBodyKejadian = document.getElementById("table-body-kejadian");
const searchBarKejadian = document.getElementById("search-bar-kejadian");
const addDataBtnKejadian = document.getElementById("add-data-btn-kejadian");
const addModalKejadian = document.getElementById("add-data-modal-kejadian");
const closeModalKejadian = document.getElementById("close-modal-kejadian");
const addDataFormKejadian = document.getElementById("add-data-form-kejadian");
const editModalKejadian = document.getElementById("edit-data-modal-kejadian");
const closeEditModalKejadian = document.getElementById("close-edit-modal-kejadian");
const editDataFormKejadian = document.getElementById("edit-data-form-kejadian");
const selectAllCheckboxKejadian = document.getElementById("select-all-kejadian");
const deleteSelectedBtnKejadian = document.getElementById("delete-selected-btn-kejadian");

let kejadianData = [];

// Checklist K3
const tableBodyChecklist = document.getElementById("table-body-checklist");
const searchBarChecklist = document.getElementById("search-bar-checklist");
const addDataBtnChecklist = document.getElementById("add-data-btn-checklist");
const addModalChecklist = document.getElementById("add-data-modal-checklist");
const closeModalChecklist = document.getElementById("close-modal-checklist");
const addDataFormChecklist = document.getElementById("add-data-form-checklist");
const editModalChecklist = document.getElementById("edit-data-modal-checklist");
const closeEditModalChecklist = document.getElementById("close-edit-modal-checklist");
const editDataFormChecklist = document.getElementById("edit-data-form-checklist");
const selectAllCheckboxChecklist = document.getElementById("select-all-checklist");
const deleteSelectedBtnChecklist = document.getElementById("delete-selected-btn-checklist");


let checklistData = [];

  // Event Listener untuk memilih semua checkbox
  selectAllCheckbox.addEventListener("change", () => {
    const checkboxes = document.querySelectorAll("#table-body-struktur input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

    // Event Listener untuk memilih semua checkbox PERSONEL
    selectAllCheckboxTanggap.addEventListener("change", () => {
      const checkboxes = document.querySelectorAll("#table-body-struktur-tanggap input[type='checkbox']");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAllCheckboxTanggap.checked;
      });
    });

    // Event Listener untuk memilih semua checkbox PERSONEL
    selectAllCheckboxPersonel.addEventListener("change", () => {
      const checkboxes = document.querySelectorAll("#table-body-personel input[type='checkbox']");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAllCheckboxPersonel.checked;
      });
    });

      // Event Listener untuk memilih semua checkbox PERSONEL
      selectAllCheckboxRekap.addEventListener("change", () => {
        const checkboxes = document.querySelectorAll("#table-body-rekap input[type='checkbox']");
        checkboxes.forEach((checkbox) => {
          checkbox.checked = selectAllCheckboxRekap.checked;
        });
      });

// Event Listener untuk memilih semua checkbox KECELAKAAN KERJA
selectAllCheckboxKecelakaan.addEventListener("change", () => {
  const checkboxes = document.querySelectorAll("#table-body-kecelakaan input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckboxKecelakaan.checked;
  });
});

// Event Listener untuk memilih semua checkbox KECELAKAAN KERJA
selectAllCheckboxKejadian.addEventListener("change", () => {
  const checkboxes = document.querySelectorAll("#table-body-kejadian input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckboxKecelakaan.checked;
  });
});


// Event Listener untuk memilih semua checkbox CHECKLIST K3
selectAllCheckboxChecklist.addEventListener("change", () => {
  const checkboxes = document.querySelectorAll("#table-body-checklist input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckboxChecklist.checked;
  });
});


  // Event Listener untuk tombol Delete Selected
  deleteSelectedBtn.addEventListener("click", () => {
    const selectedCheckboxes = Array.from(document.querySelectorAll("#table-body-struktur input[type='checkbox']:checked"));

    if (selectedCheckboxes.length === 0) {
      alert("Tidak ada data yang dipilih untuk dihapus.");
      return;
    }

    // Konfirmasi sebelum menghapus
    if (!confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) return;

    // Ambil ID dari setiap checkbox yang dipilih
    const idsToDelete = selectedCheckboxes.map((checkbox) => checkbox.dataset.id);

    // Kirim permintaan DELETE ke backend
    fetch("http://localhost:3000/delete-multiple-struktur", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: idsToDelete }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Gagal menghapus data.");
        return response.json();
      })
      .then(() => {

        alert("Data berhasil dihapus.");

        window.location.reload();
        
        // Hapus baris dari tabel
        idsToDelete.forEach((id) => {
          const row = document.querySelector(`#table-body-struktur tr[data-id="${id}"]`);
          if (row) row.remove();
        });
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("Gagal menghapus data.");
      });
  });

  deleteSelectedBtnTanggap.addEventListener("click", () => {
    const selectedCheckboxes = Array.from(document.querySelectorAll("#table-body-struktur-tanggap input[type='checkbox']:checked"));

    if (selectedCheckboxes.length === 0) {
        alert("Tidak ada data yang dipilih untuk dihapus.");
        return;
    }

    // Konfirmasi sebelum menghapus
    if (!confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) return;

    // Ambil ID dari setiap checkbox yang dipilih
    const idsToDelete = selectedCheckboxes.map((checkbox) => checkbox.dataset.id);

    // Kirim permintaan DELETE ke backend
    fetch("http://localhost:3000/delete-multiple-struktur_tanggap", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: idsToDelete }),
    })
    .then((response) => {
        if (!response.ok) throw new Error("Gagal menghapus data.");
        return response.json();
    })
    .then(() => {
        alert("Data berhasil dihapus.");

        // Hapus baris dari tabel setelah berhasil dihapus
        idsToDelete.forEach((id) => {
            const row = document.querySelector(`#table-body-struktur-tanggap tr[data-id="${id}"]`);
            if (row) row.remove();
        });
    })
    .catch((error) => {
        console.error("Error deleting data:", error);
        alert("Gagal menghapus data.");
    });
});


  deleteSelectedBtnPersonel.addEventListener("click", () => {
    const selectedCheckboxes = Array.from(document.querySelectorAll("#table-body-personel input[type='checkbox']:checked"));
  
    if (selectedCheckboxes.length === 0) {
      alert("Tidak ada data yang dipilih untuk dihapus.");
      return;
    }
  
    // Konfirmasi sebelum menghapus
    if (!confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) return;
  
    // Ambil ID dari setiap checkbox yang dipilih
    const idsToDelete = selectedCheckboxes.map((checkbox) => checkbox.dataset.id);
  
    // Kirim permintaan DELETE ke backend
    fetch("http://localhost:3000/delete-multiple-personel", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: idsToDelete }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Gagal menghapus data.");
        return response.json();
      })
      .then(() => {
        alert("Data berhasil dihapus.");

        // Hapus baris dari tabel
        idsToDelete.forEach((id) => {
          const row = document.querySelector(`#table-body-personel tr[data-id="${id}"]`);
          if (row) row.remove();
        });
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("Gagal menghapus data.");
      });
  });
  
  deleteSelectedBtnRekap.addEventListener("click", () => {
    const selectedCheckboxes = Array.from(document.querySelectorAll("#table-body-rekap input[type='checkbox']:checked"));
  
    if (selectedCheckboxes.length === 0) {
      alert("Tidak ada data yang dipilih untuk dihapus.");
      return;
    }
  
    // Konfirmasi sebelum menghapus
    if (!confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) return;
  
    // Ambil ID dari setiap checkbox yang dipilih
    const idsToDelete = selectedCheckboxes.map((checkbox) => checkbox.dataset.id);
  
    // Kirim permintaan DELETE ke backend
    fetch("http://localhost:3000/delete-multiple-rekap", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: idsToDelete }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Gagal menghapus data.");
        return response.json();
      })
      .then(() => {
        alert("Data berhasil dihapus.");

        window.location.reload();
        
        // Hapus baris dari tabel
        idsToDelete.forEach((id) => {
          const row = document.querySelector(`#table-body-rekap tr[data-id="${id}"]`);
          if (row) row.remove();
        });
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("Gagal menghapus data.");
      });
  });


// Event Listener untuk tombol hapus data KECELAKAAN KERJA
deleteSelectedBtnKecelakaan.addEventListener("click", () => {
  const selectedCheckboxes = Array.from(document.querySelectorAll("#table-body-kecelakaan input[type='checkbox']:checked"));

  if (selectedCheckboxes.length === 0) {
    alert("Tidak ada data yang dipilih untuk dihapus.");
    return;
  }

  // Konfirmasi sebelum menghapus
  if (!confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) return;

  // Ambil ID dari setiap checkbox yang dipilih
  const idsToDelete = selectedCheckboxes.map((checkbox) => checkbox.dataset.id);

  // Kirim permintaan DELETE ke backend
  fetch("http://localhost:3000/delete-multiple-kecelakaan", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: idsToDelete }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Gagal menghapus data.");
      return response.json();
    })
    .then(() => {
      alert("Data berhasil dihapus.");
      window.location.reload();
      // Hapus baris dari tabel
      idsToDelete.forEach((id) => {
        const row = document.querySelector(`#table-body-kecelakaan tr[data-id="${id}"]`);
        if (row) row.remove();
      });
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
      alert("Gagal menghapus data.");
    });
});


// Event Listener untuk tombol hapus data KEJADIAN DARURAT
deleteSelectedBtnKejadian.addEventListener("click", () => {
  const selectedCheckboxes = Array.from(document.querySelectorAll("#table-body-kejadian input[type='checkbox']:checked"));

  if (selectedCheckboxes.length === 0) {
    alert("Tidak ada data yang dipilih untuk dihapus.");
    return;
  }

  // Konfirmasi sebelum menghapus
  if (!confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) return;

  // Ambil ID dari setiap checkbox yang dipilih
  const idsToDelete = selectedCheckboxes.map((checkbox) => checkbox.dataset.id);

  // Kirim permintaan DELETE ke backend
  fetch("http://localhost:3000/delete-multiple-kejadian", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: idsToDelete }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Gagal menghapus data.");
      return response.json();
    })
    .then(() => {
      alert("Data berhasil dihapus.");
      window.location.reload(); // Reload halaman untuk memperbarui tabel

      // Hapus baris dari tabel tanpa perlu reload (opsional)
      idsToDelete.forEach((id) => {
        const row = document.querySelector(`#table-body-kejadian tr[data-id="${id}"]`);
        if (row) row.remove();
      });
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
      alert("Gagal menghapus data.");
    });
});


// Event Listener untuk tombol hapus data CHECKLIST K3
deleteSelectedBtnChecklist.addEventListener("click", () => {
  const selectedCheckboxes = Array.from(document.querySelectorAll("#table-body-checklist input[type='checkbox']:checked"));

  if (selectedCheckboxes.length === 0) {
    alert("Tidak ada data yang dipilih untuk dihapus.");
    return;
  }

  // Konfirmasi sebelum menghapus
  if (!confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) return;

  // Ambil ID dari setiap checkbox yang dipilih
  const idsToDelete = selectedCheckboxes.map((checkbox) => checkbox.dataset.id);

  // Kirim permintaan DELETE ke backend
  fetch("http://localhost:3000/delete-multiple-checklist", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: idsToDelete }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Gagal menghapus data.");
      return response.json();
    })
    .then(() => {
      alert("Data berhasil dihapus.");
      window.location.reload();
      // Hapus baris dari tabel
      idsToDelete.forEach((id) => {
        const row = document.querySelector(`#table-body-checklist tr[data-id="${id}"]`);
        if (row) row.remove();
      });
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
      alert("Gagal menghapus data.");
    });
});



  // Fungsi untuk format tanggal ke format DD-MM-YYYY
  function formatTanggal(tanggal) {
     const date = new Date(tanggal);
     const year = date.getFullYear();
     const month = String(date.getMonth() + 1).padStart(2, "0");
     const day = String(date.getDate()).padStart(2, "0");
     return `${day}-${month}-${year}`;
  }

  // Fetch data Struktur Organisasi
  fetch("http://localhost:3000/getstruktur")
     .then((response) => response.json())
     .then((data) => {
        currentData = data.data || [];
        renderTable(currentData);
        renderTableStrukturWithPagination(currentData); // Panggil fungsi dengan data


        searchBar.addEventListener("input", () => {
          const searchTerm = searchBar.value.toLowerCase();
          const keywords = searchTerm.split(" ").filter(Boolean); // Pecah berdasarkan spasi dan hilangkan keyword kosong
          
          const filteredItems = currentData.filter((item) => {
              // Cek apakah setiap keyword ditemukan di salah satu properti
              return keywords.every((keyword) =>
                  item.nama.toLowerCase().includes(keyword) ||
                  item.jabatan.toLowerCase().includes(keyword) ||
                  item.posisi.toLowerCase().includes(keyword)
              );
          });
      
          renderTable(filteredItems); // Render ulang tabel dengan data hasil filter
      });

     });


// Fetch Data Struktur Organisasi Tanggap
fetch("http://localhost:3000/getstruktur_tanggap")
    .then((response) => response.json())
    .then((data) => {
        strukturTanggapData = data.data || [];
        renderTableTanggap(strukturTanggapData);
        renderTableTanggapWithPagination(strukturTanggapData);
    })
    .catch(error => console.error("Error fetching Struktur Tanggap data:", error));

    // Pencarian Data Struktur Tanggap
searchBarTanggap.addEventListener("input", () => {
  const searchTerm = searchBarTanggap.value.toLowerCase();
  const keywords = searchTerm.split(" ").filter(Boolean);

  const filteredItems = strukturTanggapData.filter((item) =>
      keywords.every((keyword) =>
          item.nama_tanggap.toLowerCase().includes(keyword) ||
          item.jabatan_tanggap.toLowerCase().includes(keyword) ||
          item.posisi_tanggap.toLowerCase().includes(keyword)
      )
  );

  renderTableTanggap(filteredItems);
});



  // Fetch data Personel Ahli K3
  fetch("http://localhost:3000/getpersonel")
     .then((response) => response.json())
     .then((data) => {
        personelData = data.data || [];
        renderTablePersonel(personelData);
        renderTablePersonelWithPagination(personelData); // Panggil fungsi paginasi


        searchBarPersonel.addEventListener("input", () => {
          const searchTerm = searchBarPersonel.value.toLowerCase();
          const keywords = searchTerm.split(" ").filter(Boolean); // Pecah berdasarkan spasi dan hilangkan kata kosong
          
          const filteredItems = personelData.filter((item) => {
              // Cek apakah setiap keyword ditemukan di salah satu properti
              return keywords.every((keyword) =>
                  item.nama.toLowerCase().includes(keyword) ||
                  item.keahlian.toLowerCase().includes(keyword) ||
                  item.batas_masa_berlaku.toLowerCase().includes(keyword)
              );
          });
      
          renderTablePersonel(filteredItems); // Render ulang tabel dengan data hasil filter
      });

     });

// Fetch data Rekap Data K3
fetch("http://localhost:3000/getrekap")
  .then((response) => response.json())
  .then((data) => {
    rekapData = data.data || []; // Simpan data ke variabel global
    //console.log(rekapData); // Pastikan data termasuk tahun dan bulan
    renderTableRekap(rekapData);
    renderTableRekapWithPagination(rekapData); // Panggil fungsi paginasi dengan data
  })
  .catch((error) => console.error("Error fetching rekap data:", error));

// Event Listener untuk Pencarian
searchBarRekap.addEventListener("input", () => {
  const searchTerm = searchBarRekap.value.toLowerCase();
  const keywords = searchTerm.split(" ").filter(Boolean); // Pecah menjadi kata kunci, hapus yang kosong

  // Filter data berdasarkan tahun dan bulan
  const filteredItems = rekapData.filter((item) =>
    keywords.every((keyword) =>
      item.tahun.toString().toLowerCase().includes(keyword) || // Filter tahun
      item.bulan.toLowerCase().includes(keyword) // Filter bulan
    )
  );

  renderTableRekapWithPagination(filteredItems); // Render ulang tabel dengan data hasil pencarian
});

   
// Fetch data Kecelakaan Kerja dari backend
fetch("http://localhost:3000/getkecelakaankerja")
  .then((response) => response.json())
  .then((data) => {
    kecelakaanData = data.data || [];
    renderTableKecelakaan(kecelakaanData);
    renderTableKecelakaanWithPagination(kecelakaanData); // Panggil fungsi paginasi


// Filter pencarian untuk tabel Kecelakaan Kerja
searchBarKecelakaan.addEventListener("input", () => {
  const searchTerm = searchBarKecelakaan.value.toLowerCase();
  const keywords = searchTerm.split(" ").filter(Boolean); // Pecah input menjadi kata kunci, hapus yang kosong

  const filteredItems = kecelakaanData.filter((item) =>
    keywords.every((keyword) =>
      item.tanggal.toLowerCase().includes(keyword) || // Filter berdasarkan tanggal
      item.nik.toLowerCase().includes(keyword) || // Filter berdasarkan NIK
      item.nama.toLowerCase().includes(keyword) || // Filter berdasarkan nama
      item.jabatan.toLowerCase().includes(keyword) || // Filter berdasarkan jabatan
      item.unit.toLowerCase().includes(keyword) || // Filter berdasarkan unit
      item.tempat_kejadian.toLowerCase().includes(keyword) || // Filter berdasarkan tempat kejadian
      item.kategori_kecelakaan.toLowerCase().includes(keyword) || // Filter berdasarkan kategori kecelakaan
      item.tindak_lanjut.toLowerCase().includes(keyword) || // Filter berdasarkan tindak lanjut
      item.perawatan_rs?.toLowerCase().includes(keyword) || // Filter berdasarkan perawatan RS (cek null/undefined)
      item.keterangan.toLowerCase().includes(keyword) // Filter berdasarkan keterangan
    )
  );

  renderTableKecelakaan(filteredItems); // Render tabel berdasarkan hasil pencarian
});


  });


// Fetch data Kejadian Darurat dari backend
fetch("http://localhost:3000/getkejadian")
  .then((response) => response.json())
  .then((data) => {
    kejadianData = data.data || [];
    renderTableKejadian(kejadianData); // Render tabel Kejadian Darurat
    renderTableKejadianWithPagination(kejadianData); // Panggil fungsi paginasi

    // Filter pencarian untuk tabel Kejadian Darurat
    searchBarKejadian.addEventListener("input", () => {
      const searchTerm = searchBarKejadian.value.toLowerCase();
      const keywords = searchTerm.split(" ").filter(Boolean); // Pecah input menjadi kata kunci, hapus yang kosong

      const filteredItems = kejadianData.filter((item) =>
        keywords.every((keyword) =>
          item.kejadian_darurat.toLowerCase().includes(keyword) || // Filter berdasarkan kejadian darurat
          item.lokasi.toLowerCase().includes(keyword) || // Filter berdasarkan lokasi
          item.kronologi_kejadian.toLowerCase().includes(keyword) || // Filter berdasarkan kronologi kejadian
          item.tindak_lanjut.toLowerCase().includes(keyword) // Filter berdasarkan tindak lanjut
        )
      );

      renderTableKejadian(filteredItems); // Render tabel berdasarkan hasil pencarian
    });
  })
  .catch((error) => console.error("Error fetching Kejadian Darurat data:", error));

   
// Fetch data Checklist K3 dari backend
fetch("http://localhost:3000/getchecklist")
  .then((response) => response.json())
  .then((data) => {
    checklistData = data.data || [];
    renderTableChecklist(checklistData);
    renderTableChecklistWithPagination(checklistData); // Panggil fungsi paginasi

    // Filter pencarian untuk tabel Checklist K3
    searchBarChecklist.addEventListener("input", () => {
      const searchTerm = searchBarChecklist.value.toLowerCase();
      const keywords = searchTerm.split(" ").filter(Boolean); // Pecah input menjadi kata kunci, hapus yang kosong

      const filteredItems = checklistData.filter((item) =>
        keywords.every((keyword) =>
          item.section.toLowerCase().includes(keyword) || // Filter berdasarkan section
          item.indikator_k3.toLowerCase().includes(keyword) || // Filter berdasarkan indikator_k3
          item.expired_date.toLowerCase().includes(keyword) // Filter berdasarkan expired_date
        )
      );

      renderTableChecklist(filteredItems); // Render tabel berdasarkan hasil pencarian
    });
  })
  .catch((error) => console.error("Error fetching checklist data:", error));



  // Fungsi render tabel Struktur Organisasi
  function renderTable(data) {
     tableBody.innerHTML = "";
     data.forEach((item) => {
        const formattedDate = item.tanggal_input ? formatTanggal(item.tanggal_input) : "";
        tableBody.innerHTML += `
       <tr data-id="${item.struktur_id}">
         <td><input type="checkbox" data-id="${item.struktur_id}"></td>
         <td>${item.nama}</td>
         <td>${item.jabatan}</td>
         <td>${item.posisi}</td>
         <td>${formattedDate}</td>
         <td>
      <button class="edit-btn" data-id="${item.struktur_id}" data-nama="${item.nama}" data-jabatan="${item.jabatan}" data-posisi="${item.posisi}">
        ✏️
      </button>           
      <button class="delete-btn" data-id="${item.struktur_id}">🗑️</button>
         </td>
       </tr>`;
     });

     // Add Event Listeners to Edit Buttons
     const editButtons = document.querySelectorAll(".edit-btn");
     editButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
           const id = e.target.dataset.id;
           const nama = e.target.dataset.nama;
           const jabatan = e.target.dataset.jabatan;
           const posisi = e.target.dataset.posisi;

           document.getElementById("edit-id").value = id;
           document.getElementById("edit-nama").value = nama;
           document.getElementById("edit-jabatan").value = jabatan;
           document.getElementById("edit-posisi").value = posisi;

           editModal.style.display = "block";
        });
     });

     // Add Event Listeners to Delete Buttons
     const deleteButtons = document.querySelectorAll(".delete-btn");
     deleteButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
           const id = e.target.dataset.id;

           // Confirm Delete
           if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
              fetch(`http://localhost:3000/deletestruktur`, {
                    method: "DELETE",
                    headers: {
                       "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                       struktur_id: id
                    }),
                 })
                 .then((response) => {
                    if (!response.ok) {
                       throw new Error("Failed to delete data");
                    }
                    return response.json();
                 })
                 .then(() => {
                  alert("Data berhasil dihapus.");
                  window.location.reload();
                    currentData = currentData.filter((item) => item.struktur_id != id); // Hapus dari array lokal
                    renderTable(currentData); // Render ulang tabel
                 })
                 .catch((error) => {
                    console.error("Error deleting data:", error);
                    alert("Error deleting data");
                 });
           }
        });
     });

  }

  let currentPageStruktur = 1;
  let rowsPerPageStruktur = 10; // Default jumlah baris per halaman
  
  function renderTableStrukturWithPagination(data) {
    const totalPages = Math.ceil(data.length / rowsPerPageStruktur);
  
    // Render tabel berdasarkan halaman saat ini
    renderTable(data.slice((currentPageStruktur - 1) * rowsPerPageStruktur, currentPageStruktur * rowsPerPageStruktur));
  
    // Render navigasi pagination
    renderPaginationStruktur(totalPages, data);
  }
  
  function renderPaginationStruktur(totalPages, data) {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = '';
  
    // Tombol "Previous"
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPageStruktur === 1;
    prevButton.addEventListener('click', () => {
      currentPageStruktur--;
      renderTableStrukturWithPagination(data);
    });
    paginationContainer.appendChild(prevButton);
  
    // Tombol halaman
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      pageButton.className = currentPageStruktur === i ? 'active' : '';
      pageButton.addEventListener('click', () => {
        currentPageStruktur = i;
        renderTableStrukturWithPagination(data);
      });
      const pageItem = document.createElement('div');
      pageItem.className = 'page-item';
      pageItem.appendChild(pageButton);
      paginationContainer.appendChild(pageItem);
    }
  
    // Tombol "Next"
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPageStruktur === totalPages;
    nextButton.addEventListener('click', () => {
      currentPageStruktur++;
      renderTableStrukturWithPagination(data);
    });
    paginationContainer.appendChild(nextButton);
  }
  
  // Event listener untuk mengubah jumlah baris per halaman
  document.getElementById('rows-per-page').addEventListener('change', (e) => {
    rowsPerPageStruktur = parseInt(e.target.value, 10); // Perbarui jumlah baris per halaman
    currentPageStruktur = 1; // Reset ke halaman pertama
    renderTableStrukturWithPagination(currentData); // Render ulang tabel dengan data terbaru
  });
  

// Render Tabel Struktur Organisasi Tanggap
function renderTableTanggap(data) {
  tableBodyTanggap.innerHTML = "";
  data.forEach(item => {
      const formattedDate = item.tanggal_input_tanggap ? formatTanggal(item.tanggal_input_tanggap) : "";
      tableBodyTanggap.innerHTML += `
          <tr data-id="${item.struktur_tanggap_id}">
              <td><input type="checkbox" data-id="${item.struktur_tanggap_id}"></td>
              <td>${item.nama_tanggap}</td>
              <td>${item.jabatan_tanggap}</td>
              <td>${item.posisi_tanggap}</td>
              <td>${formattedDate}</td>
              <td>
                  <button class="edit-btn-tanggap" data-id="${item.struktur_tanggap_id}" data-nama="${item.nama_tanggap}" data-jabatan="${item.jabatan_tanggap}" data-posisi="${item.posisi_tanggap}">✏️</button>
                  <button class="delete-btn-tanggap" data-id="${item.struktur_tanggap_id}">🗑️</button>
              </td>
          </tr>
      `;
  });

  // Event untuk tombol edit
  document.querySelectorAll(".edit-btn-tanggap").forEach(btn => {
      btn.addEventListener("click", (e) => {
          const id = e.target.dataset.id;
          const nama = e.target.dataset.nama;
          const jabatan = e.target.dataset.jabatan;
          const posisi = e.target.dataset.posisi;

          document.getElementById("edit-id-struktur-tanggap").value = id;
          document.getElementById("edit-nama-tanggap").value = nama;
          document.getElementById("edit-jabatan-tanggap").value = jabatan;
          document.getElementById("edit-posisi-tanggap").value = posisi;

          editModalTanggap.style.display = "block";
      });
  });

  // Event untuk tombol hapus
  document.querySelectorAll(".delete-btn-tanggap").forEach(btn => {
      btn.addEventListener("click", (e) => {
          const id = e.target.dataset.id;
          if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
              fetch(`http://localhost:3000/deletestruktur_tanggap`, {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ struktur_tanggap_id: id }),
              })
              .then(() => {
                  alert("Data berhasil dihapus.");
                  window.location.reload();
              })
              .catch(error => console.error("Error deleting data:", error));
          }
      });
  });
}


let currentPageTanggap = 1;
let rowsPerPageTanggap = 10; // Default jumlah baris per halaman

// Render Tabel Struktur Organisasi Tanggap dengan Pagination
function renderTableTanggapWithPagination(data) {
  const totalPages = Math.ceil(data.length / rowsPerPageTanggap);

  renderTableTanggap(
      data.slice(
          (currentPageTanggap - 1) * rowsPerPageTanggap,
          currentPageTanggap * rowsPerPageTanggap
      )
  );

  renderPaginationTanggap(totalPages, data);
}

// Render Navigasi Pagination Struktur Tanggap
function renderPaginationTanggap(totalPages, data) {
  const paginationContainer = document.getElementById('pagination-container-struktur-tanggap');
  paginationContainer.innerHTML = '';

  // Tombol "Previous"
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPageTanggap === 1;
  prevButton.addEventListener('click', () => {
      currentPageTanggap--;
      renderTableTanggapWithPagination(data);
  });
  paginationContainer.appendChild(prevButton);

  // Tombol halaman
  for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      pageButton.className = currentPageTanggap === i ? 'active' : '';
      pageButton.addEventListener('click', () => {
          currentPageTanggap = i;
          renderTableTanggapWithPagination(data);
      });
      paginationContainer.appendChild(pageButton);
  }

  // Tombol "Next"
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPageTanggap === totalPages;
  nextButton.addEventListener('click', () => {
      currentPageTanggap++;
      renderTableTanggapWithPagination(data);
  });
  paginationContainer.appendChild(nextButton);
}

// Event listener untuk mengubah jumlah baris per halaman
document.getElementById('rows-per-page-struktur-tanggap').addEventListener('change', (e) => {
  rowsPerPageTanggap = parseInt(e.target.value, 10);
  currentPageTanggap = 1;
  renderTableTanggapWithPagination(strukturTanggapData);
});



  // Fungsi render tabel Personel Ahli K3
  function renderTablePersonel(data) {
     tableBodyPersonel.innerHTML = ""; // Kosongkan tabel
     data.forEach((item) => {
        const formattedDate = item.batas_masa_berlaku ? formatTanggal(item.batas_masa_berlaku) : "";
        tableBodyPersonel.innerHTML += `
      <tr data-id="${item.personel_k3_id}">
       <td><input type="checkbox" data-id="${item.personel_k3_id}"></td>
       <td>${item.nama}</td>
       <td>${item.keahlian}</td>
       <td>${formattedDate}</td> 
       <td>
         <button class="edit-btn-personel" 
                 data-id="${item.personel_k3_id}" 
                 data-nama="${item.nama}" 
                 data-keahlian="${item.keahlian}" 
                 data-batas="${item.batas_masa_berlaku}">
           ✏️
         </button>
         <button class="delete-btn-personel" 
                 data-id="${item.personel_k3_id}">
           🗑️
         </button>
       </td>
     </tr>`;
     });

     // Add Event Listeners to Edit Buttons
     const editButtonsPersonel = document.querySelectorAll(".edit-btn-personel");
     editButtonsPersonel.forEach((btn) => {
        btn.addEventListener("click", (e) => {
           const id = e.target.dataset.id;
           const nama = e.target.dataset.nama;
           const keahlian = e.target.dataset.keahlian;
           const batas = e.target.dataset.batas;

           // Isi modal dengan data yang dipilih
           document.getElementById("edit-id-personel").value = id;
           document.getElementById("edit-nama-personel").value = nama;
           document.getElementById("edit-keahlian-personel").value = keahlian;
           document.getElementById("edit-batas-masa-berlaku-personel").value = batas;

           // Tampilkan modal edit
           editModalPersonel.style.display = "block";
        });
     });

     // Add Event Listeners to Delete Buttons
     const deleteButtonsPersonel = document.querySelectorAll(".delete-btn-personel");
     deleteButtonsPersonel.forEach((btn) => {
        btn.addEventListener("click", (e) => {
           const id = e.target.dataset.id;

           // Konfirmasi sebelum menghapus data
           if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
              fetch(`http://localhost:3000/deletepersonel`, {
                    method: "DELETE",
                    headers: {
                       "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                       personel_k3_id: id
                    }),
                 })
                 .then((response) => {
                    if (!response.ok) {
                       throw new Error("Gagal menghapus data");
                    }
                    return response.json();
                 })
                 .then(() => {
                  alert("Data berhasil dihapus.");
                  window.location.reload();
                    personelData = personelData.filter((item) => item.personel_k3_id != id); // Hapus data dari array lokal
                    renderTablePersonel(personelData); // Render ulang tabel
                 })
                 .catch((error) => {
                    console.error("Error deleting data:", error);
                    alert("Gagal menghapus data");
                 });
           }
        });
     });
  }

  let currentPagePersonel = 1;
  let rowsPerPagePersonel = 10; // Default jumlah baris per halaman
  
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
  


// Fungsi render tabel Rekap Data K3
function renderTableRekap(data) {
  tableBodyRekap.innerHTML = "";
  data.forEach((item) => {
    tableBodyRekap.innerHTML += `
       <tr data-id="${item.rekapdata_id}">
        <td><input type="checkbox" data-id="${item.rekapdata_id}"></td>
        <td>${item.tahun}</td>
        <td>${item.bulan}</td>
        <td>${item.jumlah_karyawan}</td>
        <td>${item.jumlah_hari_kerja}</td>
        <td>${item.jumlah_jam_kerja}</td>
        <td>${item.kecelakaan_berat}</td>
        <td>${item.kecelakaan_ringan}</td>
        <td>${item.kecelakaan_meninggal}</td>
        <td>${item.near_miss}</td>
        <td>${item.fire_accident}</td>
        <td>${item.damaged_property}</td>
        <td>${item.jumlah_hari_hilang}</td>
        <td>${item.jumlah_hari_tanpa_hilang}</td>
        <td>${item.lti}</td>
        <td>${item.man_hour}</td>
        <td>${item.frequency_rate}</td>
        <td>${item.severity_rate}</td>

        <td>${item.inchident_rate}</td>

        <td>${item.atlr}</td>
        <td>
          <button class="edit-btn-rekap" 
                  data-id="${item.rekapdata_id}" 
                  data-tahun="${item.tahun}" 
                  data-bulan="${item.bulan}" 
                  data-jumlah_karyawan="${item.jumlah_karyawan}"
                  data-jumlah_hari_kerja="${item.jumlah_hari_kerja}" 
                  data-kecelakaan_berat="${item.kecelakaan_berat}" 
                  data-kecelakaan_ringan="${item.kecelakaan_ringan}" 
                  data-kecelakaan_meninggal="${item.kecelakaan_meninggal}" 
                  data-near_miss="${item.near_miss}" 
                  data-fire_accident="${item.fire_accident}" 
                  data-damaged_property="${item.damaged_property}" 
                  data-jumlah_hari_hilang="${item.jumlah_hari_hilang}" >
            ✏️
          </button>
          <button class="delete-btn-rekap" data-id="${item.rekapdata_id}">🗑️</button>
        </td>
      </tr>
    `;
  });

  // Add Event Listeners to Edit Buttons
  const editButtons = document.querySelectorAll(".edit-btn-rekap");
  editButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const data = e.target.dataset;

      // Populate Edit Modal
      document.getElementById("edit-id-rekap").value = data.id;
      document.getElementById("edit-tahun").value = data.tahun;
      document.getElementById("edit-bulan").value = data.bulan;
      
      document.getElementById("edit-jumlah-karyawan").value = data.jumlah_karyawan;
      document.getElementById("edit-jumlah-hari-kerja").value = data.jumlah_hari_kerja;

      document.getElementById("edit-kecelakaan-berat").value = data.kecelakaan_berat;
      document.getElementById("edit-kecelakaan-ringan").value = data.kecelakaan_ringan;
      document.getElementById("edit-kecelakaan-meninggal").value = data.kecelakaan_meninggal;
      document.getElementById("edit-near-miss").value = data.near_miss;
      document.getElementById("edit-fire-accident").value = data.fire_accident;
      document.getElementById("edit-damaged-property").value = data.damaged_property;
      document.getElementById("edit-jumlah-hari-hilang").value = data.jumlah_hari_hilang;


      // Show Edit Modal
      editModalRekap.style.display = "block";
    });
  });

  // Add Event Listeners to Delete Buttons
  const deleteButtons = document.querySelectorAll(".delete-btn-rekap");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;

      // Confirm Delete
      if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        fetch(`http://localhost:3000/deleterekap`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rekapdata_id: id }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Gagal menghapus data");
            }
            return response.json();
          })
          .then(() => {
            alert("Data berhasil dihapus.");
            window.location.reload();
            rekapData = rekapData.filter((item) => item.rekapdata_id != id);
            renderTableRekap(rekapData);
          })
          .catch((error) => {
            console.error("Error deleting Rekap K3 data:", error);
          });
      }
    });
  });
}


let currentPageRekap = 1;
let rowsPerPageRekap = 12; // Default jumlah baris per halaman

function renderTableRekapWithPagination(data) {
  const totalPages = Math.ceil(data.length / rowsPerPageRekap);

  // Render tabel berdasarkan halaman saat ini
  renderTableRekap(
    data.slice(
      (currentPageRekap - 1) * rowsPerPageRekap,
      currentPageRekap * rowsPerPageRekap
    )
  );

  // Render navigasi pagination
  renderPaginationRekap(totalPages, data);
}

function renderPaginationRekap(totalPages, data) {
  const paginationContainer = document.getElementById('pagination-container-rekap');
  paginationContainer.innerHTML = '';

  // Tombol "Previous"
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPageRekap === 1;
  prevButton.addEventListener('click', () => {
    currentPageRekap--;
    renderTableRekapWithPagination(data);
  });
  paginationContainer.appendChild(prevButton);

  // Tombol halaman
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.className = currentPageRekap === i ? 'active' : '';
    pageButton.addEventListener('click', () => {
      currentPageRekap = i;
      renderTableRekapWithPagination(data);
    });
    const pageItem = document.createElement('div');
    pageItem.className = 'page-item';
    pageItem.appendChild(pageButton);
    paginationContainer.appendChild(pageItem);
  }

  // Tombol "Next"
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPageRekap === totalPages;
  nextButton.addEventListener('click', () => {
    currentPageRekap++;
    renderTableRekapWithPagination(data);
  });
  paginationContainer.appendChild(nextButton);
}

// Event listener untuk mengubah jumlah baris per halaman
document.getElementById('rows-per-page-rekap').addEventListener('change', (e) => {
  rowsPerPageRekap = parseInt(e.target.value, 10); // Perbarui jumlah baris per halaman
  currentPageRekap = 1; // Reset ke halaman pertama
  renderTableRekapWithPagination(rekapData); // Render ulang tabel dengan data terbaru
});




// Render tabel Kecelakaan Kerja
function renderTableKecelakaan(data) {
   tableBodyKecelakaan.innerHTML = "";
   data.forEach((item) => {
     const formattedTanggal = item.tanggal ? formatTanggal(item.tanggal) : "N/A";
     const formattedPerawatanRS = item.perawatan_rs ? formatTanggal(item.perawatan_rs) : "N/A";
 
     tableBodyKecelakaan.innerHTML += `
       <tr data-id="${item.kecelakaankerja_id}">
         <td><input type="checkbox" data-id="${item.kecelakaankerja_id}"></td>
         <td>${formattedTanggal}</td>
         <td>${item.nik}</td>
         <td>${item.nama}</td>
         <td>${item.jabatan}</td>
         <td>${item.unit}</td>
         <td>${item.tempat_kejadian}</td>
         <td>${item.kategori_kecelakaan}</td>
         <td>${item.tindak_lanjut}</td>
         <td>${formattedPerawatanRS}</td>
         <td>${item.keterangan}</td>
         <td>
         <div>
           <button class="edit-btn-kecelakaan" 
             data-id="${item.kecelakaankerja_id}"
             data-tanggal="${item.tanggal}"
             data-nik="${item.nik}"
             data-nama="${item.nama}"
             data-jabatan="${item.jabatan}"
             data-unit="${item.unit}"
             data-tempat_kejadian="${item.tempat_kejadian}"
             data-kategori_kecelakaan="${item.kategori_kecelakaan}"
             data-tindak_lanjut="${item.tindak_lanjut}"
             data-perawatan_rs="${item.perawatan_rs || ""}"
             data-keterangan="${item.keterangan}">
             ✏️
           </button>
         </div>
         <div>
           <button class="delete-btn-kecelakaan" data-id="${item.kecelakaankerja_id}">🗑️</button>
         </div>
         </td>
       </tr>
     `;
   });
 
   // Event untuk tombol Edit
   document.querySelectorAll(".edit-btn-kecelakaan").forEach((btn) => {
     btn.addEventListener("click", (e) => {
       const data = e.target.dataset;
 
       document.getElementById("edit-id-kecelakaan").value = data.id;
       document.getElementById("edit-tanggal").value = data.tanggal;
       document.getElementById("edit-nik").value = data.nik;
       document.getElementById("edit-nama-kecelakaan").value = data.nama;
       document.getElementById("edit-jabatan-kecelakaan").value = data.jabatan;
       document.getElementById("edit-unit").value = data.unit;
       document.getElementById("edit-tempat_kejadian").value = data.tempat_kejadian;
       document.getElementById("edit-kategori_kecelakaan").value = data.kategori_kecelakaan;
       document.getElementById("edit-tindak_lanjut").value = data.tindak_lanjut;
       document.getElementById("edit-perawatan_rs").value = data.perawatan_rs;
       document.getElementById("edit-keterangan").value = data.keterangan;
 
       editModalKecelakaan.style.display = "block";
     });
   });
 
   // Event untuk tombol Delete
   document.querySelectorAll(".delete-btn-kecelakaan").forEach((btn) => {
     btn.addEventListener("click", (e) => {
       const id = e.target.dataset.id;
 
       if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
         fetch(`http://localhost:3000/deletekecelakaan`, {
           method: "DELETE",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ kecelakaankerja_id: id }),
         })
           .then((response) => {
             if (!response.ok) throw new Error("Gagal menghapus data");
             return response.json();
           })
           .then(() => {
            alert("Data berhasil dihapus.");
            window.location.reload();
             kecelakaanData = kecelakaanData.filter((item) => item.kecelakaankerja_id != id);
             renderTableKecelakaan(kecelakaanData);
           })
           .catch((error) => {
             console.error("Error deleting data:", error);
             alert("Gagal menghapus data");
           });
       }
     });
   });
 }

 let currentPageKecelakaan = 1; // Halaman saat ini
 let rowsPerPageKecelakaan = 5; // Default jumlah baris per halaman
 
 // Fungsi untuk render tabel kecelakaan dengan pagination
 function renderTableKecelakaanWithPagination(data) {
   const totalPages = Math.ceil(data.length / rowsPerPageKecelakaan);
 
   // Render tabel berdasarkan halaman saat ini
   renderTableKecelakaan(
     data.slice(
       (currentPageKecelakaan - 1) * rowsPerPageKecelakaan,
       currentPageKecelakaan * rowsPerPageKecelakaan
     )
   );
 
   // Render navigasi pagination
   renderPaginationKecelakaan(totalPages, data);
 }
 
 // Fungsi untuk render navigasi pagination kecelakaan
 function renderPaginationKecelakaan(totalPages, data) {
   const paginationContainer = document.getElementById('pagination-container-kecelakaan');
   paginationContainer.innerHTML = '';
 
   // Tombol "Previous"
   const prevButton = document.createElement('button');
   prevButton.textContent = 'Previous';
   prevButton.disabled = currentPageKecelakaan === 1;
   prevButton.addEventListener('click', () => {
     currentPageKecelakaan--;
     renderTableKecelakaanWithPagination(data);
   });
   paginationContainer.appendChild(prevButton);
 
   // Tombol halaman
   for (let i = 1; i <= totalPages; i++) {
     const pageButton = document.createElement('button');
     pageButton.textContent = i;
     pageButton.className = currentPageKecelakaan === i ? 'active' : '';
     pageButton.addEventListener('click', () => {
       currentPageKecelakaan = i;
       renderTableKecelakaanWithPagination(data);
     });
     const pageItem = document.createElement('div');
     pageItem.className = 'page-item';
     pageItem.appendChild(pageButton);
     paginationContainer.appendChild(pageItem);
   }
 
   // Tombol "Next"
   const nextButton = document.createElement('button');
   nextButton.textContent = 'Next';
   nextButton.disabled = currentPageKecelakaan === totalPages;
   nextButton.addEventListener('click', () => {
     currentPageKecelakaan++;
     renderTableKecelakaanWithPagination(data);
   });
   paginationContainer.appendChild(nextButton);
 }
 
 // Event listener untuk mengubah jumlah baris per halaman
 document.getElementById('rows-per-page-kecelakaan').addEventListener('change', (e) => {
   rowsPerPageKecelakaan = parseInt(e.target.value, 10); // Perbarui jumlah baris per halaman
   currentPageKecelakaan = 1; // Reset ke halaman pertama
   renderTableKecelakaanWithPagination(kecelakaanData); // Render ulang tabel dengan data terbaru
 });
 



 // Render tabel Kejadian Darurat
function renderTableKejadian(data) {
  tableBodyKejadian.innerHTML = ""; // Kosongkan tabel sebelum render ulang
  data.forEach((item) => {

    const evidenceElement =
    item.evidence && typeof item.evidence === "string"
        ? item.evidence.endsWith(".pdf")
            ? `<a href="${item.evidence}" target="_blank">Lihat PDF</a>`
            : `<img src="${item.evidence}" class="evidence-image alt="Evidence">`
        : "Tidak Ada";
      
    tableBodyKejadian.innerHTML += `
       <tr data-id="${item.kejadian_id}">
        <td><input type="checkbox" data-id="${item.kejadian_id}"></td>
        <td>${item.kejadian_darurat}</td>
        <td>${item.lokasi}</td>
        <td>${item.kronologi_kejadian}</td>
        <td>${item.tindak_lanjut}</td>
        <td>${evidenceElement}</td>
       
        <td>
          <div>
            <button class="edit-btn-kejadian"
              data-id="${item.kejadian_id}"
              data-kejadian_darurat="${item.kejadian_darurat}"
              data-lokasi="${item.lokasi}"
              data-kronologi_kejadian="${item.kronologi_kejadian}"
              data-tindak_lanjut="${item.tindak_lanjut}">
              ✏️
            </button>
          </div>
          <div>
            <button class="delete-btn-kejadian" data-id="${item.kejadian_id}">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  });

  // Event untuk tombol Edit
  document.querySelectorAll(".edit-btn-kejadian").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const data = e.target.dataset;

      document.getElementById("edit-id-kejadian").value = data.id;
      document.getElementById("edit-kejadian-darurat").value = data.kejadian_darurat;
      document.getElementById("edit-lokasi").value = data.lokasi;
      document.getElementById("edit-kronologi-kejadian").value = data.kronologi_kejadian;
      document.getElementById("edit-tindak-lanjut").value = data.tindak_lanjut;

      editModalKejadian.style.display = "block";
    });
  });

  // Event untuk tombol Delete
  document.querySelectorAll(".delete-btn-kejadian").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;

      if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        fetch(`http://localhost:3000/deletekejadian`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ kejadian_id: id }),
        })
          .then((response) => {
            if (!response.ok) throw new Error("Gagal menghapus data");
            return response.json();
          })
          .then(() => {
            alert("Data berhasil dihapus.");
            window.location.reload();
            kejadianData = kejadianData.filter((item) => item.kejadian_id != id);
            renderTableKejadian(kejadianData);
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
            alert("Gagal menghapus data");
          });
      }
    });
  });
}


let currentPageKejadian = 1; // Halaman saat ini
let rowsPerPageKejadian = 5; // Default jumlah baris per halaman

// Fungsi untuk render tabel kejadian dengan pagination
function renderTableKejadianWithPagination(data) {
  const totalPages = Math.ceil(data.length / rowsPerPageKejadian);

  // Render tabel berdasarkan halaman saat ini
  renderTableKejadian(
    data.slice(
      (currentPageKejadian - 1) * rowsPerPageKejadian,
      currentPageKejadian * rowsPerPageKejadian
    )
  );

  // Render navigasi pagination
  renderPaginationKejadian(totalPages, data);
}

// Fungsi untuk render navigasi pagination kejadian
function renderPaginationKejadian(totalPages, data) {
  const paginationContainer = document.getElementById('pagination-container-kejadian');
  paginationContainer.innerHTML = '';

  // Tombol "Previous"
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPageKejadian === 1;
  prevButton.addEventListener('click', () => {
    currentPageKejadian--;
    renderTableKejadianWithPagination(data);
  });
  paginationContainer.appendChild(prevButton);

  // Tombol halaman
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.className = currentPageKejadian === i ? 'active' : '';
    pageButton.addEventListener('click', () => {
      currentPageKejadian = i;
      renderTableKejadianWithPagination(data);
    });
    const pageItem = document.createElement('div');
    pageItem.className = 'page-item';
    pageItem.appendChild(pageButton);
    paginationContainer.appendChild(pageItem);
  }

  // Tombol "Next"
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPageKejadian === totalPages;
  nextButton.addEventListener('click', () => {
    currentPageKejadian++;
    renderTableKejadianWithPagination(data);
  });
  paginationContainer.appendChild(nextButton);
}

// Event listener untuk mengubah jumlah baris per halaman
document.getElementById('rows-per-page-kejadian').addEventListener('change', (e) => {
  rowsPerPageKejadian = parseInt(e.target.value, 10); // Perbarui jumlah baris per halaman
  currentPageKejadian = 1; // Reset ke halaman pertama
  renderTableKejadianWithPagination(kejadianData); // Render ulang tabel dengan data terbaru
});


// Render tabel Checklist K3
function renderTableChecklist(data) {
  tableBodyChecklist.innerHTML = "";
  data.forEach((item) => {
    const formattedExpiredDate = item.expired_date ? formatTanggal(item.expired_date) : "N/A";

    tableBodyChecklist.innerHTML += `
    
      <tr data-id="${item.checklist_id}">
                <td><input type="checkbox" data-id="${item.checklist_id}"></td>
                <td>${item.section || "N/A"}</td>
                <td>${item.indikator_k3 || "N/A"}</td>
                <td>${item.expired_date ? formatTanggal(item.expired_date) : "N/A"}</td>
                <td>${item.checklist_pemeriksaan ? `<img src="${item.checklist_pemeriksaan}" class="checklist-pemeriksaan" alt="Checklist Pemeriksaan">` : "N/A"}</td>
                <td>${item.apar ? `<img src="${item.apar}" class="apar" alt="APAR">` : "N/A"}</td>
                <td>${item.rambu_apar ? `<img src="${item.rambu_apar}" class="rambu-apar" alt="Rambu APAR">` : "N/A"}</td>
                <td>${item.kelengkapan_box_hydrant ? `<img src="${item.kelengkapan_box_hydrant}" class="kelengkapan-box-hydrant" alt="Box Hydrant">` : "N/A"}</td>
                <td>${item.ruang_laktasi ? `<img src="${item.ruang_laktasi}" class="ruang-laktasi" alt="Ruang Laktasi">` : "N/A"}</td>
                <td>${item.ruang_p3k ? `<img src="${item.ruang_p3k}" class="ruang-p3k" alt="Ruang P3K">` : "N/A"}</td>
                <td>${item.organik ? `<img src="${item.organik}" class="organik" alt="Organik">` : "N/A"}</td>
                <td>${item.non_organik ? `<img src="${item.non_organik}" class="non-organik" alt="Non-Organik">` : "N/A"}</td>
                <td>${item.limbah_b3 ? `<img src="${item.limbah_b3}" class="limbah-b3" alt="Limbah B3">` : "N/A"}</td>
                <td>${item.smoking_area ? `<img src="${item.smoking_area}" class="smoking-area" alt="Smoking Area">` : "N/A"}</td>
                <td>${item.dll ? `<img src="${item.dll}" class="dll" alt="Lain-lain">` : "N/A"}</td>


        <td>
          <button class="edit-btn-checklist" 
            data-id="${item.checklist_id}"
            data-section="${item.section}"
            data-indikator_k3="${item.indikator_k3}"
            data-expired_date="${item.expired_date || ""}">
            ✏️
          </button>
          <button class="delete-btn-checklist" data-id="${item.checklist_id}">🗑️</button>
        </td>
      </tr>
    `;
  });

  // Event untuk tombol Edit
  document.querySelectorAll(".edit-btn-checklist").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const data = e.target.dataset;

      document.getElementById("edit-checklist-id").value = data.checklist_id;
      document.getElementById("edit-section").value = data.section;
      document.getElementById("edit-indikator-k3").value = data.indikator_k3;
      document.getElementById("edit-expired-date").value = data.expired_date;

      editModalChecklist.style.display = "block";
    });
  });

  // Event untuk tombol Delete
  document.querySelectorAll(".delete-btn-checklist").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;

      if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        fetch(`http://localhost:3000/deletechecklist`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checklist_id: id }),
        })
          .then((response) => {
            if (!response.ok) throw new Error("Gagal menghapus data");
            return response.json();
          })
          .then(() => {
            alert("Data berhasil dihapus.");
            checklistData = checklistData.filter((item) => item.checklist_id != id);
            renderTableChecklist(checklistData);
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
            alert("Gagal menghapus data");
          });
      }
    });
  });
}


let currentPageChecklist = 1; // Halaman saat ini
let rowsPerPageChecklist = 5; // Default jumlah baris per halaman

// Fungsi untuk render tabel checklist dengan pagination
function renderTableChecklistWithPagination(data) {
  const totalPages = Math.ceil(data.length / rowsPerPageChecklist);

  // Render tabel berdasarkan halaman saat ini
  renderTableChecklist(
    data.slice(
      (currentPageChecklist - 1) * rowsPerPageChecklist,
      currentPageChecklist * rowsPerPageChecklist
    )
  );

  // Render navigasi pagination
  renderPaginationChecklist(totalPages, data);
}

// Fungsi untuk render navigasi pagination checklist
function renderPaginationChecklist(totalPages, data) {
  const paginationContainer = document.getElementById('pagination-container-checklist');
  paginationContainer.innerHTML = '';

  // Tombol "Previous"
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPageChecklist === 1;
  prevButton.addEventListener('click', () => {
    currentPageChecklist--;
    renderTableChecklistWithPagination(data);
  });
  paginationContainer.appendChild(prevButton);

  // Tombol halaman
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.className = currentPageChecklist === i ? 'active' : '';
    pageButton.addEventListener('click', () => {
      currentPageChecklist = i;
      renderTableChecklistWithPagination(data);
    });
    const pageItem = document.createElement('div');
    pageItem.className = 'page-item';
    pageItem.appendChild(pageButton);
    paginationContainer.appendChild(pageItem);
  }

  // Tombol "Next"
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPageChecklist === totalPages;
  nextButton.addEventListener('click', () => {
    currentPageChecklist++;
    renderTableChecklistWithPagination(data);
  });
  paginationContainer.appendChild(nextButton);
}

// Event listener untuk mengubah jumlah baris per halaman
document.getElementById('rows-per-page-checklist').addEventListener('change', (e) => {
  rowsPerPageChecklist = parseInt(e.target.value, 10); // Perbarui jumlah baris per halaman
  currentPageChecklist = 1; // Reset ke halaman pertama
  renderTableChecklistWithPagination(checklistData); // Render ulang tabel dengan data terbaru
});



  // Show Modal untuk tambah data STRUKTUR
  addDataBtn.addEventListener("click", () => {
     modal.style.display = "block";
  });

  // Show Modal untuk tambah data STRUKTUR
  addDataBtnTanggap.addEventListener("click", () => {
    addModalTanggap.style.display = "block";
 });

  // Show Modal untuk tambah data PERSONEL
  addDataBtnPersonel.addEventListener("click", () => {
     addModalPersonel.style.display = "block"; // Gunakan modal personel yang benar
  });

  // Show Modal untuk tambah data REKAP
    addDataBtnRekap.addEventListener("click", () => {
      addModalRekap.style.display = "block"; // Gunakan modal personel yang benar
  });

// Show Modal untuk tambah data Kecelakaan
addDataBtnKecelakaan.addEventListener("click", () => {
   addModalKecelakaan.style.display = "block";
 });

 // Show Modal untuk tambah data Kejadian
addDataBtnKejadian.addEventListener("click", () => {
  addModalKejadian.style.display = "block";
});

 // Show Modal untuk tambah data CHECKLIST
 addDataBtnChecklist.addEventListener("click", () => {
  addModalChecklist.style.display = "block";
});


 

  // menutup modal tambah data STRUKTUR
  closeModal.addEventListener("click", () => {
     modal.style.display = "none";
  });

  // menutup modal tambah data STRUKTUR
  closeModalTanggap.addEventListener("click", () => {
    addModalTanggap.style.display = "none";
 });

  // menutup modal tambah data PERSONEL
  closeModalPersonel.addEventListener("click", () => {
     addModalPersonel.style.display = "none"; // Gunakan modal personel yang benar
  });

    // menutup modal tambah data REKAP
    closeModalRekap.addEventListener("click", () => {
      addModalRekap.style.display = "none"; // Gunakan modal personel yang benar
   });

// menutup modal tambah data KECELAKAAN
closeModalKecelakaan.addEventListener("click", () => {
   addModalKecelakaan.style.display = "none";
 });

 // menutup modal tambah data KEJADIAN
closeModalKejadian.addEventListener("click", () => {
  addModalKejadian.style.display = "none";
});

 // menutup modal tambah data KEJADIAN
 closeModalChecklist.addEventListener("click", () => {
  addModalChecklist.style.display = "none";
});


  // Submit Form Data STRUKTUR
  addDataForm.addEventListener("submit", (e) => {
     e.preventDefault();

     const formData = {
        nama: document.getElementById("nama").value,
        jabatan: document.getElementById("jabatan").value,
        posisi: document.getElementById("posisi").value,
     };

     fetch("http://localhost:3000/addstruktur", {
           method: "POST",
           headers: {
              "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
        })
        .then((response) => {
           if (!response.ok) {
              throw new Error("Failed to add data");
           }
           return response.json();
        })
        .then(() => {
          alert("Data berhasil ditambahkan");
          
           modal.style.display = "none";
           window.location.reload();
        })
        .catch((error) => {
           console.error("Error adding data:", error);
           alert("Error adding data");
        });

  });

// Submit Form Tambah Data
addDataFormTanggap.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
      nama_tanggap: document.getElementById("nama-tanggap").value,
      jabatan_tanggap: document.getElementById("jabatan-tanggap").value,
      posisi_tanggap: document.getElementById("posisi-tanggap").value,
  };

  fetch("http://localhost:3000/addstruktur_tanggap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
  })
  .then(() => {
      alert("Data berhasil ditambahkan.");
      window.location.reload();
  })
  .catch(error => console.error("Error adding data:", error));
});

  // Submit Form Data PERSONEL
  addDataFormPersonel.addEventListener("submit", (e) => {
     e.preventDefault();

     const formData = {
        nama: document.getElementById("nama-personel").value,
        keahlian: document.getElementById("keahlian-personel").value,
        batas_masa_berlaku: document.getElementById("batas-masa-berlaku-personel").value,
     };

     fetch("http://localhost:3000/addpersonel", {
           method: "POST",
           headers: {
              "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
        })
        .then((response) => {
           if (!response.ok) {
              throw new Error("Failed to add data");
           }
           return response.json();
        })
        .then(() => {
          alert("Data berhasil ditambahkan");
          
           addModalPersonel.style.display = "none";
           window.location.reload(); // Reload halaman untuk memperbarui tabel
        })
        .catch((error) => {
           console.error("Error adding data:", error);
           alert("Error adding data");
        });
  });


  // Submit Form Data REKAP
  addDataFormRekap.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = {
          tahun: document.getElementById("tahun").value,
          bulan: document.getElementById("bulan").value,
          jumlah_karyawan: document.getElementById("jumlah-karyawan").value,
          jumlah_hari_kerja: document.getElementById("jumlah-hari-kerja").value,
          kecelakaan_berat: document.getElementById("kecelakaan-berat").value,
          kecelakaan_ringan: document.getElementById("kecelakaan-ringan").value,
          kecelakaan_meninggal: document.getElementById("kecelakaan-meninggal").value,
          near_miss: document.getElementById("near-miss").value,
          fire_accident: document.getElementById("fire-accident").value,
          damaged_property: document.getElementById("damaged-property").value,
          jumlah_hari_hilang: document.getElementById("jumlah-hari-hilang").value,
      };
  
      fetch("http://localhost:3000/addrekap", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      })
          .then((response) => {
              if (!response.ok) {
                  throw new Error("Failed to add data");
              }
              return response.json();
          })
          .then(() => {
            alert("Data berhasil ditambahkan");
            
              addModalRekap.style.display = "none";
              window.location.reload(); // Reload halaman untuk memperbarui tabel
          })
          .catch((error) => {
              console.error("Error adding Rekap K3 data:", error);
              alert("Error adding data");
          });
  });
  

// Submit form tambah data KECELAKAAN
addDataFormKecelakaan.addEventListener("submit", (e) => {
   e.preventDefault();
 
   const formData = {
     tanggal: document.getElementById("tanggal").value,
     nik: document.getElementById("nik").value,
     nama: document.getElementById("nama-kecelakaan").value,
     jabatan: document.getElementById("jabatan-kecelakaan").value,
     unit: document.getElementById("unit").value,
     tempat_kejadian: document.getElementById("tempat_kejadian").value,
     kategori_kecelakaan: document.getElementById("kategori_kecelakaan").value,
     tindak_lanjut: document.getElementById("tindak_lanjut").value,
     perawatan_rs: document.getElementById("perawatan_rs").value,
     keterangan: document.getElementById("keterangan").value,
   };
 
   console.log("Form Data:", formData); // Debugging log
 
   fetch("http://localhost:3000/addkecelakaankerja", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       if (!response.ok) throw new Error("Failed to add data");
       return response.json();
     })
     .then(() => {
      alert("Data berhasil ditambahkan");
      
       addModalKecelakaan.style.display = "none";
       window.location.reload();
     })
     .catch((error) => {
       console.error("Error adding data:", error);
       alert("Error adding data");
     });
 });
 

 // Submit Form Data Kejadian Darurat
 addDataFormKejadian.addEventListener("submit", (e) => {
  e.preventDefault();

  // Ambil data dari form
  const kejadianDarurat = document.getElementById("kejadian-darurat").value.trim();
  const lokasi = document.getElementById("lokasi").value.trim();
  const kronologiKejadian = document.getElementById("kronologi-kejadian").value.trim();
  const tindakLanjut = document.getElementById("tindak-lanjut").value.trim();
  const evidenceFile = document.getElementById("evidence").files[0];

  // Validasi field
  if (!kejadianDarurat || !lokasi || !kronologiKejadian || !tindakLanjut) {
    alert("Semua field wajib diisi.");
    return;
  }

  // Validasi file evidence jika diunggah
  if (evidenceFile) {
    const allowedExtensions = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedExtensions.includes(evidenceFile.type)) {
      alert("File evidence harus berupa JPG, PNG, atau PDF.");
      return;
    }
  }

  // Buat form data untuk dikirim ke server
  const formData = new FormData();
  formData.append("kejadian_darurat", kejadianDarurat);
  formData.append("lokasi", lokasi);
  formData.append("kronologi_kejadian", kronologiKejadian);
  formData.append("tindak_lanjut", tindakLanjut);
  if (evidenceFile) {
    formData.append("evidence", evidenceFile);
  }

  // Kirim data ke backend menggunakan fetch
  fetch("http://localhost:3000/addkejadian", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal menambahkan data.");
      }
      return response.json();
    })
    .then((data) => {
      alert("Data berhasil ditambahkan");
      
      document.getElementById("add-data-modal-kejadian").style.display = "none";
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menambahkan data.");
    });
});


// Submit Form Data Checklist K3
addDataFormChecklist.addEventListener("submit", (e) => {
  e.preventDefault();

  // Ambil data dari form
  const section = document.getElementById("section").value.trim();
  const indikatorK3 = document.getElementById("indikator-k3").value.trim();
  const expiredDate = document.getElementById("expired-date").value.trim();

  // Ambil file dari input
  const checklistPemeriksaanFile = document.getElementById("checklist-pemeriksaan").files[0];
  const aparFile = document.getElementById("apar").files[0];
  const rambuAparFile = document.getElementById("rambu-apar").files[0];
  const kelengkapanBoxHydrantFile = document.getElementById("kelengkapan-box-hydrant").files[0];
  const ruangLaktasiFile = document.getElementById("ruang-laktasi").files[0];
  const ruangP3kFile = document.getElementById("ruang-p3k").files[0];
  const organikFile = document.getElementById("organik").files[0];
  const nonOrganikFile = document.getElementById("non-organik").files[0];
  const limbahB3File = document.getElementById("limbah-b3").files[0];
  const smokingAreaFile = document.getElementById("smoking-area").files[0];
  const dllFile = document.getElementById("dll").files[0];

  // Validasi field wajib
  if (!section || !indikatorK3 || !expiredDate) {
    alert("Field Section, Indikator K3, dan Expired Date wajib diisi.");
    return;
  }

  // Validasi file jika diunggah
  const allowedExtensions = ["image/jpeg", "image/png", "application/pdf"];
  const filesToValidate = [
    checklistPemeriksaanFile,
    aparFile,
    rambuAparFile,
    kelengkapanBoxHydrantFile,
    ruangLaktasiFile,
    ruangP3kFile,
    organikFile,
    nonOrganikFile,
    limbahB3File,
    smokingAreaFile,
    dllFile,
  ];

  for (const file of filesToValidate) {
    if (file && !allowedExtensions.includes(file.type)) {
      alert("Semua file harus berupa JPG, PNG, atau PDF.");
      return;
    }
  }

  // Buat form data untuk dikirim ke server
  const formData = new FormData();
  formData.append("section", section);
  formData.append("indikator_k3", indikatorK3);
  formData.append("expired_date", expiredDate);
  if (checklistPemeriksaanFile) formData.append("checklist_pemeriksaan", checklistPemeriksaanFile);
  if (aparFile) formData.append("apar", aparFile);
  if (rambuAparFile) formData.append("rambu_apar", rambuAparFile);
  if (kelengkapanBoxHydrantFile) formData.append("kelengkapan_box_hydrant", kelengkapanBoxHydrantFile);
  if (ruangLaktasiFile) formData.append("ruang_laktasi", ruangLaktasiFile);
  if (ruangP3kFile) formData.append("ruang_p3k", ruangP3kFile);
  if (organikFile) formData.append("organik", organikFile);
  if (nonOrganikFile) formData.append("non_organik", nonOrganikFile);
  if (limbahB3File) formData.append("limbah_b3", limbahB3File);
  if (smokingAreaFile) formData.append("smoking_area", smokingAreaFile);
  if (dllFile) formData.append("dll", dllFile);

  // Kirim data ke backend menggunakan fetch
  fetch("http://localhost:3000/addchecklist", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal menambahkan data.");
      }
      return response.json();
    })
    .then((data) => {
      alert("Data Checklist K3 berhasil ditambahkan.");
      document.getElementById("add-data-modal-checklist").style.display = "none";
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menambahkan data.");
    });
});



  // Close Edit Modal STRUKTUR
  closeEditModal.addEventListener("click", () => {
     editModal.style.display = "none";
  });

    // Close Edit Modal STRUKTUR
    closeEditModalTanggap.addEventListener("click", () => {
      editModalTanggap.style.display = "none";
   });
 

  // Close Edit Modal PERSONEL
  closeEditModalPersonel.addEventListener("click", () => {
     editModalPersonel.style.display = "none";
  });

  // Close Edit Modal PERSONEL
  closeEditModalRekap.addEventListener("click", () => {
    editModalRekap.style.display = "none";
  });

  // Close Edit Modal KECELAKAAN
closeEditModalKecelakaan.addEventListener("click", () => {
   editModalKecelakaan.style.display = "none";
 });

   // Close Edit Modal KEJADIAN
closeEditModalKejadian.addEventListener("click", () => {
  editModalKejadian.style.display = "none";
});

   // Close Edit Modal KEJADIAN
   closeEditModalChecklist.addEventListener("click", () => {
    editModalChecklist.style.display = "none";
  });
 

  // Submit Edit Data
  editDataForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = {
        struktur_id: document.getElementById("edit-id").value,
        nama: document.getElementById("edit-nama").value,
        jabatan: document.getElementById("edit-jabatan").value,
        posisi: document.getElementById("edit-posisi").value,
      };
  
      fetch("http://localhost:3000/updatestruktur", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update data");
          }
          return response.json();
        })
        .then(() => {
          alert("Data berhasil diperbarui");
          editModal.style.display = "none";
          window.location.reload(); // Reload halaman untuk memperbarui tabel
        })
        .catch((error) => {
          console.error("Error updating data:", error);
          alert("Error updating data");
        });
    });

    // Submit Form Edit Data
    editDataFormTanggap.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
          struktur_tanggap_id: document.getElementById("edit-id-struktur-tanggap").value,
          nama_tanggap: document.getElementById("edit-nama-tanggap").value,
          jabatan_tanggap: document.getElementById("edit-jabatan-tanggap").value,
          posisi_tanggap: document.getElementById("edit-posisi-tanggap").value,
      };

      fetch("http://localhost:3000/updatestruktur_tanggap", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
      })
      .then(() => {
          alert("Data berhasil diperbarui.");
          window.location.reload();
      })
      .catch(error => console.error("Error updating data:", error));
  });

  // Submit Edit Data Personel
  editDataFormPersonel.addEventListener("submit", (e) => {
     e.preventDefault();

     const formData = {
      personel_k3_id: document.getElementById("edit-id-personel").value,
        nama: document.getElementById("edit-nama-personel").value,
        keahlian: document.getElementById("edit-keahlian-personel").value,
        batas_masa_berlaku: document.getElementById("edit-batas-masa-berlaku-personel").value,
     };

     fetch("http://localhost:3000/updatepersonel", {
           method: "PUT",
           headers: {
              "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
        })
        .then((response) => {
           if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
           }
           return response.json();
        })
        .then(() => {
           alert("Data berhasil diperbarui");
           editModalPersonel.style.display = "none";
           window.location.reload(); // Reload halaman untuk memperbarui tabel
        })
        .catch((error) => {
           console.error("Error updating data:", error);
           alert("Error updating data");
        });
  });


  // Submit Edit Data Rekap
  editDataFormRekap.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    rekapdata_id: document.getElementById("edit-id-rekap").value,
    tahun: document.getElementById("edit-tahun").value,
    bulan: document.getElementById("edit-bulan").value,
    jumlah_karyawan: document.getElementById("edit-jumlah-karyawan").value,
    jumlah_hari_kerja: document.getElementById("edit-jumlah-hari-kerja").value,
    kecelakaan_berat: document.getElementById("edit-kecelakaan-berat").value,
    kecelakaan_ringan: document.getElementById("edit-kecelakaan-ringan").value,
    kecelakaan_meninggal: document.getElementById("edit-kecelakaan-meninggal").value,
    near_miss: document.getElementById("edit-near-miss").value,
    fire_accident: document.getElementById("edit-fire-accident").value,
    damaged_property: document.getElementById("edit-damaged-property").value,
    jumlah_hari_hilang: document.getElementById("edit-jumlah-hari-hilang").value,
  };

  fetch("http://localhost:3000/updaterekap", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(() => {
      alert("Data Rekap K3 berhasil diperbarui");
      editModalRekap.style.display = "none";
      window.location.reload(); // Reload halaman untuk memperbarui tabel
    })
    .catch((error) => {
      console.error("Error updating data:", error);
      alert("Error updating data");
    });
});

  

// Submit form edit data
editDataFormKecelakaan.addEventListener("submit", (e) => {
   e.preventDefault();
 
   const formData = {
     kecelakaankerja_id: document.getElementById("edit-id-kecelakaan").value,
     tanggal: document.getElementById("edit-tanggal").value,
     nik: document.getElementById("edit-nik").value,
     nama: document.getElementById("edit-nama-kecelakaan").value,
     jabatan: document.getElementById("edit-jabatan-kecelakaan").value,
     unit: document.getElementById("edit-unit").value,
     tempat_kejadian: document.getElementById("edit-tempat_kejadian").value,
     kategori_kecelakaan: document.getElementById("edit-kategori_kecelakaan").value,
     tindak_lanjut: document.getElementById("edit-tindak_lanjut").value,
     perawatan_rs: document.getElementById("edit-perawatan_rs").value,
     keterangan: document.getElementById("edit-keterangan").value,
   };
 
   fetch("http://localhost:3000/updatekecelakaan", {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => {
       if (!response.ok) throw new Error("Failed to update data");
       return response.json();
     })
     .then(() => {
       alert("Data berhasil diperbarui");
       editModalKecelakaan.style.display = "none";
       window.location.reload();
     })
     .catch((error) => {
       console.error("Error updating data:", error);
       alert("Error updating data");
     });
 });


 // Submit form edit data Kejadian Darurat
 editDataFormKejadian.addEventListener("submit", (e) => {
  e.preventDefault();

  // Ambil data dari form
  const formData = new FormData();
  formData.append("kejadian_id", document.getElementById("edit-id-kejadian").value);
  formData.append("kejadian_darurat", document.getElementById("edit-kejadian-darurat").value);
  formData.append("lokasi", document.getElementById("edit-lokasi").value);
  formData.append("kronologi_kejadian", document.getElementById("edit-kronologi-kejadian").value);
  formData.append("tindak_lanjut", document.getElementById("edit-tindak-lanjut").value);

  // Periksa jika ada file evidence baru
  const evidenceFile = document.getElementById("edit-evidence").files[0];
  if (evidenceFile) {
    formData.append("evidence", evidenceFile);
  }

  fetch("http://localhost:3000/updatekejadian", {
    method: "PUT",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      return response.json();
    })
    .then((data) => {
      alert("Data berhasil diperbarui");
      editModalKejadian.style.display = "none"; // Tutup modal
      window.location.reload(); // Reload halaman untuk memperbarui tabel
    })
    .catch((error) => {
      console.error("Error updating data:", error);
      alert("Error updating data");
    });
});




// Submit form edit data Checklist K3
// Event listener untuk submit form update checklist K3
editDataFormChecklist.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("checklist_id", document.getElementById("edit-checklist-id").value);
  formData.append("section", document.getElementById("edit-section").value);
  formData.append("indikator_k3", document.getElementById("edit-indikator-k3").value);
  formData.append("expired_date", document.getElementById("edit-expired-date").value);

  const fileInputs = [
      "edit-checklist-pemeriksaan", "edit-apar", "edit-rambu-apar",
      "edit-kelengkapan-box-hydrant", "edit-ruang-laktasi", "edit-ruang-p3k",
      "edit-organik", "edit-non-organik", "edit-limbah-b3", "edit-smoking-area", "edit-dll"
  ];

  fileInputs.forEach((id) => {
      const fileInput = document.getElementById(id);
      if (!fileInput) {
          console.warn(`File input dengan ID "${id}" tidak ditemukan.`);
      } else if (fileInput.files[0]) {
          formData.append(id.replace("edit-", ""), fileInput.files[0]);
      }
  });

  fetch("http://localhost:3000/updatechecklist", {
      method: "PUT",
      body: formData
  })
      .then((response) => {
          if (!response.ok) throw new Error("Failed to update data");
          return response.json();
      })
      .then(() => {
          alert("Data berhasil diperbarui.");
          window.location.reload();
      })
      .catch((error) => {
          console.error("Error updating data:", error);
          alert("Gagal memperbarui data.");
      });
});




});