import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Hire from '../components/Hire'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {mobile, tablet} from '../responsive'

const Container = styled.div`
background-color:teal;
color:#000;
${mobile({
  backgroundColor:'teal',
  color:'#eeeeee'
})};
${tablet({
backgroundColor:'#222831',
color:'#eeeeee'
})}
`


export const Home = () => {
  return (
   
     <React.Fragment>
       <Container>
       <Navbar />
      <Hero />
      <Clients />
      <Hire />
      <Footer />
       </Container>
    
     </React.Fragment>
   
    
    
  )
}

export default Home;