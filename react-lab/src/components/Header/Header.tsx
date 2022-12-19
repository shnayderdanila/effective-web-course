import React, { FC, useContext } from 'react';

// Mui
import { IconButton, Slide } from '@mui/material';

// Mui Icon
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';

// react router
import { NavLink } from 'react-router-dom';

// react i18 ( translation )
import { useTranslation } from 'react-i18next';

// Context
import { ThemeMode } from 'context/ThemeContext';
import { LanguageResourse } from 'context/LanguageContext';

// Styles
import classes from './Header.module.scss';

const Header: FC = () => {
  const theme = useContext(ThemeMode);

  const { t, i18n } = useTranslation();

  const changeTheme = () => {
    if (theme?.mode === 'light') {
      theme?.setMode('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      theme?.setMode('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const changeLanguage = () => {
    if (i18n.language === LanguageResourse.RU) {
      i18n.changeLanguage(LanguageResourse.EN);
    } else {
      i18n.changeLanguage(LanguageResourse.RU);
    }
    localStorage.setItem('language', i18n.language);
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
            {t('Characters')}
          </NavLink>
          <NavLink
            to="/comics"
            className={({ isActive }) =>
              isActive ? classes.link_current : classes.link
            }
          >
            {t('Comics')}
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              isActive ? classes.link_current : classes.link
            }
          >
            {t('Series')}
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? classes.link_current : classes.link
            }
          >
            {t('Favorites')}
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
          <IconButton onClick={changeLanguage}>
            <LanguageIcon color="primary" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
