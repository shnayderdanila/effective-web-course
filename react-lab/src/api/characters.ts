import { CardType } from 'types/cardType';
import { ICard } from 'types/card';

import { axiosInstanse } from './helpers/axios';

interface CharactersResponse {
  status: string;
  data: {
    total: number;
    results: [
      {
        // The unique ID of the character resource
        id: number;

        // The name of the character
        name: string;

        // A short bio or description of the character
        description: string;

        // The representative image for this character.,
        thumbnail: {
          path: string;
          extension: string;
        };
        // A resource list containing comics which feature this character
        comics: {
          available: number;
          collectionURI: string;
        };

        // A resource list of series in which this character appears
        series: {
          available: number;
          collectionURI: string;
        };
      }
    ];
  };
}

// get from marvel list of characters
export function getCharacter(offset: number): Promise<ICard[] | []> {
  return axiosInstanse
    .get<CharactersResponse>('/v1/public/characters', {
      params: {
        offset
      }
    })
    .then((characters) => {
      return characters.data.data.results.map((character) => {
        return <ICard>{
          id: character.id,
          image: character.thumbnail.path
            .concat('/portrait_incredible.')
            .concat(character.thumbnail.extension),
          name: character.name,
          description: character.description,
          characters: [],
          series: [],
          comics: [],
          type: CardType.CHARACTERS
        };
      });
    })
    .catch((x) => {
      console.log(x);
      return [];
    });
}
