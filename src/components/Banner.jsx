import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`

const Banner = () => {
  return (
    <Container>
     
      <Carousel fade>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/993877/pexels-photo-993877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h6>Explore</h6>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3991602/pexels-photo-3991602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h6>Design</h6>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 
        </Container>
  )
}

export default Banner