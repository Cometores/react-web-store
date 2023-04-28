import React, { useState } from 'react';
import CardCollection from '../components/CardCollection/CardCollection';
import Slider from '../components/Slider/Slider';
import Gallery from '../components/Gallery/Gallery';
import slides from '../img/Slider.json'

const Home = () => {

	return (
		<div className='main__container'>
			<Slider slides={slides} />
			<Gallery />
			<CardCollection />
		</div>
	);
};

export default Home;