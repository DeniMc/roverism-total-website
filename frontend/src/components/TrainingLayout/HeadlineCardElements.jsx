import styled from 'styled-components'
import trainingGroup from '../../images/rovers-training-group.jpg'

export const TrainingCard = styled.div`
    width:100%;
   
    display: flex;
    padding-left: 5%;
   
`
export const InfoDiv = styled.div`
    /* width: 50%; */
    grid-area: content2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    padding: 3%;
    color: white;
    position: relative;
    top: 15vh;
    background-color: #000;
    font-size: 22px;
    
`
export const ImageDiv = styled.div`
grid-area: content3;
   
    background-image: url(${trainingGroup});
background-size: cover;
background-position: 200;
background-repeat: no-repeat;
min-height: 400px;

`

export const TrainingButton = styled.button`
   border-radius: 4px;
  background: #BF40BF;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.5rem;
  z-index: 50;
  margin-top: 2%;

  &:hover {
    transition: all 0.2s ease-in-out;
            background: #228B22;
            color: #010606
  }
`