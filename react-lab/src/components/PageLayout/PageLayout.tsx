import React, { FC, ReactNode, useContext } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { Box } from '@mui/material';
import { ThemeMode } from 'components/Context/ThemeContext';

import classes from './PageLayout.module.scss';

interface IChildren {
  children: ReactNode;
}

const PageLayout: FC<IChildren> = ({ children }) => {
  const theme = useContext(ThemeMode);

  return (
    <div
      className={`${classes.wrapper_content} ${
        theme?.mode === 'dark' ? classes.dark_mode : classes.light_mode
      }`}
    >
      <Header />
      <main className={classes.centered}>
        <Box className={classes.main_content}>{children}</Box>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
