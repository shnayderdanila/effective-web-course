import React, { FC } from 'react';

// Mui
import { Grid } from '@mui/material';

// Components
import Card from 'components/Card';
import PageLayout from 'components/PageLayout';

// i18 ( translation )
import { useTranslation } from 'react-i18next';

// Store
import { observer } from 'mobx-react-lite';
import { charactersStore, comicsStore, seriesStore } from 'store/EntityStore';

export const FavoritesPage: FC = observer(() => {
  const { t } = useTranslation();

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
      {listFavoritesCharacters.length ||
      listFavoritesComics.length ||
      listFavoritesSeries.length ? (
        <>
          {listFavoritesCharacters.length ? (
            <div>
              <h2>{t('FavoritesCharacters')}</h2>
              <Grid container spacing={3}>
                {listFavoritesCharacters.map((character) => (
                  <Grid key={character.id} item xs={3}>
                    <Card
                      card={character}
                      setId={setCharacterId}
                      addFavorite={addFavoriteCharacter}
                      removeFavorite={removeFavoriteCharacter}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : (
            <></>
          )}

          {listFavoritesSeries.length ? (
            <div>
              <h2>{t('FavoritesSeries')}</h2>
              <Grid container spacing={3}>
                {listFavoritesSeries.map((serie) => (
                  <Grid key={serie.id} item xs={3}>
                    <Card
                      card={serie}
                      setId={setSerieId}
                      addFavorite={addFavoriteSerie}
                      removeFavorite={removeFavoriteSerie}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : (
            <></>
          )}

          {listFavoritesComics.length ? (
            <div>
              <h2>{t('FavoritesComics')}</h2>
              <Grid container spacing={3}>
                {listFavoritesComics.map((comic) => (
                  <Grid key={comic.id} item xs={3}>
                    <Card
                      card={comic}
                      setId={setComicId}
                      addFavorite={addFavoriteComic}
                      removeFavorite={removeFavoriteComic}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div>
          <h2>{t('EmptyFavorites')}</h2>
        </div>
      )}
    </PageLayout>
  );
});
