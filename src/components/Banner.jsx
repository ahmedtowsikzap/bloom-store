import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel fade>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5 className='text-white'>Explore</h5>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5 className='text-grey'>Camping</h5>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5 className='text-grey'>Thinking travel with friends</h5>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5 className='text-white'>From Mountains to hills</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5 className='text-grey'>Road to Cities </h5>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1493515322954-4fa727e97985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5 className='text-grey'>Crawl to Destination</h5>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5 className='text-grey'>Like never seen before </h5>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  )
}

export default Banner