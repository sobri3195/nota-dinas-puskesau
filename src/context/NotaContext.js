import { createContext, useContext, useMemo, useState } from 'react';

const NotaContext = createContext(null);

export function NotaProvider({ children }) {
  const [notas, setNotas] = useState(() => {
    const saved = localStorage.getItem('puskesau-notas');
    return saved ? JSON.parse(saved) : [];
  });

  const persist = (next) => {
    setNotas(next);
    localStorage.setItem('puskesau-notas', JSON.stringify(next));
  };

  const addNota = (nota) => {
    const newNota = {
      ...nota,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };
    persist([newNota, ...notas]);
  };

  const value = useMemo(() => ({ notas, addNota }), [notas]);

  return <NotaContext.Provider value={value}>{children}</NotaContext.Provider>;
}

export function useNota() {
  const context = useContext(NotaContext);
  if (!context) {
    throw new Error('useNota harus digunakan di dalam NotaProvider');
  }
  return context;
}
