import React, { FC, useContext } from 'react';
import { ThemeMode } from 'components/Context/ThemeContext';

import classes from './Footer.module.scss';

const Footer: FC = () => {
  const theme = useContext(ThemeMode);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${classes.footer} ${
        theme?.mode === 'dark' ? classes.dark : classes.light
      }`}
    >
      <img src="/marvel_logo.svg" alt="marvel" className={classes.logo} />
      <p>Data provided by Marvel.© {currentYear} MARVEL</p>
      <a className={classes.footer_link} href="https://developer.marvel.com/">
        developer.marvel.com
      </a>
    </footer>
  );
};

export default Footer;
