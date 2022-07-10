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
      width: 40%;
      padding: 20px;
      background-color: white;
`
const Form = styled.form` 
   display: flex;
   flex-wrap: wrap;
`
const Title = styled.h1` 
   font-size: 24px;
   font-weight: 300;
`
const Input = styled.input` 
    flex: 1;
    min-width: 40%;
    margin: 20px 10px;
    padding: 10px;
`
const Agreement = styled.span` 
     font-size: 12px;
     margin: 20px 0px; 
`
const Button = styled.button` 
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: rgb(63,94,251);
background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  color: white;
  cursor: pointer;

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