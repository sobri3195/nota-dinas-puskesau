import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('puskesau-user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = ({ username, password }) => {
    if (username === 'internal' && password === 'puskesau123') {
      const authUser = { username, role: 'internal' };
      setUser(authUser);
      localStorage.setItem('puskesau-user', JSON.stringify(authUser));
      return { success: true };
    }
    return { success: false, message: 'Username atau password salah.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('puskesau-user');
  };

  const value = useMemo(() => ({ user, login, logout, isAuthenticated: Boolean(user) }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth harus digunakan di dalam AuthProvider');
  }
  return context;
}
