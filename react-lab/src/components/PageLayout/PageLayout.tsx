import React, { FC, ReactNode } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { Box } from '@mui/material';

import classes from './PageLayout.module.scss';

interface IChildren {
  children: ReactNode;
}

const PageLayout: FC<IChildren> = ({ children }) => {
  return (
    <div className={classes.wrapper_content}>
      <Header />
      <main className={classes.centered}>
        <Box className={classes.main_content}>{children}</Box>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
