import React, { FC } from 'react';

// Mui
import { CircularProgress } from '@mui/material';

// Styles
import classes from './Loader.module.scss';

export const Loader: FC = () => {
  return (
    <div className={classes.centered}>
      <CircularProgress color="inherit" />
    </div>
  );
};
