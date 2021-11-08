import React from 'react'
import styles from './BeerFilters.module.scss';

const BeerFilters = () => {
    return (
        <div className={styles.BeerFilters}>
            <h2>Filter by...</h2>
            <div className={styles.FilterButtonContainer}>
                <button className={styles.FilterButton}><h3>All Beers</h3></button>
                <button className={styles.FilterButton}><h3>High ABV Beers</h3></button>
                <button className={styles.FilterButton}><h3>High Acidity Beers</h3></button>
                <button className={styles.FilterButton}><h3>Classic Range Beers</h3></button>
            </div>
        </div>
    )
}

export default BeerFilters
