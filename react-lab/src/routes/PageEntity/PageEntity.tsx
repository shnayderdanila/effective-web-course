import React, { ComponentType, FC, useCallback, useEffect } from 'react';

import Card from 'components/Card';
import { Grid } from '@mui/material';
import Search from 'components/Search';
import PageLayout from 'components/PageLayout';
import charactersStore from 'store/CharactersStore';
import { observer } from 'mobx-react-lite';
import { VirtuosoGrid, GridListProps } from 'react-virtuoso';
import styled from '@emotion/styled';

const MyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PageEntity: FC = observer(() => {
  const { character, offset } = charactersStore;

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      charactersStore.loadCharacters();
    }, 0);
  }, [offset]);

  useEffect(() => {
    const timeout = loadMore();
    return () => clearTimeout(timeout);
  }, [offset]);

  return (
    <PageLayout>
      <Search />
      <VirtuosoGrid
        style={{ height: '88%' }}
        components={{
          Item: Grid,
          List: MyList as ComponentType<GridListProps & { context?: unknown }>,
          ScrollSeekPlaceholder: () => <Grid item xs={3} />
        }}
        overscan={200}
        data={character}
        endReached={charactersStore.incrementOffset}
        itemContent={(index, item) => <Card card={item} />}
      />
    </PageLayout>
  );
});

export default PageEntity;
