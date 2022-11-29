import React, { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';
import { ICard } from 'types/card';
import { Box } from '@mui/material';
import classes from './PageContainer.module.scss';

const PageContainer: FC = () => {
  const loader = useLoaderData() as ICard[];

  return (
    <div>
      <Header />
      <Box className={classes.centered}>
        {loader.map((card) => (
          <Card card={card} />
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default PageContainer;
