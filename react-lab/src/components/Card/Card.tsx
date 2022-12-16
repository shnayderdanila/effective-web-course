import React, { FC, useContext, useState } from 'react';

// Mui
import { Box, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  addFavorite(card: ICard): void;
  removeFavorite(card: ICard): void;
}

const Card: FC<ICard1> = ({ card, setId, addFavorite, removeFavorite }) => {
  const theme = useContext(ThemeMode);

  const [isFavorite, setIsFavorite] = useState(card.favorite);

  const handleAddFavorite = () => {
    setIsFavorite(true);
    addFavorite(card);
  };

  const handleRemoveFavorite = () => {
    setIsFavorite(false);
    removeFavorite(card);
  };

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
      <div
        className={`${classes.image} ${
          theme?.mode === 'dark' ? classes.image_dark : classes.image_light
        }`}
      >
        {isFavorite ? (
          <IconButton
            className={classes.favorite}
            onClick={handleRemoveFavorite}
          >
            <FavoriteIcon color="error" />
          </IconButton>
        ) : (
          <IconButton className={classes.favorite} onClick={handleAddFavorite}>
            <FavoriteBorderIcon color="error" />
          </IconButton>
        )}
        <Link to={linkToDetailEntity(card)} onClick={() => setId(card.id)}>
          <img src={card.image} alt={card.name} />
        </Link>
      </div>
      <section className={classes.nameDesc}>
        <h4>{card.name}</h4>
        <p>{truncate(card.description)}</p>
      </section>
    </Box>
  );
};

export default Card;
