import {ExitToApp, Link} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import pic1 from '../images/1.png'
import pic3 from '../images/3.jpg'
import pic4 from '../images/4.jpg'
import pic00 from '../images/00.png'
import {mobile,tablet} from '../responsive'

const ClientContainer = styled.div`
padding: 24px 64px;
display:flex;
height:100vh;
${mobile({
margin:'0',
padding:'0 18px',
justifyContent:'center',
})};
${tablet({
padding:'10px 24px',
height:'70vh'
})}
`
const ClientWrapper = styled.div`
display:flex;
justify-content: space-around;
width:100%;
${mobile({
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-around',
  marginLeft:'0'
})}
`
const Left = styled.div`
flex:1;
${tablet({
flex:'1'
})}
`
const ClientTitle = styled.h1`
display:flex;
margin-left:64px;
font-weight: 500;
text-decoration: underline;
margin-bottom: 12px;
justify-content: flex-start;
${mobile({
  fontSize:'24px',
  textaAlign:'center',
  margin:'0 2px',
  padding:'2px'
})};
${tablet({
fontSize:'24px',
justifyContent:'flex-start',
margin:'4px',
padding:'2px 0'
})}
`
const ClientText = styled.span`
display:flex;
justify-content: center;
font-size: 18px;
padding-left: 4px;
${mobile({
  fontSize:'16px',
  padding:'0',
})};
${tablet({
fontSize:'16px',
padding:'2px'
})}
`
// const Bottom = styled.div`

// height:120px;
// margin: 24px 12px;
// ${mobile({
//   display:'none',
//   margin:'4px'
// })}

// `
// const ImgWrapper = styled.div`
// height:10vh;
// margin:8px;
// padding-top: 8px;
// display:flex;
// justify-content: space-around;
// flex-direction:column;


// `
const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
border-radius:2px;

`

const Right = styled.div`

flex:3;
${tablet({
flex:'2'
})}

`
const WorkLinks = styled.a`
display:flex;
justify-content: flex-end;
margin-right:24px;
padding: 12px 24px;
${mobile({
 justifyContent:'flex-end',
 padding:'0',
 margin:'0'
})}


`
const WorkLink = styled.div`
display:flex;
justify-content:center;
margin-right:24px;
cursor:pointer;
&:hover{
  color:teal;
  transition: color 0.5s, ease;
 }
`
const WorkImages = styled.div`
display:flex;
justify-content: space-evenly;
margin: 4px;
padding: 4px;
${mobile({
  marginTop:'10px',
 display:'flex',
 
})}
`
const Desc = styled.span`
height:100%;
width:100%;
position:absolute;
background-color: rgba(0,0,0,0.7);
z-index:3;
display: flex;
align-items: center;
transition: all 0.5s ease;
color:#fff;
justify-content:center;
text-align:center;
padding-top: 12px;
opacity: 0;
`
const ImgDesc = styled.div`
height:100%;
width:100%;


`


const WorkImg = styled.div`
margin: 12px;
padding: 4px;
display:flex;
position:relative;
justify-content: center;
align-items:center;

&:hover ${Desc}{
  opacity:4;
  border-radius: 2px;
}

`

const LeftImg = styled.div`

`
const RightImg = styled.div`

`


const Clients = () => {
  return (
    <ClientContainer>
        <ClientWrapper>
            <Left>
            <ClientTitle>Clients</ClientTitle>
            <ClientText>
                Some of our clients are majour companies, institutions, 
                small businesses and start-ups.
            </ClientText>
{/*             
            <Bottom>
                <ImgWrapper>
                <Image src={pic1}/>
                </ImgWrapper>
               
                <ImgWrapper>
                <Image src={pic3}/>
                </ImgWrapper>
                <ImgWrapper>
                <Image src={pic4}/>
                </ImgWrapper>
               
            </Bottom> */}
            </Left>

            <Right>
          <ClientTitle>Work</ClientTitle>
          <WorkLinks>
            <WorkLink>
            <ExitToApp  />
            </WorkLink>
         
          <WorkLink>
          <Link />
          </WorkLink>
          
          </WorkLinks>
          <WorkImages>
            <LeftImg>

            <WorkImg>
              
              <Image src={pic00}/>
              <Desc>
              <ImgDesc>Project 001</ImgDesc>
              </Desc>
              
            
            </WorkImg>
            <WorkImg>
              
            <Image src={pic00}/>
              <Desc>
              <ImgDesc>Project 002</ImgDesc>
              </Desc>
            
            </WorkImg>
           </LeftImg>

           <RightImg>
            <WorkImg >
              
            <Image src={pic00}/>
              <Desc>
              <ImgDesc>Project 003</ImgDesc>
              </Desc>
            
            </WorkImg>
            <WorkImg>
             
            <Image src={pic00}/>
               <Desc>
              <ImgDesc>Project 04</ImgDesc>
              </Desc>
            
            </WorkImg>

            </RightImg>
          </WorkImages>
            </Right>
        </ClientWrapper>

       

       
    </ClientContainer>
  )
}

export default Clients