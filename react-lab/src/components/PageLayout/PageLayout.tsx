import React, { FC, ReactNode, useContext, useEffect } from 'react';

// Mui
import { Box } from '@mui/material';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';

// Context
import { ThemeMode } from 'context/ThemeContext';

// Styles
import classes from './PageLayout.module.scss';

interface IChildren {
  children: ReactNode;
}

const PageLayout: FC<IChildren> = ({ children }) => {
  const theme = useContext(ThemeMode);

  useEffect(() => {
    if (theme?.mode === 'dark') {
      document.body.classList.remove(classes.light_mode);
      document.body.classList.add(classes.dark_mode);
    } else {
      document.body.classList.remove(classes.dark_mode);
      document.body.classList.add(classes.light_mode);
    }
  }, [theme?.mode]);

  return (
    <div className={`${classes.wrapper_content}`}>
      <Header />
      <main className={classes.centered}>
        <Box className={classes.main_content}>{children}</Box>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
