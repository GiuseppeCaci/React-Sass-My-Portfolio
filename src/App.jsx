import React from 'react';
import './assets/styles/css/main.css'
import AppRoutes from './routes/AppRoutes'
import ThemeProvider from './store/theme/ThemeProvider';


function App() {


  return (
    <>
    <ThemeProvider>
    <AppRoutes></AppRoutes>
    </ThemeProvider>
    </>
  )
}

export default App
