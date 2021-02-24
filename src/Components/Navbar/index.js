import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    Navitem,
    NavBtn,
    NavLinks,
    NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'
import resume from'./BPResume.pdf'

const goUp=()=>{
    scroll.scrollToTop()
}

const Navbar = ({toggle}) => {
     
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={goUp}>BP</NavLogo>
                <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                <NavMenu>
                    <Navitem>
                        <NavLinks to ="about" spy={true} smooth={true} offset={-190} duration={500} >
                            About
                        </NavLinks>
                    </Navitem>
                    
                    <Navitem>
                        <NavLinks to ="main" spy={true} smooth={true} offset={-150} duration={500} >Projects</NavLinks>
                    </Navitem>
                     
                    {/* <Navitem>
                        <NavLinks to ="work" spy={true} smooth={true} offset={50} duration={500} onClick={goWork}>Work </NavLinks>
                    </Navitem>  */}
                    
                    <Navitem>
                        <NavLinks to ="Skills_title" spy={true} smooth={true} offset={-150} duration={500} >Skills</NavLinks>
                    </Navitem>
                    
                    <Navitem>
                        <NavLinks to ="contact" spy={true} smooth={true} offset={350} duration={500} >Contact</NavLinks>
                    </Navitem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink class = "button" >
                        <a href={resume} target = "_blank">Resume</a>
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
       </>
    )
}

export default Navbar;
