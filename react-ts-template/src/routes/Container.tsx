import React, { FC } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Card from 'components/Card';
import { ICard } from 'types/card';
import { Box } from '@mui/material';
import classes from './Container.module.scss';

const cards: ICard[] = [
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  },
  {
    image: 'src/assets/characters/abomination.jpg',
    name: 'abomination',
    description: 'desc'
  }
];

const Container: FC = () => {
  return (
    <div>
      <Header />
      <Box className={classes.centered}>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default Container;
