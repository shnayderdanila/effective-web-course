import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';

import PageDetailEntity from './PageDetailEntity';
import { CharacterPage } from './CharactersPage/CharactersPage';

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="characters" />
  },
  {
    path: '/characters',
    element: <CharacterPage />
  },
  {
    path: '/characters/:characterid',
    element: <PageDetailEntity />
  },
  {
    path: '/comics',
    element: <CharacterPage />
  },
  {
    path: '/comics/:comicsid',
    element: <PageDetailEntity />
  },
  {
    path: '/series',
    element: <CharacterPage />
  },
  {
    path: '/series/:seriesid',
    element: <PageDetailEntity />
  }
]);

export default router;
