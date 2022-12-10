import { ICard } from 'types/card';

import { getCharacters, getCharacterDetails } from 'api/characters';
import { configure, makeAutoObservable, runInAction } from 'mobx';

configure({ enforceActions: 'observed' });

class CharactersStore {
  total: number = 0;

  characters: ICard[] = [];

  curCharacterId: number = Number(localStorage.getItem('characterId')) ?? 0;

  curCharacterArrayId: number = 0;

  offset: number = 0;

  loadDone: boolean = false;

  clearCharacters: boolean = false;

  startWithName: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  get getCharacterById() {
    this.curCharacterArrayId = this.characters.findIndex(
      (character) => character.id === this.curCharacterId
    );
    return this.characters[this.curCharacterArrayId];
  }

  setStartWithName = (query: string) => {
    this.startWithName = query;
    this.clearCharacters = true;
    this.loadDone = false;
  };

  setOffset = (offset: number) => {
    this.offset = offset;
  };

  setCurCharacterId = (id: number) => {
    this.curCharacterId = id;
  };

  incrementOffset = () => {
    if (this.offset + 20 > this.total) {
      this.offset += this.total % this.offset;
    }
    this.offset += 20;
    this.loadDone = false;
  };

  loadCharacters = async (): Promise<void> => {
    try {
      if (!this.loadDone) {
        if (this.clearCharacters) {
          this.offset = 0;
          this.characters = [];
          this.clearCharacters = false;
        }

        const data = await getCharacters(this.offset, this.startWithName);

        runInAction(() => {
          this.characters = [...this.characters, ...data.data];
          this.total = data.total;
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
        this.characters[this.curCharacterArrayId].series = data.series;
        this.characters[this.curCharacterArrayId].comics = data.comics;
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const charactersStore = new CharactersStore();

export default charactersStore;
