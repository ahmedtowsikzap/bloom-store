import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Container = styled.div`
`
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TopTexts = styled.div`
  
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 700;
  cursor: pointer;

`
const Bottom = styled.div`
  
`


const Cart = () => {
  return (
    <Container>
       <Navbar/>
       <Announcement/>
        <Wrapper>
            <Title>My Shoppings</Title>
            <Top>
              <TopButton>Continue Shopping</TopButton>
              <TopButton>Checkout!</TopButton>
              <TopTexts>
                <TopText>Shopping Basket(4)</TopText>
                <TopText>My Wishlist(0)</TopText>
              </TopTexts>
            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart