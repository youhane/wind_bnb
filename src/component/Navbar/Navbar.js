import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import SearchBar from '../SearchBar/SearchBar'
import { Wrapper } from './Navbar.styles'

export default function Navbar() {
    const [displaySearchBar, setDisplaySearchBar] = useState(false)
    return (
        <Wrapper>
            <div className='mainNav'>
                <Logo />
                <Search toggleSearchBar={() => { setDisplaySearchBar(!displaySearchBar) }} />
            </div>
            {displaySearchBar && <SearchBar toggleSearchBar={() => { setDisplaySearchBar(!displaySearchBar) }} />}
        </Wrapper>
    )
}
