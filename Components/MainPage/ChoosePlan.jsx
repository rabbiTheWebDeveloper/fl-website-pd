import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import Marquee from "react-fast-marquee";

const plans = [
  {
    name: 'Basic',
    image: '/images/home_page/package3.svg',
    price: "Free",
    orders: '0- 20 Order',
    link: 'https://offer.funnelliner.com'
  },
  {
    name: 'Startup',
    image: '/images/home_page/package1.svg',
    price: 900,
    orders: '21 - 500 Order',
    link: 'https://offer.funnelliner.com'
  },
  {
    name: 'Business',
    image: '/images/home_page/package2.svg',
    price: 2000,
    orders: '501 - 1000 Order',
    link: 'https://offer.funnelliner.com'
  },
  {
    name: 'Business Plus',
    image: '/images/home_page/package4.svg',
    price: 3000,
    orders: '1001 - 1500 Order',
    link: 'https://offer.funnelliner.com'
  },

  {
    name: 'Entrepreneur',
    image: '/images/home_page/package1.svg',
    price: 4000,
    orders: '1501 - 2000 Order',
    link: 'https://offer.funnelliner.com'
  },
  // {
  //   name: 'Entrepreneur Elite',
  //   image: '/images/home_page/package3.svg',
  //   price: 5000,
  //   orders: '2001 - 3000 Order',
  //   link: 'https://offer.funnelliner.com'
  // },
  // {
  //   name: 'Professional Pro',
  //   image: '/images/home_page/package2.svg',
  //   price: 5000,
  //   orders: '2001 - 3000 Order',
  //   link: 'https://offer.funnelliner.com'
  // },
  // {
  //   name: 'Premium Prime',
  //   image: '/images/home_page/package3.svg',
  //   price: 6000,
  //   orders: '3001 - 4000 Order',
  //   link: 'https://offer.funnelliner.com'
  // },
  // {
  //   name: 'Entrepreneur',
  //   image: '/images/home_page/package4.svg',
  //   price: 4000,
  //   orders: '1501 - 2000 Order',
  //   link: 'https://offer.funnelliner.com'
  // },
  // {
  //   name: 'Enterprise',
  //   image: '/images/home_page/package5.svg',
  //   price: 7000,
  //   orders: '4001 - 5000 Order',
  //   link: 'https://m.me/Funneliner'
  // },
  // {
  //   name: 'Deluxe Diamond',
  //   image: '/images/home_page/package4.svg',
  //   price: 8000,
  //   orders: '5001 - 6000 Order',
  //   link: 'https://offer.funnelliner.com'
  // },
];

const ChoosePlan = () => {
  return (
    <section className="PersonalPlan" id="PersonalPlan">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="Header">
              <h4>Subscription Package</h4>
              <h2>Choose your personal plan</h2>
            </div>
          </Col>

          <Col lg={12}>
            <div className="PersonalPlanContent" >
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {plans.map((plan, index) => (
                  <div className="PersonalPlanItem" key={index}>
                    <div className="img">
                      <img src={plan.image} alt="" />

                      <div className="price">
                        <div className="">
                          <h4>{plan.name}</h4>
                          {plan.price && <h3>{plan.price} {plan.price ==="Free" ? " " : <TbCurrencyTaka />}</h3>}
                        </div>
                      </div>

                      <div className="Monthly">
                        <h6>Monthly</h6>
                      </div>
                    </div>

                    <div className="text">
                      <h5>
                        <span>{plan.orders}</span>
                      </h5>

                      <ul>
                        <li>1 Online Store</li>
                        <li>Custom Domain</li>
                        <li>Drag & Drop, No Code Editor</li>
                        <li>Auto Invoice Making</li>
                        <li>Super Fast CDN Hosting</li>
                        <li>Auto Courier Entry</li>
                        <li>Unlimited Products</li>
                        <li>Inventory Management</li>
                        <li>Multi Page Themes</li>
                        <li>Bulk SMS Marketing Features</li>
                        <li>Landing Page Templates</li>
                        <li>Marketing Tools</li>
                        <li>Business Reports</li>
                      </ul>
                    </div>

                    <div className="GetStart">
                      <Link href={plan.link} target="_blank">
                        {plan.price ? 'Get Started' : 'Contact Sales'}
                      </Link>
                    </div>
                  </div>
                ))}

            {/* item */}
            <div className="PersonalPlanItem">
              <div className="img">
                <img src="/images/home_page/package5.svg" alt="" />

                <div className="price">
                  <div className="">
                    <h4> Diamond</h4>
                    <Link href="https://m.me/Funneliner" target="_blank">
                      <h3 style={{ fontSize: '20px', backgroundColor: '#8e59e5', borderRadius: '10px', padding: '8px 15px', lineHeight: '24px', marginTop: '15px', cursor: 'pointer' }}>
                        Contact Sales
                      </h3>
                    </Link>

                    {/* <h3> <img src="/images/home_page/enterprise.png" alt="" /> </h3> */}
                  </div>
                </div>

                <div className="Monthly five">
                  <h6>Monthly</h6>
                </div>
              </div>

              <div className="text">
                <h5 className="five">
                  {' '}
                  <span>6001+ Order</span>{' '}
                </h5>

                <ul>
                  <li>1 Online Store</li>
                  <li>Custom Domain</li>
                  <li>Drag & Drop, No Code Editor</li>
                  <li>Auto Invoice Making</li>
                  <li>Super Fast CDN Hosting</li>
                  <li>Auto Courier Entry</li>
                  <li>Unlimited Products</li>
                  <li>Inventory Management</li>
                  <li>Multi Page Themes</li>
                  <li>Bulk SMS Marketing Features</li>
                  <li>Landing Page Templates</li>
                  <li>Marketing Tools</li>
                  <li>Business Reports</li>
                </ul>
              </div>

              <div className="GetStart five">
                <Link href="https://m.me/Funneliner" target="_blank">
                  Contact Sales
                </Link>
              </div>
            </div>
              </Marquee>
            </div>

            <div className="PersonalPlanContent Mobile">
              <Swiper
                navigation={true}
                slidesPerView={1.1}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                {plans.map((plan, index) => (
                  <SwiperSlide key={index}>
                    <div className="PersonalPlanItem">
                      <div className="img">
                        <img src={plan.image} alt="" />

                        <div className="price">
                          <div className="">
                            <h4>{plan.name}</h4>
                            {plan.price && <h3>{plan.price} <TbCurrencyTaka /></h3>}
                          </div>
                        </div>

                        <div className="Monthly">
                          <h6>Monthly</h6>
                        </div>
                      </div>

                      <div className="text">
                        <h5>
                          <span>{plan.orders}</span>
                        </h5>

                        <ul>
                          <li>1 Online Store</li>
                          <li>Custom Domain</li>
                          <li>Drag & Drop, No Code Editor</li>
                          <li>Auto Invoice Making</li>
                          <li>Super Fast CDN Hosting</li>
                          <li>Auto Courier Entry</li>
                          <li>Unlimited Products</li>
                          <li>Inventory Management</li>
                          <li>Multi Page Themes</li>
                          <li>Bulk SMS Marketing Features</li>
                          <li>Landing Page Templates</li>
                          <li>Marketing Tools</li>
                          <li>Business Reports</li>
                        </ul>
                      </div>

                      <div className="GetStart">
                        <Link href={plan.link} target="_blank">
                          {plan.price ? 'Get Started' : 'Contact Sales'}
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChoosePlan;
