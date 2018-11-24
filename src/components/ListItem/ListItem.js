import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './ListItem.module.scss';
import Avatar from './../Avatar/Avatar.js';
import Button from './../Button/Button.js';

class ListItem extends Component {
  render() {
    return (
      <div className={classNames('col-12', styles.listItem)}>
        <div className={styles.itemNumber}>1</div>
        <Avatar alt="Album label" size="small" src="https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/47/21/19/472119fe-faab-e48a-418d-cbe729156183/00044003199552.rgb.jpg/60x60bb-85.png"/>
        <div className={styles.itemDesc}>
          <h2 className={styles.descTitle}>Title of the album</h2>
          <p className={styles.descArtist}>Artist</p>
        </div>
        <Button onClick={() => console.log('I was clicked.')} className={styles.btnRightflex} />
      </div>
    );
  }
}

export default ListItem;
