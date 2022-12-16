import Card from 'components/Card';
import PageLayout from 'components/PageLayout';
import React, { FC } from 'react';
import { charactersStore, comicsStore, seriesStore } from 'store/EntityStore';

export const FavoritesPage: FC = () => {
  const {
    listFavorites: listFavoritesCharacters,
    setEntityId: setCharacterId,
    addFavorite: addFavoriteCharacter,
    removeFavorite: removeFavoriteCharacter
  } = charactersStore;
  const {
    listFavorites: listFavoritesSeries,
    setEntityId: setSerieId,
    addFavorite: addFavoriteSerie,
    removeFavorite: removeFavoriteSerie
  } = seriesStore;
  const {
    listFavorites: listFavoritesComics,
    setEntityId: setComicId,
    addFavorite: addFavoriteComic,
    removeFavorite: removeFavoriteComic
  } = comicsStore;

  return (
    <PageLayout>
      <div>
        {listFavoritesCharacters.map((character) => (
          <Card
            card={character}
            setId={setCharacterId}
            addFavorite={addFavoriteCharacter}
            removeFavorite={removeFavoriteCharacter}
          />
        ))}
        {listFavoritesSeries.map((serie) => (
          <Card
            card={serie}
            setId={setSerieId}
            addFavorite={addFavoriteSerie}
            removeFavorite={removeFavoriteSerie}
          />
        ))}
        {listFavoritesComics.map((comic) => (
          <Card
            card={comic}
            setId={setComicId}
            addFavorite={addFavoriteComic}
            removeFavorite={removeFavoriteComic}
          />
        ))}
      </div>
    </PageLayout>
  );
};
