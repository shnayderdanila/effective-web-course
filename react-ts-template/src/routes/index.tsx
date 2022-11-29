import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';
import { characters } from './Characters';
import PageContainer from './PageContainer';

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
    path: '/comics',
    element: <PageContainer />,
    loader: () => {
      return characters;
    }
  }
]);

export default router;
