import React from 'react';
import Product from '../UI/Product/Product.jsx'

import styles from './CardCollection.module.css'

const CardCollection = () => {
	return (
		<div className={styles.cardCollection}>
			<div className={styles.cardCollection__wrapper}>
				<div className={styles.cardCollection__title}>
					<h1>Featured Products</h1>
				</div>
				<div className={styles.cardCollection__products}>
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</div>
	);
};

export default CardCollection;