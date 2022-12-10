import React, { FC, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PageEntity from 'components/PageEntity';
import charactersStore from 'store/CharactersStore';

export const CharacterPage: FC = observer(() => {
  const {
    characters,
    offset,
    startWithName,
    loadCharacters,
    incrementOffset,
    setCurCharacterId,
    setStartWithName
  } = charactersStore;

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      loadCharacters();
    }, 0);
  }, [startWithName, offset]);

  useEffect(() => {
    const timeout = loadMore();
    return () => clearTimeout(timeout);
  }, [startWithName, offset]);

  return (
    <PageEntity
      startWithName={startWithName}
      data={characters}
      incrementOffset={incrementOffset}
      setCurId={setCurCharacterId}
      setStartWith={setStartWithName}
    />
  );
});
