import React from 'react'
import BalintScores from '../../images/BalintScores.jpg'
import RoversTraining from '../../images/Rovers_Instagram_Training_Pink.png'
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesH2, ServicesCard, ServicesImg, ServicesP, CardH2, CardP } from './ServicesElements'

const Services = () => {
  return (
    <div>
        <ServicesContainer id="services">
            <ServicesH1>Right Here Right Now</ServicesH1>
            <ServicesH2>B Klasse and rising. The Only way is Up</ServicesH2>
                    <ServicesP>It's been a 12 year Rollercoaster. From Early Freizeitliga glory to unpicking the maze of lower leagues in the DfB pyramid. League titles and promotions in 2018-2019 and 2021-2022 led us here. To the big bad B Klasse league. A Rocky start to the 2022-2023 season as the step uo in class hit home had Rovers struggling pre christmas. But as always the Rovers dug deep, found their feet and raised their game. A storming second half of the season seeing our Heroes drag themselves up the league table to finish sixth. Every reason to hope for an expect us to kick on again in 2023-2024. Bring. It. On. Come on Rovers </ServicesP>
            <ServicesWrapper>
                <ServicesCard>
                   
                    <CardH2>Rovers Train Hard</CardH2>
                    <CardP>Mondays and Fridays 19:45</CardP>
                    <ServicesImg src={RoversTraining}></ServicesImg>
                    
                </ServicesCard>
                <ServicesCard>
                   
                    <CardH2>Rovers Home Grounds</CardH2>
                    <CardP>Find us here at Kurt-Ritter Sports Stadium</CardP>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.511553793382!2d13.47213!3d52.5085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84ef3e73576bb%3A0xc8e6da91087d62bb!2sKurt-Ritter-Sportplatz!5e0!3m2!1sen!2sde!4v1689340380918!5m2!1sen!2sde" width="360" height="360"
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" 
        title="Responsive Google Map"></iframe> 
                    
                </ServicesCard>
                <ServicesCard>
                    
                    <CardH2>Rovers Play Hard</CardH2>
                    <CardP><a href="https://www.fupa.net/league/kreisliga-b-berlin-staffel-3/standing" target="_blank" rel="noreferrer">Follow SFC Rovers Here</a></CardP>
                    <ServicesImg src={BalintScores}></ServicesImg>
                    
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    </div>
  )
}

export default Services