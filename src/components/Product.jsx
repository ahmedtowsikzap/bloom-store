import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartCheckoutOutlined } from "@mui/icons-material"
import styled from "styled-components"


const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background-color: #f5fbfd;
    
`
const Circle = styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color: white;
   position: absolute;
`
const Image = styled.img`
  height:75%;
  z-index: 2;

`
const Info = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background-color: gray;
   z-index: 3;
   display: flex;
   align-items: center;
   justify-content: center;

`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 9px;
  
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
      <Icon>

        <ShoppingCartCheckoutOutlined/>
      </Icon>
      <Icon>

        <SearchOutlined/>
      </Icon>
      <Icon>

        <FavoriteBorderOutlined/>
      </Icon>

        </Info>
    </Container>
  )
}

export default Product