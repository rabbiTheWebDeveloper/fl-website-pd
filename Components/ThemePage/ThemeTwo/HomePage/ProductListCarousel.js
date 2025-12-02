import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Autoplay, Pagination, Grid, Navigation } from "swiper";
import { BsCart3, BsChevronRight } from "react-icons/bs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/stateSlices/CartSlice";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const ProductListCarousel = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [shopId, setShopId] = useState();
  const [shop_name, setShop_name] = useState("");
  const dispatch = useDispatch();
  const handleFetchProduct =async (headers) => {
   

    try {
      let res = await axios({
        method: "get",
        url: `${process.env.API_URL}/customer/products`,
        headers: headers,
      });
      setAllProducts(res.data.data);
    } catch (err) {
      setAllProducts([])
    }
  };

  useEffect(() => {
    const headers = {
      "shop-id": localStorage.getItem("shop_id"),
    };
    handleFetchProduct(headers);
    setShopId(localStorage.getItem("shop_id"));
    setShop_name(localStorage.getItem("shop_name"));
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }; 
  return (
    <>
      <section id='product-list-carousel'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='heading d_flex align-items-center'>
                <div className='circle'>
                  <FiCircle />
                </div>
                <h2 className='my-auto mx-lg-3 mx-2'>All Products</h2>
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
              <div className='productlist-slider'>
                <Swiper
                  slidesPerView={5}
                  spaceBetween={20}
                  grid={{
                    rows: 2,
                    fill: "row",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      grid: {
                        rows: 3,
                        fill: "row",
                      },
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                      grid: {
                        rows: 2,
                        fill: "row",
                      },
                    },
                  }}
                  modules={[Autoplay, Pagination, Grid, Navigation]}
                  className='mySwiperProductList'
                >
                  {Array.isArray(allProducts)?allProducts.map((item, index) => {
                    return (

                        <SwiperSlide key={index}>
                          <Link href={`/${shop_name}/details/${item.id}`}>
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
                                <img src={item?.main_image?.name} alt='' />
                                <div className='overlay' />
                                <Link
                                  onClick={() => handleAddToCart(item)}
                                  className='cart'
                                  href='#'
                                >
                                  <BsCart3 />
                                  Add to Cart
                                </Link>
                              </div>

                              <p className='category'>Accessories</p>
                              <h3 className='title'>{item.product_name}</h3>
                              <h3 className='price-discount'>
                                BDT {item.price}
                                <span>
                                  {parseInt(item.price) +
                                    parseInt(item.discount)}
                                </span>
                              </h3>
                            </div>
                          </Link>
                        </SwiperSlide>

                    );
                  }):null}
                </Swiper>
                {/* <ToastContainer /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductListCarousel;
