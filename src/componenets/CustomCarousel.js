// CustomCarousel.js
import React from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import Carousel1 from '../img_files/Carousel_1.jpg';
import Carousel2 from '../img_files/Carousel_2.jpg';
import Carousel3 from '../img_files/Carousel_3.jpg';

const CustomCarousel = () => {
  return (
    <Carousel className="custom-carousel" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
