import React from 'react';
import { Switch } from 'react-router-dom';

import Home from 'pages/Home';

import Route from './Route';
import Login from 'pages/Login';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact isPrivate />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
