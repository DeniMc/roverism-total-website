import React, { useState } from "react";
import lineUpVideo from '../videos/lineUpRovers.mp4'
import TRIconPurple from '../images/TRIconPurple.png'
import { useNavigate } from 'react-router-dom';
import HeroSection from "../components/HeroSection/Hero";



const Home = () => {
  const navigate = useNavigate();
const handleClick = () => {
  navigate('/contact');
};

  return (
    <>
    <div className="main">
         
    <video src={lineUpVideo} autoPlay loop muted/>

    <div className="total-roversim-heading"
     style={{
      backgroundImage: "url(" + TRIconPurple + ")",
      backgroundSize: 'contain',
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
      zIndex: '30',
      width: '100%',
      height: '25vh',
      position: 'absolute',
      top: '10vh',
      
     
    }}></div>

    <div className="welcomeContent">
   
<div className="main-overlay"></div>
    
    <h3 className="rovers-present"> presents..</h3>
        <h2 className='rovers-heading'>SFC Friedrichshain <br /> Rovers</h2>
        
        <h3 className='rovers-intro'>English Speaking Football Team in the Heart of Berlin Friedrichshain</h3>
        <button className='contactBtn' onClick={handleClick}>Get in Touch</button>
        

        </div>
        </div>
        <HeroSection />
        
      
        </>
  )
}

export default Home