import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import main Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import { ImageLoader, imagesSize } from "../../../utils/ImageLoader";

// Import the Swiper styles and components
SwiperCore.use([Autoplay, Pagination]);

const Banner = ({ shopInfo }) => {
  return (
    <section>
      <div className='Multipage__1__SwiperDiv'>
        <Container>
          <Row>
            <Col xs={12}>
              <div className='BannerSlider'>
                <Swiper
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                  className='mySwiper'
                >
                  {shopInfo?.slider?.length > 0 ? (
                    shopInfo.slider.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className='BannerItem'>
                          <Link href={item?.link ? item.link : '#'}>
                            <img src={ImageLoader(item?.image, imagesSize.sliderWidth, imagesSize.sliderHeight)} alt='Banner' />
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <div className='BannerItem'>
                        <img
                          src='/images/multipage-1/banner.jpg'
                          alt='Banner'
                        />
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
