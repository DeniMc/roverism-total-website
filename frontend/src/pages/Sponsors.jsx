import React from 'react'
import heroImage from '../images/roversChampions2022.jpg';
import starsBackground from '../images/stars.gif';
import styled from 'styled-components';

const SponsorPage = styled.div`
width: 100vw;
min-height: 100vh;
max-height: 200vh;
padding-top: 20vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SponsorH1 = styled.h1`
/* padding-top: 3vh; */
    color: #f13bf1;
    text-align: center;
    font-size: 64px;
    font-weight: 800;
    margin-bottom: 2%;

    @media screen and (max-width: 860px) {
        font-size: 44px;
    }

`

const VideoDiv = styled.div`
  
` 
 const ImgHero = styled.img`
     margin-top: 3%;
        height: 73vh;
 `   

const Sponsors = () => {
  return (
    <div style={{
        backgroundImage: "url(" + starsBackground + ")",
        backgroundSize: "cover",
        minHeight: "100vh",
        maxHeight: "200vh",
      }} >
          <SponsorPage> 
          <SponsorH1>A Word from our Sponsors</SponsorH1>
          <VideoDiv>
          <iframe width="560" height="360" src="https://www.youtube.com/embed/5rAOyh7YmEc?start=12" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </VideoDiv>
          <ImgHero src={heroImage} alt="Championship winning photo" className='heroImage'/>
         
          </SponsorPage>
          </div>
      
  )
}

export default Sponsors