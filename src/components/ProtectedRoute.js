import { Alert, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Box>
        <Alert severity="warning" sx={{ mb: 2 }}>
          Halaman ini hanya dapat diakses oleh pengguna internal.
        </Alert>
        <Button component={RouterLink} to="/login" variant="contained">
          Login Internal
        </Button>
      </Box>
    );
  }

  return children;
}
