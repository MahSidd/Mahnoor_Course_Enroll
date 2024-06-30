import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assests/crausal.jpg';

function HomeCrausal() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img
           className="d-block w-100 carousel-image"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption  className="crausal-image-text">
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button>Explore Our courses</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
           className="d-block w-100 carousel-image"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
           className="d-block w-100 carousel-image"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCrausal;