import React, { FC, useCallback, useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import charactersStore from 'store/CharactersStore';
import DetailCard from 'components/DetailCard';
import PageLayout from 'components/PageLayout';

const PageDetailEntity: FC = observer(() => {
  const { curCharacterId, loadDetailCharacters, curCharacter } =
    charactersStore;

  const loadData = useCallback(() => {
    return setTimeout(() => {
      loadDetailCharacters();
    }, 0);
  }, [curCharacterId]);

  useEffect(() => {
    const timeout = loadData();
    return () => clearTimeout(timeout);
  }, [curCharacterId]);

  return (
    <PageLayout>
      <DetailCard data={curCharacter} />
    </PageLayout>
  );
});

export default PageDetailEntity;
