import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from './Search.styles'

library.add(faSearch)

export default function Search() {
    return (
        <Wrapper>
            <div>
                <p>Helsinki, Finland</p>
                <input type="text" placeholder='Add guests' />
                <FontAwesomeIcon icon="search" color='red' />
            </div>
        </Wrapper>
    )
}
