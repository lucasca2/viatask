import React from 'react';
import {
  Switch,
  Redirect,
} from 'react-router-dom';

import Route from './Route';

// Pages
import Home from 'pages/Home';
import SaveTask from 'pages/SaveTask';

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={"/task/:id?"} component={SaveTask} />
        <Redirect to="/" />
      </Switch>
    );
}

