import styled from 'styled-components'
const Container = styled.div` 
 width: 100vw;
 height: 100vh;
 background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.434)
    ),
    url("https://images.pexels.com/photos/2752040/pexels-photo-2752040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`


const Wrapper = styled.div` 
      width: 25%;
      padding: 20px;
      background-color: white;
`
const Form = styled.form` 
   display: flex;
   flex-direction: column;
`
const Title = styled.h1` 
   font-size: 24px;
   font-weight: 300;
`
const Input = styled.input` 
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button` 
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: rgb(238,174,202);
  background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  color: white;
  cursor: pointer;

`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
`
const Login = () => {
  return (
    <Container>
       <Wrapper>
        <Title>Sign In / Login</Title>
        <Form>
          <Input placeholder="username"/>   
          <Input placeholder="password"/>
          <Button>LOGIN</Button>
          <Link>Haven't created an account yet?</Link>
          <Link>Create a New Account</Link>
        </Form>
       </Wrapper>
      
    </Container>
  )
}

export default Login