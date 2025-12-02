import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PiArrowBendUpRightBold } from 'react-icons/pi';


const CountDown = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
    return (
        <section className="CountDown">

            <Container>

                <Row>

                    <Col lg={12}>

                        <div className="CountDownContent">

                            <div className="left">

                                <p>Funnel Liner দিয়ে কিভাবে আপনার বিজনেস অটোমেশন করবেন সেটা জানতে জয়েন করুন আমাদের ফ্রি ওয়েবিনারে</p>
                                {/* <p>Funnel Liner এর অফার প্রাইস অ্যাভেলেবেল থাকছে আর মাত্র</p> */}

                                <div className="CountDownBox">

                                    <div className="CountDownItem">
                                        <h4>{timerDays}</h4>
                                        <h6>Days</h6>
                                    </div>

                                    <div className="CountDownItem">
                                        <h4>{timerHours}</h4>
                                        <h6>Hours</h6>
                                    </div>

                                    <div className="CountDownItem">
                                        <h4>{timerMinutes}</h4>
                                        <h6>Min</h6>
                                    </div>

                                    <div className="CountDownItem">
                                        <h4>{timerSeconds}</h4>
                                        <h6>Sec</h6>
                                    </div>

                                </div>

                            </div>

                            <div className="JoinNow">

                                <Link href='https://app.funnelliner.com/join' target='_blank'>Join Now <PiArrowBendUpRightBold /></Link>
                                {/* <Link href='https://app.funnelliner.com/offer' target='_blank'>Join Now <PiArrowBendUpRightBold /></Link> */}

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
    );
};

export default CountDown;
