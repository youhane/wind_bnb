import { Formik, Field } from 'formik'
import React, { useMemo, useState } from 'react'
import { CustomLabel, SearchButton, StyledForm, StyledInput, Wrapper } from './SearchBar.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AddGuests from './AddGuests/AddGuests'
import { GuestContext } from './AddGuests/GuestsContext'

library.add(faSearch)

export default function SearchBar() {
    const [numberOfAdults, setnumberOfAdults] = useState(0)
    const adultGuestProvider = useMemo(() => ({ numberOfAdults, setnumberOfAdults }), [numberOfAdults, setnumberOfAdults])

    const initialValues = { location: '', guests: '' }

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
            <Formik
                initialValues={initialValues}
            >
                <StyledForm>
                    <div className='inputs'>
                        <CustomLabel>
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
                            value={numberOfAdults ? numberOfAdults : ''}
                        />
                        <GuestContext.Provider value={adultGuestProvider}>
                            <AddGuests type="Adults" text="Ages 13 or above" />
                        </GuestContext.Provider>
                        <SearchButton type='submit'><FontAwesomeIcon icon="search" /><p>Search</p></SearchButton>
                    </div>
                </StyledForm>
            </Formik>
        </Wrapper >
    )
}
