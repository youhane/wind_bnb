import styled from "styled-components"

export const Wrapper = styled.div`
    margin: 1rem;
    width: 25rem;
    img{
        width: 100%;
        height: 17rem;
        object-fit: cover;
        border-radius: 1rem;
    }
    div{
        display: flex;
    }

    .desc{
        margin-top: .5rem;
        font-weight: 600;
    }

    @media (max-width: 768px){
        width: 90%;
        
        img{
            width: 20rem;
            height: 15rem;
        }
        .desc{
            font-size: 1.3rem;
        }
    }

    @media (max-width: 320px){
        width: 50%;
        
        img{
            width: 18rem;
            height: 13rem;
        }
        .desc{
            font-size: 1.3rem;
        }
    }
`

export const Host = styled.div`
    border: 1.5px solid black;
    border-radius: .8rem;
    padding: .3rem .5rem;
    font-weight: 700;
    @media (max-width: 320px){
        padding: .1rem .3rem;
        font-size: .8rem;
    }
`

export const Rating = styled.div`
    p{
        margin-left: .5rem;
    }
    @media (max-width: 320px){
        font-size: .9rem;
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
    @media (max-width: 320px){
        width: 25rem;
        justify-content: flex-start;
        gap: .5rem;

        .room{
            font-size: .9rem;
        }
    }
`