import React from 'react';
import classNames from 'classnames';
import styles from './ListItem.module.scss';
import Avatar from './../../../../components/Avatar/Avatar.js';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';

const ListItem = ({ item, index }) => (
  <div className={styles.container}>
    <LazyLoad height={100} throttle={100}>
      <div className={classNames(styles.fade, styles.listItem)}>
        <div className={styles.itemNumber}>{index + 1}</div>
        <div className={styles.infoWrapper}>
          <Avatar alt="Album label" size="small" src={item['im:image'][1].label} />
          <div className={styles.itemDesc}>
            <h2 className={styles.descTitle}>{item.title.label}</h2>
            <p className={styles.descArtist}>{item['im:artist'].label}</p>
          </div>
        </div>
      </div>
    </LazyLoad>
  </div>
)

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default ListItem;
