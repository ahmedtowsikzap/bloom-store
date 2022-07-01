import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Wrapper = styled.div`
   height: 100%;
`
const Slide = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 align-items: center;
`

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1``
const Desc = styled.p``
const Button = styled.button``


const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
        <ImgContainer>
        <Image src="https://i.ibb.co/dgXC3KC/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing.png"/>
        </ImgContainer>
        <InfoContainer>
            <Title></Title>
            <Desc></Desc>
            <Button>Shop Now</Button>

        </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
