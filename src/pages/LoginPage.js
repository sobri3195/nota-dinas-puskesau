import { useState } from 'react';
import { Alert, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    const result = login(form);
    if (!result.success) {
      setError(result.message);
      return;
    }
    navigate('/form-nota');
  };

  return (
    <Paper sx={{ maxWidth: 420, mx: 'auto', p: 3 }} component="form" onSubmit={submit}>
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight={700}>
          Login Internal
        </Typography>
        <Typography variant="body2">Gunakan akun demo: internal / puskesau123</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          label="Username"
          value={form.username}
          onChange={(event) => setForm((prev) => ({ ...prev, username: event.target.value }))}
        />
        <TextField
          label="Password"
          type="password"
          value={form.password}
          onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
        />
        <Button type="submit" variant="contained">
          Masuk
        </Button>
      </Stack>
    </Paper>
  );
}
