import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';

import { characters } from './Characters';
import { comics } from './Comics';
import PageEntity from './PageEntity';
import { series } from './Series';

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
    path: '/comics',
    element: <PageEntity />,
    loader: () => {
      return comics;
    }
  },
  {
    path: '/series',
    element: <PageEntity />,
    loader: () => {
      return series;
    }
  }
]);

export default router;
