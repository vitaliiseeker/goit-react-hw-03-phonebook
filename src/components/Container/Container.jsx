import React from 'react';
import PropTypes from 'prop-types';

import './Container.jsx';
import { Div } from "./Container.styled"


const Container = ({ children }) => <Div>{children}</Div>;

Container.protoTypes = {
  children: PropTypes.node.isRequired,
}

export default Container;