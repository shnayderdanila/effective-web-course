import React, { FC } from 'react';

// Components
import DetailCard from 'components/DetailCard';
import PageLayout from 'components/PageLayout';

// Store
import { observer } from 'mobx-react-lite';

// Types
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
