import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';

import PageEntity from 'routes/PageEntity';
import PageDetailEntity from './PageDetailEntity';

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="characters" />
  },
  {
    path: '/characters',
    element: <PageEntity />
  },
  {
    path: '/characters/:characterid',
    element: <PageDetailEntity />
  },
  {
    path: '/comics',
    element: <PageEntity />
  },
  {
    path: '/comics/:comicsid',
    element: <PageDetailEntity />
  },
  {
    path: '/series',
    element: <PageEntity />
  },
  {
    path: '/series/:seriesid',
    element: <PageDetailEntity />
  }
]);

export default router;
