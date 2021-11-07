import React, { useState } from 'react'
import BeerCardShort from '../BeerCardShort/BeerCardShort'
import BeerCardFull from '../BeerCardFull/BeerCardFull'

const BeerCard = (props) => {
    const [showFullInfo, setShowFullInfo] = useState(false);

    // const { beer } = props;
    return (
        <>
            {showFullInfo ? 
                <BeerCardFull 
                    name={props.name}
                    abv={props.abv}
                    image_url={props.image_url}
                    tagline={props.tagline}
                    description={props.description}
                    first_brewed={props.first_brewed}
                    ph={props.ph}
                    ibu={props.ibu}
                    ebc={props.ebc}
                    key={props.id}                    
                />
                :
                <BeerCardShort   
                    // beer={beer}
                    name={props.name}
                    abv={props.abv}
                    image_url={props.image_url}
                    tagline={props.tagline}
                    description={props.description}
                    key={props.id}
                />
            }
        </>
    )
}

export default BeerCard

