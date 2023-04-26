import * as React from 'react';
import './styles/App.css';
import { header } from './mocks/header';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Product from './components/UI/Product/Product';

export const App = () => {
  return (
    <div className="App">
      <Header items={header} />
      <Gallery/>
      <Product/>
    </div>
  );
}

export default App;
