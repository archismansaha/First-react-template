import React,{ useState} from 'react';
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,Herop,HeroBtnWrapper,
ArrowForward,ArrowRight} from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button}from '../ButtonElement';
const HeroSection = () => {
   const[hover,setHover]=useState(false);

   const onHover=()=>{
     setHover(!hover)
   }


  return (
    <HeroContainer >
    <HeroBg>
    <VideoBg autoPlay loop muted src={Video} type='/video/mp4'/>
    </HeroBg>
    <HeroContent>
    
    <HeroH1>Heroh1 tag is here</HeroH1>
    <Herop>
    Herop tag is here.
    </Herop>
    <HeroBtnWrapper>
    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
    primary="true" dark="true">
    Get started {hover?<ArrowForward/>:<ArrowRight/>}</Button>
  
    </HeroBtnWrapper>
    </HeroContent>
    
    </HeroContainer>
  )
}

export default HeroSection