import React from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ item, className = '' }) => {
	return (
		item.list && (
			<ul className={`${styles.dropdown} ${className}`}>
				{item?.list.map((subitem, index) => {
					return (<li className={styles.dropdown__item} key={index}>
						<a  href={subitem.link}>{subitem.text}</a>
					</li>)
				})}
			</ul>
		));
};

export default Dropdown;