import React, {useEffect, useRef, useState} from "react";

import Dropdown from "./Dropdown.tsx";
import Modal from '../Modal/Modal.jsx'

import {Item} from "../../utils/types.ts";
import styles from "./Header.module.css";
import {ReactComponent as SearchIcon} from '../../img/search.svg';
import {ReactComponent as DownArrowIcon} from '../../img/arrow.svg';


interface HeaderProps {
    items: Item[]
}


export const Header: React.FC<HeaderProps> = ({items}) => {

    const [modalActive, setModalActive] = useState(false)
    const menuRef = useRef<HTMLInputElement>(null);

    // useEffect(() => {
    // 	console.dir(menuRef.current);

    // 	function callback (e) {
    // 		console.dir(menuRef.current);
    // 		console.log(e.target);

    // 		if (e.target !== document.querySelector(".header") && e.target.contains(document.querySelector(".header")) && menuRef.current && menuRef.current.checked === true){

    // 			menuRef.current.checked = false;
    // 		}
    // 	}
    // 	window.addEventListener('click', callback);

    // 	return () => {
    // 		window.removeEventListener('click', callback);
    // 	}
    // }, [])

    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <input className={styles.header__mobileIconInput} id="mobile-menu" type="checkbox" ref={menuRef}/>
                <label className={styles.header__mobileIcon} htmlFor="mobile-menu">MENU</label>
                <div className={styles.header__item}>
                    <a href="https://gamersupps.gg/">
                        <img
                            src="https://cdn.shopify.com/s/files/1/1265/2145/files/GS_GamerSupps_wh.png?v=1669504460&width=1726"
                            alt="Logo"/>
                    </a>
                </div>

                <div className={styles.header__menu}>
                    {items.map((item, index) => {
                        return (
                            <div className={styles.header__item} key={`menu-item-${index}`}>
                                <a className={styles.header__link} href={item.link}>{item.text}</a>
                                {item.list && <DownArrowIcon className={styles.header__icon}/>}
                                <Dropdown className={styles.header__dropdown} item={item}/>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.header__item} onClick={() => setModalActive(true)}>
                    <SearchIcon className={styles.header__search} width="20" heigth="20" fill="white"/>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>Search</Modal>
        </div>
    )
};

export default Header;
