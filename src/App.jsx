import React from 'react';
import './assets/styles/css/main.css'
import AppRoutes from './routes/AppRoutes'
import ThemeProvider from './store/theme/ThemeProvider';
import i18n from './i18n';


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
