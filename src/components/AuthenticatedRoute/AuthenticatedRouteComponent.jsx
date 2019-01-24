import React from 'react';
import { Route, Redirect } from 'react-router';
import authProvider from '../../provider/auth';
import ROUTE_URL from '../../consts/route-url';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      authProvider.isAuthenticated() ? <Component {...props} /> : (
        <Redirect to={{
          pathname: ROUTE_URL.LOGIN,
          state: { from: props.location },
        }}
        />
      )
    )}
  />
);
