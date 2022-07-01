import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  width: 33.3%;
`;
const Right = styled.div`
  width: 33.3%;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>lorem</Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
