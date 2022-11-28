import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Container from './Container';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />
  }
]);

export default router;
