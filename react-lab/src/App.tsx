import React, { FC, useState } from 'react';

// Mui
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

// react router
import router from 'routes';
import { RouterProvider } from 'react-router-dom';

// i18 (translation)
import 'context/LanguageContext';

// Context
import { ThemeMode } from 'context/ThemeContext';

// theme for change color mui components
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#f3b13f'
    }
  }
});

const App: FC = () => {

  const [mode, setMode] = useState(localStorage.getItem('theme') ?? 'light');


  return (
    <ThemeProvider theme={muiTheme}>
      <ThemeMode.Provider value={{ mode, setMode }}>
        <RouterProvider router={router} />
      </ThemeMode.Provider>
    </ThemeProvider>
  );
};

export default App;
