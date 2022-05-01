import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu
,SidebarRoute,SideLink,SideBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
    <CloseIcon/>
    </Icon>

    <SidebarWrapper>
    <SidebarMenu>
    
    <SideLink to="about"onClick={toggle}>About</SideLink>
    <SideLink to="discover"onClick={toggle}>Discover</SideLink>
    <SideLink to="services"onClick={toggle}>Services</SideLink>
    <SideLink to="signup"onClick={toggle}>Sign Up</SideLink>
    </SidebarMenu>
    <SideBtnWrap>
    <SidebarRoute to="/signin">Sign In</SidebarRoute>
    </SideBtnWrap>
    </SidebarWrapper>
    
    </SidebarContainer>
  )
}

export default Sidebar