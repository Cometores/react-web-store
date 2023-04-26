import React from 'react';
import Raiting from '../Raiting/Raiting';

const Product = () => {
	return (
		<div>
			<img src="https://cdn.shopify.com/s/files/1/1265/2145/products/nurse-joi-shirt.png?v=1681941465&width=500" alt="" />
			Описание
			Цена
			<Raiting num={3}/>
		</div>
	);
};

export default Product;