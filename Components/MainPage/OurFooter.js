import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { BsEnvelopeAt } from 'react-icons/bs';
const OurFooter = () => {
    return (
        <div>
            <section className='Footer'>
                <Container>

                    <Row>

                        <Col lg={4}>

                            <div className="FooterLogo">

                                <img src="/images/home_page/light-logo.png" alt="" />
                                <p>The First Ever Automated E-Commerce Sales Funnel. Create Your Own Online Shop,Decorate Your Shop, Boost Up Your Sales !</p>

                                <div className="socialIcon">

                                    <Link href="https://www.facebook.com/funnelliner" target="_blank"> <img src="/images/home_page/facebook.png" alt="" /></Link>
                                    <Link href=""><img src="/images/home_page/instagram.png" target="_blank" alt="" /></Link>
                                    <Link href='https://api.whatsapp.com/send/?phone=8801894844452&text&type=phone_number&app_absent=0'><img src="/images/home_page/whatsapp.png" target="_blank" alt="" /></Link>
                                    <Link href="https://www.youtube.com/@funnelliner"><img src="/images/home_page/youtube.png" target="_blank" alt="" /></Link>

                                </div>

                            </div>

                        </Col>

                        <Col lg={8}>

                            <Row>

                                <Col lg={4} sm={3} xs={6}>

                                    <div className="FooterItem">

                                        <h3>Features</h3>

                                        <ul>
                                            <li> <Link href='/'>Website Theme</Link> </li>
                                            <li> <Link href='/'>Website Builder</Link> </li>
                                            <li> <Link href='/'>Landing Page</Link> </li>
                                            <li> <Link href='https://roadmap.funnelliner.com/roadmap' target='_blank'>Roadmap</Link> </li>
                                        </ul>

                                    </div>

                                </Col>

                                <Col lg={4} sm={3} xs={6}>

                                    <div className="FooterItem">

                                        <h3>About</h3>

                                        <ul>
                                            <li> <Link href='/terms'>Terms & Conditions</Link> </li>
                                            <li> <Link href='/privacy'>Privacy Policy</Link> </li>
                                            <li> <Link href='/'>Contact </Link> </li>
                                            <li> <Link href='/'>FAQ </Link> </li>
                                        </ul>

                                    </div>

                                </Col>

                                <Col lg={4} sm={6}>

                                    <div className="FooterItem">

                                        <h3>Contact Us</h3>

                                        <ul>

                                            <li>
                                                <div className="svg"> <FiPhoneCall /> </div>
                                                <Link href='tel:0963-888-8881'> 0963-888-8881 </Link>
                                            </li>

                                            <li>
                                                <div className="svg"> <BsEnvelopeAt /> </div>
                                                <Link href='mailto:support@funnelliner.com'>support@funnelliner.com</Link>
                                            </li>

                                            <li>
                                                <div className="svg"> <MdLocationOn /> </div>
                                                <p>House No # 17, Road No # 8/A, Nikunja #1, Dhaka - 1229, <br/> Bangladesh</p>
                                            </li>

                                        </ul>

                                    </div>

                                </Col>

                            </Row>

                        </Col>

                        <Col lg={12}>
                            <div className="copyRight"> Copyright 2023 <Link href=''>Funnel Liner</Link>. All Rights Reserved </div>
                        </Col>

                    </Row>

                </Container>

            </section>
        </div>
    );
};

export default OurFooter;