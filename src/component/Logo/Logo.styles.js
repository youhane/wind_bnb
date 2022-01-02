import styled from "styled-components";

export const Wrapper = styled.div`
    *{
        display: flex;
        align-items:flex-end;
    }
    p{
        font-family: Poppins;
        font-style: normal;
        font-weight: 700;
        color: #EB5757;
        margin-left: 1rem;
    }

    @media (max-width: 376px){
        font-size: 1.3rem;
        *{
            margin-top: 1rem;
        }
    }
`