import React from 'react'
import {FaFacebook, FaYoutube, FaInstagram} from 'react-icons/fa'
import { FooterContainer, FooterLinksContainer, FooterWrap, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLink1, SocialMedia, SocialMediaWrap, SocialIconLink, SocialIcons, SocialLogo, WebsiteRights } from './FooterElements'
import TRIcon from '../../images/TRIconPurple.png'

const Footer = () => {
  return (
    <>
<div>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us  </FooterLinkTitle>
                            <FooterLink1 to="/">Home</FooterLink1>
                            <FooterLink1 to="/about">About</FooterLink1>
                            {/* <FooterLink to="/about">Our Sponsors</FooterLink>
                            <FooterLink to="/sponsors">Created By</FooterLink>  */}
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle> Contact Us  </FooterLinkTitle>
                            <FooterLink1 to="/contact">Contact Us</FooterLink1>
                            <FooterLink1 to="/training">Playing opportunites</FooterLink1>
                            {/* <FooterLink to="/sponsors">Our Sponsors</FooterLink>
                            <FooterLink to="/author">Created By</FooterLink>  */}
                        </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinkItems>
                        <FooterLinkTitle> Top Links  </FooterLinkTitle>
                            <FooterLink1><a href="https://www.fupa.net/league/kreisliga-b-berlin-staffel-3/standing" target="_blank" rel="noreferrer">Rovers League Table</a></FooterLink1>
                            <FooterLink1 to="/sponsors">Sponsors</FooterLink1>
                            {/* <FooterLink to="/sponsors">Our Sponsors</FooterLink>
                            <FooterLink to="/author">Created By</FooterLink>  */}
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle> Social Media  </FooterLinkTitle>
                            <FooterLink href="https://www.instagram.com/rovers_berlin/?hl=en" target="_blank" rel="noreferrer">SFC Rovers Instagram</FooterLink>
                            <FooterLink href="https://www.facebook.com/sfcfriedrichshainroversv/" target="_blank" rel="noreferrer">SFC Rovers Facebook</FooterLink>
                            
                        </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'><img src={TRIcon} alt="TotalRovism Logo" width="50%"/></SocialLogo>
                    <WebsiteRights>TotalRoverism © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.instagram.com/rovers_berlin/?hl=en" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.facebook.com/sfcfriedrichshainroversv/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                      
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </div>
    </>
  )
}

export default Footer