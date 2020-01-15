import React from 'react';
import {
  Switch,
  Redirect,
} from 'react-router-dom';

import Route from './Route';

// Pages

export default function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={function() { return <div>Inicio</div>}} />
        <Route path={"/task/:id"} component={function() { return <div>Tarefa</div>}} />
        <Redirect to="/" />
      </Switch>
    );
}

