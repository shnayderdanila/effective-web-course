import React, { FC } from 'react';

import Search from 'components/Search';
import PageLayout from 'components/PageLayout';
import { ICard } from 'types/card';
import Loader from 'components/Loader';
import CardsContainer from 'components/CardsContainer';
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
  type
}) => {
  return (
    <PageLayout>
      {isError ? (
        <div>
          <h2>Erorr get {type}. Please try later.</h2>
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
