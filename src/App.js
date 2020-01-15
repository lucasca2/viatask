import React, { Component } from 'react';
import { Router } from 'react-router-dom';

// Routes
import Routes from 'routes/index';

// Services
import history from "./services/history";

// Styles
import GlobalStyle from './globalStyle';

// Store
import { TaskProvider } from 'modules/Task/provider';
import { reducer, initialValues } from "modules/Task";

class App extends Component {
  render() {
    return (
      <TaskProvider initialState={initialValues} reducer={reducer}>
        <GlobalStyle />
        <Router history={history}>
          <Routes />
        </Router>
      </TaskProvider>
    );
  }
}

export default App;
