import React, { FC, useState } from 'react';

// Mui
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

// react router
import router from 'routes';
import { RouterProvider } from 'react-router-dom';

//
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Context
import { resources } from 'context/LanguageContext';
import { ThemeMode } from 'context/ThemeContext';

// theme for change color mui components
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#f3b13f'
    }
  }
});

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false
  }
});

const App: FC = () => {
  const [mode, setMode] = useState('light');

  return (
    <ThemeProvider theme={muiTheme}>
      <ThemeMode.Provider value={{ mode, setMode }}>
        <RouterProvider router={router} />
      </ThemeMode.Provider>
    </ThemeProvider>
  );
};

export default App;
