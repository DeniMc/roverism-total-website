import React from 'react'
import Ticker from '../Ticker/Ticker'
import { Layout } from './TrainingPageElements'
import Posters from '../TrainingLayout/Posters'
import { InfoDiv, ImageDiv}  from '../TrainingLayout/HeadlineCardElements'
import TrainingMap from '../TrainingMap'
import TrainingPoster from '../TrainingPoster'
import CoachCard from '../TrainingLayout/CoachCard'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const TrainingButton = styled.button`
  border-radius: 4px;
        background: #BF40BF;
        padding: 10px 22px;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #228B22;
            color: #010606
        }
`


const TrainingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');}
  return (
    <>
   <Ticker />
      <Layout>
       <Posters />
       <ImageDiv />
    <InfoDiv>
    <h1>SFC Friedrichshain Rovers Training</h1>
    <br></br>
      <h2>Every Monday and Friday 19:45 - 21:30</h2>
      <br></br>
      <p>A bit of fitness work, some touch and technique, innovative tactics, Game prep. Hot showers, Cold Beers. Good Times. New players with a bit of ability are always warmly welcome</p>
      <br></br>
      <TrainingButton onClick={handleClick}>Get in Touch</TrainingButton>
    </InfoDiv>
       <TrainingMap />
       <TrainingPoster />
      <CoachCard />
        </Layout>
   
    
    </>
  )
}

export default TrainingPage