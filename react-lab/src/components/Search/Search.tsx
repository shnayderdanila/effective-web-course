import React, {
  FC,
  ChangeEvent,
  useCallback,
  useMemo,
  useEffect,
  useContext
} from 'react';

// Mui
import { TextField } from '@mui/material';

// lodash
import debounce from 'lodash.debounce';

// Context
import { ThemeMode } from 'context/ThemeContext';

// i18 (translation)
import { useTranslation } from 'react-i18next';

// Types
import { CardType } from 'types/cardType';

// Styles
import classes from './Search.module.scss';

interface ISearch {
  startWithName: string;
  setStartWith(query: string): void;
  type: CardType;
}

export const Search: FC<ISearch> = ({ startWithName, setStartWith, type }) => {
  const theme = useContext(ThemeMode);

  const { t } = useTranslation();

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
        className={`${classes.search_input} ${
          theme?.mode === 'dark'
            ? classes.search_input_dark_mode
            : classes.search_input_light_mode
        }`}
        fullWidth
        defaultValue={startWithName}
        onChange={debouncedResults}
        placeholder={`${t('Find')} ${t(`${type}`)}`}
        focused
      />
    </div>
  );
};
