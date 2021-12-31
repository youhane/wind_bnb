import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import SearchBar from '../SearchBar/SearchBar'
import { Wrapper } from './Navbar.styles'

export default function Navbar() {
    return (
        <Wrapper>
            <div className='mainNav'>
                <Logo />
                <Search />
            </div>
            <SearchBar />
        </Wrapper>
    )
}
