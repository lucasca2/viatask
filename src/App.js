import React, { Component } from 'react';
import { Router } from 'react-router-dom';

// Routes
import Routes from 'routes/index';

// Services
import history from "./services/history";

// Styles
import GlobalStyle from './globalStyle';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router history={history}>
          <Routes />
        </Router>
      </>
    );
  }
}

export default App;
