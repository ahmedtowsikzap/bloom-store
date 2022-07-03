import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #f61896;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>save 50% of starting from 25 july</Container>;
};

export default Announcement;
