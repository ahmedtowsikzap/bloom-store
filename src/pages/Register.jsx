import styled from 'styled-components';

const Container = styled.div` 
 width: 100vw;
 height: 100vh;
 background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.434)
    ),
    url("https://images.pexels.com/photos/972884/pexels-photo-972884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`


const Wrapper = styled.div` 
      
`
const Form = styled.form` 

`
const Title = styled.h1` 

`
const Input = styled.input` 

`
const Agreement = styled.span` 

`
const Button = styled.button` 

`

const Register = () => {
  return (
    <Container>
       <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="name"/>
          <Input placeholder="last name"/>
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password"/>
          <Input placeholder="confirm password"/>
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
       </Wrapper>
      
    </Container>
  )
}

export default Register