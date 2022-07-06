import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
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
 `
const Filter = styled.div`
  display: flex;
 `
const FilterTitle = styled.span`
 `
const FilterColor = styled.div`
 `
const FilterSize = styled.select`
 `
const FilterSizeOption = styled.option`

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
        </InfoContainer>
            
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product