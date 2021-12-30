import styled from "styled-components"

export const Wrapper = styled.div`
    margin: 1rem;
    width: 25rem;
    img{
        width: 100%;
        border-radius: 1rem;
    }
    div{
        display: flex;
    }

    .desc{
        margin-top: .5rem;
        font-weight: 600;
    }
`

export const Host = styled.div`
    border: 1.5px solid black;
    border-radius: .8rem;
    padding: .3rem .5rem;
    font-weight: 700;
`

export const Rating = styled.div`
    p{
        margin-left: .5rem;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;

    .room{
        font-size: .9rem;
    }
`