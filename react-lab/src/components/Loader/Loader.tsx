import React, { FC } from 'react';
import { CircularProgress } from '@mui/material';

import classes from './Loader.module.scss';

export const Loader: FC = () => {
  return (
    <div className={classes.centered}>
      <CircularProgress color="inherit" />
    </div>
  );
};
