import { CardType } from 'types/cardType';
import { Dependecies, ICard } from 'types/card';

import { axiosInstanse } from './helpers/axios';

interface CharactersResponse {
  status: string;
  data: {
    total: number;
    results: [
      {
        // The unique ID of the entity resource
        id: number;

        // The name of the entity
        name: string;

        // A short bio or description of the entity
        description: string;

        // The representative image for this entity
        thumbnail: {
          path: string;
          extension: string;
        };

        // The dependecies for this entity
        characters: {
          items: [
            {
              name: string;
              resourceURI: string;
            }
          ];
        };
        comics: {
          items: [
            {
              name: string;
              resourceURI: string;
            }
          ];
        };
        series: {
          items: [
            {
              name: string;
              resourceURI: string;
            }
          ];
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

export function getCharacterDetails(id: number): Promise<ICard> {
  return axiosInstanse
    .get<CharactersResponse>(`/v1/public/characters/${id}`)
    .then((characterResponse) => {
      const character = characterResponse.data.data.results[0];
      const comics = character.comics.items.map((marvelComics) => {
        return {
          id: Number(
            marvelComics.resourceURI.slice(
              marvelComics.resourceURI.lastIndexOf('/') + 1
            )
          ),
          name: marvelComics.name,
          type: CardType.COMICS
        };
      });
      const series = character.series.items.map((marvelSeries) => {
        return <Dependecies>{
          id: Number(
            marvelSeries.resourceURI.slice(
              marvelSeries.resourceURI.lastIndexOf('/') + 1
            )
          ),
          name: marvelSeries.name,
          type: CardType.SERIES
        };
      });
      return <ICard>{
        id: character.id,
        image: character.thumbnail.path
          .concat('/portrait_incredible.')
          .concat(character.thumbnail.extension),
        name: character.name,
        description: character.description,
        characters: [],
        series: [...series],
        comics: [...comics],
        type: CardType.CHARACTERS
      };
    });
}
