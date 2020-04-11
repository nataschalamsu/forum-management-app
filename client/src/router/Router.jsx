import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';
import CreatePost from '../pages/CreatePost/CreatePost';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute
        exact
        path="/create"
        component={CreatePost}
      />
      <ProtectedRoute
        exact
        path="/"
        component={Home}
      />
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