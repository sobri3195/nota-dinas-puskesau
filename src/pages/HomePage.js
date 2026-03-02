import { Card, CardContent, Grid2, Paper, Stack, Typography, Button } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link as RouterLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <Stack spacing={3}>
      <Paper sx={{ p: 4, textAlign: 'center', background: 'linear-gradient(120deg, #e3f2fd, #fff)' }}>
        <LocalHospitalIcon sx={{ fontSize: 80, color: 'primary.main' }} />
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Pusat Kesehatan TNI Angkatan Udara (Puskesau)
        </Typography>
        <Typography>
          Platform internal untuk memahami pedoman Nota Dinas serta membuat dokumen nota dinas yang rapi,
          konsisten, dan sesuai ketentuan TNI AU.
        </Typography>
      </Paper>

      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Panduan Nota Dinas</Typography>
              <Typography sx={{ mb: 2 }}>Pelajari ketentuan resmi, susunan, dan format penomoran.</Typography>
              <Button component={RouterLink} to="/panduan" variant="contained">
                Buka Panduan
              </Button>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Formulir Nota Dinas</Typography>
              <Typography sx={{ mb: 2 }}>Isi data nota dinas dan lihat preview dokumen otomatis.</Typography>
              <Button component={RouterLink} to="/form-nota" variant="contained">
                Buat Nota
              </Button>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Daftar Nota Dinas</Typography>
              <Typography sx={{ mb: 2 }}>Lihat histori nota dinas, cari, dan lakukan penyaringan.</Typography>
              <Button component={RouterLink} to="/daftar-nota" variant="contained">
                Lihat Daftar
              </Button>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Stack>
  );
}
