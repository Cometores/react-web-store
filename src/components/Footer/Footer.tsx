import React from 'react';
import styles from './Footer.module.css'
import { Item } from "../../utils/types.ts";

interface HeaderProps {
	items: Item[]
}

const Footer: React.FC<HeaderProps> = ({ items }) => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<div className={styles.footer__column}>
					<p className={styles.footer__title}>
						WHO WE ARE
					</p>
					<p className={styles.header__item}>
						Gamer Supps is the leader in gaming energy & nutrition.
					</p>
					<p className={styles.header__item}>
						contact@gamersupps.gg
					</p>
					<p className={styles.header__item}>
						1-800-431-9664
					</p>
				</div>
				<div className={styles.footer__column}>
					<p className={styles.footer__title}>
						Useful Links
					</p>
					{
						items.flatMap(item => item.list ? [item, ...item.list] : item).map((item, index) => {
							return (
								<p className={styles.header__item} key={`menu-item-${index}`}>
									<a className={styles.header__link} href={item.link}>{item.text}</a>
								</p>
							);
						})
					}

				</div>
				<div className={styles.footer__column}>
					<p className={styles.footer__title}>
						IMPORTANT NOTICE
					</p>
					<p className={styles.header__item}>
						*These statements have not been evaluated by the Food and Drug Administration.
						These products are not intended to diagnose, treat, cure, or prevent any disease.
					</p>

				</div>
			</div>
		</div>
	);
};

export default Footer;