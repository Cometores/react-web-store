import React from 'react';
import styles from "./GalleryImage.module.css";

const GalleryImage = ({scr, width, className}) => {
	return (
		<div className={`${styles.ZoomWrapper} ${className}`}>
			<img 
				src={scr} 
				alt="Gavno" 
				width={width} 
				className={styles.Zoom}
			/>
		</div>
	);
};

export default GalleryImage;