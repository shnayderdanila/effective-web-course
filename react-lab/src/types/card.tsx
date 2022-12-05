import { CardType } from "./cardType";

export interface ICard {
  id: number;
  image: string;
  name: string;
  description: string;
  characters?: ICard[],
  comics?: ICard[],
  series?: ICard[],
  type: CardType
}
