import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';
import PageContainer from 'components/PageContainer';

import { characters } from './Characters';
import { comics } from './Comics';
import { series } from './Series';

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="characters" />
  },
  {
    path: '/characters',
    element: <PageContainer />,
    loader: () => {
      return characters;
    }
  },
  {
    path: '/characters/:characterid',
    element: <PageContainer />,
    loader: ({ params }) => {
      return characters.find((el) => el.id === Number(params.characterid));
    }
  },
  {
    path: '/comics',
    element: <PageContainer />,
    loader: () => {
      return comics;
    }
  },
  {
    path: '/comics/:comicsid',
    element: <PageContainer />,
    loader: ({ params }) => {
      return comics.find((el) => el.id === Number(params.comicsid));
    }
  },
  {
    path: '/series',
    element: <PageContainer />,
    loader: () => {
      return series;
    }
  },
  {
    path: '/series/:seriesid',
    element: <PageContainer />,
    loader: ({ params }) => {
      return series.find((el) => el.id === Number(params.seriesid));
    }
  }
]);

export default router;
