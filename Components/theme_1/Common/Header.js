import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect, useRef } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCentos } from "react-icons/fa";
import { useSelector } from "react-redux";
const axios = require("axios");
import store from "../../../redux/store";
import { SetSearchInput } from "../../../redux/stateSlices/SearchInputSlice";

import { useRouter } from "next/router";
import Context from "../../Context";
// import Images from "/frontend_asset/img/logo.png";

const Header = ({shopInfo}) => {
  const cartlength = useSelector((state) => state.cart?.cartItems.length);
  const [shop_name, setShopName] = useState();

  useEffect(() => {
  
    setShopName(localStorage.getItem("shop_name"));
  }, [cartlength]);

  

  const router = useRouter();

  const [searchString, setSearchString] = useState("");
  const handleChange = (e) => {
    setSearchString(e.target.value);
    store.dispatch(SetSearchInput(searchString));
  };
  const handleSearchBtn = () => {
    router.push({
      pathname: `/${shop_name}/shop`,
    });
  };
  const searchText = useSelector((state) => state.searchInput.searchString);
 
  //add to cart total item count
  const [cart1, setCart1] = useState([]);
  const carts = useSelector((state) => state.cart);
  useEffect(() => {
    setCart1(carts?.cartItems);
  }, [carts]);
  const cartQuantitys = [];
  cart1.map((item, index) => {
    return [cartQuantitys.push(item.cartQuantity)];
  });
  const totalItem = cartQuantitys.reduce((partialSum, a) => partialSum + a, 0);
  return (
    <section className='Header'>
      <Container>
        <Row className='d_flex'>
          {/* left  */}
          <Col>
            <div className='HeaderLeftLogo'>
              <Link href={`/${shopInfo?.name}`}>
                <img
                  src={shopInfo?.shop_logo?.name}
                  alt=''
                />
              </Link>
             
            </div>
          </Col>

          <Col xs={6}>
            <div className='HeaderMiddle'>
              <input
                defaultValue={searchText}
                onChange={handleChange}
                type='text'
                name='search'
                placeholder='Search here...'
              />
              <div
                onClick={handleSearchBtn}
                className='svg'
                style={{ cursor: "pointer" }}
              >
                <AiOutlineSearch />
              </div>
            </div>
          </Col>

          <Col>
            <div className='HeaderRight'>
              <ul>
                
                <li>
                  <Link href={`/${shop_name}/checkout`} className='d_flex'>
                    <div className='svg'>
                      <AiOutlineShoppingCart />
                    </div>
                    Cart
                    <span>{totalItem}</span>
                  </Link>
                </li>

               
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
