import React, { FC, useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';

import classes from './Search.module.scss';

interface ISearch {
  startWithName: string;
  setStartWith(query: string): void;
}

export const Search: FC<ISearch> = ({ startWithName, setStartWith }) => {
  const [searchValue, setSearchValue] = useState(startWithName);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={classes.search}>
      <TextField
        className={classes.search_input}
        fullWidth
        defaultValue={startWithName}
        onChange={handleChange}
      />
      <button
        type="submit"
        className={classes.search_button}
        onClick={() => setStartWith(searchValue)}
      >
        Search
      </button>
    </div>
  );
};
