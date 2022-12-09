import React, { FC, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PageEntity from 'components/PageEntity';
import charactersStore from 'store/CharactersStore';

export const CharacterPage: FC = observer(() => {
  const {
    character,
    offset,
    loadCharacters,
    incrementOffset,
    setCurCharacterId
  } = charactersStore;

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      loadCharacters();
    }, 0);
  }, [offset]);

  useEffect(() => {
    const timeout = loadMore();
    return () => clearTimeout(timeout);
  }, [offset]);

  return (
    <PageEntity
      data={character}
      incrementOffset={incrementOffset}
      setCurId={setCurCharacterId}
    />
  );
});
