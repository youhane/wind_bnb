import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: Montserrat;
    }

    body{
        margin: 0 3rem;
    }

    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 1rem;
    }

    .grid{
        display: grid;
        grid-template-columns: auto auto auto;
    }

    @media (max-width: 376px){
        .title{
            width: 40rem;
        }
        .grid{
            grid-template-columns: auto;
        }
    }
`