import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OurMenubar = ({isShownCountDown}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const scrollToSection = (event, targetId) => {
        event.preventDefault();

        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const targetTop = offsetTop + offset;

            window.scrollTo({
                top: targetTop,
                behavior: 'smooth',
            });
        }
    }
    return (

        <div className='MainLandingPage' >

            <section className="Menubar"  style={{ marginTop: isShownCountDown ? "60px" : "0" }}>

                <Container>

                    <Row className="d_flex d_justify">

                        {/* logo */}
                        <Col lg={3} sm={3} xs={4}>

                            <div className="Logo">
                                <Link href='/'><img src="/images/home_page/light-logo.png" alt="Funnel Liner" /> </Link>
                            </div>

                        </Col>

                        {/* Menu */}
                        <Col className='DesktopMenu' lg={6} sm={6}>

                            <div className="Menu">

                                <ul>
                                    <li><Link className="active" href='/'>Home</Link></li>
                                    <li><Link href='#' onClick={(e) => scrollToSection(e, '#PowerfulFunnel')}>Feature</Link></li>
                                    <li><Link href='#' onClick={(e) => scrollToSection(e, '#SingleLanding')}>Theme</Link></li>
                                    <li>  <Link href="#" onClick={(e) => scrollToSection(e, '#PersonalPlan')}>Pricing</Link></li>
                                    <li><Link href='#' onClick={(e) => scrollToSection(e, '#AskQuestion')}>FAQ</Link></li>
                                </ul>

                            </div>

                        </Col>

                        <Col className='DesktopMenu' lg={3} sm={3}>

                            <div className="Login">

                                <ul>
                                    <li> <Link href='https://dashboard.funnelliner.com/login' target='_blank' className="bg"> Login </Link> </li>
                                    <li> <Link href='https://offer.funnelliner.com' className="bg"> Sign Up </Link> </li>
                                </ul>

                            </div>

                        </Col>

                        <Col className='MobileMenu' sm={6} xs={8}>

                            <div className="Login">

                                <ul>
                                    <li> <Link href='https://dashboard.funnelliner.com/login' target='_blank'> Login </Link> </li>
                                    <li> <Link href='https://offer.funnelliner.com' target='_blank'> Sign Up </Link> </li>
                                </ul>

                            </div>

                            <Button className='MobileMenubar' onClick={handleShow}>
                                <img src="/images/home_page/menu.png" alt="" />
                            </Button>

                            <Offcanvas className='HomePageMobileMenuPopup' show={show} onHide={handleClose}>

                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title></Offcanvas.Title>
                                </Offcanvas.Header>

                                <Offcanvas.Body>

                                    <div className="Menu">

                                        <ul>
                                            <li><Link className="active" href='/'>Home</Link></li>
                                            <li><Link href='#' onClick={(e) => scrollToSection(e, '#PowerfulFunnel')}>Feature</Link></li>
                                            <li><Link href='#' onClick={(e) => scrollToSection(e, '#SingleLanding')}>Theme</Link></li>
                                            <li><Link href='#' onClick={(e) => scrollToSection(e, '#PersonalPlan')}>Pricing</Link></li>
                                            <li><Link href='#' onClick={(e) => scrollToSection(e, '#AskQuestion')}>FAQ</Link></li>
                                        </ul>

                                    </div>

                                </Offcanvas.Body>

                            </Offcanvas>

                        </Col>

                    </Row>

                </Container>

            </section>

        </div>
    );
};

export default OurMenubar;