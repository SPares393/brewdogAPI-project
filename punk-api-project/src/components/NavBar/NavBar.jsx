import React from 'react';
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
    const { searchTerm, setSearchTerm, filterBySearch } = props

    return (
        <nav className={styles.navBar}>
            <h1>#AllTheBeers</h1>
            <input 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={filterBySearch}
            >
            </input>
        </nav>
    )
}

export default NavBar
