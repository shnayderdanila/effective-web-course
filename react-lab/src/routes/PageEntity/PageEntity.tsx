import React, { FC, useEffect } from 'react';

import Card from 'components/Card';
import { Grid } from '@mui/material';
import Search from 'components/Search';
import PageLayout from 'components/PageLayout';
import charactersStore from 'store/CharactersStore';
import { observer } from 'mobx-react-lite';

import classes from './PageEntity.module.scss';

const PageEntity: FC = observer(() => {
  // const loader = useLoaderData() as ICard[];
  const { character, offset } = charactersStore;

  useEffect(() => {
    charactersStore.loadCharacters();
  }, [offset]);

  return character.length ? (
    <PageLayout>
      <Search />
      <Grid className={classes.cards} container spacing={3}>
        {character.map((card) => (
          <Grid item xs={3}>
            <Card card={card} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  ) : (
    <div>
      <h2>loading...</h2>
    </div>
  );
});

export default PageEntity;
