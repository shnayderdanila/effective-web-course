import React, { FC } from 'react';

import classes from './Footer.module.scss';

const Footer: FC = () => {
  let current_year = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <img src="/marvel_logo.svg" alt="marvel" className={classes.logo} />
      <p>Data provided by Marvel. © ${current_year} MARVEL</p>
      <a>developer.marvel.com</a>
    </div>
  );
};

export default Footer;
