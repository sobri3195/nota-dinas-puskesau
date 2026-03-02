import { useMemo, useState } from 'react';
import { Paper, Stack, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNota } from '../context/NotaContext';

export default function NotaListPage() {
  const { notas } = useNota();
  const [keyword, setKeyword] = useState('');

  const rows = useMemo(() => {
    return notas
      .filter((item) => {
        const match = `${item.nomorNota} ${item.perihal} ${item.kepada} ${item.dari}`.toLowerCase();
        return match.includes(keyword.toLowerCase());
      })
      .map((item) => ({
        id: item.id,
        nomor: item.nomorNota,
        tanggal: new Date(item.createdAt).toLocaleDateString('id-ID'),
        perihal: item.perihal,
        penerima: item.kepada,
        pengirim: item.dari
      }));
  }, [keyword, notas]);

  const columns = [
    { field: 'nomor', headerName: 'Nomor', flex: 1.4 },
    { field: 'tanggal', headerName: 'Tanggal', flex: 0.8 },
    { field: 'perihal', headerName: 'Perihal', flex: 1.2 },
    { field: 'penerima', headerName: 'Penerima', flex: 1 },
    { field: 'pengirim', headerName: 'Pengirim', flex: 1 }
  ];

  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={700}>
        Daftar Nota Dinas
      </Typography>
      <TextField
        label="Cari nomor/perihal/penerima/pengirim"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <Paper sx={{ height: 420 }}>
        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} disableRowSelectionOnClick />
      </Paper>
    </Stack>
  );
}
