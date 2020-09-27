import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Menu} from './layout/menu';
import {AlgorithmOverview} from './algorithms/overview';
import './App.css';
import {MENUS} from './layout/menu/constants';
import {RxJs} from './async-js/rx-js';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu menus={MENUS} />
        <Switch>
          <Route
            exact
            path="/algorithms"
            component={AlgorithmOverview}
          />
          <Route
            exact
            path="/async-js/rx-js"
            component={RxJs}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
