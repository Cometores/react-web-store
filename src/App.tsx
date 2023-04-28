import * as React from 'react';
import './styles/App.css';
import { header } from './mocks/header.ts';
import Header from './components/Header/Header.tsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Slider from './components/PicSlider/Slider.jsx';
import CardCollection from './components/CardCollection/CardCollection.jsx'
import slides from './img/Slider.json'

export const App = () => {
  return (
    <div className="App">
      <Header items={header} />
      <CardCollection/>
      <Slider slides={slides}/>
      <Gallery/>
    </div>
  );
}

export default App;
