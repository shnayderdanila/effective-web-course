import React, { ComponentType, FC, useContext } from 'react';

// Mui
import { Grid } from '@mui/material';

// Components
import Card from 'components/Card';
import Loader from 'components/Loader';

// Virtuoso
import { VirtuosoGrid, GridListProps } from 'react-virtuoso';

// i18 ( translation )
import { useTranslation } from 'react-i18next';

// Context
import { ThemeMode } from 'context/ThemeContext';

// Types
import { ICard } from 'types/card';

// Styled
import styled from '@emotion/styled';

// Styles
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
  addFavorite(card: ICard): void;
  removeFavorite(card: ICard): void;
}

export const CardsContainer: FC<ICardsContainer> = ({
  data,
  incrementOffset,
  isTotal,
  setCurId,
  addFavorite,
  removeFavorite
}) => {
  const { t } = useTranslation();

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
        <Card
          key={item.id}
          card={item}
          setId={setCurId}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      )}
    />
  ) : (
    <div>
      <h2>{t('NotFound')}</h2>
    </div>
  );
};
