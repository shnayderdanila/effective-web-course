import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';

import { CharacterPageEntity } from './CharactersPage/CharactersPageEntity';
import { CharactersPageDetail } from './CharactersPage/CharactersPageDetail';
import { SeriesPageDetail } from './SeriesPage/SeriesPageDetail';
import { SeriesPageEntity } from './SeriesPage/SeriesPageEntity';
import { ComicsPageEntity } from './ComicsPage/ComicsPageEntity';
import { ComicsPageDetail } from './ComicsPage/ComicsPageDetail';

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="characters" />
  },
  {
    path: '/characters',
    element: <CharacterPageEntity />
  },
  {
    path: '/characters/:characterid',
    element: <CharactersPageDetail />
  },
  {
    path: '/comics',
    element: <ComicsPageEntity />
  },
  {
    path: '/comics/:comicsid',
    element: <ComicsPageDetail />
  },
  {
    path: '/series',
    element: <SeriesPageEntity />
  },
  {
    path: '/series/:seriesid',
    element: <SeriesPageDetail />
  }
]);

export default router;
