import React from 'react';
import styles from './BeerCardShort.module.scss';

const BeerCardShort = (props) => {
    const { name, abv, image_url, tagline, description } = props.beer

    const formatDescription = (str) => {
        if (str.length > 200) {
            return `${str.slice(0, 200)}...`;
        } else {
            return str;
        }
    }

    return (
        <div className={styles.BeerCard}>
            <h2>{name} <span className={styles.BeerCardABV}>({abv}%)</span></h2>
            <section className={styles.BeerCardBody}>
                <img src={image_url} alt="Beer Image"/>
                <section className={styles.BeerCardDescription}>
                    <h4>{tagline}</h4>
                    <p>{formatDescription(description)}</p>
                </section>
            </section>
        </div>
    )
}

export default BeerCardShort;