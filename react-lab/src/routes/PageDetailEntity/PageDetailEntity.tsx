import React, { FC } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { Box } from '@mui/material';

import DetailCard from 'components/DetailCard';

import classes from './PageDetailEntity.module.scss';

const PageDetailEntity: FC = () => {
  return (
    <div className={classes.wrapper_content}>
      <Header />
      <main className={classes.centered}>
        <Box className={classes.main_content}>
          <DetailCard />
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default PageDetailEntity;
