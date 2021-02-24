import styled from 'styled-components';

export const BackgroundContainer = styled.div`
position: absolute;
width: 100%;
height: 100vh;
top: 0;
left: 0;
margin: 0;
padding: 0;
`
export const ContentH1 = styled.div`
position:absolute;
width:54%;
height:20%;
top:60%;
left:25%;
color: white;
z-index:-1;	
@media screen and (max-width: 960px) {
    top:70%;
    left:10%;
    width:90%;
  }
`
