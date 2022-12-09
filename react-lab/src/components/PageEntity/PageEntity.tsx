import React, { ComponentType, FC, useCallback, useEffect } from 'react';

import Card from 'components/Card';
import { Grid } from '@mui/material';
import Search from 'components/Search';
import PageLayout from 'components/PageLayout';
import charactersStore from 'store/CharactersStore';
import { observer } from 'mobx-react-lite';
import { VirtuosoGrid, GridListProps } from 'react-virtuoso';
import styled from '@emotion/styled';
import { ICard } from 'types/card';

interface IPage {
  data: ICard[];
  incrementOffset(): void;
  setCurId(id: number): void;
}

const PageEntity: FC<IPage> = observer(
  ({ data, incrementOffset, setCurId }) => {
    const MyList = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    `;

    return (
      <PageLayout>
        {data.length ? (
          <>
            <Search />
            <VirtuosoGrid
              style={{ height: '88%' }}
              components={{
                Item: Grid,
                List: MyList as ComponentType<
                  GridListProps & { context?: unknown }
                >,
                ScrollSeekPlaceholder: () => <Grid item xs={3} />
              }}
              overscan={200}
              data={data}
              endReached={incrementOffset}
              itemContent={(index, item) => (
                <Card card={item} setId={setCurId} />
              )}
            />
          </>
        ) : (
          <div>
            <h2>Loading...</h2>
          </div>
        )}
      </PageLayout>
    );
  }
);

export default PageEntity;
