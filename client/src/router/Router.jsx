import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/signup"
        component={SignUp}
      />
      <Route
        exact
        path="/login"
        component={Login}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;