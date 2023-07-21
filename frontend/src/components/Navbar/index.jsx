import React from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import purpleLogo from '../../images/logoPurpleNoBG.png'



function Navbar({ toggle }) {

   
  return (
   
    <>
  
        <Nav >
            <NavLink to="/">
               <img className='navbar-logo' src={purpleLogo} alt='Rovers Purple Logo'></img>
            </NavLink>
            <Bars onClick={toggle}/>
            <NavMenu>
            <NavLink to="/about" activeStyle>
            About 
            </NavLink>
            <NavLink to="/training" activeStyle>
            Training
            </NavLink>
            <NavLink to="/contact" activeStyle>
            Contact Us 
            </NavLink>
            <NavLink to="/sponsors" activeStyle>
            Sponsors
            </NavLink>
            </NavMenu>
            <NavBtn>
            <NavBtnLink to="/contact">Contact Us</NavBtnLink>
            </NavBtn>
          
        </Nav>
      
    </>
  )
}

export default Navbar