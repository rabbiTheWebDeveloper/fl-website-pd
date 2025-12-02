import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Service = () => {
  return (
    <>
    <section id='service-section'>
        <Container>
            <Row>
                <Col lg={3} className='service-item'>
                <div className='icon'>
                    <img src="../images/theme_2/fast.png" alt="fast"/>
                </div>
                <div className='text'>
                    <h3>Free Shipping</h3>
                    <p>Product are free shipping</p>
                </div>
                </Col>
                <Col lg={3} className='service-item'>
                <div className='icon'>
                    <img src="../images/theme_2/support.png" alt="fast"/>
                </div>
                <div className='text'>
                    <h3>Support 24/7</h3>
                    <p>Support 24/7 hours a day</p>
                </div>
                </Col>
                <Col lg={3} className='service-item'>
                <div className='icon'>
                    <img src="../images/theme_2/credit-card.png" alt="fast"/>
                </div>
                <div className='text'>
                    <h3>Secure Payment</h3>
                    <p>We ensure secure payment</p>
                </div>
                </Col>
                <Col lg={3} className='service-item'>
                <div className="icon">
                    <img src="../images/theme_2/returning.png" alt="fast"/>
                </div>
                <div className='text'>
                    <h3>100% Moneyback</h3>
                    <p>Most product are free shipping</p>
                </div>
                </Col>

            </Row>
        </Container>
    </section>
    </>
  )
}

export default Service