import React, { FC, useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';

import classes from './Search.module.scss';

interface ISearch {}

export const Search: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={classes.search}>
      <TextField className={classes.search_input} fullWidth />
      <button type="submit" className={classes.search_button}>
        Search
      </button>
    </div>
  );
};
