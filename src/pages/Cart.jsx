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
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
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
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  
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
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 19px;

`
const ProductAmount = styled.div`
  font-size: 18px;
  margin: 6px;
`
const Productprice= styled.div`
  font-size: 27px;
  font-weight: 500;
`
const SummaryTitle = styled.h1`
  font-weight:200;

`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
  
`
const SummaryItemPrice = styled.span`
  
`
const Button = styled.button`
  
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
                    <Image src="https://smartsalez.in/EaseSalezDoc//ProductMainImage/86970_rothirtyonekgrey_0_140921120017.jpg"/>
                    <Details>
                      <ProductName><b>Product:</b> Bag</ProductName>
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
                       <Productprice>$ 220</Productprice>
                  </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                  <ProductDetail>
                    <Image src="https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0"/>
                    <Details>
                      <ProductName><b>Product:</b> Shirt with dalia</ProductName>
                      <ProductId><b>ID:</b> 238423482349123859</ProductId>
                      <ProductColor color="gray"/>
                      <ProductSize><b>Size:</b>26.4</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                       <ProductAmountContainer>
                        <Add/> 
                        <ProductAmount>1</ProductAmount>
                        <Remove/>
                       </ProductAmountContainer>
                       <Productprice>$ 47</Productprice>
                  </PriceDetail>
                </Product>

              </Info>
              <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ 108</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 8.23</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -7.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ 109</SummaryItemPrice>
                </SummaryItem>
                <Button>Checkout Now!</Button>
                
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart