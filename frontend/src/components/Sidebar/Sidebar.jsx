import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'



const Sidebar = ({ isOpen, toggle}) => {
  return (
   
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">
            Home
          </SidebarLink>
          <SidebarLink to="/about">
            About
          </SidebarLink>
          <SidebarLink to="/training">
            Training
          </SidebarLink>
          <SidebarLink to="/sponsors">
            Sponsors
          </SidebarLink>
          <SidebarLink to="/contact">
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact Us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
   
  )
}

export default Sidebar