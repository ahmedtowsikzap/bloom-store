import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
`
const SocialContainer = styled.div`
    display: flex;
`

const Footer = () => {
  return (
    <Container>
<Left>
<Logo>BLOOM.</Logo>
<Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim rerum delectus velit. Aperiam obcaecati dolore repellendus neque accusantium earum tenetur vitae, quam vero odit quod, veniam corporis illum hic.</Desc>
<SocialContainer>
    <SocialIcon>
        <Facebook color="3B5999"/>
    </SocialIcon>
    <SocialIcon>
        <Instagram color="E4405F"/>
    </SocialIcon>
    <SocialIcon>
        <Twitter color="55ACEE"/>
    </SocialIcon>
    <SocialIcon>
        <Pinterest color="E60023"/>
    </SocialIcon>
</SocialContainer>
</Left>
<Center>

</Center>
<Right>

</Right>

    </Container>
  )
}

export default Footer