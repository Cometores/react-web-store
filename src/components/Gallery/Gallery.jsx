import React from 'react';
import GalleryImage from '../UI/GalleryImage/GalleryImage';
import styles from './Gallery.module.css'

const Gallery = () => {
	return (
		<div className={styles.Gallery}>
			<GalleryImage className={styles.item1} width="150" scr="https://cdn.shopify.com/s/files/1/1265/2145/files/Samples.webp?v=1676564977&width=800" />
			<GalleryImage className={styles.item2} width="800" scr="https://cdn.shopify.com/s/files/1/1265/2145/files/GG.webp?v=1676572791&width=800" />
			<GalleryImage className={styles.item3} width="400" scr="https://cdn.shopify.com/s/files/1/1265/2145/files/Merch.webp?v=1676565012&width=400" />
			<GalleryImage className={styles.item4} width="400" scr="https://cdn.shopify.com/s/files/1/1265/2145/files/CafFree.webp?v=1676562761&width=800" />
			<GalleryImage className={styles.item5} width="800" scr="https://cdn.shopify.com/s/files/1/1265/2145/files/WaifuCups.webp?v=1676565283&width=800" />
			<GalleryImage className={styles.item6} width="800" scr="https://cdn.shopify.com/s/files/1/1265/2145/files/Web_Banner_6_a14d7a66-0f8e-4030-85ce-02d288daa1c3.jpg?v=1654884219&width=800" />
		</div>
	);
};

export default Gallery;