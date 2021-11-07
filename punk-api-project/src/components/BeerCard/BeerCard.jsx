import React from 'react'
import BeerCardShort from '../BeerCardShort/BeerCardShort'

const BeerCard = (props) => {
    return (
        <div>
            <BeerCardShort       
                name={props.name}
                abv={props.abv}
                image_url={props.image_url}
                tagline={props.tagline}
                description={props.description}
                key={props.id}
            />
        </div>
    )
}

export default BeerCard

