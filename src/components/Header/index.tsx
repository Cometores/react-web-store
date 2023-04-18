import React from "react";
import { Item } from "../../utils/types";

interface HeaderProps {
	items: Item[]
}

export const Header: React.FC<HeaderProps> = ({items}) => {
	return (<div className="header">
		{items.map((item, index) => {
			return <a href={item.link} key={`menu-item-${index}`}>{item.text}</a>;
		})}
	</div>)
};

export default Header;
