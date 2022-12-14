import React, { FC, useContext } from 'react';

// Mui
import { Box } from '@mui/material';

// Types
import { ICard } from 'types/card';
import { Link } from 'react-router-dom';

// Context
import { ThemeMode } from 'context/ThemeContext';

// Styles
import classes from './Card.module.scss';

interface ICard1 {
  card: ICard;
  setId(id: number): void;
}

const Card: FC<ICard1> = ({ card, setId }) => {
  const theme = useContext(ThemeMode);

  const linkToDetailEntity = (el: ICard) => {
    return '/'.concat(el.type).concat('/').concat(String(el.id));
  };

  const maxlength = 70;

  const truncate = (str: string) => {
    return str.length > maxlength
      ? str.slice(0, maxlength - 1).concat('…')
      : str;
  };

  return (
    <Box className={classes.card}>
      <Link
        to={linkToDetailEntity(card)}
        className={classes.image}
        onClick={() => setId(card.id)}
      >
        <img
          src={card.image}
          alt={card.name}
          className={`${classes.image} ${
            theme?.mode === 'dark' ? classes.image_dark : classes.image_light
          }`}
        />
      </Link>
      <section className={classes.nameDesc}>
        <h4>{card.name}</h4>
        <p>{truncate(card.description)}</p>
      </section>
    </Box>
  );
};

export default Card;
