import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const DetailsBarWrapper = styled.div`
  background-color: #228B22;
  border-radius: 7px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
    grid-row: 2;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const TextTwo = styled.p`
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
`;

const BigCircle = styled.div`
  height: 50px;
  margin-top: 30px;
  width: 50px;
  background-color: #800080;
  border-radius: 100%;
  z-index: 22;
  margin-left: 10px;
`;

const SmallCircle = styled.div`
  position: absolute;
  margin-left: 10px;
  background-color: #000;
  border-radius: 100%;
  height: 30px;
  width: 30px;
`;

const ContactsWrapper = styled.a`
  display: flex;
  width: 200px;
  height: 10px;
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const ContactText = styled.div`
  color: #fff;

  font-size: 15px;
  margin-left: 10px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  height: 10px;
  justify-content: center;
  bottom: 30px;
  position: absolute;
  cursor: pointer;
`;

const SocialIconWrapper = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #800080;
  }
`;

const DetailsBar = () => {
    return (
      <DetailsBarWrapper>
        <TextWrapper>
          <TextOne>Contact Information</TextOne>
          <TextTwo>Fill up the form and our team will get back to you as soon as we can</TextTwo>
        </TextWrapper>
        <div>
          <ContactsWrapper href="tel:+4917683107814">
            <Icon.Phone size={15} color="#800080" />
            <ContactText>+4917683107814</ContactText>
          </ContactsWrapper>
  
          <ContactsWrapper href="mailto:info@totalroverism.com">
            <Icon.Mail size={15} color="#800080" />
            <ContactText>info@totalroverism.com</ContactText>
          </ContactsWrapper>
        </div>
  
        <div>
          <BigCircle></BigCircle>
          <SmallCircle></SmallCircle>
        </div>
        <SocialsWrapper>
        <SocialIconWrapper href="https://www.facebook.com/profile.php?id=100021937291259">
          <Icon.Facebook color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.instagram.com/_allenjones/">
          <Icon.Instagram color="#fff" size={20} />
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.linkedin.com/in/allen-jones-b799b7171/">
          <Icon.Linkedin color="#fff" size={20} />
        </SocialIconWrapper>
      </SocialsWrapper>
    </DetailsBarWrapper>
  );
};

export default DetailsBar;
  