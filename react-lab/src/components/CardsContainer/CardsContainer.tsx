import React, { ComponentType, FC, useContext } from 'react';
import styled from '@emotion/styled';
import { ICard } from 'types/card';
import Card from 'components/Card';
import { VirtuosoGrid, GridListProps } from 'react-virtuoso';
import { Grid } from '@mui/material';
import Loader from 'components/Loader';
import { ThemeMode } from 'context/ThemeContext';

import classes from './CardsContainer.module.scss';

const MyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

interface ICardsContainer {
  data: ICard[];
  incrementOffset(): void;
  get isTotal(): boolean;
  setCurId(id: number): void;
}

export const CardsContainer: FC<ICardsContainer> = ({
  data,
  incrementOffset,
  isTotal,
  setCurId
}) => {
  const theme = useContext(ThemeMode);

  return data.length ? (
    <VirtuosoGrid
      className={`${classes.scroll} ${
        theme?.mode === 'dark' ? classes.scroll_dark : classes.scroll_light
      }`}
      components={{
        Item: Grid,
        List: MyList as ComponentType<GridListProps & { context?: unknown }>,
        Footer: () => (isTotal ? <div /> : <Loader />),
        ScrollSeekPlaceholder: () => <Grid item xs={3} />
      }}
      overscan={200}
      data={data}
      endReached={incrementOffset}
      itemContent={(index, item) => (
        <Card key={item.id} card={item} setId={setCurId} />
      )}
    />
  ) : (
    <div>
      <h2>Not found</h2>
    </div>
  );
};
