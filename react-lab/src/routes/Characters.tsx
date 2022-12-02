import { ICard } from 'types/card';
import { CardType } from 'types/cardType';

export const characters: ICard[] = [
  {
    id: 1,
    image: '/src/assets/characters/spider.jpg',
    name: 'Spider-Man',
    description:
      'Emerging from a universe in need of a new Spider-Man, a Brooklyn teen named Miles Morales rose to the challenge.',
    comics: [],
    series: [],
    type: CardType.CHARACHTERS
  },
  {
    id: 2,
    image: '/src/assets/characters/panther.jpg',
    name: 'Black panther',
    description:
      'TChalla is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.',
    comics: [],
    series: [],
    type: CardType.CHARACHTERS
  },
  {
    id: 3,
    image: '/src/assets/characters/abomination.jpg',
    name: 'Abomination',
    description:
      'Gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
    comics: [],
    series: [],
    type: CardType.CHARACHTERS
  },
  {
    id: 4,
    image: '/src/assets/characters/iron.jpg',
    name: 'Iron-Man',
    description:
      'Genius. Billionaire. Philanthropist. Tony Stark confidence is only matched by his high-flying abilities as the hero called Iron Man.',
    comics: [],
    series: [],
    type: CardType.CHARACHTERS
  }
];
