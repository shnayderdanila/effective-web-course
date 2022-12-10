import React, { FC } from 'react';

import { observer } from 'mobx-react-lite';
import DetailCard from 'components/DetailCard';
import PageLayout from 'components/PageLayout';
import { ICard } from 'types/card';

interface IPageDetailEntity {
  curEntity?: ICard;
}

const PageDetailEntity: FC<IPageDetailEntity> = observer(({ curEntity }) => {
  return (
    <PageLayout>
      <DetailCard data={curEntity} />
    </PageLayout>
  );
});

export default PageDetailEntity;
