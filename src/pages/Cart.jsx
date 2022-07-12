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
  padding: 20px;
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
  border: ${props=>props.type === "filled" && "none" };
  background-color: ${props=>props.type === "filled" ? "black" : "transparent" };
  color: ${props=>props.type === "filled" && "white" };

`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`
const Summary = styled.div`
  flex: 1;
  
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
              <TopButton type="filled">Checkout!</TopButton>
              <TopTexts>
                <TopText>Shopping Basket(4)</TopText>
                <TopText>My Wishlist(0)</TopText>
              </TopTexts>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src="https://static-01.daraz.com.bd/p/ea78662af47dddcb7aa7bb5733e7ca3c.jpg"/>
                    <Details>
                      <ProductName><b>Product:</b> Shirt with dalia</ProductName>
                      <ProductId><b>ID:</b> 238423482349123859</ProductId>
                      <ProductColor/>
                      <ProductSize><b>ID:</b> 238423482349123859</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>

                  </PriceDetail>
                </Product>

              </Info>
              <Summary>Summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart