import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const ProductBanner = () => {
  return (
    <>
    <section id='product-banner'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className='bannerleft'>
                        <img src="../images/theme_2/banner-2 0.png" alt=""/>
                        <div className='text'>
                            <p>Smart Offer</p>
                            <h3>Get 10% OFF on<br/>
                            Woman Bag</h3>
                            <button type="button" className='banner-btn btn-2 hover-slide-up'>
                                <span>Shop Now<BsArrowRight/></span> </button>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                <div className="bannerright">
                    <img src="../images/theme_2/banner-2 1.png" alt="" />
                    <div className="text">
                    <p>Limited time only</p>
                    <h3>Get 10% OFF on<br />
                        Trainers &amp; Sportwear</h3>
                    <button type="button" className="banner-btn btn-2 hover-slide-up">
                        <span>Shop Now<BsArrowRight/></span> </button>
                    </div>
                </div>
                </Col>

            </Row>
        </Container>

    </section>
    </>
  )
}

export default ProductBanner