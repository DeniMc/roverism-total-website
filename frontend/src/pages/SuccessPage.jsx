import React from 'react';
import * as Icon from 'react-feather';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import EnriPoster from '../images/EnriPoster.png'

const MessageWrapper = styled.div`
  /* margin-top: 150px; */
  display: flex;
  width: 100vw;
  height: 70vh;
  background-image: url(${EnriPoster});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: green; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.h2`
  font-size: 25px;
  color: #800080;
  background-color: #fff;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SuccessPage = () => {
  return (
    <React.Fragment>
      <Fade bottom duration={700} distance="60px">
        <MessageWrapper>
          <Icon.CheckCircle color="#800080" style={{ width: 100, height: 100 }} />
          <SuccessMessage className="sucess-message">MESSAGE SENT SUCCESSFULLY <br/> ROVERS TEAM WILL GET BACK TO YOU ASAP</SuccessMessage>
        </MessageWrapper>
      </Fade>
    </React.Fragment>
  );
};

export default SuccessPage;