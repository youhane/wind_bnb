import { Formik, Field } from 'formik'
import React, { useState } from 'react'
import { CustomLabel, NumberOfGuests, SearchButton, StyledForm, StyledInput, Wrapper, CloseSearchBar } from './SearchBar.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AddGuests from './AddGuests/AddGuests'

library.add(faSearch)

export default function SearchBar({ toggleSearchBar }) {
    const initialValues = { location: '', guests: '' }
    const [numberofAdults, setNumberofAdults] = useState(0)
    const [numberofChildren, setNumberofChildren] = useState(0)
    const [addGuestBar, setAddGuestBar] = useState(false)

    const location = [
        {
            key: 1,
            value: 1,
            text: 'Helsinki, Finland'
        },
        {
            key: 2,
            value: 2,
            text: 'Turku, Finland'
        },
        {
            key: 3,
            value: 3,
            text: 'Oulu, Finland'
        },
        {
            key: 4,
            value: 4,
            text: 'Vaasa, Finland'
        },
    ]

    return (

        <Wrapper>
            <CloseSearchBar type='button' onClick={toggleSearchBar}>X</CloseSearchBar>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    setAddGuestBar(false)
                    setNumberofAdults(0)
                    setNumberofChildren(0)
                    toggleSearchBar()
                }}
            >
                {props => (
                    <StyledForm onSubmit={props.handleSubmit}>
                        <div className='inputs'>
                            <CustomLabel onClick={() => { setAddGuestBar(false) }}>
                                <label htmlFor='location'>Location</label>
                                <Field as="select" name="location" placeholder='Add location' options={location}>
                                    {location.map((data) => {
                                        return <option value={data.value} key={data.key}>{data.text}</option>
                                    })}
                                </Field>
                            </CustomLabel>
                            <StyledInput
                                type="text"
                                name="guests"
                                placeholder="Add guests"
                                label="Guests"
                                onClick={() => { setAddGuestBar(true) }}
                                value={numberofAdults && numberofChildren ? numberofAdults + numberofChildren : ''}
                            />
                            {
                                addGuestBar && <NumberOfGuests>
                                    <AddGuests type="Adults" text="Ages 13 or above" setNumberOfPeople={setNumberofAdults} />
                                    <AddGuests type="Children" text="Ages 2 - 12" setNumberOfPeople={setNumberofChildren} />
                                </NumberOfGuests>
                            }

                            <SearchButton type='submit'><FontAwesomeIcon icon="search" /><p>Search</p></SearchButton>
                        </div>
                    </StyledForm>
                )}
            </Formik>
        </Wrapper >
    )
}
