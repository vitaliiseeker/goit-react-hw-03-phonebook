import React from 'react';
import PropTypes from 'prop-types';


import './IconButton.scss';

const IconButton = ({ type = "button", children = "", onClick = null }) => {

  return (<button className="Button" type={type} onClick={onClick} > {children}</button>)
}

IconButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}


export default IconButton;

