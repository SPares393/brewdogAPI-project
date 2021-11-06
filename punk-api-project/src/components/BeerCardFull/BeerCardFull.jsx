import React from 'react'
import styles from './BeerCardFull.module.scss'

const BeerCardFull = (props) => {
    return (
        <div className={styles.BeerCardFull}>
            <h2>{props.name}</h2>
            <section className={styles.BeerCardBody}>
                <img src={props.image_url} alt="Beer Image"/>
                <section className={styles.BeerCardDescription}>
                    <h4>{props.tagline}</h4>
                    <p>First brewed {props.first_brewed}</p>
                    <p>{props.description}</p>
                    <section className={styles.BeerCardInfoBox}>
                        <div className={styles.BeerCardInfo}>
                            <p>ABV</p>
                            <p>{props.abv}%</p>
                        </div>
                        <div className={styles.BeerCardInfo}>
                            <p>IBU</p>
                            <p>{props.ibu}</p>
                        </div>
                        <div className={styles.BeerCardInfo}>
                            <p>EBC</p>
                            <p>{props.ebc}</p>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default BeerCardFull
