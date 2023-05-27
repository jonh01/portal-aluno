
import { useEffect, useState } from 'react';
import { Routes } from './src/routers/routes';
import { initDatabase } from './src/database/databse';

export default function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    initDatabase();
  }, []);
  
  return (
    <Routes isLoggedIn={isLoggedIn} />
  );
}