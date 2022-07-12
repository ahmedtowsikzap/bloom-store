import { Add, Remove } from "@mui/icons-material";
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
const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;

`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const ProductName = styled.span`
  
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=> props.color};
`
const ProductId= styled.span`
  
`
const ProductSize = styled.span`
  
`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
                      <ProductColor color="black"/>
                      <ProductSize><b>Size:</b>26.4</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                       <ProductAmountContainer>
                        <Add/> 
                        <ProductAmount>3</ProductAmount>
                        <Remove/>
                       </ProductAmountContainer>
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