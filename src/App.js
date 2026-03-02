import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';
import LoginPage from './pages/LoginPage';
import NotaFormPage from './pages/NotaFormPage';
import NotaListPage from './pages/NotaListPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/panduan" element={<GuidePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/form-nota"
          element={
            <ProtectedRoute>
              <NotaFormPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/daftar-nota"
          element={
            <ProtectedRoute>
              <NotaListPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
