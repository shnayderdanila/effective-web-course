import React, { FC } from 'react';

import { Paper } from '@mui/material';

import classes from './Card.module.scss';

const Card: FC = () => {
  return (
    <Paper className={classes.card}>
      <img src="" alt=" " className={classes.image} />
      <div className={classes.nameDesc}>
        <p>Name</p>
        <p>Desc</p>
      </div>
    </Paper>
  );
};

export default Card;
