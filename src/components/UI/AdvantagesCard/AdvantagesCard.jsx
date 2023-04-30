import React from 'react';
import styles from './AdvantagesCard.module.css'

const AdvantagesCard = ({img, children, rtl}) => {
	return (
		<div className={`${styles.cardWrapper} ${rtl ? styles["cardWrapper--rtl"] : ""}`}>
			<div className={styles.cardWrapper__image}>
				<img src={img} />
			</div>
			<div className={styles.cardWrapper__text}>
				{children}
			</div>
		</div>
	);
};

export default AdvantagesCard;