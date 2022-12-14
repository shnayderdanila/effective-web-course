import React, { FC, useCallback, useEffect } from 'react';

// Components
import PageDetailEntity from 'components/PageDetailEntity';

// Store
import { observer } from 'mobx-react-lite';
import { charactersStore } from 'store/EntityStore';

// Types
import { CardType } from 'types/cardType';

export const CharactersPageDetail: FC = observer(() => {
  const { curEntityId, loadDetailEntity, curEntity, isError } = charactersStore;

  const loadData = useCallback(() => {
    return setTimeout(() => {
      loadDetailEntity();
    }, 0);
  }, [curEntityId]);

  useEffect(() => {
    const timeout = loadData();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageDetailEntity
      curEntity={curEntity}
      isError={isError}
      type={CardType.CHARACTERS}
    />
  );
});
