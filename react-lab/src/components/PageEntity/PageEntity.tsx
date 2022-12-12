import React, { ComponentType, FC } from 'react';

import Card from 'components/Card';
import { Grid } from '@mui/material';
import Search from 'components/Search';
import PageLayout from 'components/PageLayout';
import { VirtuosoGrid, GridListProps } from 'react-virtuoso';
import styled from '@emotion/styled';
import { ICard } from 'types/card';
import Loader from 'components/Loader';

interface IPage {
  data: ICard[];
  startWithName: string;
  incrementOffset(): void;
  setStartWith(query: string): void;
  setCurId(id: number): void;
  get isTotal(): boolean;
}

const PageEntity: FC<IPage> = ({
  data,
  incrementOffset,
  setCurId,
  setStartWith,
  startWithName,
  isTotal
}) => {
  const MyList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  return (
    <PageLayout>
      <>
        <Search startWithName={startWithName} setStartWith={setStartWith} />
        {data.length ? (
          <VirtuosoGrid
            components={{
              Item: Grid,
              List: MyList as ComponentType<
                GridListProps & { context?: unknown }
              >,
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
          <Loader />
        )}
      </>
    </PageLayout>
  );
};

export default PageEntity;
