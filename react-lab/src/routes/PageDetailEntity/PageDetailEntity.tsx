import React, { FC, useCallback, useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import charactersStore from 'store/CharactersStore';
import DetailCard from 'components/DetailCard';
import PageLayout from 'components/PageLayout';

const PageDetailEntity: FC = observer(() => {
  const {
    curCharacterId,
    loadDetailCharacters: loadDetailChracters,
    getCharacterById
  } = charactersStore;

  const loadData = useCallback(() => {
    return setTimeout(() => {
      loadDetailChracters();
    }, 0);
  }, [curCharacterId]);

  useEffect(() => {
    const timeout = loadData();
    return () => clearTimeout(timeout);
  }, [curCharacterId]);

  return (
    <PageLayout>
      <DetailCard data={getCharacterById} />
    </PageLayout>
  );
});

export default PageDetailEntity;
