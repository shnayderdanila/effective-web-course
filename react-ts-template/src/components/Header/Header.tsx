import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={classes.toolbar}>
      <img src="/marvel_logo.svg" alt="marvel" className={classes.logo} />

      <nav className={classes.tollbarBottoms}>
        <Link to="characters" className={classes.orangeText}>
          Characters
        </Link>
        <Link to="comics" className={classes.orangeText}>
          Comics
        </Link>
        <Link to="series" className={classes.orangeText}>
          Series
        </Link>
      </nav>
    </div>
  );
};

export default Header;
