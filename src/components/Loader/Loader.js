import React from 'react';
import classNames from 'classnames';
import styles from './Loader.module.scss';
import note from '../../assets/images/music.png';

const Loader = () => (
  <div className={styles.loader}>
    <img className={classNames(styles.note, styles.down)} alt="music note" src={note} />
    <img className={classNames(styles.note, styles.up)} alt="music note" src={note} />
    <img className={classNames(styles.note, styles.down)} alt="music note" src={note} />
  </div>
)

export default Loader;
