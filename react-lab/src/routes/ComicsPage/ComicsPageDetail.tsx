import React, { FC, useCallback, useEffect } from 'react';

import PageDetailEntity from 'components/PageDetailEntity';
import { observer } from 'mobx-react-lite';
import { comicsStore } from 'store/EntityStore';
import { CardType } from 'types/cardType';

export const ComicsPageDetail: FC = observer(() => {
  const { curEntityId, loadDetailEntity, curEntity, isError } = comicsStore;

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
      type={CardType.COMICS}
    />
  );
});
