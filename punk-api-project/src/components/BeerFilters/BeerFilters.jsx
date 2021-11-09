import React from 'react'
import styles from './BeerFilters.module.scss';

const BeerFilters = (props) => {
    const { clicked } = props;

    return (
        <div className={styles.BeerFilters}>
            <h2>Filter by...</h2>
            <div className={styles.FilterButtonContainer}>
                <button className={styles.FilterButton} onClick={clicked[0]}><h3>#AllTheBeers</h3></button>
                <button className={styles.FilterButton} onClick={clicked[1]}><h3>High ABV Beers</h3></button>
                <button className={styles.FilterButton} onClick={clicked[2]}><h3>High Acidity Beers</h3></button>
                <button className={styles.FilterButton} onClick={clicked[3]}><h3>Classic Range Beers</h3></button>
            </div>
        </div>
    )
}

export default BeerFilters
