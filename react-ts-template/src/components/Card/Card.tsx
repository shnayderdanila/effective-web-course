import React, { FC } from 'react';

import { Paper } from '@mui/material';
import { ICard } from 'types/card';

import classes from './Card.module.scss';

interface ICard1 {
  card: ICard;
}

const Card: FC<ICard1> = ({ card }) => {
  return (
    <Paper className={classes.card}>
      <img src={card.image} alt=" " className={classes.image} />
      <div className={classes.nameDesc}>
        <p>Name</p>
        <p>Desc</p>
      </div>
    </Paper>
  );
};

export default Card;
