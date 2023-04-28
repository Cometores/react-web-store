import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.tsx';
import Home from './pages/Home.jsx'
import Footer from './components/Footer/Footer.tsx'

import './styles/App.css';
import { header } from './mocks/header.ts';


export const App = () => {
  
  return (
    <div className="App">
      <Header items={header} />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer items={header}/>
    </div>
  );
}

export default App;
