import React, { FC } from 'react';

// Components
import Search from 'components/Search';
import PageLayout from 'components/PageLayout';
import Loader from 'components/Loader';
import CardsContainer from 'components/CardsContainer';

// i18 ( translation )
import { useTranslation } from 'react-i18next';

// Types
import { ICard } from 'types/card';
import { CardType } from 'types/cardType';

interface IPage {
  data: ICard[];
  loadDone: boolean;
  startWithName: string;
  incrementOffset(): void;
  setStartWith(query: string): void;
  setCurId(id: number): void;
  get isTotal(): boolean;
  isError: boolean;
  type: CardType;
  addFavorite(card: ICard): void;
  removeFavorite(card: ICard): void;
}

const PageEntity: FC<IPage> = ({
  data,
  loadDone,
  incrementOffset,
  setCurId,
  setStartWith,
  startWithName,
  isTotal,
  isError,
  type,
  addFavorite,
  removeFavorite
}) => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      {isError ? (
        <div>
          <h2>{`${t('GetError')} ${t(`${type}.`)} ${t('TryLater')}`}</h2>
        </div>
      ) : (
        <>
          <Search
            startWithName={startWithName}
            setStartWith={setStartWith}
            type={type}
          />
          {data.length || loadDone ? (
            <CardsContainer
              data={data}
              incrementOffset={incrementOffset}
              setCurId={setCurId}
              isTotal={isTotal}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          ) : (
            <Loader />
          )}
        </>
      )}
    </PageLayout>
  );
};

export default PageEntity;
