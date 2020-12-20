import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Menu} from './layout/menu';
import {AlgorithmOverview} from './algorithms/overview';
import './App.css';
import {MENUS} from './layout/menu/constants';
import {RxJs} from './async-js/rx-js';
import { Exceptions } from './effective-java/exceptions';
import { EventLoop } from './js-fundamentals/event-loop';
import { ObjectCreationAndDestruction } from './effective-java/objects';
import { ClassesAndInterfaces } from './effective-java/classes';
import { Basics } from './async-js/basics';
import { Generics } from './effective-java/generics';
import { GCP } from './infrastructure/gcp';
import { ProductionReadyTypeScript } from './typescript/production-ready';
import { EffectiveTypeScript } from './typescript/effective-typescript';
import { WebSecurity } from './web-fundamentals/web-security';
import { WebPerformance } from './web-fundamentals/web-performance';
import { HTTP2 } from './web-fundamentals/http2';

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
              path="/interview-prep/async-js/basics"
              component={Basics}
            />
            <Route
              exact
              path="/interview-prep/async-js/rx-js"
              component={RxJs}
            />
            <Route
              exact
              path="/interview-prep/java-best-practices/exceptions"
              component={Exceptions}
            />
            <Route
              exact
              path="/interview-prep/java-best-practices/generics"
              component={Generics}
            />
            <Route
              exact
              path="/interview-prep/java-best-practices/objects"
              component={ObjectCreationAndDestruction}
            />
            <Route
              exact
              path="/interview-prep/java-best-practices/classes-and-interfaces"
              component={ClassesAndInterfaces}
            />
            <Route
              exact
              path="/interview-prep/typescript"
              component={EffectiveTypeScript}
            />
            <Route
              exact
              path="/interview-prep/typescript/best-practices"
              component={EffectiveTypeScript}
            />
            <Route
              exact
              path="/interview-prep/typescript/production-ready"
              component={ProductionReadyTypeScript}
            />
            <Route
              exact
              path="/interview-prep/js-fundamentals/event-loop"
              component={EventLoop}
            />
            <Route
              exact
              path="/interview-prep/infrastructure/gcp"
              component={GCP}
            />
            <Route
              exact
              path="/interview-prep/web-fundamentals/security"
              component={WebSecurity}
            />
            <Route
              exact
              path="/interview-prep/web-fundamentals/performance"
              component={WebPerformance}
            />
            <Route
              exact
              path="/interview-prep/web-fundamentals/http2"
              component={HTTP2}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
