import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Col,
  Container,
  Placeholder,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import Link from "next/link";
import { BsArrow90DegRight, BsArrowRight} from "react-icons/bs";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import "swiper/css";
import OurMenubar from "./OurMenubar";
import StartSelling from "./StartSelling";
import { getBaseUrl } from "../helpers/config/envConfig";
import moment from "moment";
import { Footer2 } from "../Common/Footer2/Footer2";
import ChoosePlanOld from "./ChoosePlanOld";
import { Modal, Button, Form } from "react-bootstrap";
import ModalForm from "./ModalForm";
import Cookies from "js-cookie";


const formatDate = (inputDateString) => {
  const inputDate = moment.utc(inputDateString);
  // Format the output date as "YYYY-MM-DDTHH:mm:ss"
  const formattedDate = inputDate.format("YYYY-MM-DDTHH:mm:ss");

  return formattedDate;
};

const MainPage = () => {
  const [offerPageData, setOfferData] = useState({});
  const [offerCountData, setOfferCountData] = useState("");
  const [landingList, setLandingList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const cookieValue = Cookies.get("showModal");
    if (cookieValue !== "false") {
      setShowModal(true); // only set true if no cookie or true
    }
  }, []);

  const idsToSkip = Array.from({ length: 200 }, (_, i) => (i + 206).toString());
  const landingThemeFetch = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `${process.env.API_URL}/theme/list`,
        headers: {
          type: "landing",
        },
      });
      let data = res.data.data;
      const filteredItems = data.filter(
        (item) => !idsToSkip.includes(item.name)
      );
      setLandingList(filteredItems.slice(0, 6));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handelFetchData = async () => {
    try {
      const response = await axios.get(`${getBaseUrl()}/main/`);
      const data = formatDate(response?.data?.data[0]?.webinar_date);
      setOfferData(response.data.data[0]);
      setOfferCountData(data);
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelFetchData();
  }, []);
  useEffect(() => {
    landingThemeFetch();
  }, []);

  //countdown
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("2024-12-16T21:00:00").getTime(); // July 27, 2023, 9:00 PM

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        // Timer reached the end time
        clearInterval(interval.current);
        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMinutes(String(minutes).padStart(2, "0"));
        setTimerSeconds(String(seconds).padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  useEffect(() => {
    // show modal when UI is loaded
    setShowModal(true);
  }, []);

  const isShownCountDown =
    timerDays != 0 && timerHours != 0 && timerMinutes != 0 && timerSeconds != 0;
  return (
    <>
      <div className="MainLandingPage">
        {/* {isShownCountDown && <CountDown timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />} */}

        {/* <OurMenubar isShownCountDown={isShownCountDown} /> */}

        {/* <CountDown date={offerCountData} type={offerCountData && 'event'} /> */}
        <OurMenubar />

        <section className="Banner">
          <img
            className="OverlayOneImg"
            src="images/home_page/banner/banner-effect1.png"
            alt=""
          />
          <img
            className="OverlayTwoImg"
            src="images/home_page/banner/banner-effect2.png"
            alt=""
          />
          <img
            className="OverlayThreeImg"
            src="images/home_page/banner/banner-effect3.png"
            alt=""
          />

          <div className="OverlayOne"></div>

          <div className="OverlayOne Two"></div>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="BannerContent">
                  <h1>
                    Make your Website, Sales Funnel & Automation your business
                  </h1>
                  <h4>Without any Coding skills</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* BannerShop */}
        <div className="BannerShop">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12}>
                <div className="BannerShopImg">
                  <img src="/images/home_page/banner/shop.png" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* =============================================================================
                    End Banner
                ===============================================================================*/}

        <div className="SectionGaps"></div>

        {/* =============================================================================
                    Start Platform
                ===============================================================================*/}
        <section className="Platform">
          <div className="overlayOne"></div>
          <div className="overlayTwo"></div>
          <div className="overlayThree">
            <img src="/images/home_page/platform-arrow.png" alt="" />
          </div>

          <Container>
            <Row>
              <Col lg={6}>
                <div className="Video">
                  <video playing autoPlay loop muted>
                    <source
                      src="https://funnelliner-bucket.s3.ap-southeast-1.amazonaws.com/media/Video/01.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Col>

              <Col lg={6}>
                <div className="PlatformRight">
                  <h4>Funnel Liner platform</h4>
                  <h2>Infinite possibilities grow your business.</h2>

                  <ul>
                    <li>
                      {" "}
                      <BsArrow90DegRight /> Unlimited Website & Landing page
                      creation{" "}
                    </li>
                    <li>
                      {" "}
                      <BsArrow90DegRight /> The place for your business growth{" "}
                    </li>
                    <li>
                      {" "}
                      <BsArrow90DegRight /> Sales Galore{" "}
                    </li>
                    <li>
                      {" "}
                      <BsArrow90DegRight /> Powerful super fast Application{" "}
                    </li>
                    <li>
                      {" "}
                      <BsArrow90DegRight /> ​Simple Buying Process{" "}
                    </li>
                  </ul>

                  {/* Call */}
                  <div className="Call">
                    <div className="img">
                      <img src="/images/home_page/support.png" alt="" />
                    </div>
                    <div className="text">
                      <h3>0963-888-8881</h3>
                      <p>Need Customer Care Help? </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* =============================================================================
                    End Platform
                ===============================================================================*/}

        {/* =============================================================================
                    Start SetUpOnlineShop
                ===============================================================================*/}

        <section className="SetUpOnlineShop">
          <div className="overlayOne"></div>
          <div className="overlayTwo"></div>
          <div className="overlayThree">
            <img src="/images/home_page/squar-fram.png" alt="" />
          </div>

          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="Header">
                  <h2>How To Set Up Your Online Shop</h2>
                  <p>
                    You must be thinking of setting up the store nicely. If your
                    answer is yes then follow these five steps.
                  </p>
                </div>
              </Col>
            </Row>

            {/* SetUpOnlineShopContent */}
            <div className="SetUpOnlineShopContent">
              <Row>
                <Col lg={12}>
                  <div className="SetUpOnlineShopFlex">
                    {/* item */}
                    <div className="SetUpOnlineShopItem">
                      <div className="SetUpOnlineShopText">
                        <div className="img">
                          <img
                            src="/images/home_page/SetUpOnlineShop1.png"
                            alt=""
                          />
                        </div>

                        <h4>Open Account</h4>
                      </div>
                    </div>

                    {/* item */}
                    <div className="SetUpOnlineShopItem">
                      <div className="SetUpOnlineShopText">
                        <div className="img">
                          <img
                            src="/images/home_page/SetUpOnlineShop3.png"
                            alt=""
                          />
                        </div>

                        <h4>Upload Product</h4>
                      </div>
                    </div>

                    {/* item */}
                    <div className="SetUpOnlineShopItem">
                      <div className="SetUpOnlineShopText">
                        <div className="img">
                          <img
                            src="/images/home_page/SetUpOnlineShop2.png"
                            alt=""
                          />
                        </div>

                        <h4>Select Theme</h4>
                      </div>
                    </div>

                    {/* item */}
                    <div className="SetUpOnlineShopItem">
                      <div className="SetUpOnlineShopText">
                        <div className="img">
                          <img
                            src="/images/home_page/SetUpOnlineShop4.png"
                            alt=""
                          />
                        </div>

                        <h4>Delivery Service</h4>
                      </div>
                    </div>

                    {/* item */}
                    <div className="SetUpOnlineShopItem">
                      <div className="SetUpOnlineShopText">
                        <div className="img">
                          <img
                            src="/images/home_page/SetUpOnlineShop5.png"
                            alt=""
                          />
                        </div>

                        <h4>Ready To Start</h4>
                      </div>
                    </div>
                  </div>

                  <Link href="https://offer.funnelliner.com" className="bg">
                    Get Started <BsArrowRight />{" "}
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        {/* =============================================================================
                    End SetUpOnlineShop
                ===============================================================================*/}

        {/* =============================================================================
                    Start BuiltForEveryone
                ===============================================================================*/}
        <section className="BuiltForEveryone">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="Header">
                  <h4>Built For Everyone</h4>
                  <h2>We funnel liners are built for the way you work</h2>
                </div>
              </Col>
            </Row>

            <div className="BuiltForEveryoneTabs">
              <Tabs
                defaultActiveKey="Editor"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                {/* Editor */}
                <Tab eventKey="Editor" title="Funnel Liner Editor">
                  <div className="BuiltTabsContent">
                    {/* Left */}
                    <div className="Left">
                      <h3>Build Website, Sales Funnel & Automation Business</h3>
                      <p>
                        Zero Technical Knowledge Needed - Works For Every Type
                        Of Business - Market, Sell and Deliver Like A Pro
                      </p>

                      <div className="Replace d_flex">
                        <h4>Substitute For:</h4>
                        <img src="/images/home_page/wordpress.png" alt="" />
                      </div>

                      <Link href="/signup" className="bg">
                        Get Started <BsArrowRight />{" "}
                      </Link>
                    </div>

                    {/* Right */}
                    <div className="Right">
                      <div className="Video">
                        <video playing autoPlay loop muted>
                          <source
                            src="https://funnelliner-bucket.s3.ap-southeast-1.amazonaws.com/media/Video/editor.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* Orders */}
                <Tab eventKey="Orders" title="Orders Management">
                  <div className="BuiltTabsContent">
                    {/* Left */}
                    <div className="Left">
                      <h3>
                        Automate your orders with our smooth order management
                        system.
                      </h3>
                      <p>
                        No more order-checking hassles! You can track your order
                        from processing to shipping with a few clicks. Funnel
                        Liner's smooth solution improves customer satisfaction,
                        delays, and productivity.
                      </p>

                      <Link href="/signup" className="bg">
                        Get Started <BsArrowRight />{" "}
                      </Link>
                    </div>

                    {/* Right */}
                    <div className="Right">
                      <div className="Video">
                        <img src="/images/home_page/Order.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* Account */}
                <Tab eventKey="Account" title="Account Management">
                  <div className="BuiltTabsContent">
                    {/* Left */}
                    <div className="Left">
                      <h3>
                        Discover the wonders of our effortless account
                        management
                      </h3>
                      <p>
                        Don't let old methods hold you back anymore! Optimize
                        the future of account management, and your business will
                        grow like never before.
                      </p>

                      <Link href="/signup" className="bg">
                        Get Started <BsArrowRight />{" "}
                      </Link>
                    </div>

                    {/* Right */}
                    <div className="Right">
                      <div className="Video">
                        <img
                          src="/images/home_page/Accounting Modules.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* Bulk */}
                <Tab eventKey="Bulk" title="Bulk Sms">
                  <div className="BuiltTabsContent">
                    {/* Left */}
                    <div className="Left">
                      <h3>
                        Connect, Convert, and Overcome with our Bulk SMS System
                      </h3>
                      <p>
                        The Bulk SMS System enables corporate communication!
                        This flexible automation replaces manual engagement.
                        With one click, send promotional offers, announcements,
                        and updates to all your clients. Transform your
                        communication approach immediately!
                      </p>

                      <Link href="/signup" className="bg">
                        Get Started <BsArrowRight />{" "}
                      </Link>
                    </div>

                    {/* Right */}
                    <div className="Right">
                      <div className="Video">
                        <img src="/images/home_page/Bulk-SMS.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* Stock */}
                <Tab eventKey="Stock" title="Inventory Management">
                  <div className="BuiltTabsContent">
                    {/* Left */}
                    <div className="Left">
                      <h3>
                        Stay One Step Ahead in Business: Utilise Our
                        Extraordinary Inventory Management & Expertise!
                      </h3>
                      <p>
                        Our advanced technology ensures you have the right items
                        in stock at the right time and reduces stock outs to
                        make your customers happier. Our simple interface lets
                        you track your products so you can focus on growing your
                        business.
                      </p>

                      <Link
                        href="https://offer.funnelliner.com"
                        className="bg"
                      >
                        Get Started <BsArrowRight />{" "}
                      </Link>
                    </div>

                    {/* Right */}
                    <div className="Right">
                      <div className="Video">
                        <img src="/images/home_page/Stock.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Container>
        </section>

        {/* =============================================================================
                    End BuiltForEveryone
                ===============================================================================*/}

        <div className="SectionGaps"></div>

        {/* =============================================================================
                    Start PowerfulFunnel
                ===============================================================================*/}

        <section id="PowerfulFunnel" className="PowerfulFunnel">
          <div className="Frame">
            <img src="/images/home_page/Frame3.png" alt="" />
          </div>

          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <h2>
                  Attract customers will make your online business the best with
                  powerful funnel.
                </h2>
              </Col>
            </Row>

            {/* PowerfulFunnelContent */}
            <div className="PowerfulFunnelContent">
              <Row>
                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon1.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Funnel Liner Editor</h4>
                      <p>
                        Test our Easy And Powerful Drag & Drop Page Builder
                        editing experience & make...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon2.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Order Management Solution</h4>
                      <p>
                        Easily manage orders from your Facebook page inbox,
                        manual orders, landing page...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon3.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Super Fast Hosting</h4>
                      <p>
                        Experience lightning-fast page delivery with our
                        powerful CDN hosting, ensuring accele...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon4.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Ready Landing Page</h4>
                      <p>
                        Unlock instant success with our collection of
                        ready-to-use landing page templates...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon5.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Auto Invoice Making</h4>
                      <p>
                        Simplify your business operations with our automated
                        invoice generation, ensuring seam...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon6.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Courier Entry</h4>
                      <p>
                        Streamline your order processing with our one-click
                        order entry feature, allowing you...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon7.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Stock Management</h4>
                      <p>
                        Automatically reduce stock quantities upon order
                        confirmation, and effortlessly...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon8.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>SMS Marketing</h4>
                      <p>
                        Amplify your marketing efforts with our bulk SMS
                        marketing tool, allowing you to reach...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon9.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Accounting Module</h4>
                      <p>
                        Simplify your accounting tasks with our intuitive and
                        user-friendly accounting mod...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon10.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Easy Checkout Pages</h4>
                      <p>
                        Enhance your customers' shopping experience with our
                        convenient one-page che...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon11.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Marketing Tools</h4>
                      <p>
                        Empower your marketing efforts with our comprehensive
                        suite of powerful marketing tools.
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon12.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Orders, Sales & Delivery Reporting Dashboard</h4>
                      <p>
                        Gain valuable insights into your orders, sales, and
                        delivery data with our comprehensive re...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon13.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Sales Target</h4>
                      <p>
                        Set and track your sales targets effortlessly with our
                        intuitive tool, allowing you to monitor pro...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon14.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Custom Domain</h4>
                      <p>
                        Funnel Liner  allows you to easily set up and customize
                        your own domain, giving your bran...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon15.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Auto SSL Certificate</h4>
                      <p>
                        Your website and landing pages will be automatically
                        secured with SSL encryption, provid...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon16.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Auto Scaling Feature (No Data Loss)</h4>
                      <p>
                        Funnel Liner incorporates automatic scaling
                        capabilities, ensuring that your system...
                      </p>
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon17.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Call Center Solution</h4>
                      <img
                        src="/images/home_page/icons/coming-soon.png"
                        alt=""
                      />
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon18.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>User Role</h4>
                      <img
                        src="/images/home_page/icons/coming-soon.png"
                        alt=""
                      />
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon19.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Business Email Add</h4>
                      <img
                        src="/images/home_page/icons/coming-soon.png"
                        alt=""
                      />
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More
                      <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>

                {/* item */}
                <Col lg={3} sm={6}>
                  <div className="PowerfulFunnelItem">
                    <div className="Image">
                      <img
                        className="Img"
                        src="/images/home_page/icons/icon20.png"
                        alt=""
                      />
                      {/* overlay */}
                      <img
                        className="overlay"
                        src="/images/home_page/icons/hover.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h4>Fb Page Inbox Integration with AI Chatbot</h4>
                      <img
                        src="/images/home_page/icons/coming-soon.png"
                        alt=""
                      />
                    </div>

                    <img
                      className="HoverOverlayOne"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <img
                      className="HoverOverlayTwo"
                      src="/images/home_page/icons/hover-vector.png"
                      alt=""
                    />

                    <Link href="#" className="bg">
                      Read More <BsArrowRight />{" "}
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        {/* =============================================================================
                    End PowerfulFunnel
                ===============================================================================*/}

        <div className="SectionGaps"></div>

        {/* =============================================================================
                    Start IfHaveFunnelLiner
                ===============================================================================*/}
        <section className="IfHaveFunnelLiner">
          <div className="overlayOne"></div>
          <div className="overlayTwo"></div>

          <img className="Frame1" src="/images/home_page/frame1.png" alt="" />
          <img className="Frame2" src="/images/home_page/frame2.png" alt="" />

          <Container>
            <Row className="justify-content-center">
              <Col lg={6}>
                <h2>If you have Funnel Liner you don't need</h2>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <div className="Video">
                  <video playing autoPlay loop muted>
                    <source
                      src="https://funnelliner-bucket.s3.ap-southeast-1.amazonaws.com/media/Video/02.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* =============================================================================
                    End IfHaveFunnelLiner
                ===============================================================================*/}

        {/* =============================================================================
                    Start SingleLanding
                ===============================================================================*/}
        <section className="SingleLanding" id="SingleLanding">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="Header">
                  <h2>One Page Funnel Template</h2>
                  <p>
                    Simply Drag & Drop, Customize, and Achieve Maximum
                    Conversions with Our Sales, Marketing, and Conversion Hacks
                    & Create High-Converting Pages in Minutes with Funnel
                    Liner. 
                  </p>
                </div>
              </Col>
            </Row>

            {/* SingleLandingContent */}
            <div className="SingleLandingContent">
              <Row>
                {isLoading === true && (
                  <>
                    <Col lg={4} sm={6}>
                      <div className="ShopThemeItem">
                        <div className="img">
                          <Placeholder as={Card.Img} xs={12} animation="wave" />
                        </div>
                        <div className="text">
                          <Placeholder xs={12} bg="secondary" />
                          <Placeholder xs={12} bg="secondary" />
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="ShopThemeItem">
                        <div className="img">
                          <Placeholder as={Card.Img} xs={12} animation="wave" />
                        </div>
                        <div className="text">
                          <Placeholder xs={12} bg="secondary" />
                          <Placeholder xs={12} bg="secondary" />
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} sm={6}>
                      <div className="ShopThemeItem">
                        <div className="img">
                          <Placeholder as={Card.Img} xs={12} animation="wave" />
                        </div>
                        <div className="text">
                          <Placeholder xs={12} bg="secondary" />
                          <Placeholder xs={12} bg="secondary" />
                        </div>
                      </div>
                    </Col>
                  </>
                )}

                {landingList &&
                  isLoading === false &&
                  landingList.map((item) => (
                    <Col lg={4} sm={6} key={item?.id}>
                      <div className="SingleLandingItem">
                        <div className="img">
                          <img src={item?.media} alt={item?.theme_name} />
                        </div>
                        <div className="text">
                          <h4>{item?.theme_name}</h4>
                          <Link target="_blank" href={item?.url} className="bg">
                            View Demo
                          </Link>
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>

              <div className="ViewAll">
                <Link href="/shop-theme" className="bg LandingAll">
                  View All <BsArrowRight />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* =============================================================================
                    End SingleLanding
                ===============================================================================*/}

        <div className="SectionGaps"></div>

        {/* =============================================================================
                    Start MultiLanding
                ===============================================================================*/}

        <section className="SingleLanding MultiLanding">
          <img
            className="FrameFour"
            src="/images/home_page/frame4.png"
            alt=""
          />
          <img
            className="FrameFive"
            src="/images/home_page/frame5.png"
            alt=""
          />
          <img className="FrameSix" src="/images/home_page/frame6.png" alt="" />
          <img
            className="MultiLandingBg"
            src="/images/home_page/multi-landing-bg.png"
            alt=""
          />

          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="Header">
                  <h2>Choose Your Website Theme</h2>
                  <p>
                    All the themes you need are here, choose, select, customise
                    and build your favourite website in no time. 
                  </p>
                </div>
              </Col>
            </Row>

            {/* SingleLandingContent */}
            <div className="SingleLandingContent">
              <Row>
                {isLoading === true && (
                  <>
                    <Col lg={4} sm={6}>
                      <div className="ShopThemeItem">
                        <div className="img">
                          <Placeholder as={Card.Img} xs={12} animation="wave" />
                        </div>
                        <div className="text">
                          <Placeholder xs={12} bg="secondary" />
                          <Placeholder xs={12} bg="secondary" />
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} sm={6}>
                      <div className="ShopThemeItem">
                        <div className="img">
                          <Placeholder as={Card.Img} xs={12} animation="wave" />
                        </div>
                        <div className="text">
                          <Placeholder xs={12} bg="secondary" />
                          <Placeholder xs={12} bg="secondary" />
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} sm={6}>
                      <div className="ShopThemeItem">
                        <div className="img">
                          <Placeholder as={Card.Img} xs={12} animation="wave" />
                        </div>
                        <div className="text">
                          <Placeholder xs={12} bg="secondary" />
                          <Placeholder xs={12} bg="secondary" />
                        </div>
                      </div>
                    </Col>
                  </>
                )}

                <Col lg={4} sm={6}>
                  <div className="SingleLandingItem">
                    <div className="img">
                      <img src="/images/home_page/theme1.png" alt="" />
                    </div>
                    <div className="text">
                      <h4>Grocery/Organic Foods</h4>
                      <Link
                        target="_blank"
                        href="https://preview.funnelliner.xyz/multipage-1"
                        className="bg"
                      >
                        View Demo
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col lg={4} sm={6}>
                  <div className="SingleLandingItem">
                    <div className="img">
                      <img src="/images/home_page/theme2.png" alt="" />
                      {/* ComingSoon */}
                      <div className="ComingSoon">
                        <h4>Coming Soon...</h4>
                      </div>
                    </div>
                    <div className="text">
                      <h4>Iconic E-commerce</h4>
                      <Link target="_blank" href="#" className="bg">
                        View Demo
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col lg={4} sm={6}>
                  <div className="SingleLandingItem">
                    <div className="img">
                      <img src="/images/home_page/theme3.png" alt="" />
                      {/* ComingSoon */}
                      <div className="ComingSoon">
                        <h4>Coming Soon...</h4>
                      </div>
                    </div>
                    <div className="text">
                      <h4>Electronics And Gadgets Shop</h4>
                      <Link target="_blank" href="#" className="bg">
                        View Demo
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="ViewAll">
                <Link href="#" className="bg">
                  View All <BsArrowRight />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* =============================================================================
                    End MultiLanding
                ===============================================================================*/}

        <div className="SectionGaps"></div>

        {/* =============================================================================
                    Start MobileFriendly
                ===============================================================================*/}
        <section className="MobileFriendly">
          <img className="Frame7" src="/images/home_page/frame7.png" alt="" />
          <img className="Frame8" src="/images/home_page/frame8.png" alt="" />
          <img
            className="Frame9"
            src="/images/home_page/squar-fram.png"
            alt=""
          />

          <Container>
            <Row className="d_flex">
              <Col lg={6}>
                <div className="MobileFriendlyLeft">
                  <h4>Mobile friendly</h4>
                  <h2>Manage Your Shop On The Go With Funnel Liner</h2>

                  <div className="MobileFriendlyLeftBox">
                    {/* item */}
                    <div className="MobileFriendlyItem">
                      <div className="img">
                        <img
                          src="/images/home_page/mobile-friendly1.png"
                          alt=""
                        />
                      </div>

                      <h4>Easy Website Builder</h4>
                    </div>

                    {/* item */}
                    <div className="MobileFriendlyItem">
                      <div className="img">
                        <img
                          src="/images/home_page/mobile-friendly2.png"
                          alt=""
                        />
                      </div>

                      <h4>Smart Dashboard</h4>
                    </div>

                    {/* item */}
                    <div className="MobileFriendlyItem">
                      <div className="img">
                        <img
                          src="/images/home_page/mobile-friendly3.png"
                          alt=""
                        />
                      </div>

                      <h4>All Device Compatible</h4>
                    </div>

                    {/* item */}
                    <div className="MobileFriendlyItem">
                      <div className="img">
                        <img
                          src="/images/home_page/mobile-friendly4.png"
                          alt=""
                        />
                      </div>

                      <h4>Fast Browsing</h4>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="Video">
                  <video playing autoPlay loop muted>
                    <source
                      src="https://funnelliner-bucket.s3.ap-southeast-1.amazonaws.com/media/Video/04.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* =============================================================================
                    End MobileFriendly
                ===============================================================================*/}

        <div className="SectionGaps"></div>

        {/* =============================================================================
                    Start PersonalPlan
                ===============================================================================*/}
        {/* <ChoosePlan /> */}
        <ChoosePlanOld />

        {/* =============================================================================
                    End PersonalPlan
                ===============================================================================*/}

        {/* =============================================================================
                    Start AskQuestion
                ===============================================================================*/}
        <section className="AskQuestion" id="AskQuestion">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <h2>Frequently Asked Questions?</h2>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <div className="AskQuestionTabs">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Is it easy to build a website?
                        <div className="img">
                          <img
                            className="plus"
                            src="/images/home_page/plus.png"
                            alt=""
                          />
                          <img
                            className="minus"
                            src="/images/home_page/minus.png"
                            alt=""
                          />
                        </div>
                      </Accordion.Header>

                      <Accordion.Body>
                        <p>
                          Absolutely. Funnelliner is for everyone and makes it
                          possible to create a high-quality website without
                          knowing how to code. In the Funnelliner Editor, you
                          can drag and drop any feature you want and customize
                          it to match the look and feel of your site. Of course,
                          if you do know how to code, you can add advanced
                          functionality to your site with Velo.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Can I create a website without knowing how to code?
                        <div className="img">
                          <img
                            className="plus"
                            src="/images/home_page/plus.png"
                            alt=""
                          />
                          <img
                            className="minus"
                            src="/images/home_page/minus.png"
                            alt=""
                          />
                        </div>
                      </Accordion.Header>

                      <Accordion.Body>
                        <p>
                          Absolutely. Funnelliner is for everyone and makes it
                          possible to create a high-quality website without
                          knowing how to code. In the Funnelliner Editor, you
                          can drag and drop any feature you want and customize
                          it to match the look and feel of your site. Of course,
                          if you do know how to code, you can add advanced
                          functionality to your site with Velo.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Can I create a website without knowing how to code?
                        <div className="img">
                          <img
                            className="plus"
                            src="/images/home_page/plus.png"
                            alt=""
                          />
                          <img
                            className="minus"
                            src="/images/home_page/minus.png"
                            alt=""
                          />
                        </div>
                      </Accordion.Header>

                      <Accordion.Body>
                        <p>
                          Absolutely. Funnelliner is for everyone and makes it
                          possible to create a high-quality website without
                          knowing how to code. In the Funnelliner Editor, you
                          can drag and drop any feature you want and customize
                          it to match the look and feel of your site. Of course,
                          if you do know how to code, you can add advanced
                          functionality to your site with Velo.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Can I create a website without knowing how to code?
                        <div className="img">
                          <img
                            className="plus"
                            src="/images/home_page/plus.png"
                            alt=""
                          />
                          <img
                            className="minus"
                            src="/images/home_page/minus.png"
                            alt=""
                          />
                        </div>
                      </Accordion.Header>

                      <Accordion.Body>
                        <p>
                          Absolutely. Funnelliner is for everyone and makes it
                          possible to create a high-quality website without
                          knowing how to code. In the Funnelliner Editor, you
                          can drag and drop any feature you want and customize
                          it to match the look and feel of your site. Of course,
                          if you do know how to code, you can add advanced
                          functionality to your site with Velo.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* =============================================================================
                    End AskQuestion
                ===============================================================================*/}

        <div className="SectionGaps"></div>

        {/* =============================================================================
                    Start 24/7 RealtimeSupport
                ===============================================================================*/}
        <section className="RealtimeSupport">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="Video">
                  <video playing autoPlay loop muted>
                    <source
                      src="https://funnelliner-bucket.s3.ap-southeast-1.amazonaws.com/media/Video/Support.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Col>

              <Col lg={6}>
                <div className="PlatformRight">
                  <h2>
                    24/7 real <br /> time support.
                  </h2>

                  <ul>
                    <li>
                      {" "}
                      <BsArrow90DegRight /> Email Support{" "}
                    </li>
                    <li>
                      {" "}
                      <BsArrow90DegRight /> Live Chat for Unlimited Plan{" "}
                    </li>
                    <li>
                      {" "}
                      <BsArrow90DegRight /> Frequent Webinars
                    </li>
                    <li>
                      {" "}
                      <BsArrow90DegRight /> All-time support for any problem
                      with the website{" "}
                    </li>
                  </ul>

                  {/* Call */}
                  <div className="Call">
                    <div className="img">
                      <img src="/images/home_page/support.png" alt="" />
                    </div>
                    <div className="text">
                      <h3>0963-888-8881</h3>
                      <p>Need Customer Care Help? </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* =============================================================================
                    End 24/7 RealtimeSupport
                ===============================================================================*/}

        <div className="SectionGaps"></div>

        {/* =============================================================================
                    Start StartSelling
                ===============================================================================*/}

        {/* =============================================================================
                    End StartSelling
                ===============================================================================*/}
        <StartSelling />

        {/* =============================================================================
                    Start Footer
                ===============================================================================*/}
        {/* <section className='Footer'>

                    <Container>

                        <Row>

                            <Col lg={4}>

                                <div className="FooterLogo">

                                    <img src="/images/home_page/logo-beta.png" alt="" />
                                    <p>The First Ever Automated E-Commerce Sales Funnel. Create Your Own Online Shop,Decorate Your Shop, Boost Up Your Sales !</p>

                                    <div className="socialIcon">

                                        <Link href=""><img src="/images/home_page/facebook.png" alt="" /></Link>
                                        <Link href=""><img src="/images/home_page/instagram.png" alt="" /></Link>
                                        <Link href=""><img src="/images/home_page/whatsapp.png" alt="" /></Link>
                                        <Link href=""><img src="/images/home_page/youtube.png" alt="" /></Link>

                                    </div>

                                </div>

                            </Col>

                            <Col lg={8}>

                                <Row>

                                    <Col lg={4} sm={3} xs={6}>

                                        <div className="FooterItem">

                                            <h3>Product</h3>

                                            <ul>
                                                <li> <Link href=''>Website Theme</Link> </li>
                                                <li> <Link href=''>Website Builder</Link> </li>
                                                <li> <Link href=''>Landing Page </Link> </li>
                                                <li> <Link href=''>Road Map </Link> </li>
                                            </ul>

                                        </div>

                                    </Col>

                                    <Col lg={4} sm={3} xs={6}>

                                        <div className="FooterItem">

                                            <h3>About</h3>

                                            <ul>
                                                <li> <Link href=''>Terms & Conditions</Link> </li>
                                                <li> <Link href=''>Privacy Policy</Link> </li>
                                                <li> <Link href=''>Contact </Link> </li>
                                                <li> <Link href=''>FAQ </Link> </li>
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
                                                    <p>House No # 17, Road No # 8/A, Nikunja #1, Dhaka - 1229, Bangladesh</p>
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

                </section> */}

        {/* <OurFooter /> */}

        {/* <Footer1></Footer1> */}
        <Footer2></Footer2>

        {/* =============================================================================
                    End Footer
                ===============================================================================*/}

        {/* =============================================================================
                    Start 
                ===============================================================================*/}

        {/* =============================================================================
                    End 
                ===============================================================================*/}
      </div>
    <ModalForm setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};

export default MainPage;
