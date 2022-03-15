import React from 'react'
import styled from 'styled-components'
import {mobile,tablet} from '../responsive';

const HeroContainer = styled.div`
display:flex;
height:30vh;
${mobile({
height:'50vh',
textAlign:'center',
justifyContent:'center',
})};
}
`

const Wrapper = styled.div`
width: 480px;
display:flex;
margin:64px;
padding: 12px;
justify-content: flex-start;
${mobile({
margin:'32px 0 0',
padding:'4px',
alignItems:'center'
})};
`

const HeroText = styled.div`
font-size: 24px;
${mobile({
  fontSize:'18px'
})};
${tablet({
fontSize:'18px'
})}
`


const Hero = () => {
  return (
      
    <HeroContainer>
        <Wrapper>
            <HeroText>
                We design, Create and develope websites, web applications
                and code editing.
            </HeroText>
        </Wrapper>
    </HeroContainer>
  )
}

export default Hero