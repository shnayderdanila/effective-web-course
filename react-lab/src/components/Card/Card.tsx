import React, { FC } from 'react';

import { Box } from '@mui/material';
import { ICard } from 'types/card';
import { Link } from 'react-router-dom';

import classes from './Card.module.scss';

interface ICard1 {
  card: ICard;
}

const Card: FC<ICard1> = ({ card }) => {
  const linkToDetailEntity = (el: ICard) => {
    return '/'.concat(el.type).concat('/').concat(String(el.id));
  };

  return (
    <Box className={classes.card}>
      <Link to={linkToDetailEntity(card)} className={classes.image}>
        <img src={card.image} alt={card.name} className={classes.image} />
      </Link>
      <section className={classes.nameDesc}>
        <h4>{card.name}</h4>
        <p>{card.description}</p>
      </section>
    </Box>
  );
};

export default Card;
