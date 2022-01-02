import React from 'react'
import { Wrapper } from './Search.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

export default function Search({ toggleSearchBar }) {
    return (
        <Wrapper onClick={toggleSearchBar}>
            <div>
                <p>Helsinki, Finland</p>
                <input type="text" placeholder='Add guests' />
                <FontAwesomeIcon icon="search" color='red' />
            </div>
        </Wrapper>
    )
}
