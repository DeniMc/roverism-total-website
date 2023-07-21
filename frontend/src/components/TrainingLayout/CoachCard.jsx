import React from 'react'
import styled from 'styled-components'
import BalintCard from '../../images/BalintCoaching.jpg'

const CoachCardContainer = styled.div`
    width: 100%;
    display: flex;
    grid-area: content7;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        
       
    }
`
const ProfilePicDiv = styled.div`
    width: 40%;
    min-height: 400px;
    background-image: url(${BalintCard});
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 768px) {
       width: 100%;
       height: 500px;
    }
    
`
const ContactInfo = styled.div`
    width: 60%;
    min-height: 400px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   color: #fff;
   background: radial-gradient(circle at 10% 20%, #862fc7 0%, #000 90%);
   @media screen and (max-width: 768px) {
       width: 100%;
       height: 160px;
    }
    
`

const CoachCard = () => {
  return (
    <>
    <CoachCardContainer>
        <ProfilePicDiv />
            
        <ContactInfo>
            <h1>Coach Balint Sass</h1>
            <h2>Email: totalroverism@gmail.com</h2>
        </ContactInfo>
    </CoachCardContainer>
    </>
  )
}

export default CoachCard