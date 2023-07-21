import styled from 'styled-components'

export const ServicesContainer = styled.div`
    min-height: 100vh;
    max-height:400vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5%;
    align-items: center;
    background: #010606;

    /* @media screen and (max-width: 768px) {
        height: 1100px;    }

        @media screen and (max-width: 480px) {
        height: 1300px;    } */
`

export const ServicesWrapper = styled.div`
    max-width: 100vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 36px;
    padding: 0 50px;

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #800080;
    color: #fff;
    padding-top: 3%;
    border-radius: 10px;
    height: 540px;
    width: 360px;
   
    box-shadow: 0 1x 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale()(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    } 
`

export const ServicesImg = styled.img`
    height: 360px;
    width: 360px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 3.5rem;
    color: #fff;
    margin-bottom: 64px;
    text-shadow: 3px 3px 5px #50C878;

    @media screen and (max-width: 480px) {
        font-size: 2rem
    }
`

export const ServicesH2 = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
    
    margin-bottom: 3rem;
`
export const ServicesP = styled.p`
    text-align: center;
    font-size: 1.7rem;
    color: #fff;
    
    margin-bottom: 3rem;
`

export const CardH2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
`

export const CardP = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
`