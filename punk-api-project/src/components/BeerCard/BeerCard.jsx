import React from 'react';
import styles from './BeerCard.module.scss';

const BeerCard = (props) => {
    return (
        <div className={styles.BeerCard}>
            <h2>{props.name} <span className={styles.BeerCardABV}>({props.abv}%)</span></h2>
            <section className={styles.BeerCardBody}>
                <img src={props.image_url} alt="Beer Image"/>
                <section className={styles.BeerCardInfo}>
                    <h4>{props.tagline}</h4>
                    <p>{props.description}</p>
                </section>
            </section>
        </div>
    )
}

export default BeerCard;
