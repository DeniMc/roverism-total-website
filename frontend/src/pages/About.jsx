import React from 'react'
import ChampsHuddle from '../images/RoversChampionsHuddle.jpeg'
import AnimatedHeading from '../components/AnimatedHeading/AnimatedHeading'
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/Data";
import Services from "../components/Services/Services";
import InfoSection from '../components/InfoSection/Info';

const About = () => {
  return (
    
      <div>
      
        <section id="hero-pic" 
        style={{
          backgroundImage: "url(" + ChampsHuddle + ")",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: "100vh",
          width: "100vw"
        }}
        >
        <AnimatedHeading />
        </section>
        
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
  
  

</div>
  )
}

export default About