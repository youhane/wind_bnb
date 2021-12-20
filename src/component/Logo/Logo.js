import React from 'react'
import { Wrapper } from './Logo.styles'
import Triangle from './Triangle'

export default function Logo() {
    return (
        <Wrapper>
            <div>
                <Triangle />
                <p>windbnb</p>
            </div>
        </Wrapper>
    )
}
