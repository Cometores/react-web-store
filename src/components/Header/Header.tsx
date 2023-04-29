import React, { useState } from "react";

import Dropdown from "./Dropdown.tsx";
import {ReactComponent as DownArrowIcon} from '../../img/arrow.svg';
import Modal from '../Modal/Modal.jsx'

import styles from "./Header.module.css";
import { ReactComponent as SearchIcon } from '../../img/search.svg';
import { Item } from "../../utils/types.ts";

interface HeaderProps {
	items: Item[]
}
export const Header: React.FC<HeaderProps> = ({ items }) => {

	const [modalActive, setModalActive] = useState(false)

	return (
	<div className={styles.header}>
		<div  className={styles.header__wrapper}>
			<div className={styles.header__item}>
				<img src="https://cdn.shopify.com/s/files/1/1265/2145/files/GS_GamerSupps_wh.png?v=1669504460&width=1726" alt="Logo" />
			</div>

			<div className={styles.header__menu}>
				{items.map((item, index) => {
					return (
						<div className={styles.header__item} key={`menu-item-${index}`}>
							<a className={styles.header__link} href={item.link}>{item.text}</a>
							{ item.list && <DownArrowIcon className={styles.header__icon} /> }
							<Dropdown className={styles.header__dropdown} item={item} />
						</div>
					);
				})}
			</div>

			<div className={styles.header__item} onClick={() => setModalActive(true)}>
				<SearchIcon className={styles.header__search}width="20" heigth="20" fill="white"/>
			</div>
		</div>
		<Modal active={modalActive} setActive={setModalActive}>Search</Modal>
	</div>
	)
};

export default Header;
