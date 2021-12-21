import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import { Wrapper } from './Navbar.styles'

export default function Navbar() {
    return (
        <Wrapper>
            <div>
                <Logo />
                <Search />
            </div>
        </Wrapper>
    )
}
