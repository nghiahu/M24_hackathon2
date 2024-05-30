import Carousel from 'react-bootstrap/Carousel';
import './banner.scss'
function DarkVariantExample() {
  return (
    <div className='outline'>
    <div className='banner'>
    <Carousel data-bs-theme="light d-block w-100">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= './public/image/banner/banner-1.jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./public/image/banner/banner-2.jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./public/image/banner/banner-3.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./public/image/banner/banner-4.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./public/image/banner/banner-5.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default DarkVariantExample;