import React, { FC, useContext } from 'react';

// Mui
import { IconButton, Slide } from '@mui/material';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';

// react router
import { NavLink } from 'react-router-dom';

// Context
import { ThemeMode } from 'context/ThemeContext';

// Styles
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
    <header
      className={`${classes.toolbar} ${
        theme?.mode === 'dark' ? classes.dark : classes.light
      }`}
    >
      <img src="/marvel_logo.svg" alt="marvel" className={classes.logo} />

      <div
        className={`${classes.tollbarBottoms} ${
          theme?.mode === 'dark' ? classes.dark : classes.light
        }`}
      >
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
        <div className={classes.icons_wrapper}>
          <Slide
            className={`${
              theme?.mode === 'light'
                ? classes.icon_active
                : classes.icon_non_active
            }`}
            direction="down"
            in={theme?.mode === 'light'}
          >
            <IconButton onClick={changeTheme}>
              <LightModeIcon color="primary" />
            </IconButton>
          </Slide>
          <Slide
            className={`${
              theme?.mode === 'dark'
                ? classes.icon_active
                : classes.icon_non_active
            }`}
            direction="down"
            in={theme?.mode === 'dark'}
          >
            <IconButton onClick={changeTheme}>
              <Brightness3Icon color="primary" />
            </IconButton>
          </Slide>
        </div>
      </div>
    </header>
  );
};

export default Header;
