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

  let currentData = [];

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

let kejadianData = [];


const selectAllCheckbox = document.getElementById("select-all");
const deleteSelectedBtn = document.getElementById("delete-selected-btn");
const selectAllCheckboxPersonel = document.getElementById("select-all-personel");
const deleteSelectedBtnPersonel = document.getElementById("delete-selected-btn-personel");
const selectAllCheckboxRekap = document.getElementById("select-all-rekap");
const deleteSelectedBtnRekap = document.getElementById("delete-selected-btn-rekap");
const selectAllCheckboxKecelakaan = document.getElementById("select-all-kecelakaan");
const deleteSelectedBtnKecelakaan = document.getElementById("delete-selected-btn-kecelakaan");


  // Event Listener untuk memilih semua checkbox
  selectAllCheckbox.addEventListener("change", () => {
    const checkboxes = document.querySelectorAll("#table-body-struktur input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
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
    fetch("https://p2-k3-dashboard-web.vercel.app/delete-multiple-struktur", {
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
          const row = document.querySelector(`#table-body-struktur tr[data-id="${id}"]`);
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
    fetch("https://p2-k3-dashboard-web.vercel.app/delete-multiple-personel", {
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
    fetch("https://p2-k3-dashboard-web.vercel.app/delete-multiple-rekap", {
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
  fetch("https://p2-k3-dashboard-web.vercel.app/delete-multiple-kecelakaan", {
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
        const row = document.querySelector(`#table-body-kecelakaan tr[data-id="${id}"]`);
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
  fetch("https://p2-k3-dashboard-web.vercel.app/getstruktur")
     .then((response) => response.json())
     .then((data) => {
        currentData = data.data || [];
        renderTable(currentData);

        searchBar.addEventListener("input", () => {
          const searchTerm = searchBar.value.toLowerCase();
      
          const filteredItems = currentData.filter((item) =>
              item.nama.toLowerCase().includes(searchTerm) ||
              item.jabatan.toLowerCase().includes(searchTerm) ||
              item.posisi.toLowerCase().includes(searchTerm)
          );
      
          renderTable(filteredItems);
      });
     });

  // Fetch data Personel Ahli K3
  fetch("https://p2-k3-dashboard-web.vercel.app/getpersonel")
     .then((response) => response.json())
     .then((data) => {
        personelData = data.data || [];
        renderTablePersonel(personelData);

        searchBarPersonel.addEventListener("input", () => {
          const searchTerm = searchBarPersonel.value.toLowerCase();
      
          const filteredItems = personelData.filter((item) =>
              item.nama.toLowerCase().includes(searchTerm) ||
              item.keahlian.toLowerCase().includes(searchTerm) ||
              item.batas_masa_berlaku.toLowerCase().includes(searchTerm)
          );
      
          renderTablePersonel(filteredItems);
      });
     });

// Fetch data Rekap Data K3
fetch("https://p2-k3-dashboard-web.vercel.app/getrekap")
  .then((response) => response.json())
  .then((data) => {
    const rekapData = data.data || [];
    //console.log(data); // Pastikan data termasuk tahun dan bulan
    renderTableRekap(rekapData);

    // Tambahkan event listener untuk pencarian
    searchBarRekap.addEventListener("input", () => {
      const searchTerm = searchBarRekap.value.toLowerCase();

      // Filter data berdasarkan tahun atau bulan
      const filteredItems = rekapData.filter(
        (item) =>
          item.tahun.toString().toLowerCase().includes(searchTerm) || // Filter tahun
          item.bulan.toLowerCase().includes(searchTerm) // Filter bulan
      );

      renderTableRekap(filteredItems); // Render tabel berdasarkan hasil pencarian
    });
  })
  .catch((error) => console.error("Error fetching rekap data:", error));


   
// Fetch data Kecelakaan Kerja dari backend
fetch("https://p2-k3-dashboard-web.vercel.app/getkecelakaankerja")
  .then((response) => response.json())
  .then((data) => {
    kecelakaanData = data.data || [];
    renderTableKecelakaan(kecelakaanData);

    // Filter pencarian
    searchBarKecelakaan.addEventListener("input", () => {
      const searchTerm = searchBarKecelakaan.value.toLowerCase();
      const filteredItems = kecelakaanData.filter(
        (item) =>
          item.nama.toLowerCase().includes(searchTerm) ||
          item.jabatan.toLowerCase().includes(searchTerm) ||
          item.unit.toLowerCase().includes(searchTerm)
      );
      renderTableKecelakaan(filteredItems);
    });
  });

  // Fetch data Kejadian Darurat
fetch("https://p2-k3-dashboard-web.vercel.app/getkejadian")
.then((response) => response.json())
.then((data) => {
  //console.log("Kejadian Darurat Data:", data);
  const kejadianData = data.data || [];
  renderTableKejadian(kejadianData);

  // Event listener untuk pencarian
  searchBarKejadian.addEventListener("input", () => {
    const searchTerm = searchBarKejadian.value.toLowerCase();

    // Filter data berdasarkan pencarian
    const filteredItems = kejadianData.filter((item) =>
      item.kejadian_darurat.toLowerCase().includes(searchTerm) ||
      item.lokasi.toLowerCase().includes(searchTerm) ||
      item.kronologi_kejadian.toLowerCase().includes(searchTerm)
    );

    renderTableKejadian(filteredItems);
  });
})
.catch((error) => console.error("Error fetching Kejadian Darurat data:", error));
   

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
           <button class="edit-btn" data-id="${item.struktur_id}" data-nama="${item.nama}" data-jabatan="${item.jabatan}" data-posisi="${item.posisi}">Edit</button>
           <button class="delete-btn" data-id="${item.struktur_id}">Delete</button>
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
              fetch(`https://p2-k3-dashboard-web.vercel.app/deletestruktur`, {
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
                    alert("Data berhasil dihapus");
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
           Edit
         </button>
         <button class="delete-btn-personel" 
                 data-id="${item.personel_k3_id}">
           Delete
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
              fetch(`https://p2-k3-dashboard-web.vercel.app/deletepersonel`, {
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
                    alert("Data berhasil dihapus");
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
            Edit
          </button>
          <button class="delete-btn-rekap" data-id="${item.rekapdata_id}">Delete</button>
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
        fetch(`https://p2-k3-dashboard-web.vercel.app/deleterekap`, {
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
            alert("Data berhasil dihapus");
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
             Edit
           </button>
         </div>
         <div>
           <button class="delete-btn-kecelakaan" data-id="${item.kecelakaankerja_id}">Delete</button>
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
         fetch(`https://p2-k3-dashboard-web.vercel.app/deletekecelakaan`, {
           method: "DELETE",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ kecelakaankerja_id: id }),
         })
           .then((response) => {
             if (!response.ok) throw new Error("Gagal menghapus data");
             return response.json();
           })
           .then(() => {
             alert("Data berhasil dihapus");
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
      <tr>
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
              Edit
            </button>
          </div>
          <div>
            <button class="delete-btn-kejadian" data-id="${item.kejadian_id}">Delete</button>
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
        fetch(`https://p2-k3-dashboard-web.vercel.app/deletekejadian`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ kejadian_id: id }),
        })
          .then((response) => {
            if (!response.ok) throw new Error("Gagal menghapus data");
            return response.json();
          })
          .then(() => {
            alert("Data berhasil dihapus");
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


  // Show Modal untuk tambah data STRUKTUR
  addDataBtn.addEventListener("click", () => {
     modal.style.display = "block";
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
 

  // menutup modal tambah data STRUKTUR
  closeModal.addEventListener("click", () => {
     modal.style.display = "none";
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


  // Submit Form Data STRUKTUR
  addDataForm.addEventListener("submit", (e) => {
     e.preventDefault();

     const formData = {
        nama: document.getElementById("nama").value,
        jabatan: document.getElementById("jabatan").value,
        posisi: document.getElementById("posisi").value,
     };

     fetch("https://p2-k3-dashboard-web.vercel.app/addstruktur", {
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

  // Submit Form Data PERSONEL
  addDataFormPersonel.addEventListener("submit", (e) => {
     e.preventDefault();

     const formData = {
        nama: document.getElementById("nama-personel").value,
        keahlian: document.getElementById("keahlian-personel").value,
        batas_masa_berlaku: document.getElementById("batas-masa-berlaku-personel").value,
     };

     fetch("https://p2-k3-dashboard-web.vercel.app/addpersonel", {
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
  
      fetch("https://p2-k3-dashboard-web.vercel.app/addrekap", {
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
 
   //console.log("Form Data:", formData); // Debugging log
 
   fetch("https://p2-k3-dashboard-web.vercel.app/addkecelakaankerja", {
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
  fetch("https://p2-k3-dashboard-web.vercel.app/addkejadian", {
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
      alert("Data berhasil ditambahkan.");
      document.getElementById("add-data-modal-kejadian").style.display = "none";
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
 

  // Submit Edit Data
  editDataForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = {
        struktur_id: document.getElementById("edit-id").value,
        nama: document.getElementById("edit-nama").value,
        jabatan: document.getElementById("edit-jabatan").value,
        posisi: document.getElementById("edit-posisi").value,
      };
  
      fetch("https://p2-k3-dashboard-web.vercel.app/updatestruktur", {
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

  // Submit Edit Data Personel
  editDataFormPersonel.addEventListener("submit", (e) => {
     e.preventDefault();

     const formData = {
      personel_k3_id: document.getElementById("edit-id-personel").value,
        nama: document.getElementById("edit-nama-personel").value,
        keahlian: document.getElementById("edit-keahlian-personel").value,
        batas_masa_berlaku: document.getElementById("edit-batas-masa-berlaku-personel").value,
     };

     fetch("https://p2-k3-dashboard-web.vercel.app/updatepersonel", {
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

  fetch("https://p2-k3-dashboard-web.vercel.app/updaterekap", {
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
 
   fetch("https://p2-k3-dashboard-web.vercel.app/updatekecelakaan", {
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

  fetch("https://p2-k3-dashboard-web.vercel.app/updatekejadian", {
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



});