import { Input } from 'formik-semantic-ui-react'
import React, { useEffect, useState } from 'react'
import { Wrapper } from './AddGuests.style'

export default function AddGuests({ type, text, setNumberOfPeople }) {
    let [input, setInput] = useState(0)

    useEffect(() => {
        setNumberOfPeople(input)
    }, [input, setNumberOfPeople])

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
