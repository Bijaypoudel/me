import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtn,
    SidebarBtnWrap
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon  isOpen={isOpen} onClick={toggle}>
                <CloseIcon/>
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ="about" spy={true} smooth={true} offset={-190} duration={500}>About</SidebarLink>
                    <SidebarLink to ="main" spy={true} smooth={true} offset={-150} duration={500}>Projects</SidebarLink>
                    {/* <SidebarLink to ="work" onClick={toggle}>Work</SidebarLink> */}
                    <SidebarLink to ="Skills_title" spy={true} smooth={true} offset={-150} duration={500} >Skills</SidebarLink>
                    <SidebarLink to ="contact" spy={true} smooth={true} offset={350} duration={500} >Contact</SidebarLink>
                </SidebarMenu>
                
                <SidebarBtnWrap>
                    <SidebarBtn to='/resume'>
                        <a href="../BPResume.pdf">Resume</a>
                    </SidebarBtn>
                </SidebarBtnWrap>
            
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
