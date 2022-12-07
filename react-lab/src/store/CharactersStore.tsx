import { ICard } from 'types/card';

import { getCharacter } from 'api/characters';
import { configure, makeAutoObservable, runInAction } from 'mobx';

configure({ enforceActions: 'observed' });

class CharactersStore {
  character: ICard[] | [] = [];

  offset: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  loadCharacters = async (): Promise<void> => {
    try {
      const data = await getCharacter(this.offset);
      runInAction(() => {
        this.character = data;
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const charactersStore = new CharactersStore();

export default charactersStore;
