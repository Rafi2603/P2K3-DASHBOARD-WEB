


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