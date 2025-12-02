import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TbArrowsMaximize } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/thumbs";
import {
  Autoplay,
  Pagination,
  Grid,
  Navigation,
  Thumbs,
  sliderThumbs,
} from "swiper";
import {
  BsCart3,
  BsChevronRight,
  BsFacebook,
  BsFileMinus,
  BsFillBookmarkFill,
  BsStar,
  BsStarFill,
  BsTwitter,
} from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { FaGooglePlus } from "react-icons/fa";
import ImageSliderComponent from "../ImageSliderComponent";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/stateSlices/CartSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductInfo = ({data}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <section id='single-product'>
        <Container>
          <Row>
            <Col xs={6}>
              <div className='ProductDetailsLeft'>
                <div className='ProductDetailsSlider'>
                  <ImageSliderComponent data={data}></ImageSliderComponent>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className='product-details'>
                <div className='title'>
                  <h2>{data?.product_name}</h2>
                </div>
                {/* <div className='reviews'>
                  <div className='star'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                  </div>

                  <div className='reviewers'>
                    <h4>5 Ratings / 53 reviews </h4>
                  </div>
                </div> */}
                <div className='price'>
                  <h2 className="my-3">
                   {data?.price} TK <span>{data?.price+data?.discount}</span>
                  </h2>
                </div>
                {/* <div className='variation'>
                  <div className='color-variation'>
                    <h5>Color</h5>
                    <div className='colors'>
                      <div className='block-red' />
                      <div className='block-blue' />
                      <div className='block-yellow' />
                    </div>
                  </div>
                  <div className='size-variation'>
                    <h5>Size</h5>
                    <div className='sizes'>
                      <div className='block'>S</div>
                      <div className='block'>M</div>
                      <div className='block'>L</div>
                      <div className='block'>XL</div>
                    </div>
                  </div>
                </div> */}
                {/* <div className='quantity'>
                  <h5>Quantity</h5>
                  <AiOutlinePlus />
                  <h5>5</h5>
                  <AiOutlineMinus />
                </div> */}
                <div className='cart-buttons'>
                  <button className='wish-btn' type='button'>
                    <BsFillBookmarkFill />
                    Wishlist
                  </button>
                  <button onClick={() => handleAddToCart(data)} className='cart-btn' type='button'>
                    <GiShoppingBag />
                    Add to Cart
                  </button>
                </div>
                <ToastContainer/>
                {/* <div className='text'>
                  <p>Free shipping for orders above $500 USD</p>
                </div> */}
                <div className='social-share'>
                  <p className='pt-3'>Share:</p>
                  <div className='icons'>
                    <FaGooglePlus />
                    <BsFacebook />
                    <BsTwitter />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductInfo;
