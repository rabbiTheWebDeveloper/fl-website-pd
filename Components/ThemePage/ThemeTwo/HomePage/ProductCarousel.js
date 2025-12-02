import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Autoplay, Pagination, Navigation, Grid } from "swiper";
import { BsCart3, BsChevronRight } from "react-icons/bs";

const ProductCarousel = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [shopId, setShopId] = useState();

  const handleFetchProduct = async (headers) => {
    try {
      let res = await axios({
        method: "get",
        url: `${process.env.API_URL}/customer/top-selling-product`,
        headers: headers,
      });
      setPopularProducts(res.data.data);
    } catch (err) {

    }
  };

  useEffect(() => {
    const headers = {
     "shop-id": localStorage.getItem("shop_id"),
    };
    handleFetchProduct(headers);
    setShopId(localStorage.getItem("shop_id"));
  }, []);
  return (
    <>
      <section id='product-carousel'>
        {/* <Container>
            {
                popularProducts.length>0&&<Row>
                <Col lg={12}>
                  <div className='heading d_flex align-items-center'>
                    <div className='circle'>
                      <FiCircle />
                    </div>
                    <h2 className='my-auto mx-lg-3 mx-2'>Our Popular Products</h2>
                    <div className='circle'>
                      <FiCircle />
                    </div>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className='more-btn'>
                    <button className='btn pt-0 pe-0'>See All Products</button>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className='product-swiper-slider'>
                    <div className='swiper-button-next'>
                      <BsChevronRight />
                    </div>
                    <div className='swiper-button-prev'>
                      <BsChevronRight />
                    </div>

                    <Swiper
                      slidesPerView={5}
                      spaceBetween={20}
                      pagination={{
                        clickable: true,
                      }}
                      grid={{
                        rows: 2,
                        fill: "row",
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                          grid: {
                            rows: 2,
                            fill: "row",
                          },
                        },
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 5,
                          spaceBetween: 20,
                          grid: {
                            rows: 1,
                            fill: "row",
                          },
                        },
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation, Grid]}
                      className='mySwiperProduct'
                    >
                      {popularProducts?.map((item, index) => {
                        return (
                          <SwiperSlide>
                            <div className='imageproduct'>
                              <div className='image-layer'>
                                <button className='wishlist' type='button'>
                                  <img
                                    className='add-heart'
                                    src='../images/theme_2/heart-add-sm.png'
                                    alt=''
                                  />
                                  <img
                                    className='remove-heart d-none'
                                    src='../images/theme_2/heart.png'
                                    alt=''
                                  />
                                </button>
                                <img
                                  src='../images/theme_2/Mask group (1).png'
                                  alt=''
                                />
                                <div className='overlay' />
                                <button className='cart'>
                                  <BsCart3 />
                                  Add to Cart
                                </button>
                              </div>
                              <p className='category'>Accessories</p>
                              <h3 className='title'>Simple Black T-Shirt</h3>
                              <h3 className='price-discount'>
                                BDT 650<span>BDT 670</span>
                              </h3>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </Col>
              </Row>
            }

        </Container> */}
      </section>
    </>
  );
};

export default ProductCarousel;
