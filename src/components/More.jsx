import styled from "styled-components";
import "./More.css";
const Button = styled.div`
  
  padding: 10px;
  font-size: 20px;
  font-weight: 200;
  cursor: pointer;
  border: 2px solid white;
  &:hover {
      background-color: #302d2d6d;
      transform: scale(0.9);
    }
` 

const More = () => {
  return (
    <>
    <div className="pt-3">
      <div className="bigimage">
        <div
          className="overlay"
        >
          <h1>BLOOM &nbsp;L O V E L I G H T!</h1>
          <p className="texx">
           LOVE &nbsp; PARADE
          </p>
          <Button>SHOP NOW !</Button>
        </div>
      </div>
    </div>
  </>
  )
}

export default More