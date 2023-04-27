import * as React from 'react';
import './styles/App.css';
import { header } from './mocks/header.ts';
import Header from './components/Header/Header.tsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Product from './components/UI/Product/Product.jsx';
import PicSlider from './components/PicSlider/PicSlider.jsx';
import CardCollection from './components/CardCollection/CardCollection.jsx'

export const App = () => {
  return (
    <div className="App">
      <Header items={header} />
      <CardCollection/>
      <PicSlider />
      <Gallery/>
    </div>
  );
}

export default App;
