import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';

import PageEntity from 'routes/PageEntity';
import { characters, comics, series } from './MarvelDependecies';
import PageDetailEntity from './PageDetailEntity';


const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="characters" />
  },
  {
    path: '/characters',
    element: <PageEntity />,
    loader: () => {
      return characters;
    }
  },
  {
    path: '/characters/:characterid',
    element: <PageDetailEntity />,
    loader: ({ params }) => {
      return characters.find((el) => el.id === Number(params.characterid));
    }
  },
  {
    path: '/comics',
    element: <PageEntity />,
    loader: () => {
      return comics;
    }
  },
  {
    path: '/comics/:comicsid',
    element: <PageDetailEntity />,
    loader: ({ params }) => {
      return comics.find((el) => el.id === Number(params.comicsid));
    }
  },
  {
    path: '/series',
    element: <PageEntity />,
    loader: () => {
      return series;
    }
  },
  {
    path: '/series/:seriesid',
    element: <PageDetailEntity />,
    loader: ({ params }) => {
      return series.find((el) => el.id === Number(params.seriesid));
    }
  }
]);

export default router;
