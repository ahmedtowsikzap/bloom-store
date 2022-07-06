import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    
    
`
const ImageContainer = styled.div`
    
`
const Image = styled.img`
    
`
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        <ImageContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
        </ImageContainer>
            
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product