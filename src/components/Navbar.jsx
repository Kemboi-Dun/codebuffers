
import React from 'react';
import styled from 'styled-components';
import {mobile,tablet} from "../responsive";


const NavbarContainer = styled.div`
margin:0px;
padding: 0px;
${mobile({
height:'20px',
})};
${tablet({
  height:'20px'
})}

`
const Wrapper = styled.div`
padding:24px 20px;
display:flex;
justify-content: space-between;
${mobile({
  flexDirection:'column',
  })};
  ${tablet({
    padding:'18px 14px',
  })}
`
const Left = styled.h1`
font-family:'Urbanist';
cursor:pointer;
margin-left: 58px;
${mobile({
  fontSize:'24px',
  marginLeft:'0'
  })};
${tablet({
  fontSize:'32px',
  margin:'2px'
})}

`
const Right = styled.div`
display:flex;
justify-content: center;
${mobile({
display:'none'
})};
`



const NavOption = styled.a`
padding: 12px 24px;
top:0;
bottom:0;
margin:auto;
cursor:pointer;
font-weight:700;
background-color:${(props) => props.type === "button" && "#fff"};
color:${(props) => props.type === "button" && "#000"};
border-radius: ${(props) => props.type === 'button' && '10px'};

&:hover{
    color:teal;
    background-color:${(props) => props.type === "button" && "teal"};
    color:${(props) => props.type === "button" && "#fff"};
    transition: background-color, color 0.5s ease;
    
};
${tablet({
  marginLeft:'2px',
  fontSize:'12px'
})}
`

const Navbar = () => {
  return (
    <NavbarContainer>
        <Wrapper>
            <Left >
            Code Buffers.
            </Left>
           <Right type="hide">
           
              <NavOption>Home</NavOption>
              <NavOption>Work</NavOption>
              <NavOption>Clients</NavOption>
              <NavOption>About</NavOption>
              <NavOption type="button">Hire Us</NavOption>
           </Right>
        </Wrapper>
    </NavbarContainer>
  )
}

export default Navbar