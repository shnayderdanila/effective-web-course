import React, { ComponentType, FC } from 'react';

import Search from 'components/Search';
import PageLayout from 'components/PageLayout';
import { ICard } from 'types/card';
import Loader from 'components/Loader';
import CardsContainer from 'components/CardsContainer';

interface IPage {
  data: ICard[];
  loadDone: boolean;
  startWithName: string;
  incrementOffset(): void;
  setStartWith(query: string): void;
  setCurId(id: number): void;
  get isTotal(): boolean;
}

const PageEntity: FC<IPage> = ({
  data,
  loadDone,
  incrementOffset,
  setCurId,
  setStartWith,
  startWithName,
  isTotal
}) => {
  return (
    <PageLayout>
      <>
        <Search startWithName={startWithName} setStartWith={setStartWith} />
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
    </PageLayout>
  );
};

export default PageEntity;
