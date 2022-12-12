import React, { FC, ChangeEvent, useCallback, useMemo, useEffect } from 'react';

import { TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import { CardType } from 'types/cardType';
import classes from './Search.module.scss';

interface ISearch {
  startWithName: string;
  setStartWith(query: string): void;
  type: CardType;
}

export const Search: FC<ISearch> = ({ startWithName, setStartWith, type }) => {
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setStartWith(event.target.value);
    },
    []
  );

  const debouncedResults = useMemo(() => {
    return debounce(handleInputChange, 3000);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className={classes.search}>
      <TextField
        className={classes.search_input}
        fullWidth
        defaultValue={startWithName}
        onChange={debouncedResults}
        placeholder={`Find ${type}`}
      />
    </div>
  );
};
