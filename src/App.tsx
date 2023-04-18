import * as React from 'react';
import './App.css';
import Header from './components/Header/index';
import { header } from './mocks/header';

export const App = () => {
  return (
    <div className="App">
      <Header items={header} />
    </div>
  );
}

export default App;
