import React, { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from 'components/Card';
import { ICard } from 'types/card';
import { Grid } from '@mui/material';
import Search from 'components/Search';
import PageLayout from 'components/PageLayout';

import classes from './PageEntity.module.scss';

const PageEntity: FC = () => {
  const loader = useLoaderData() as ICard[];

  return (
    <PageLayout>
      <Search />
      <Grid className={classes.cards} container spacing={3}>
        {loader.map((card) => (
          <Grid item xs={3}>
            <Card card={card} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default PageEntity;
