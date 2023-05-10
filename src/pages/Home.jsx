import React, { useState } from 'react';
import CardCollection from '../components/CardCollection/CardCollection';
import Slider from '../components/Slider/Slider';
import Gallery from '../components/Gallery/Gallery';
import AdvantagesCard from '../components/AdvantagesCollection/AdvantagesCollection'

import slides from '../img/Slider.json'
import IconCollection from "../components/IconCollection/IconCollection.jsx";

const Home = () => {

	return (
		<div className='main__container'>
			<Slider slides={slides} />
			<Gallery />
			<CardCollection />
			<AdvantagesCard />
			<IconCollection />
		</div>
	);
};

export default Home;