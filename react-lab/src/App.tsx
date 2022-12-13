import React, { FC, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import router from 'routes';
import { ThemeProvider } from '@mui/system';
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
