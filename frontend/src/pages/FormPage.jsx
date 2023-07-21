//FormPage.js
import React from 'react';
import styled from 'styled-components';
import DetailsBar from '../components/ContactForm/DetailsBar'
import InputSide from '../components/ContactForm/InputSide'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  padding-top: 20vh;
    width: 100vw;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormContainer = styled.div`
  width: 70%;
  background-color: #fff;
  display: flex;
  padding: 5px;
  border-radius: 5px;
  min-height: 70vh;
  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
`;

const FormPage = () => {
  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact US</TextOne>
        <TextTwo>Any Question or remarks? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar />
        <InputSide />
      </FormContainer>
      
    </PageWrapper>
  );
};

export default FormPage;