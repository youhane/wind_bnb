import { Formik } from 'formik'
import React from 'react'
import { SearchButton, StyledForm, StyledInput, Wrapper } from './SearchBar.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

export default function SearchBar() {
    const initialValues = { location: '', guests: '' }
    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
            >
                <StyledForm>
                    <div className='inputs'>
                        <StyledInput name="location" placeholder='Add location' label="Location" />
                        <StyledInput type="text" name="guests" placeholder="Add guests" label="Guests" />
                        <SearchButton type='submit'><FontAwesomeIcon icon="search" /><p>Search</p></SearchButton>
                    </div>
                </StyledForm>
            </Formik>
        </Wrapper >
    )
}
