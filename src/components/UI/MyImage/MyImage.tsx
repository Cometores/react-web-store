import React from 'react';
import styles from "./MyImage.module.css";

const MyImage = ({scr, width, className}) => {
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

export default MyImage;