import React, { FC } from 'react';
import classes from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={classes.red}>
      <img src="/marvel_logo.svg" alt="d" />
    </div>
  );
};

export default Header;
