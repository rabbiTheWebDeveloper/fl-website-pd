import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  return (
    <>
    <section id='banner'>
        <Container>
            <Row>
            <Carousel slide={false}>
                <Carousel.Item>
                    <div className="carousel-text">
                            <h5 className="animate pop">Trade-in Offer</h5>
                            <h1 className="animate pop delay-1">Denim elastic waist Dress</h1>
                            <h4 className="mt-lg-4 animate pop delay-2">30% off Summer Vacation .Free <br />shipping for orders</h4>
                            <button type="button" className="shopbtn mt-4 btn btn-warning animate pop delay-3">SHOP NOW</button>
                    </div>
                    <div className="orbit">
                            <div className="slider-image">
                                <img src="../images/theme_2/slider-image1.png" alt="" />
                            </div>
                            <div className='circle-orbit-container'>
                                {/* Circles closest to the central point */}
                                <div className="inner-orbit">
                                <div className="inner-orbit-cirlces" />
                                </div>
                                {/* Circles second closest to the central point */}
                                <div className='middle-orbit'>
                                <div className="middle-orbit-cirlces1" />
                                <div className="middle-orbit-cirlces2" />
                                </div>
                                {/* Circles furthest away to the central point */}
                                <div className='outer-orbit'>
                                <div className="outer-orbit-cirlce1" />
                                <div className="outer-orbit-cirlce1-2" />
                                <div className="outer-orbit-cirlce2" />
                                <div className="outer-orbit-cirlce3" />
                                <div className="outer-orbit-cirlce4" />
                                </div>
                            </div>
                            </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-text">
                            <h5 className="animate pop">Trade-in Offer</h5>
                            <h1 className="animate pop delay-1">Denim elastic waist Dress</h1>
                            <h4 className="mt-lg-4 animate pop delay-2">30% off Summer Vacation .Free <br />shipping for orders</h4>
                            <button type="button" className="shopbtn mt-4 btn btn-warning animate pop delay-3">SHOP NOW</button>
                    </div>
                    <div className="orbit">
                            <div className="slider-image">
                                <img src="../images/theme_2/slider-image1.png" alt="" />
                            </div>
                            <div className='circle-orbit-container'>
                                {/* Circles closest to the central point */}
                                <div className="inner-orbit">
                                <div className="inner-orbit-cirlces" />
                                </div>
                                {/* Circles second closest to the central point */}
                                <div className='middle-orbit'>
                                <div className="middle-orbit-cirlces1" />
                                <div className="middle-orbit-cirlces2" />
                                </div>
                                {/* Circles furthest away to the central point */}
                                <div className='outer-orbit'>
                                <div className="outer-orbit-cirlce1" />
                                <div className="outer-orbit-cirlce1-2" />
                                <div className="outer-orbit-cirlce2" />
                                <div className="outer-orbit-cirlce3" />
                                <div className="outer-orbit-cirlce4" />
                                </div>
                            </div>
                            </div>

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-text">
                            <h5 className="animate pop">Trade-in Offer</h5>
                            <h1 className="animate pop delay-1">Denim elastic waist Dress</h1>
                            <h4 className="mt-lg-4 animate pop delay-2">30% off Summer Vacation .Free <br />shipping for orders</h4>
                            <button type="button" className="shopbtn mt-4 btn btn-warning animate pop delay-3">SHOP NOW</button>
                    </div>
                    <div className="orbit">
                            <div className="slider-image">
                                <img src="../images/theme_2/slider-image1.png" alt="" />
                            </div>
                            <div className='circle-orbit-container'>
                                {/* Circles closest to the central point */}
                                <div className="inner-orbit">
                                <div className="inner-orbit-cirlces" />
                                </div>
                                {/* Circles second closest to the central point */}
                                <div className='middle-orbit'>
                                <div className="middle-orbit-cirlces1" />
                                <div className="middle-orbit-cirlces2" />
                                </div>
                                {/* Circles furthest away to the central point */}
                                <div className='outer-orbit'>
                                <div className="outer-orbit-cirlce1" />
                                <div className="outer-orbit-cirlce1-2" />
                                <div className="outer-orbit-cirlce2" />
                                <div className="outer-orbit-cirlce3" />
                                <div className="outer-orbit-cirlce4" />
                                </div>
                            </div>
                            </div>

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

            </Row>
        </Container>
    </section>

    </>
  )
}

export default Hero