import React, { FC, useContext } from 'react';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeMode } from 'components/Context/ThemeContext';

import classes from './Header.module.scss';

const Header: FC = () => {
  const theme = useContext(ThemeMode);

  const changeTheme = () => {
    if (theme?.mode === 'light') {
      theme?.setMode('dark');
    } else {
      theme?.setMode('light');
    }
  };

  return (
    <header className={classes.toolbar}>
      <img src="/marvel_logo.svg" alt="marvel" className={classes.logo} />

      <div className={classes.tollbarBottoms}>
        <nav className={classes.tollbarBottoms}>
          <NavLink
            to="/characters"
            className={({ isActive }) =>
              isActive ? classes.link_current : classes.link
            }
          >
            Characters
          </NavLink>
          <NavLink
            to="/comics"
            className={({ isActive }) =>
              isActive ? classes.link_current : classes.link
            }
          >
            Comics
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              isActive ? classes.link_current : classes.link
            }
          >
            Series
          </NavLink>
        </nav>
        <IconButton onClick={changeTheme}>
          <LightModeIcon color="primary" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
