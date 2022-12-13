// mobx
import { configure, makeAutoObservable, runInAction } from 'mobx';

// api
import { getEntityList, getDetailsEntity } from 'api/getRequests';

// types
import { ICard } from 'types/card';
import { CardType } from 'types/cardType';

// envs
import { envs } from 'config/environments';

configure({ enforceActions: 'observed' });

class EntityStore {
  constructor(type: CardType) {
    this.type = type;
    this.curEntityId = Number(localStorage.getItem(`${this.type}Id`)) ?? 0;
    makeAutoObservable(this);
  }

  // type entity for storage
  type: CardType;

  // how much entity in BE without pagination
  total: number = 0;

  // list with data from BE
  listData: ICard[] = [];

  // id cur entity in detail card
  curEntityId: number;

  // cur entity in detail card
  curEntity: ICard | undefined = undefined;

  // query param for backend data shift for list entity
  offset: number = 0;

  // query param for find entity by name
  startWithName: string = '';

  // param for check that data with cur offset is load
  loadDone: boolean = false;

  // param for check error
  isError: boolean = false;

  setStartWithName = (query: string) => {
    this.startWithName = query;

    this.offset = 0;
    this.loadDone = false;
    this.listData = [];
  };

  setOffset = (offset: number) => {
    this.offset = offset;
  };

  setEntityId = (id: number) => {
    if (this.curEntityId !== id) {
      this.curEntity = this.emptyEntity(id);
    }
    this.curEntityId = id;
    localStorage.setItem(`${this.type}Id`, String(this.curEntityId));
  };

  incrementOffset = () => {
    if (this.isTotal) {
      console.log(this.total);
      this.offset += this.total % this.offset;
    } else {
      this.offset += envs.pageOffset;
      this.loadDone = false;
    }
  };

  get isTotal(): boolean {
    return this.offset + envs.pageOffset > this.total;
  }

  loadEntities = async (): Promise<void> => {
    try {
      if (!this.loadDone) {
        const params = this.getQueryParamsForListEntity();

        const data = await getEntityList(params, this.type);

        runInAction(() => {
          this.listData = [...this.listData, ...data.data];
          this.total = data.total;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.isError = true;
      });
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadDone = true;
      });
    }
  };

  loadDetailEntity = async (): Promise<void> => {
    try {
      const data = await getDetailsEntity(this.curEntityId, this.type);
      runInAction(() => {
        this.curEntity = data;
      });
    } catch (error) {
      runInAction(() => {
        this.isError = true;
      });
      console.error(error);
    }
  };

  emptyEntity = (id: number) => {
    return {
      id,
      description: '',
      name: '',
      image: '',
      comics: [],
      series: [],
      characters: [],
      type: this.type
    };
  };

  getQueryParamsForListEntity() {
    if (this.startWithName) {
      if (this.type === CardType.CHARACTERS) {
        return {
          offset: this.offset,
          nameStartsWith: this.startWithName
        };
      }
      return {
        offset: this.offset,
        titleStartsWith: this.startWithName
      };
    }
    return { offset: this.offset };
  }
}

export const charactersStore = new EntityStore(CardType.CHARACTERS);
export const seriesStore = new EntityStore(CardType.SERIES);
export const comicsStore = new EntityStore(CardType.COMICS);
