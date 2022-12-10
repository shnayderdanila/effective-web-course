import React, { ComponentType, FC } from 'react';

import Card from 'components/Card';
import { Grid } from '@mui/material';
import Search from 'components/Search';
import PageLayout from 'components/PageLayout';
import { observer } from 'mobx-react-lite';
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
}

const PageEntity: FC<IPage> = ({
  data,
  incrementOffset,
  setCurId,
  setStartWith,
  startWithName
}) => {
  const MyList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  return (
    <PageLayout>
      {data.length ? (
        <>
          <Search startWithName={startWithName} setStartWith={setStartWith} />
          <VirtuosoGrid
            components={{
              Item: Grid,
              List: MyList as ComponentType<
                GridListProps & { context?: unknown }
              >,
              Footer: () => <Loader />,
              ScrollSeekPlaceholder: () => <Grid item xs={3} />
            }}
            overscan={200}
            data={data}
            endReached={incrementOffset}
            itemContent={(index, item) => (
              <Card key={item.id} card={item} setId={setCurId} />
            )}
          />
        </>
      ) : (
        <Loader />
      )}
    </PageLayout>
  );
};

export default PageEntity;
