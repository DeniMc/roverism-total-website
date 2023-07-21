import React, {useState} from 'react'
import goalVideo from '../../videos/GoalSiFeature.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, HeroVideoBG, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
  };
const [hover, setHover] = useState(false)

const onHover = () => {
  setHover(!hover)
}

  return (
    <div>
        <HeroContainer>
<HeroBg>
    <HeroVideoBG autoPlay loop muted src={goalVideo} type='video/mp4' />
</HeroBg>

<HeroContent>
  <HeroH1>Join the Total Roverism Mailing List</HeroH1>
  <HeroP>Get all the latest News, Gossip, Features and Developments as they happen</HeroP>
  <HeroBtnWrapper>
    <Button to="/contact" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' onClick={handleClick}>
      Contact us {hover ? <ArrowForward /> : <ArrowRight />}
    </Button>
  </HeroBtnWrapper>
</HeroContent>
        </HeroContainer>
    </div>
  )
}

export default HeroSection