import styled from "styled-components";

export const Wrapper = styled.div`
    *{
        font-family: Mulish;
        font-style: normal;
        font-weight: 400;
        text-align: left;
        align-items:center;
    }
    div {
        border-radius: 1rem;
        box-shadow: 0px 1px 6px 0px #0000001A;
    }
    div *{
        padding: 1rem;
    }
    input{
        border: none;
    }
    input:focus{
        border: none;
        outline:none
    }

    @media (max-width: 376px){
        margin-top: 1rem;
        margin-bottom: 1rem;
        div *{
            padding: 1rem;
        }
        input{
            width: 7rem;
            font-size: 1rem;
        }
    }
`