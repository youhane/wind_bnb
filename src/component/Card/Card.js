import React from 'react'
import { Wrapper, Host } from './Card.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

export default function Card({ host, room, rating, desc, img }) {
    return (
        <div>
            <img src={img} alt={img} />
            <div>
                {host && <Host>Super Host</Host>}
                <p>{room}</p>
                <div>
                    <FontAwesomeIcon icon="star" color='red' />
                    <p>{rating}</p>
                </div>
                <p>{desc}</p>
            </div>
            <Wrapper />
        </div>
    )
}
