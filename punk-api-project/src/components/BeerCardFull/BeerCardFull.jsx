import React from 'react'
import styles from './BeerCardFull.module.scss'

const BeerCardFull = (props) => {
    const { name, abv, image_url, tagline, description, first_brewed, ph, ibu, ebc } = props.beer

    return (
        <div className={styles.BeerCardFull}>
            <h2>{name} <span className={styles.BeerCardABV}>({abv}%)</span></h2>
            <section className={styles.BeerCardBody}>
                <img src={image_url} alt="Beer Image"/>
                <section className={styles.BeerCardDescription}>
                    <h4>{tagline}</h4>
                    <p>First brewed {first_brewed}</p>
                    <p>{description}</p>
                    <section className={styles.BeerCardInfoBox}>
                        <div className={styles.BeerCardInfo}>
                            <p>PH</p>
                            <p>{ph}</p>
                        </div>
                        <div className={styles.BeerCardInfo}>
                            <p>IBU</p>
                            <p>{ibu}</p>
                        </div>
                        <div className={styles.BeerCardInfo}>
                            <p>EBC</p>
                            <p>{ebc}</p>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default BeerCardFull
