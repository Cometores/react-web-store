import React from 'react';
import Product from '../UI/Product/Product.jsx'
import styles from './CardCollection.module.css'

const CardCollection = () => {
	return (
		<div className={styles.CardCollection}>
			<Product/>
			<Product/>
			<Product/>
			<Product/>
			<Product/>
		</div>
	);
};

export default CardCollection;