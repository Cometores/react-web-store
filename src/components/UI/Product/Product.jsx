import React from 'react';
import Raiting from '../Raiting/Raiting.jsx';
import styles from './Product.module.css'

const Product = ({ price = "48$", description = "description" }) => {
	return (
		<div className={styles.ProductCard}>
			<div className={styles.ImageWrapper}>
				<img className={styles.Image} src="https://cdn.shopify.com/s/files/1/1265/2145/products/nurse-joi-shirt.png?v=1681941465&width=500" alt="" />
				<img className={styles.ImageSecondary} src="https://cdn.shopify.com/s/files/1/1265/2145/products/DSC3280.jpg?v=1681941358&width=2624" alt="" />
			</div>
			<div className={styles.ProductSummary}>
				<div className={styles.ProductDescription}>
					{description}
				</div>
				<div className={styles.ProductPrice}>
					{price}
				</div>
				<div className={styles.ProductRaiting}>
					<Raiting num={3} />
				</div>
			</div>

		</div>
	);
};

export default Product;