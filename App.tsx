
import { useEffect } from 'react';
import { Routes } from './src/routers/routes';
import { initDatabase } from './src/database/databse';

export default function App() {
  
  useEffect(() => {
    initDatabase();
  }, []);
  
  return (
    <Routes/>
  );
}