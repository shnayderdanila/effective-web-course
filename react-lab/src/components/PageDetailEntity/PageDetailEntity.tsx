import React, { FC } from 'react';

import { observer } from 'mobx-react-lite';
import DetailCard from 'components/DetailCard';
import PageLayout from 'components/PageLayout';
import { ICard } from 'types/card';
import { CardType } from 'types/cardType';

interface IPageDetailEntity {
  curEntity?: ICard;
  isError: boolean;
  type: CardType;
}

export const PageDetailEntity: FC<IPageDetailEntity> = observer(
  ({ curEntity, isError, type }) => {
    return (
      <PageLayout>
        {isError ? (
          <div>
            <h2>Erorr get {type}. Please try later.</h2>
          </div>
        ) : (
          <DetailCard data={curEntity} />
        )}
      </PageLayout>
    );
  }
);
