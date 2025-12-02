import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import styles from "../../../styles/main_page/home_page.module.css";
import styles from "../../styles/main_page/home_page.module.css";
import Card from "react-bootstrap/Card";
import { Grid, Pagination, Stack, Tab, TextField } from "@mui/material";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

import { BsArrow90DegRight, BsArrowRight, BsEnvelopeAt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Autoplay } from "swiper";

// import "swiper/css";
// import "swiper/css/autoplay"
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Head from "next/head";
import axios from "axios";
import Placeholder from "react-bootstrap/Placeholder";
import CountDown from "../../Components/MainPage/CountDown";
import OurMenubar from "../../Components/MainPage/OurMenubar";
import StartSelling from "../../Components/MainPage/StartSelling";
import OurFooter from "../../Components/MainPage/OurFooter";

function index() {
  const [landingList, setLandingList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);
  //landing theme skip when shown,
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
      setLandingList(filteredItems);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return error.response;
    }
  };
  useEffect(() => {
    landingThemeFetch();
  }, []);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const indexOfLastLanding = currentPage * perPage;
  const indexOfFirstLanding = indexOfLastLanding - perPage;
  const currentLanding =
    landingList && landingList?.slice(indexOfFirstLanding, indexOfLastLanding);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(landingList.length / perPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber, value) => setCurrentPage(value);

  const handlePaginationClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="MainPage">
      <Head>
        <title>Funnel Liner - Automated Sales Funnel</title>
        <meta
          name="description"
          content="Funnel Liner - Automated Sales Funnel"
        />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="../images/favicon.png" />
      </Head>

      <div className="MainLandingPage">
        {/* =============================================================================
                    Start Menubar
                ===============================================================================*/}
        <CountDown />

        <OurMenubar />

        <div className="SectionGaps"></div>

        {/* --------------------------------------------------------------------------------------------------------------------------------
                ShopTheme
            ---------------------------------------------------------------------------------------------------------------------------------- */}
        <section className="SingleLanding">
          <Container>
            <Row className="justify-content-md-center">
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
                {currentLanding &&
                  isLoading === false &&
                  currentLanding.map((item) => (
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

                <Col className="landingPagePagination" lg={12}>
                  {isLoading === false && (
                    <div
                      style={{ margin: "0 auto", textAlign: "center" }}
                      className={styles.ShowMore}
                    >
                      <Pagination
                        count={pageNumbers.length}
                        variant="outlined"
                        page={currentPage}
                        onChange={paginate}
                        onClick={handlePaginationClick}
                      />
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </Container>
        </section>

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
        <OurFooter />
      </div>
    </div>
  );
}

export default index;
