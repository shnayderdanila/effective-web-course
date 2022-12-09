import { CardType } from './cardType';

export interface Dependecies {
  name: string;
  resourceURI: string;
}

export interface ICard {
  id: number;
  image: string;
  name: string;
  description: string;
  characters?: Dependecies[];
  comics?: Dependecies[];
  series?: Dependecies[];
  type: CardType;
}
