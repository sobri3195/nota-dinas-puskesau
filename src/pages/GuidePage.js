import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

export default function GuidePage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>
        Panduan Nota Dinas TNI AU
      </Typography>
      <Typography>
        Nota Dinas adalah tulisan dinas yang memuat pemberitahuan, pernyataan, atau permintaan dari satu
        pejabat kepada pejabat lain dalam satuan yang sama. Dokumen ini bersifat internal untuk komunikasi
        kedinasan.
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Aspek</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Ringkasan Ketentuan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Wewenang pembuatan</TableCell>
              <TableCell>Dibuat oleh pejabat yang memiliki kepentingan tugas kedinasan di satuan yang sama.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Penandatanganan</TableCell>
              <TableCell>Ditandatangani pejabat berwenang sesuai rantai komando atau pelimpahan yang berlaku.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Susunan nota</TableCell>
              <TableCell>
                Terdiri dari kelompok kepala (nomor, kepada, dari, tanggal), isi (uraian pokok), dan penutup
                (tanda tangan, nama, pangkat, jabatan, tembusan bila ada).
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Format nomor</TableCell>
              <TableCell>
                Kode klasifikasi (SR/R/B), singkatan ND, nomor urut, bulan Romawi, tahun, dan singkatan satuan.
                Contoh: <strong>R/ND/015/IX/2026/PUSKESAU</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hal penting</TableCell>
              <TableCell>Nota dinas tidak dibubuhi cap dinas dan berlaku untuk lingkungan internal satuan.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
