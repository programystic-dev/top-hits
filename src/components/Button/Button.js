import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ onClick, className }) => (
  <button onClick={onClick} className={classNames(styles.btn, className)}>Click me</button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  styleClasses: PropTypes.string,
}

Button.defaultProps = {
  styleClasses: "",
}

export default Button;
