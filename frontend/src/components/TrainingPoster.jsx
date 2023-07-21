import React from 'react'
import styled from 'styled-components'
import OpenTrainingYeray from '../images/TrainingPosterSquared.jpg'

const PosterDiv = styled.div`
 background-image: url(${OpenTrainingYeray});
background-size: contain;
background-repeat: no-repeat;
background-color: transparent;
position: relative;
top: 12vh;
grid-area: content6;
margin: 1%;
height: 500px;
width: 500px;
margin: 0 auto;
`

const TrainingPoster = () => {
  return (
    <>
    <PosterDiv />
    </>
  )
}

export default TrainingPoster