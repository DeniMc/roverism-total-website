import styled from 'styled-components'

export const Layout = styled.div`
    width: 100vw;
     /* min-height: 100vh; */
    padding-top:3rem;
    background-color: #000;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
                         'content2'  
                         'content3' 
                         'content4'
                         'content5'
                         'content7'
                         ;
                         
    @media screen and (min-width: 1000px) {
        grid-template-columns: 33%;
    /* grid-template-rows: 300px 300px 400px 500px 400px; */
    grid-template-rows: auto;
    grid-gap: 5px;
    margin: 0;
    grid-template-areas: 
                         'content2 content2 content6'  
                         'content2 content2 content6' 
                         'content3 content3 content4'
                         'content5 content5 content5'
                         'content7 content7 content7'
                         ;
    }         
   
`

