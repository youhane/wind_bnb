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
    background-color: rgba(0,0,0,0.4);
`

export const StyledForm = styled(Form)`
    background: white;
    height: 50%;
    width: 100%;
    justify-content: center;
    .inputs{
        border-radius: 1rem;
        box-shadow: 0px 1px 6px 0px #0000001A;
        height: 25%;
        width: 50%;
        margin-top: 3rem;
        align-items: center;
    }

    label{
        font-size: .7rem;
        font-weight: 600;
    }

    .inputs .field{
        flex-direction: column;
        padding: 1rem;
        border-radius: 1rem;
        width: 100%;
    }

    .inputs .field:focus-within{
        border: 1px solid black;
    }

    @media (max-width: 376px){
        height: 80%;
        width: 25rem;
        .inputs{
            width: 30rem;
            display: flex;
            flex-direction: column;
            box-shadow: none;
        }
        .inputs .field{
            border: none !important;
            outline: none !important;
        }
        label{
            font-size: 1rem;
        }
        label:not([for="location"]){
            padding: 0 2.5rem;
        }
    }
`

export const StyledInput = styled(Input)`
    input{
        border: none;
        outline: none;
        margin: .5rem 0;
        width: 100%;
    }
    @media (max-width: 376px){
        padding: 0 2.5rem;
        input{
            width: 10rem;
            font-size: 1.3rem;
        }
    }
`

export const SearchButton = styled.button`
    background: #EB5757;
    color:white;
    border: none;
    padding: 1rem;
    border-radius: .7rem;
    height: 3rem;
    margin-right: 1rem;
    p{
        margin-left: 1rem;
    }
    :hover{
        filter: brightness(85%);
    }
    @media (max-width: 376px){
        position: absolute;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        bottom: 25%;
    }
`
export const CustomLabel = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    border-radius: .7rem;
    select{
        border: none;
        outline: none;
        margin-top: .7rem;
    }
    :focus-within{
        border: 1px solid black;
    }
    @media (max-width: 376px){
        border: none !important;
        outline: none !important;
        width: 20rem;
        select{
            font-size: 1.3rem;
        }
    }
`

export const NumberOfGuests = styled.div`
    position: absolute;
    top: 20%;
    left: 47%;
    display: flex;
    flex-direction: column;
    left: 39%;
    @media (max-width: 376px){
        left: 30%;
        top: 27%;
    }
`

export const CloseSearchBar = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    margin: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    @media (max-width: 376px){
        font-size: 1.5rem;
        right: .5rem;
    }
`