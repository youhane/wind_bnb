import { Input } from 'formik-semantic-ui-react'
import React, { useContext, useEffect, useState } from 'react'
import { Wrapper } from './AddGuests.style'
import { GuestContext } from './GuestsContext'

export default function AddGuests({ type, text }) {
    let [input, setInput] = useState(0)
    const { setnumberOfAdults } = useContext(GuestContext)

    useEffect(() => {
        setnumberOfAdults(input)
    }, [input, setnumberOfAdults])

    return (
        <Wrapper>
            <label htmlFor={type}>{type}</label>
            <p>{text}</p>
            <div>
                <button onClick={() => { setInput(--input) }}>-</button>
                <Input type="text" name={type} placehdolder='0' value={input} />
                <button onClick={() => { setInput(++input) }}>+</button>
            </div>
        </Wrapper >
    )
}
