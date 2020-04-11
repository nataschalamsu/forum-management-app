/* eslint-disable */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppContext from '../App.context';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AppContext);
  console.log('auth ---', authenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        const { location } = props;
        if (!authenticated) return <Redirect to={{ pathname: '/login', state: { from: location } }}/> 
        return <Component {...props} />
      }}
    />
  );
};

export default ProtectedRoute;