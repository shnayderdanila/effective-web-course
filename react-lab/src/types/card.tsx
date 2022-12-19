import { CardType } from './cardType';

export interface Dependecies {
  id: number;
  name: string;
  type: CardType;
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
