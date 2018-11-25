import React from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';

const Header = () => (
  <header className={classNames("container", styles.header)}>
    <h1>Top 100 Music Hits</h1>
  </header>
)

export default Header;
