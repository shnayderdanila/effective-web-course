import React, { FC, useEffect } from 'react';

import Card from 'components/Card';
import { ICard } from 'types/card';
import { Grid } from '@mui/material';
import Search from 'components/Search';
import PageLayout from 'components/PageLayout';
import charactersStore from 'store/CharactersStore';

import classes from './PageEntity.module.scss';

const PageEntity: FC = () => {
  // const loader = useLoaderData() as ICard[];
  const loader = charactersStore.character as ICard[] | [];

  useEffect(() => {
    console.log(loader);
    charactersStore.loadCharacters();
  }, []);

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
