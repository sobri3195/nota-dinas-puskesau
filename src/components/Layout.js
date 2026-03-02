import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Panduan', path: '/panduan' },
  { label: 'Form Nota', path: '/form-nota' },
  { label: 'Daftar Nota', path: '/daftar-nota' }
];

export default function Layout({ children }) {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ gap: 2, flexWrap: 'wrap' }}>
          <LocalHospitalIcon />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Nota Dinas Puskesau
          </Typography>
          {navItems.map((item) => (
            <Button key={item.path} color="inherit" component={RouterLink} to={item.path}>
              {item.label}
            </Button>
          ))}
          {!isAuthenticated ? (
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4 }}>{children}</Container>
    </Box>
  );
}
