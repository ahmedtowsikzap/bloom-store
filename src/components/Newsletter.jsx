
import { Send } from "@mui/icons-material"
import styled from "styled-components"


const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 45px;
margin-bottom: 20px;
`
const Desc = styled.div`
font-size: 20px;
font-weight: 200;
margin-bottom: 23px;

`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: #ed61a7d9;
color: white;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get Updates from your favorite products!</Desc>
        <InputContainer>
        <Input placeholder="Enter your Email">
        </Input>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter