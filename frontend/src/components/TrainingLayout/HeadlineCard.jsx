import React from 'react'
import styled from 'styled-components'
import { TrainingCard, InfoDiv, ImageDiv, TrainingButton } from './HeadlineCardElements';
import { useNavigate } from 'react-router-dom';




const HeadlineCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
  };
  return (
    <>
<TrainingCard>
    <InfoDiv>
      <h1>SFC Friedrichshain Rovers Training Info</h1>
      <h2>Every Monday and Friday 19:45 - 21:30</h2>
      <p>A bit of fitness work, some touch and technique, innovative tactics, Game prep. Hot showers, Cold Beers. Good Times. New players with a bit of ability are always warmly welcome</p>
      <TrainingButton onClick={handleClick}>Get in Touch</TrainingButton>
    </InfoDiv>
    <ImageDiv />
</TrainingCard>
    </>
  )
}

export default HeadlineCard