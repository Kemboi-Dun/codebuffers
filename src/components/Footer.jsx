import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
const Container = styled.div`
display:flex;
justify-content: flex-end;
height:10vh;

`
const Wrapper = styled.div`
margin:24px 24px;
padding: 0 24px;
`
const Desc = styled.a`
font-weight: 700;
`

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Desc>| All Rights Reserved.</Desc>
        </Wrapper>
    </Container>
  )
}

export default Footer