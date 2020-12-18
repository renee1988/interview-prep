import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Menu} from './layout/menu';
import {AlgorithmOverview} from './algorithms/overview';
import './App.css';
import {MENUS} from './layout/menu/constants';
import {RxJs} from './async-js/rx-js';
import { Exceptions } from './effective-java/exceptions';
import { EventLoop } from './js-fundamentals/event-loop';
import { Overview } from './typescript/1-overview';
import { LatestTypescriptFeatures } from './typescript/2-latest-typescript-features';
import { AppVsLibraryConcerns } from './typescript/3-app-vs-library-concerns';
import { CreateProjectFromScratch } from './typescript/4-create-project-from-scratch';
import { DeclarationFiles } from './typescript/5-declaration-files';
import { ObjectCreationAndDestruction } from './effective-java/objects';
import { ClassesAndInterfaces } from './effective-java/classes';
import { Basics } from './async-js/basics';
import { Generics } from './effective-java/generics';
import { GCP } from './infrastructure/gcp';

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
            <Route
              exact
              path="/interview-prep/typescript/create-project-from-scratch"
              component={CreateProjectFromScratch}
            />
            <Route
              exact
              path="/interview-prep/typescript/declaration-files"
              component={DeclarationFiles}
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
