import React from "react";
import { Item } from "../../utils/types.ts";
import Dropdown from "./Dropdown.tsx";
import styles from "./Header.module.css";
import DownArrow from "../UI/DownArrow/DownArrow.tsx";

interface HeaderProps {
	items: Item[]
}
export const Header: React.FC<HeaderProps> = ({ items }) => {
	return (<div className={styles.Header}>
		{items.map((item, index) => {
			return (
				<div className={styles.Item} key={`menu-item-${index}`}>
					<a className={styles.Link} href={item.link}>{item.text}</a>
					{ item.list && <DownArrow/> }
					<Dropdown className={styles.Dropdown} item={item} />
				</div>
			);
		})}
	</div>)
};

export default Header;
