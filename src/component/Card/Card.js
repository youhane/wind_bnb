import React from 'react'
import { Wrapper } from './Card.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

export default function Card({ host, room, rating, img }) {
    return (
        <div>
            <img src='' />
            <div>
                <p>Super Host</p>
                <p>Entire apartment. 2 beds</p>
                <div>
                    <FontAwesomeIcon icon="star" color='red' />
                    <p>4.40</p>
                </div>
            </div>
            <Wrapper />
        </div>
    )
}
