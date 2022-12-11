import { CardType } from 'types/cardType';
import { Dependecies, ICard } from 'types/card';

import { axiosInstanse } from './helpers/axios';

// interface for entity dependecies from marvel (comics, characters, series)
interface DependeciesResponse {
  name: string;
  resourceURI: string;
}

// interface for get list entity from marvel
interface GetEntityListsResponse {
  status: string;
  data: {
    total: number;
    results: [
      {
        // The unique ID of the entity resource
        id: number;

        // The name of the entity (only character)
        name?: string;

        // The title of the entity (only comics and series)
        title?: string;

        // A short bio or description of the entity
        description: string;

        // The representative image for this entity
        thumbnail: {
          path: string;
          extension: string;
        };

        // The dependecies for this entity
        characters?: {
          items: DependeciesResponse[];
        };
        comics?: {
          items: DependeciesResponse[];
        };
        series?: {
          items: DependeciesResponse[];
        };
      }
    ];
  };
}

// Helper function, not api, get from entity dependecies if exists
function getDependecies(
  cardType: CardType,
  dependecies?: DependeciesResponse[]
): Dependecies[] {
  return dependecies
    ? dependecies.map((marvelComics) => {
        return {
          id: Number(
            marvelComics.resourceURI.slice(
              marvelComics.resourceURI.lastIndexOf('/') + 1
            )
          ),
          name: marvelComics.name,
          type: cardType
        };
      })
    : [];
}

// get from marvel list of entity
export function getEntityList(
  params: unknown,
  type: CardType
): Promise<{ data: ICard[]; total: number }> {
  return axiosInstanse
    .get<GetEntityListsResponse>(`/v1/public/${type}`, { params })
    .then((entityList) => {
      return {
        data: entityList.data.data.results.map((entity) => {
          return <ICard>{
            id: entity.id,
            image: entity.thumbnail.path
              .concat('/portrait_incredible.')
              .concat(entity.thumbnail.extension),
            name: entity.name ? entity.name : entity.title,
            description: entity.description ?? '',
            characters: [],
            series: [],
            comics: [],
            type
          };
        }),
        total: entityList.data.data.total
      };
    })
    .catch((x) => {
      console.log(x);
      return { data: [], total: 0 };
    });
}

// get from marvel entity with details
export function getDetailsEntity(id: number, type: CardType): Promise<ICard> {
  return axiosInstanse
    .get<GetEntityListsResponse>(`/v1/public/${type}/${id}`)
    .then((entityResponse) => {
      const entity = entityResponse.data.data.results[0];

      return <ICard>{
        id: entity.id,
        image: entity.thumbnail.path
          .concat('/portrait_incredible.')
          .concat(entity.thumbnail.extension),
        name: entity.name,
        description: entity.description,
        characters: [
          ...getDependecies(CardType.CHARACTERS, entity.characters?.items)
        ],
        series: [...getDependecies(CardType.SERIES, entity.series?.items)],
        comics: [...getDependecies(CardType.COMICS, entity.comics?.items)],
        type
      };
    });
}
