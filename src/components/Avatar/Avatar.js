import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';
import avatarBlank from '../../assets/images/avatar-blank.png';

const Avatar = ({ alt, src, size }) =>  (
    <div className={classNames(styles.avatar, styles[size])}>
      <img alt={alt} src={src} />
    </div>
)

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
}

Avatar.defaultProps = {
  src: avatarBlank,
  size: 'large',
}

export default Avatar;
