/* eslint-disable react/jsx-props-no-spreading */ 
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function Private({ children, ...rest }) {
  const { authenticated } = useAuth();

  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}
Private.propTypes = {
  children: PropTypes.node.isRequired
}

export default Private;
