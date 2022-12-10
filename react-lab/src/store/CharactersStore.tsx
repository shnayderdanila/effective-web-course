import { ICard } from 'types/card';

import { getCharacter, getCharacterDetails } from 'api/characters';
import { configure, makeAutoObservable, runInAction } from 'mobx';

configure({ enforceActions: 'observed' });

class CharactersStore {
  character: ICard[] = [];

  curCharacterId: number = Number(localStorage.getItem('characterId')) ?? 0;

  curCharacterArrayId: number = 0;

  offset: number = 0;

  loadDone: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get getCharacterById() {
    this.curCharacterArrayId = this.character.findIndex(
      (character) => character.id === this.curCharacterId
    );
    return this.character[this.curCharacterArrayId];
  }

  setOffset = (offset: number) => {
    this.offset = offset;
  };

  setCurCharacterId = (id: number) => {
    this.curCharacterId = id;
  };

  incrementOffset = () => {
    this.offset += 20;
    this.loadDone = false;
  };

  loadCharacters = async (): Promise<void> => {
    try {
      if (!this.loadDone) {
        const data = await getCharacter(this.offset);

        runInAction(() => {
          this.character = [...this.character, ...data];
          this.loadDone = true;
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  loadDetailCharacters = async (): Promise<void> => {
    try {
      const data = await getCharacterDetails(this.curCharacterId);

      runInAction(() => {
        this.character[this.curCharacterArrayId].series = data.series;
        this.character[this.curCharacterArrayId].comics = data.comics;
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const charactersStore = new CharactersStore();

export default charactersStore;
