import React, { FC } from 'react';

import classes from './Footer.module.scss';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <img src="/marvel_logo.svg" alt="marvel" className={classes.logo} />
      <p>Data provided by Marvel.© ${currentYear} MARVEL</p>
      <p>developer.marvel.com</p>
    </div>
  );
};

export default Footer;
