import styled from "styled-components";
import { Form, Input } from 'formik-semantic-ui-react'

export const Wrapper = styled.div`
    font-family: Mulish;
    font-style: normal;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);;
`

export const StyledForm = styled(Form)`
    background: white;
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;

    .inputs{
        border-radius: 1rem;
        box-shadow: 0px 1px 6px 0px #0000001A;
        height: 15%;
        width: 50%;
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    label{
        font-size: .7rem;
        font-weight: 600;
    }

    .inputs .field{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 1rem;
        width: 100%;
    }

    .inputs .field:focus-within{
        border: 1px solid black;
    }
`

export const StyledInput = styled(Input)`
    input{
        border: none;
        outline: none;
        margin: .5rem 0;
        width: 100%;
    }
`

export const SearchButton = styled.button`
    background: #EB5757;
    color:white;
    border: none;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: .7rem;
    height: 3rem;
    p{
        margin-left: 1rem;
    }
    :hover{
        filter: brightness(85%);
    }
`