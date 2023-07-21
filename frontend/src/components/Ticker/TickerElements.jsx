import styled from 'styled-components'

export const TickerContainer = styled.div`
 position: fixed;
  top: 12vh;
  width: 100%;
  overflow: hidden;
  z-index: 100;
  height: 3rem;
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  background: radial-gradient(circle at 10% 20%, #862fc7 0%, #000 90%);
  padding-left: 100%;
  box-sizing: content-box;  
  margin-bottom: 0; 
`
export const TickerScroll = styled.div`
      display: inline-block;
  height: 3rem;
  line-height: 3rem;
  white-space: nowrap;
  padding-right: 100%;
  box-sizing: content-box;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ticker;
  animation-name: ticker;
  -webkit-animation-duration: 30s;
  animation-duration: 30s;

  @keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
`
export const TickerItem = styled.div`
      display: inline-block;
  padding: 0 2rem;
  font-size: 1.2rem;
  color: black;
`