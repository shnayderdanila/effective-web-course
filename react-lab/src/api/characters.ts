import { CardType } from 'types/cardType';
import { Dependecies, ICard } from 'types/card';

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
      }
    ];
  };
}

interface CharacterDetailedResponse {
  status: string;
  data: {
    results: [
      {
        comics: {
          items: Dependecies[];
        };
        series: {
          items: Dependecies[];
        };
      }
    ];
  };
}

// get from marvel list of characters
export function getCharacters(
  offset: number,
  nameStartsWith: string
): Promise<{ data: ICard[]; total: number }> {
  return axiosInstanse
    .get<CharactersResponse>(
      '/v1/public/characters',
      nameStartsWith
        ? {
            params: {
              offset,
              nameStartsWith
            }
          }
        : {
            params: {
              offset
            }
          }
    )
    .then((characters) => {
      return {
        data: characters.data.data.results.map((character) => {
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
        }),
        total: characters.data.data.total
      };
    })
    .catch((x) => {
      console.log(x);
      return { data: [], total: 0 };
    });
}

export function getCharacterDetails(
  id: number
): Promise<{ comics: Dependecies[]; series: Dependecies[] }> {
  return axiosInstanse
    .get<CharacterDetailedResponse>(`/v1/public/characters/${id}`)
    .then((characterDependecies) => {
      return {
        comics: characterDependecies.data.data.results[0].comics.items,
        series: characterDependecies.data.data.results[0].series.items
      };
    });
}
