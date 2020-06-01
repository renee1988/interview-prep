import React from 'react';

import {Menu} from './layout/menu';
import {Content} from './layout/content';
import './App.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
