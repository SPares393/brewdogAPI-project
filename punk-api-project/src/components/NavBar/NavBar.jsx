import React from 'react';
import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <h1>#AllTheBeers</h1>
            <input placeholder="Search..."></input>
        </nav>
    )
}

export default NavBar
