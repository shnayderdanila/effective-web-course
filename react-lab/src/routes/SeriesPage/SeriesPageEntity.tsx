import React, { FC, useCallback, useEffect } from 'react';

// Components
import PageEntity from 'components/PageEntity';

// Store
import { observer } from 'mobx-react-lite';
import { seriesStore } from 'store/EntityStore';

// Types
import { CardType } from 'types/cardType';

export const SeriesPageEntity: FC = observer(() => {
  const {
    listData,
    loadDone,
    offset,
    startWithName,
    loadEntities,
    incrementOffset,
    setEntityId,
    setStartWithName,
    isTotal,
    isError
  } = seriesStore;

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      loadEntities();
    }, 0);
  }, [startWithName, offset]);

  useEffect(() => {
    const timeout = loadMore();
    return () => clearTimeout(timeout);
  }, [startWithName, offset]);

  return (
    <PageEntity
      startWithName={startWithName}
      data={listData}
      loadDone={loadDone}
      incrementOffset={incrementOffset}
      setCurId={setEntityId}
      setStartWith={setStartWithName}
      isTotal={isTotal}
      isError={isError}
      type={CardType.SERIES}
    />
  );
});
