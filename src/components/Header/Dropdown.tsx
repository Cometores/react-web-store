import React from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({item, className = ''}) => {
	return (
		<>
		{
			!!(item?.list?.length) && (
				<ul className={`${styles.Dropdown} ${className}`}>
					{item?.list.map((subitem, index) => {
						return (<li className={styles.Subitem} key={index}>
							<a href={subitem.link}>{subitem.text}</a>
						</li>)
					})}
				</ul>
			)
		}
		</>
	);
};

export default Dropdown;