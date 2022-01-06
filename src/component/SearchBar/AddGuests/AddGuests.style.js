import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    p{
        font-size: .6rem;
    }
    
    input{
        border: none;
        width: 1rem;
        text-align: center;
        outline: none;
        font-weight: 600;
    }

    .field:focus-within{
        border: none !important;
    }

    button{
        background: white;
        border: 1px solid grey;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        height: 1.6rem;
        padding: .9rem .5rem;
        margin-top: .4rem;
        border-radius: .4rem;
    }

    button:hover{
        background: lightgrey;
    }

    @media (max-width: 376px){
        margin-top: 1rem;
        .field{
            width: 3rem !important;
        }
        .ui, .input, input{
            font-size: 1.3rem;
            width: 3rem;
            padding: 0;
            margin: 0;
        }
        button{
            font-size: 2rem;
            margin-top: auto;
            margin-bottom: auto;
        }
        p{
            font-size: 1rem;
        }
        label{
            font-size: 1.2rem;
        }
    }
`