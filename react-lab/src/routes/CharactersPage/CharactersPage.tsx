import React, { FC, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PageEntity from 'components/PageEntity';
import { charactersStore } from 'store/EntityStore';

export const CharacterPage: FC = observer(() => {
  const {
    listData,
    offset,
    startWithName,
    loadEntities,
    incrementOffset,
    setEntityId,
    setStartWithName
  } = charactersStore;

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
    />
  );
});
