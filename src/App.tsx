import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Menu} from './layout/menu';
import {AlgorithmOverview} from './algorithms/overview';
import './App.css';
import {MENUS} from './layout/menu/constants';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu menus={MENUS} />
        <Switch>
          <Route
            exact
            path="/algorithms/overview"
            component={AlgorithmOverview}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
