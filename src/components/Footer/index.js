import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin}from 'react-icons/fa';
import { 
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink

} from './FooterElements.js'

const Footer = () => {
  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  return (
    <FooterContainer>
    
    <FooterWrap>
    
    <FooterLinksContainer>
    
    <FooterLinksWrapper>
    
    <FooterLinkItems>
    
    <FooterLinkTitle> About Us </FooterLinkTitle>
    
    
    <FooterLink to="/signin">How it works</FooterLink>
    <FooterLink to="/signin">Testimonials</FooterLink>
    <FooterLink to="/signin">Careers</FooterLink>
    <FooterLink to="/signin">Investors</FooterLink>
    <FooterLink to="/signin">Terms of Services</FooterLink>
    
   
    
    
    </FooterLinkItems>
    <FooterLinkItems>
    
    <FooterLinkTitle> About Us </FooterLinkTitle>
    
    
    <FooterLink to="/signin">How it works</FooterLink>
    <FooterLink to="/signin">Testimonials</FooterLink>
    <FooterLink to="/signin">Careers</FooterLink>
    <FooterLink to="/signin">Investors</FooterLink>
    <FooterLink to="/signin">Terms of Services</FooterLink>
    
   
    
    
    </FooterLinkItems>

    </FooterLinksWrapper>
    <FooterLinksWrapper>
    
    <FooterLinkItems>
    
    <FooterLinkTitle> About Us </FooterLinkTitle>
    
    
    <FooterLink to="/signin">How it works</FooterLink>
    <FooterLink to="/signin">Testimonials</FooterLink>
    <FooterLink to="/signin">Careers</FooterLink>
    <FooterLink to="/signin">Investors</FooterLink>
    <FooterLink to="/signin">Terms of Services</FooterLink>
    
   
    
    
    </FooterLinkItems>
    <FooterLinkItems>
    
    <FooterLinkTitle> About Us </FooterLinkTitle>
    
    
    <FooterLink to="/signin">How it works</FooterLink>
    <FooterLink to="/signin">Testimonials</FooterLink>
    <FooterLink to="/signin">Careers</FooterLink>
    <FooterLink to="/signin">Investors</FooterLink>
    <FooterLink to="/signin">Terms of Services</FooterLink>
    
   
    
    
    </FooterLinkItems>

    </FooterLinksWrapper>
    </FooterLinksContainer>

<SocialMedia>

<SocialMediaWrap>
<SocialLogo to='/' onClick={toggleHome}> dolla</SocialLogo>
<WebsiteRights >
dolla {new Date().getFullYear()}
</WebsiteRights>
<SocialIcons>
<SocialIconLink href="/" target="_blank" aria-label="Facebook">

<FaFacebook/>
</SocialIconLink> 
<SocialIconLink href="/" target="_blank" aria-label="Instagram">

<FaInstagram/>
</SocialIconLink> 
<SocialIconLink href="/" target="_blank" aria-label="Twitter">

<FaTwitter/>
</SocialIconLink> 
<SocialIconLink href="/" target="_blank" aria-label="Linkedin">

<FaLinkedin/>
</SocialIconLink> 


</SocialIcons>
</SocialMediaWrap>
</SocialMedia>

    </FooterWrap>
    
    </FooterContainer>
  )
}

export default Footer