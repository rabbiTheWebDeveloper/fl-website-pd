import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TbCurrencyTaka } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const ChoosePlanOld = () => {
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
            <div className="PersonalPlanContent">
              <div className="PersonalPlanItem">
                <div className="img">
                  <img src="/images/home_page/package1.svg" alt="" />

                  <div className="price">
                    <div className="">
                      <h4>Basic</h4>
                      <h3>
                        Free <TbCurrencyTaka />{" "}
                      </h3>
                    </div>
                  </div>

                  <div className="Monthly">
                    <h6>Monthly</h6>
                  </div>
                </div>

                <div className="text">
                  <h5>
                    {" "}
                    <span>Under 20 Order</span>{" "}
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
                  <Link
                    href="https://app.funnelliner.com/offer"
                    target="_blank"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              {/* item */}
              <div className="PersonalPlanItem">
                <div className="img">
                  <img src="/images/home_page/package2.svg" alt="" />

                  <div className="price">
                    <div className="">
                      <h4>Startup</h4>
                      <h3>
                        900 <TbCurrencyTaka />{" "}
                      </h3>
                    </div>
                  </div>

                  <div className="Monthly">
                    <h6>Monthly</h6>
                  </div>
                </div>

                <div className="text">
                  <h5>
                    {" "}
                    <span>21 - 500 Order</span>{" "}
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
                  <Link
                    href="https://app.funnelliner.com/offer"
                    target="_blank"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* item */}
              <div className="PersonalPlanItem">
                <div className="img">
                  <img src="/images/home_page/package3.svg" alt="" />

                  <div className="price">
                    <div className="">
                      <h4>Business</h4>
                      <h3>
                        2000 <TbCurrencyTaka />{" "}
                      </h3>
                    </div>
                  </div>

                  <div className="Monthly two">
                    <h6>Monthly</h6>
                  </div>
                </div>

                <div className="text">
                  <h5 className="two">
                    {" "}
                    <span>501 - 1000 Order</span>{" "}
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

                <div className="GetStart two">
                  <Link
                    href="https://offer.funnelliner.com"
                    target="_blank"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* item */}
              <div className="PersonalPlanItem">
                <div className="img">
                  <img src="/images/home_page/package4.svg" alt="" />

                  <div className="price">
                    <div className="">
                      <h4>Business Plus</h4>
                      <h3>
                        3000 <TbCurrencyTaka />{" "}
                      </h3>
                    </div>
                  </div>

                  <div className="Monthly three">
                    <h6>Monthly</h6>
                  </div>
                </div>

                <div className="text">
                  <h5 className="three">
                    {" "}
                    <span>1001 - 1500 Order</span>{" "}
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

                <div className="GetStart three">
                  <Link
                    href="https://app.funnelliner.com/offer"
                    target="_blank"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* item */}
              <div className="PersonalPlanItem">
                <div className="img">
                  <img src="/images/home_page/package5.svg" alt="" />

                  <div className="price">
                    <div className="">
                      <h4>Entrepreneur </h4>
                      <h3>
                        4000 <TbCurrencyTaka />{" "}
                      </h3>
                    </div>
                  </div>

                  <div className="Monthly four">
                    <h6>Monthly</h6>
                  </div>
                </div>

                <div className="text">
                  <h5 className="four">
                    {" "}
                    <span>1501 - 2000 Order</span>{" "}
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

                <div className="GetStart four">
                  <Link
                    href="https://app.funnelliner.com/offer"
                    target="_blank"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* item */}
              <div className="PersonalPlanItem">
                <div className="img">
                  <img src="/images/home_page/package4.svg" alt="" />

                  <div className="price">
                    <div className="">
                      <h4>Enterprise </h4>
                      <Link href="https://m.me/Funneliner" target="_blank">
                        <h3
                          style={{
                            fontSize: "20px",
                            backgroundColor: "#8e59e5",
                            borderRadius: "10px",
                            padding: "8px 15px",
                            lineHeight: "24px",
                            marginTop: "15px",
                            cursor: "pointer",
                          }}
                        >
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
                    {" "}
                    <span>2000+ Order</span>{" "}
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
                <SwiperSlide>
                  <div className="PersonalPlanItem">
                    <div className="img">
                      <img src="/images/home_page/package1.svg" alt="" />

                      <div className="price">
                        <div className="">
                          <h4>Basic</h4>
                          <h3>
                            Free <TbCurrencyTaka />{" "}
                          </h3>
                        </div>
                      </div>

                      <div className="Monthly">
                        <h6>Monthly</h6>
                      </div>
                    </div>

                    <div className="text">
                      <h5>
                        {" "}
                        <span>Under 20 Order</span>{" "}
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
                      <Link
                        href="https://app.funnelliner.com/offer"
                        target="_blank"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="PersonalPlanItem">
                    <div className="img">
                      <img src="/images/home_page/package2.svg" alt="" />

                      <div className="price">
                        <div className="">
                          <h4>Startup</h4>
                          <h3>
                            900 <TbCurrencyTaka />{" "}
                          </h3>
                        </div>
                      </div>

                      <div className="Monthly">
                        <h6>Monthly</h6>
                      </div>
                    </div>

                    <div className="text">
                      <h5>
                        {" "}
                        <span>21 - 500 Order</span>{" "}
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
                      <Link
                        href="https://app.funnelliner.com/offer"
                        target="_blank"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="PersonalPlanItem">
                    <div className="img">
                      <img src="/images/home_page/package3.svg" alt="" />

                      <div className="price">
                        <div className="">
                          <h4>Business</h4>
                          <h3>
                            2000 <TbCurrencyTaka />{" "}
                          </h3>
                        </div>
                      </div>

                      <div className="Monthly two">
                        <h6>Monthly</h6>
                      </div>
                    </div>

                    <div className="text">
                      <h5 className="two">
                        {" "}
                        <span>501 - 1000 Order</span>{" "}
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

                    <div className="GetStart two">
                      <Link
                        href="https://app.funnelliner.com/offer"
                        target="_blank"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="PersonalPlanItem">
                    <div className="img">
                      <img src="/images/home_page/package4.svg" alt="" />

                      <div className="price">
                        <div className="">
                          <h4>Business Plus</h4>
                          <h3>
                            3000 <TbCurrencyTaka />{" "}
                          </h3>
                        </div>
                      </div>

                      <div className="Monthly three">
                        <h6>Monthly</h6>
                      </div>
                    </div>

                    <div className="text">
                      <h5 className="three">
                        {" "}
                        <span>1001 - 1500 Order</span>{" "}
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

                    <div className="GetStart three">
                      <Link
                        href="https://app.funnelliner.com/offer"
                        target="_blank"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="PersonalPlanItem">
                    <div className="img">
                      <img src="/images/home_page/package5.svg" alt="" />

                      <div className="price">
                        <div className="">
                          <h4>Entrepreneur </h4>
                          <h3>
                            4000 <TbCurrencyTaka />{" "}
                          </h3>
                        </div>
                      </div>

                      <div className="Monthly four">
                        <h6>Monthly</h6>
                      </div>
                    </div>

                    <div className="text">
                      <h5 className="four">
                        {" "}
                        <span>1501 - 2000 Order</span>{" "}
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

                    <div className="GetStart four">
                      <Link
                        href="https://app.funnelliner.com/offer"
                        target="_blank"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="PersonalPlanItem">
                    <div className="img">
                      <img src="/images/home_page/package4.svg" alt="" />

                      <div className="price">
                        <div className="">
                          <h4>Enterprise </h4>
                          <Link href="https://m.me/Funneliner" target="_blank">
                            <h3
                              style={{
                                fontSize: "20px",
                                backgroundColor: "#8e59e5",
                                borderRadius: "10px",
                                padding: "8px 15px",
                                lineHeight: "24px",
                                marginTop: "15px",
                                cursor: "pointer",
                              }}
                            >
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
                        {" "}
                        <span>2000+ Order</span>{" "}
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
                  </div>{" "}
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChoosePlanOld;
