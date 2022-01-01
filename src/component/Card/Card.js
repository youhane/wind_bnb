import React from 'react'
import { Wrapper, Host, Rating, Info } from './Card.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

export default function Card({ host, room, beds, rating, desc, img }) {
    return (
        <Wrapper>
            <img src={img} alt={img} />
            <Info>
                {host && <Host>Super Host</Host>}
                <p className='room'>{room} . {beds} beds</p>
                <Rating>
                    <FontAwesomeIcon icon="star" color='red' />
                    <p>{rating}</p>
                </Rating>
            </Info>
            <p className='desc'>{desc}</p>
        </Wrapper>
    )
}
