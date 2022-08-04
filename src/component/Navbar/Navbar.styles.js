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

    @media (max-width: 768px){
        width: 80rem;
        display: flex;
        align-items: center;

        .mainNav{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
    }

    @media (max-width: 320px){
        width: auto;

        .mainNav{
            flex-direction: column;
        }
    }
`