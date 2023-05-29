
import { useEffect } from 'react';
import { Routes } from './src/routers/routes';
import { initDatabase } from './src/database/databse';
import { PaperProvider } from 'react-native-paper';

export default function App() {

  useEffect(() => {
    initDatabase();
  }, []);
  
  return (
    <PaperProvider>
          <Routes />
    </PaperProvider>
  );
}