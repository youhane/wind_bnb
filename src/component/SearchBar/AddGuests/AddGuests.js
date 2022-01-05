import { Input } from 'formik-semantic-ui-react'
import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Wrapper } from './AddGuests.style'

export default function AddGuests({ type, text, setNumberOfPeople }) {
    let [input, setInput] = useState(0)

    useEffect(() => {
        setNumberOfPeople(input)
    }, [input, setNumberOfPeople])

    const popIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
    })
    return (
        <animated.div style={popIn}>
            <Wrapper>
                <label htmlFor={type}>{type}</label>
                <p>{text}</p>
                <div>
                    <button type='button' onClick={() => { setInput(--input) }}>-</button>
                    <Input type="text" name={type} placehdolder='0' value={input} />
                    <button type='button' onClick={() => { setInput(++input) }}>+</button>
                </div>
            </Wrapper >
        </animated.div>
    )
}
