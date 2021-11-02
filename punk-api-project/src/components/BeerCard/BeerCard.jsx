import React from 'react';
import styles from './BeerCard.module.scss';

const BeerCard = (props) => {

    const formatDescription = (str) => {
        if (str.length > 200) {
            return `${str.slice(0, 200)}...`;
        } else {
            return str;
        }
    }

    return (
        <div className={styles.BeerCard}>
            <h2>{props.name} <span className={styles.BeerCardABV}>({props.abv}%)</span></h2>
            <section className={styles.BeerCardBody}>
                <img src={props.image_url} alt="Beer Image"/>
                <section className={styles.BeerCardInfo}>
                    <h4>{props.tagline}</h4>
                    <p>{formatDescription(props.description)}</p>
                </section>
            </section>
        </div>
    )
}

export default BeerCard;
