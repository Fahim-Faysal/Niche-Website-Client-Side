import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Assets/banner1.jpeg'
import banner2 from '../../../Assets/banner2.jpeg'
import banner3 from '../../../Assets/banner3.jpeg'

const Banner = () => {
      return (
            <Carousel>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner1}
                              alt="First slide"
                        />
                        <Carousel.Caption>
                              <h3>The Monster</h3>
                              <p>Change Your Riding Experience</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner2}
                              alt="Second slide"
                        />

                        <Carousel.Caption>
                              <h3>Kawasaki Ninja</h3>
                              <p>Most Popular sports Bike</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner3}
                              alt="Third slide"
                        />

                        <Carousel.Caption>
                              <h3>Ducati</h3>
                              <p>Enjoy the long tour</p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      );
};

export default Banner;