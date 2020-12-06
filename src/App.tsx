import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Menu} from './layout/menu';
import {AlgorithmOverview} from './algorithms/overview';
import './App.css';
import {MENUS} from './layout/menu/constants';
import {RxJs} from './async-js/rx-js';
import {Exceptions} from './effective-java/exceptions';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu menus={MENUS} />
        <div className="markdown-container">
          <Switch>
            <Route
              exact
              path="/interview-prep/algorithms"
              component={AlgorithmOverview}
            />
            <Route
              exact
              path="/interview-prep/async-js/rx-js"
              component={RxJs}
            />
            <Route
              exact
              path="/interview-prep/effective-java/exceptions"
              component={Exceptions}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
