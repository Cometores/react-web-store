import { Item } from "../utils/types";

export const header: Item[] = [
	{
		text: 'Main',
		link: '/',
	},
	{
		text: 'Goods',
		link: '/goods/',
		list: [
			{text: 'Товары 1', link: '/goods/1'},
			{text: 'Товары 2', link: '/goods/2'},
			{text: 'Товары 3', link: '/goods/3'},
		]
	},
	{
		text: 'Jija',
		link: '/jija/',
	},
];