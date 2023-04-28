import React from 'react';
import Product from '../UI/Product/Product.jsx'
import styles from './CardCollection.module.css'

const CardCollection = () => {
	return (
		<div className={styles.cardCollection}>
		<div className={styles.cardCollection__wrapper}>
			<Product/>
			<Product/>
			<Product/>
			<Product/>
			<Product/>
			<Product/>
			<Product/>
			<Product/>
		</div>
		</div>
	);
};

export default CardCollection;