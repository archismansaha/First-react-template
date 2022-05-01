import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import {ServicesContainer,
    ServicesWrapper,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesCard,
    ServicesP,
} from './ServicesElemnts.js'

const Services = () => {
  return (
   <ServicesContainer id='services'>
   <ServicesH1>Our Services</ServicesH1>
   <ServicesWrapper>
   <ServicesCard>
   
   <ServicesIcon src={Icon1}/>
   <ServicesH2>Reduce expenses</ServicesH2>
   <ServicesP>We help reduce your fees and overall revenue.</ServicesP>

   
   </ServicesCard>
   <ServicesCard>

   <ServicesIcon src={Icon1}/>
   <ServicesH2>Reduce expenses</ServicesH2>
   <ServicesP>We help reduce your fees and overall revenue.</ServicesP>
   
   
   </ServicesCard>
   <ServicesCard>

   <ServicesIcon src={Icon1}/>
   <ServicesH2>Reduce expenses</ServicesH2>
   <ServicesP>We help reduce your fees and overall revenue.</ServicesP>
   
   
   </ServicesCard>
   
   </ServicesWrapper>
   </ServicesContainer>
  )
}

export default Services