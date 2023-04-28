import React, {useState} from 'react';
import './styles/App.css';
import { header } from './mocks/header.ts';
import Header from './components/Header/Header.tsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Slider from './components/Slider/Slider.jsx';
import CardCollection from './components/CardCollection/CardCollection.jsx'
import slides from './img/Slider.json'
import Modal from './components/Modal/Modal.jsx'

export const App = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="App">
      <Header items={header} />
      <button onClick={() => setModalActive(true)}>Поиск</button>
      <CardCollection/>
      <Slider slides={slides}/>
      <Gallery/>
      <Modal active={modalActive} setActive={setModalActive}>Search</Modal>
    </div>
  );
}

export default App;
