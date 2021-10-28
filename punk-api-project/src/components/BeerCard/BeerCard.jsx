import React from 'react';
import styles from './BeerCard.module.scss';

const BeerCard = () => {
    return (
        <div className={styles.BeerCard}>
            <h2>Beer Name ABV</h2>
            <section className={styles.BeerCardBody}>
                <img src="https://images.punkapi.com/v2/keg.png" />
                <section className={styles.BeerCardInfo}>
                    <h4>Beer tagline info</h4>
                    <p>
                        Beer description Beer description Beer description
                        Beer description Beer description Beer description
                        Beer description Beer description Beer description
                    </p>
                </section>
            </section>
        </div>
    )
}

export default BeerCard;
