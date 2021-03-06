import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px", flexDirection: "column"})}
    
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 300;
    font-size: 41px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px; 
  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})}
 `
const Filter = styled.div`
  display: flex;
  align-items: center;
 `
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
 `
const FilterColor = styled.div`
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${props=> props.color};
      margin: 0px 5px;
      cursor: pointer;
 `
const FilterSize = styled.select`
  margin-left: 13px;
  padding: 8px;
 `
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
 display: flex;
 width: 50%;
 align-items: center;
 justify-content: space-between;
 ${mobile({width: "100%"})}
`

const AmountContainer = styled.div`
 display: flex;
 align-items: center;
 font-weight: 500;
`
const Amount = styled.span`
   width: 30px;
   display: flex;
   height: 30px;
   border-radius:10px ;
   border: 1px solid orange;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid orange;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    color: black;
    &:hover{
        background-color: #e9e9e9;
    }
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
        <InfoContainer>
            <Title>Denim Multipocket</Title>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, unde sed. Labore cumque laboriosam a suscipit numquam! Voluptas consequatur pariatur cumque alias quasi.</Desc>
            <Price>$ 46</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="black"/>
                    <FilterColor color="gray"/>
                </Filter>
                <Filter>
                      <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XS</FilterSizeOption>
                        </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                  <AmountContainer>
                  <Add/>
                  <Amount>6</Amount>
                 <Remove/>
                  </AmountContainer>
                  <Button>Add to CART</Button>
                 </AddContainer>
        </InfoContainer>
            
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product