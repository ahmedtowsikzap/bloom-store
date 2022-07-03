import styled from "styled-components"

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
`
const Title = styled.h1`
`
const Button = styled.button`
`
const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW!</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem