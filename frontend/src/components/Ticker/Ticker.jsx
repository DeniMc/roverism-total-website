import React from 'react'
import { TickerContainer, TickerScroll, TickerItem } from './TickerElements'


const Ticker = () => {
  return (
    <>
   <TickerContainer>
    <TickerScroll>
        <TickerItem><h2>Rovers Training Every Monday and Friday</h2></TickerItem>
        <TickerItem><h2>19:45 Kickoff at Kurt-Ritter Sportsplatz</h2></TickerItem>
        <TickerItem><h2>New Players always welcome</h2></TickerItem>
        <TickerItem><h2>Get in touch to register interest in joining</h2></TickerItem>

    </TickerScroll>
   </TickerContainer>
   </>
  )
}

export default Ticker