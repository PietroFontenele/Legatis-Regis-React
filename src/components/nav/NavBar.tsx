import React from "react";
import styles from './Nav.module.css';
import menu from '../../IMGS/PNGs/menu.png'

const NavBar = () => {
    return (
        <div className={styles.container_Nav}>
            <img src={menu} alt="" />
            <nav>
                <li><a href="#aboutus"></a> quem somos</li>
                <li><a href="#service" ></a> Ramos</li>
                <li><a href="#projects"></a> nossos projetos</li>
                <li><a href="#local"></a> local</li>
            </nav>
        </div>);
};

export default NavBar;