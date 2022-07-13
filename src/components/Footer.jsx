import { Facebook, Instagram, MailLockRounded, PhoneAndroidOutlined, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Right = styled.div`
    flex: 1;
    ${mobile({backgroundColor: "#fff8f8", marginLeft:"10px"})}
    
`
const Title = styled.h3`
    margin-bottom: 30px;

`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 13px;

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
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 21px;
`
const SocialContainer = styled.div`
    display: flex;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container>
<Left>
<Logo>BLOOM.</Logo>
<Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim rerum delectus velit. Aperiam obcaecati dolore repellendus neque accusantium earum tenetur vitae, quam vero odit quod, veniam corporis illum hic.</Desc>
<SocialContainer>
    <SocialIcon color="3B5999">
        <Facebook />
    </SocialIcon>
    <SocialIcon color="E4405F">
        <Instagram />
    </SocialIcon>
    <SocialIcon color="55ACEE">
        <Twitter />
    </SocialIcon>
    <SocialIcon color="E60023">
        <Pinterest />
    </SocialIcon>
</SocialContainer>
</Left>
<Center>
  <Title>Important Links </Title>
  <List>
    <ListItem>Cart</ListItem>
    <ListItem>My Account</ListItem>
    <ListItem>Order Tracking</ListItem>
    <ListItem>Home</ListItem>
    <ListItem>Wishlist</ListItem>
    <ListItem>Man's Fashion</ListItem>
    <ListItem>Woman Fashion</ListItem>
    <ListItem>Terms</ListItem>
    <ListItem>Accesories</ListItem>
  </List>
</Center>
<Right>
  <Title>Contact</Title>
  <ContactItem><Room style={{marginRight:"10px", color:"crimson"}}/>Manhattan 716, 67443, NY</ContactItem>
  <ContactItem><PhoneAndroidOutlined style={{marginRight:"10px", color:"green"}}/>+1 453 55 76</ContactItem>
  <ContactItem><MailLockRounded style={{marginRight:"10px", color:"#034f84"}}/>contact@bloomaes.com</ContactItem>
  <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
</Right>

    </Container>
  )
}

export default Footer