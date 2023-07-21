import React from 'react'
import styled from 'styled-components';
import './AnimatedHeading.css'

const LightningDiv = styled.section`
    font-family: 'Lato', sans-serif;
    color:#50C878;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 20vh;
    height: 80vh;
`

const LightningContainer1 = styled.div`
    font-size: 120px;
    @media screen and (max-width: 1300px){
        font-size: 90px;
    }
    @media screen and (max-width: 1008px){
        font-size: 70px;
    }
    @media screen and (max-width: 768px){
        font-size: 50px;
    }
    @media screen and (max-width: 550px){
        font-size: 38px;
    }
`

const LightningContainer2 = styled.div`
    font-size: 160px;
    @media screen and (max-width: 968px){
        font-size: 120px;
    }
    @media screen and (max-width: 768px){
        font-size: 90px;
    }
    @media screen and (max-width: 480px){
        font-size: 70px;
    }
`

const AnimatedHeading = () => {
  return (
    <div>
        <LightningDiv>
        <LightningContainer1 className='container-one'>
        <span>S</span>
        <span>F</span>
        <span>C</span>
        <span> &nbsp; </span>
        <span>F</span>
        <span>R</span>
        <span>I</span>
        <span>E</span>
        <span>D</span>
        <span>R</span>
        <span>I</span>
        <span>C</span>
        <span>H</span>
        <span>S</span>
        <span>H</span>
        <span>A</span>
        <span>I</span>
        <span>N</span>
        <span> &nbsp; </span>
        </LightningContainer1>
        <LightningContainer2 className='container-two'>
        <span>R</span>
        <span>O</span>
        <span>V</span>
        <span>E</span>
        <span>R</span>
        <span>S</span>
        </LightningContainer2>
        </LightningDiv>
    </div>
  )
}

export default AnimatedHeading