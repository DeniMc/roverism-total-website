import React from 'react'
import styled from 'styled-components'

const MapContainer = styled.div`
    width: 100%;
    grid-area: content4;
   
`

const TrainingMap = () => {
  return (
    <>
    <MapContainer>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.511553793382!2d13.47213!3d52.5085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84ef3e73576bb%3A0xc8e6da91087d62bb!2sKurt-Ritter-Sportplatz!5e0!3m2!1sen!2sde!4v1689340380918!5m2!1sen!2sde" width="100%" height="400px"
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" 
        title="Responsive Google Map"></iframe> 
    </MapContainer>
    </>
  )
}

export default TrainingMap