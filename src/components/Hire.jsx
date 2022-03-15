import { TextareaAutosize } from '@material-ui/core'
import { GitHub, LocalPhone, Mail, Send } from '@material-ui/icons'
import { InputLabel } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {mobile,tablet} from '../responsive'

const Container = styled.div`
display:flex;
justify-content: center;

`
const Wrapper = styled.div`
display:flex;
justify-content: space-around;
width:100%;
${mobile({
    display:'flex',
    flexDirection:'column'
   })}
`
const Left = styled.div`
display:flex;
flex:2;
justify-content:center;
flex-direction:column;
margin-left:12px;
padding: 0 24px 24px 24px;
${mobile({
    margin:'0',
    padding:'0'
   })};

${tablet({
justifyContent:'center',
margin:'2px'
})}
`
const Title = styled.h1`
display:flex;
margin-left:64px;
font-weight: 500;
text-decoration: underline;
margin-bottom: 12px;
justify-content: flex-start;
${mobile({
  margin:'10px',
  fontSize:'24px'
   })};
   ${tablet({
margin:'10px',
fontSize:'24px'
})}
`
const LeftText = styled.span`
display:flex;
justify-content: center;
font-size: 18px;
padding: 12px 4px;
${mobile({
    textAlign:'center',
    justifyContent:'center',
    fontSize:'16px',
    margin:'4px'
   })};
   ${tablet({
fontSize:'16px',
textAlign:'start',
})}
`
const LeftDescription = styled.div`
margin: 12px;
padding:24px;
${tablet({
margin:'6px',
    })}
`
const LeftDesc = styled.div`
margin-bottom: 12px;
padding:8px;
`
const Right = styled.div`
display:flex;
flex:2;
flex-direction: column;
margin-left:12px;
padding: 0 24px 24px 24px;
${mobile({
   
    margin:'0',
    padding:'12px'
})};
${tablet({
margin:'2px',
justifyContent:'center',
margin:'6px',
padding:'0 4px'
})}
`
const InputContainer = styled.div`
display:flex;
justify-content: space-around;
flex-direction: column;
width:50%;
${mobile({
    textAlign:'center',
    justifyContent:'center',
    width:'80%'
   })};
   ${tablet({
width:'90%'
})}
`
const InputDesc = styled.div`
padding:8px 12px;
margin:0 12px;

`
const Desc = styled.div`
margin:4px 0;
font-size:18px;
font-weight:600;

`
const Input = styled.input`
padding:8px 12px;
border:none;
width: 100%;
border-radius: 2px;

`

const Button = styled.button`
border:none;
color:#000;
padding: 2px 4px;
margin: 4px 24px;
width:20%;
cursor:pointer;
background:#fff;
border-radius:4px;
display:flex;
justify-content:center;


&:hover{
    background-color:teal;
    color:#fff;
    transition: all 0.7s ease;
}
${mobile(
    {
       backgroundColor:'#f1fcf8',
       color:'#000'
    }
)}
`


const Hire = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Title>A Summary of Us</Title>
                <LeftText>We are a team of idealistic crew who let you see your idea and nature it through code.</LeftText>
                <LeftDescription>
                    <LocalPhone/>
                    <LeftDesc>+2547 5646 7895</LeftDesc>
                    <Mail/>
                    <LeftDesc>codebuffers@gmail.com</LeftDesc>
                    <GitHub/>
                    <LeftDesc>Codebuffers.github</LeftDesc>
                </LeftDescription>
            </Left>

            <Right>
                <Title>Hire Us</Title>
                <InputContainer>
                <InputDesc>
                <Desc>Name: </Desc>
                <Input type="text" placeholder='Your name' />
                </InputDesc>
                <InputDesc>
                <Desc>Email: </Desc>
                <Input type="email" placeholder='Your email' />
                </InputDesc>
                <InputDesc >
                <Desc >Message: </Desc>
                <TextareaAutosize style={{padding:'8px',height:'120px',width:'100%', border:'none',borderRadius:'2px'}} placeholder='Enter your message'/>
                
                </InputDesc>
                
                
                <Button>
                    <Send/>
                </Button>
                </InputContainer>
               
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Hire