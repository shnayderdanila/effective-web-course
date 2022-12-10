import { ICard } from 'types/card';

import { getEntityList, getDetailsEntity } from 'api/getRequests';
import { configure, makeAutoObservable, runInAction } from 'mobx';
import { CardType } from 'types/cardType';

configure({ enforceActions: 'observed' });

class EntityStore {
  constructor(type: CardType) {
    this.type = type;
    this.curEntityId = Number(localStorage.getItem(`${this!.type}Id`)) ?? 0;
    makeAutoObservable(this);
  }

  type: CardType;

  total: number = 0;

  listData: ICard[] = [];

  curEntityId: number;

  curEntity: ICard | undefined = undefined;

  offset: number = 0;

  loadDone: boolean = false;

  clearDataList: boolean = false;

  startWithName: string = '';

  setStartWithName = (query: string) => {
    this.startWithName = query;
    this.clearDataList = true;
    this.loadDone = false;
  };

  setOffset = (offset: number) => {
    this.offset = offset;
  };

  setEntityId = (id: number) => {
    this.curEntityId = id;
    localStorage.setItem(`${this.type}Id`, String(this.curEntityId));
  };

  incrementOffset = () => {
    if (this.offset + 20 > this.total) {
      this.offset += this.total % this.offset;
    } else {
      this.offset += 20;
      this.loadDone = false;
    }
  };

  loadEntities = async (): Promise<void> => {
    try {
      if (!this.loadDone) {
        if (this.clearDataList) {
          this.offset = 0;
          this.listData = [];
          this.clearDataList = false;
        }

        const data = await getEntityList(
          this.offset,
          this.startWithName,
          this.type === CardType.CHARACTERS
            ? 'nameStartsWith'
            : 'titleStartsWith',
          this.type
        );

        runInAction(() => {
          this.listData = [...this.listData, ...data.data];
          this.total = data.total;
          this.loadDone = true;
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  loadDetailEntity = async (): Promise<void> => {
    try {
      const data = await getDetailsEntity(this.curEntityId, this.type);
      runInAction(() => {
        this.curEntity = data;
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const charactersStore = new EntityStore(CardType.CHARACTERS);
export const seriesStore = new EntityStore(CardType.SERIES);
export const comicsStore = new EntityStore(CardType.COMICS);
