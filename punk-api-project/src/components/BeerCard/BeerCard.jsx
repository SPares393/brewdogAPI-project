import React, { useState } from 'react'
import BeerCardShort from '../BeerCardShort/BeerCardShort'
import BeerCardFull from '../BeerCardFull/BeerCardFull'
import styles from './BeerCard.module.scss'

const BeerCard = (props) => {
    const [showFullInfo, setShowFullInfo] = useState(false);

    const { beer } = props;
    return (
        <section className={styles.BeerCard} onClick={() => setShowFullInfo(!showFullInfo)}>
            {showFullInfo ? <BeerCardFull beer={beer} /> : <BeerCardShort beer={beer} />}
        </section>
    )
}

export default BeerCard

