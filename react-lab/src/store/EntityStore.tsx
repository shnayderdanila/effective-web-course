// mobx
import {
  configure,
  makeObservable,
  observable,
  action,
  computed,
  runInAction
} from 'mobx';

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
    this.listFavorites = JSON.parse(
      localStorage.getItem(`favorites${this.type}`) ?? '[]'
    );
    this.curEntityId = Number(localStorage.getItem(`${this.type}Id`)) ?? 0;
    makeObservable(this, {
      total: observable,
      listData: observable,
      listFavorites: observable,
      curEntityId: observable,
      curEntity: observable,
      offset: observable,
      startWithName: observable,
      loadDone: observable,
      isError: observable,
      isTotal: computed,
      setStartWithName: action,
      addFavorite: action,
      removeFavorite: action,
      setEntityId: action,
      incrementOffset: action,
      loadEntities: action,
      loadDetailEntity: action
    });
  }

  // type entity for storage
  type: CardType;

  // how much entity in BE without pagination
  total: number = 0;

  // list with data from BE
  listData: ICard[] = [];

  // list of favorites entity
  listFavorites: ICard[];

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

  get isTotal(): boolean {
    return this.offset + envs.pageOffset > this.total;
  }

  addFavorite = (card: ICard) => {
    this.listFavorites.push({ ...card, favorite: true });
    localStorage.setItem(
      `favorites${this.type}`,
      JSON.stringify(this.listFavorites)
    );
    this.updateDataListFavoriteData(card, true);
  };

  removeFavorite = (card: ICard) => {
    this.listFavorites.splice(
      this.listFavorites.findIndex((entity) => entity.id === card.id),
      1
    );
    localStorage.setItem(
      `favorites${this.type}`,
      JSON.stringify(this.listFavorites)
    );
    this.updateDataListFavoriteData(card, false);
  };

  setStartWithName = (query: string) => {
    if (query !== this.startWithName) {
      this.startWithName = query;

      this.offset = 0;
      this.loadDone = false;
      this.listData = [];
    }
  };

  setEntityId = (id: number) => {
    if (this.curEntityId !== id) {
      this.curEntity = this.emptyEntity(id);
    }
    this.curEntityId = id;
    localStorage.setItem(`${this.type}Id`, String(this.curEntityId));
  };

  incrementOffset = () => {
    if (this.isTotal && this.total > envs.pageOffset) {
      this.offset += this.total % this.offset;
    } else {
      this.offset += envs.pageOffset;
      this.loadDone = false;
    }
  };

  loadEntities = async (): Promise<void> => {
    try {
      if (!this.loadDone) {
        const params = this.getQueryParamsForListEntity();

        const data = await getEntityList(params, this.type);

        runInAction(() => {
          this.listData = [
            ...this.listData,
            ...data.data.map((el) => {
              return this.listFavorites.find((fav) => fav.id === el.id)
                ? { ...el, favorite: true }
                : el;
            })
          ];
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
      type: this.type,
      favorite: false
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

  updateDataListFavoriteData(favorite: ICard, isFavorite: boolean) {
    const index = this.listData.findIndex(
      (entity) => entity.id === favorite.id
    );
    if (index !== -1) {
      this.listData.splice(index, 1, { ...favorite, favorite: isFavorite });
    }
  }
}

export const charactersStore = new EntityStore(CardType.CHARACTERS);
export const seriesStore = new EntityStore(CardType.SERIES);
export const comicsStore = new EntityStore(CardType.COMICS);
