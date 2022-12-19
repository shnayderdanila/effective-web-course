import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Characters: 'Characters',
      Comics: 'Comics',
      Series: 'Series',
      Favorites: 'Favorites',
      Find: 'Find',
      characters: 'characters',
      series: 'series',
      comics: 'comics',
      NotFound: 'Not found',
      FavoritesCharacters: 'You favoriets characters',
      FavoritesSeries: 'You favoriets series',
      FavoritesComics: 'You favoriets comics',
      EmptyFavorites: 'You favorites is empty',
      GetError: 'Erorr get',
      TryLater: 'Please try later.'
    }
  },
  ru: {
    translation: {
      Characters: 'Герои',
      Comics: 'Комиксы',
      Series: 'Фильмы',
      Favorites: 'Избранное',
      Find: 'Найти',
      characters: 'героев',
      series: 'фильмы',
      comics: 'комиксы',
      NotFound: 'Ничего не найдено',
      FavoritesCharacters: 'Ваши избранные герои',
      FavoritesSeries: 'Ваши избранные фильмы',
      FavoritesComics: 'Ваши избранные комиксы',
      EmptyFavorites: 'У Вас нет избранного',
      GetError: 'Не получилось загрузить',
      TryLater: 'Пожалуйста, попробуйте позже.'
    }
  }
};

export enum LanguageResourse {
  RU = 'ru',
  EN = 'en'
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') ?? LanguageResourse.EN,

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
