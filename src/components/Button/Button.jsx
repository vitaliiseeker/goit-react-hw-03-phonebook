import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ type = "button", value = "", onClick = null }) => {

  return (<button className="Button" type={type} onClick={onClick} > {value}</button>)
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
}


export default Button;

