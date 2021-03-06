import styled from "styled-components"

export const Wrapper = styled.div`
    *{
        display: flex;
        align-content: center;
    }
    .mainNav{
        display: flex;
        align-content: center;
        justify-content: space-between;
        margin: .5rem 1rem;
    }

    @media (max-width: 376px){
        width: auto;
        .mainNav{
            flex-direction: column;
        }
    }
`