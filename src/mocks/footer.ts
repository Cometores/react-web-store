import { Item } from "../utils/types";

export const header: Item[] = [
	{
		text: 'Home',
		link: '/',
	},
	{
		text: 'Shop',
		link: '/shop/',
		list: [
			{text: 'All Products', link: '/shop/all-products'},
			{text: 'Merch', link: '/shop/merch'},
			{text: 'T-Shirts', link: '/shop/t-shirts'},
		]
	},
	{
		text: 'Why us?',
		link: '/why-us/',
	},
];