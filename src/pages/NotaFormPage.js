import { useMemo, useRef, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Grid2,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useNota } from '../context/NotaContext';
import { bulanRoman, formatNomorNota } from '../utils/nota';

const initialForm = {
  kodeKlasifikasi: 'R',
  nomorUrut: '',
  bulan: 'I',
  tahun: String(new Date().getFullYear()),
  kodeSatuan: 'PUSKESAU',
  kepada: '',
  dari: '',
  perihal: '',
  isi: ''
};

export default function NotaFormPage() {
  const [form, setForm] = useState(initialForm);
  const [tembusanInput, setTembusanInput] = useState('');
  const [tembusan, setTembusan] = useState([]);
  const [message, setMessage] = useState(null);
  const { addNota } = useNota();
  const previewRef = useRef(null);

  const nomorNota = useMemo(() => formatNomorNota(form), [form]);

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const addTembusan = () => {
    if (!tembusanInput.trim()) return;
    setTembusan((prev) => [...prev, tembusanInput.trim()]);
    setTembusanInput('');
  };

  const saveNota = () => {
    addNota({ ...form, tembusan, nomorNota });
    setMessage({ type: 'success', text: 'Nota dinas berhasil disimpan ke daftar.' });
  };

  const exportPdf = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const width = 190;
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, 'PNG', 10, 10, width, height);
    pdf.save(`${nomorNota.replaceAll('/', '_')}.pdf`);
  };

  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>
        Formulir Nota Dinas
      </Typography>
      {message && <Alert severity={message.type}>{message.text}</Alert>}
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3 }}>
            <Stack spacing={2}>
              <TextField select label="Kode Klasifikasi" name="kodeKlasifikasi" value={form.kodeKlasifikasi} onChange={onChange}>
                <MenuItem value="SR">SR</MenuItem>
                <MenuItem value="R">R</MenuItem>
                <MenuItem value="B">B</MenuItem>
              </TextField>
              <TextField label="Nomor Urut" name="nomorUrut" value={form.nomorUrut} onChange={onChange} />
              <TextField select label="Bulan (Romawi)" name="bulan" value={form.bulan} onChange={onChange}>
                {bulanRoman.map((bulan) => (
                  <MenuItem key={bulan} value={bulan}>
                    {bulan}
                  </MenuItem>
                ))}
              </TextField>
              <TextField label="Tahun" name="tahun" value={form.tahun} onChange={onChange} />
              <TextField label="Kode Satuan" name="kodeSatuan" value={form.kodeSatuan} onChange={onChange} />
              <TextField label="Kepada" name="kepada" value={form.kepada} onChange={onChange} />
              <TextField label="Dari" name="dari" value={form.dari} onChange={onChange} />
              <TextField label="Perihal" name="perihal" value={form.perihal} onChange={onChange} />
              <TextField
                label="Isi Nota"
                name="isi"
                value={form.isi}
                onChange={onChange}
                minRows={5}
                multiline
              />
              <Stack direction="row" spacing={1}>
                <TextField
                  fullWidth
                  label="Tembusan"
                  value={tembusanInput}
                  onChange={(event) => setTembusanInput(event.target.value)}
                />
                <Button variant="outlined" onClick={addTembusan}>
                  Tambah
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {tembusan.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    onDelete={() => setTembusan((prev) => prev.filter((value) => value !== item))}
                  />
                ))}
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={saveNota}>
                  Simpan
                </Button>
                <Button variant="contained" color="secondary" onClick={exportPdf}>
                  Unduh PDF
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3 }} ref={previewRef} id="nota-preview">
            <Typography variant="h5" align="center" fontWeight={700} gutterBottom>
              NOTA DINAS
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography><strong>Nomor:</strong> {nomorNota}</Typography>
            <Typography><strong>Kepada:</strong> {form.kepada || '-'}</Typography>
            <Typography><strong>Dari:</strong> {form.dari || '-'}</Typography>
            <Typography><strong>Tanggal:</strong> {new Date().toLocaleDateString('id-ID')}</Typography>
            <Typography><strong>Perihal:</strong> {form.perihal || '-'}</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography sx={{ whiteSpace: 'pre-line' }}>{form.isi || 'Isi nota dinas belum diisi.'}</Typography>
            <Box sx={{ mt: 3 }}>
              <Typography><strong>Penutup:</strong></Typography>
              <Typography>Demikian nota dinas ini disampaikan untuk dipedomani dan ditindaklanjuti.</Typography>
              <Typography sx={{ mt: 2 }}><strong>{form.dari || 'Pejabat Pengirim'}</strong></Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography><strong>Tembusan:</strong></Typography>
              {tembusan.length === 0 ? (
                <Typography>-</Typography>
              ) : (
                tembusan.map((item, index) => <Typography key={item}>{index + 1}. {item}</Typography>)
              )}
            </Box>
          </Paper>
        </Grid2>
      </Grid2>
    </Stack>
  );
}
