import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Menu} from './layout/menu';
import {AlgorithmOverview} from './algorithms/overview';
import './App.css';
import {MENUS} from './layout/menu/constants';
import {RxJs} from './async-js/rx-js';
import { Typescript } from './typescript';
import { EffectiveJava } from './effective-java';
import { Exceptions } from './effective-java/exceptions';
import { Overview } from './typescript/overview';
import { LatestTypescriptFeatures } from './typescript/latest-typescript-features';
import { AppVsLibraryConcerns } from './typescript/app-vs-library-concerns';

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
            <Route
              exact
              path="/interview-prep/typescript"
              component={Overview}
            />
            <Route
              exact
              path="/interview-prep/typescript/overview"
              component={Overview}
            />
            <Route
              exact
              path="/interview-prep/typescript/latest-typescript-features"
              component={LatestTypescriptFeatures}
            />
            <Route
              exact
              path="/interview-prep/typescript/app-vs-library-concerns"
              component={AppVsLibraryConcerns}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
