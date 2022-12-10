import React, { FC, useCallback, useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import DetailCard from 'components/DetailCard';
import PageLayout from 'components/PageLayout';
import { charactersStore } from 'store/EntityStore';

const PageDetailEntity: FC = observer(() => {
  const { curEntityId, loadDetailEntity, curEntity } = charactersStore;

  const loadData = useCallback(() => {
    return setTimeout(() => {
      loadDetailEntity();
    }, 0);
  }, [curEntityId]);

  useEffect(() => {
    const timeout = loadData();
    return () => clearTimeout(timeout);
  }, [curEntityId]);

  return (
    <PageLayout>
      <DetailCard data={curEntity} />
    </PageLayout>
  );
});

export default PageDetailEntity;
