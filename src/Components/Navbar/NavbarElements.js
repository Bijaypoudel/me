import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
  background: transparent;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  position: fixed;
  width:100%;
  top: 0;
  z-index: 10;
  border-radius: 0% 0% 20% 20%;
  box-shadow: 0px 5px 5px rgba(68, 68, 68, 0.6);

  backdrop-filter: blur(10px);
  background: rgba(0,0,0,.5);
  
  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;  
  background: transparent;

  }
`;
export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
//   font-weight: bold;
  text-decoration: none;  
  background: transparent;
  font-family: 'Goldman', cursive;
  src: url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text&family=Goldman:wght@400;700&family=Varela+Round&display=swap');

  transition: 0.3s;

  text-shadow: 1px 1px 0 rgba(128, 128, 128, 0.247), 1px 2px 0 grey, 1px 3px 0 grey, 1px 2px 0 grey,
    1px 5px 0 grey, 1px 2px 0 grey, 1px 3px 0 grey, 1px 4px 0 grey,
    5px 7px 15px black;

  &:hover {
    transition: 0.3s;
    transform: scale(1.1)translate(-5%, -5%);
    
    text-shadow: 1px -1px 0 grey, 1px -2px 0 grey, 1px -3px 0 grey,
      1px -2px 0 grey, 1px -2px 0 grey, 1px -3px 0 grey, 1px -2px 0 grey,
      1px -4px 0 grey, 5px -3px 15px black, 5px -13px 25px #808080;
  }

  }
`;
export const MobileIcon = styled.div`
  display: none;  
  background: transparent;


  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,120%);
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  background: transparent;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const Navitem = styled.li`
  height: 30px;
  color: white;
  margin-right: 22px;
  background: transparent;
  font-family: 'Goldman', cursive;
  font-size: 1.6vw;
  cursor: pointer;
  src: url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text&family=Goldman:wght@400;700&family=Varela+Round&display=swap');

`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

//   &.active{
//     border-bottom: 2px solid  rgb(255, 81, 0);;
//   }
  &:hover,&.active{
    border-bottom: 4px solid  rgb(255, 81, 0);
    border-left: 2px solid  rgb(255, 81, 0);
    border-right: 2px solid  rgb(255, 81, 0);

    font-size: 1.9vw;
    border-radius: 10vw;
  }

  transition: all 0.2s ease-in-out 0s;


`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  background: transparent;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtnLink = styled.nav`

    border-bottom: 4px solid  rgb(255, 81, 0);
    border-left: 2px solid  rgb(255, 81, 0);
    border-right: 2px solid  rgb(255, 81, 0);

  border-radius: 10vw;
  padding:5px 20px;
  margin:0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration:none;
  font-family: 'Goldman', cursive;
  src: url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text&family=Goldman:wght@400;700&family=Varela+Round&display=swap');
  font-weight:300;
  font-size: 1vw;
  color:white;
  text-align:center;
  transition: all 0.2s ease-in-out;
  &:hover{
    border-bottom: 2px solid  rgb(255, 81, 0);
    border-left: 1px solid  rgb(255, 81, 0);
    border-right: 1px solid  rgb(255, 81, 0);

    transition: all 0.2s ease-in-out;
    color: blue;
    font-size: 1.1vw;
  }
 



`;