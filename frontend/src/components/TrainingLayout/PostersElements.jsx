import styled from 'styled-components'
import trainingPosterPink from '../../images/Rovers_Instagram_Training_Pink.png'
import trainingPosterOrange from '../../images/Rovers_Instagram_Training_Orange.png'
import trainingPosterBlue from '../../images/Rovers_Instagram_Training_Blue.png'

export const PosterContainer = styled.div`
    width: 100vw;
    max-height: 400px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    grid-area: content5;
    background-color: #000;
      
`

export const PosterDiv1 = styled.div`
 width: 33%;
 min-width: 400px;
 min-height:400px;
 height: auto;
 border: 5px solid black;
 background-image: url(${trainingPosterPink});
background-size: cover;
background-repeat: no-repeat;
@media screen and (max-width: 1210px){
    width: 50%;}
    @media screen and (max-width: 810px){
    display: none;}
`
export const PosterDiv2 = styled.div`
width: 33%;

min-width: 400px;
min-height:400px;
 height: auto;
 border: 5px solid black;
 background-image: url(${trainingPosterOrange});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media screen and (max-width: 1210px){
    width: 50%;}
`
export const PosterDiv3 = styled.div`
 min-width: 400px;
 
 min-height:400px;
 width: 33%;
 height: auto;
 border: 5px solid black;
 background-image: url(${trainingPosterBlue});
background-size: cover;
background-repeat: no-repeat;

@media screen and (max-width: 1210px){
    display: none;
}
`