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

    @media (max-width: 768px){
        .title{
            width: 72rem;

            h2{
                font-size: 2rem;
            }

            p{
                font-size: 1.5rem;
            }
        }

        .grid{
            grid-template-columns: auto auto auto;
            justify-content: center;
            width: 75rem;
        }
    }

    @media (max-width: 320px){
        .App{
            overflow-x: hidden;
        }
        body{
            margin: 0;
        }
        .title{
            width: 18rem;

            h2{
                font-size: 1rem;
            }
        }
        .grid{
            grid-template-columns: auto;
        }
    }
`