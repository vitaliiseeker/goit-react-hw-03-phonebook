import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ type, children, onClick = null }) => {

  return (<button className="Button" type={type} onClick={onClick} > {children}</button>)
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}


export default Button;

