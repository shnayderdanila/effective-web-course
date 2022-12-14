import React, { FC, useCallback, useEffect } from 'react';

// Components
import PageEntity from 'components/PageEntity';

// Store
import { observer } from 'mobx-react-lite';
import { comicsStore } from 'store/EntityStore';

// Types
import { CardType } from 'types/cardType';

export const ComicsPageEntity: FC = observer(() => {
  const {
    listData,
    offset,
    loadDone,
    startWithName,
    loadEntities,
    incrementOffset,
    setEntityId,
    setStartWithName,
    isTotal,
    isError
  } = comicsStore;

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
      incrementOffset={incrementOffset}
      setCurId={setEntityId}
      setStartWith={setStartWithName}
      isTotal={isTotal}
      loadDone={loadDone}
      isError={isError}
      type={CardType.COMICS}
    />
  );
});
