import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ onClick, className, label }) => (
  <button onClick={onClick} className={classNames(styles.btn, className)}>{label}</button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
}

Button.defaultProps = {
  className: "",
  label: "Click me",
}

export default Button;
