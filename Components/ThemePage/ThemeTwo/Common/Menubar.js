import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { BsSearch, BsCart3, BsFillCaretDownFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const options = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
];

const Menubar = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const cartlength = useSelector((state) => state.cart?.cartItems.length);

  const [cart, setCart] = useState(0);
  const [logo, setLogo] = useState();
  useEffect(() => {
    setCart(cartlength);
  }, [cartlength]);

  const [categories, setCategories] = useState([]);
  const [shopName, setShopName] = useState();
  async function handleFetchCategories(headers) {
    const response = await fetch(
      `${process.env.API_URL}/customer/categories`,
      {
        headers: headers,
      }
    );
    const data = await response.json();

    if (data.success === true) {
      setCategories(data?.data);
    }
  }

  useEffect(() => {
    const headers = {
      "shop-id": localStorage.getItem("shop_id"),
    };
	setShopName(localStorage.getItem('shop_name'));
    handleFetchCategories(headers)

  }, []);

  //add to cart total item count
  const [cart1, setCart1] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState("");
  const carts = useSelector((state) => state.cart);
  useEffect(() => {
    setCart1(carts?.cartItems);
    setCartSubTotal(carts.cartTotalAmount);
  }, [carts]);
  const cartQuantitys = [];
  cart1.map((item, index) => {
    return [cartQuantitys.push(item.cartQuantity)];
  });
  const totalItem = cartQuantitys.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <>
      <header>
        <div id='mobile-nav'>
          <Container>
            <Row>
              <Col
                sm={12}
                className='iconmenu  d-flex justify-content-center align-items-center'
              >
                <div className='icondiv'>
                  <BiUser />
                </div>
                <div className='icondiv'>
                  <FiHeart />
                  <span className='bg-black text-white'>100</span>
                </div>
                <div className='icondiv'>
                  <BsCart3 />
                  <span >3</span>
                </div>
                <p className=''>Taka {cartSubTotal}</p>
              </Col>
            </Row>
          </Container>
          <div id='font-menu'>
            <Container>
              <Row id='menu-row'>
                <Col xm={3}>
                  <Button
                    variant='btn'
                    onClick={toggleShow}
                    className=' menu-btn'
                  >
                    <img src='/images/theme_2/menu-drawyer.png' alt='menu' />
                  </Button>
                  <Offcanvas
                    className='offcanvas-bg'
                    show={show}
                    onHide={handleClose}
                    {...props}
                  >
                    <Offcanvas.Header closeButton >
                      <Offcanvas.Title>Colored with scrolling</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <nav className='animated bounceInDown'>
                        <ul>
                          <li className='active'>
                            <a href='#profile'>Home</a>
                          </li>
                          <li>
                            <a href='#about-us'>About us</a>
                          </li>
                          <li className='sub-menu'>
                            <a href='#contact-us'>Contact Us</a>
                          </li>
                          <li>
                            <a href='#message'>Logout</a>
                          </li>
                        </ul>
                      </nav>
                    </Offcanvas.Body>
                  </Offcanvas>
                </Col>
                <Col xm={5}>
                  <Navbar.Brand href='/'>
                    <img
                      src='/images/theme_2/logo.png'
                      className='d-flex justify-content-center'
                      alt='Phonks Logo'
                    />
                  </Navbar.Brand>
                </Col>
                <Col xm={3}>
                  <div className='search'>
                    <span className='searchBtn'>
                      <BsSearch />
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* =========================== Large screen nav started ============================= */}
        <Container className='lg-nav'>
          {/* DesktopMenu */}
          <div className='DesktopMenu'>
            <Row className='navrow'>
              <Col lg={3}>
                <Link className='navbar-brand' href={`/${shopName}`}>
                  <img src='/images/theme_2/logo.png' alt='site logo' />
                </Link>
              </Col>

              <Col lg={6} className='d-flex flex-row'>
                <ul className='topnav navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item px-lg-2 mx-lg-1'>
                    <Link
                      className='nav-link active'
                      aria-current='page'
                      href={`/${shopName}`}
                    >
                      Home
                    </Link>
                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                  </li>
                  <li className='nav-item px-lg-2 mx-lg-1'>

                    <Link className='nav-link' href={`/${shopName}/shop`}>
                      Products
                    </Link>
                  </li>
                  <li className='nav-item px-lg-2 mx-lg-1'>
                    <Link className='nav-link' href='#'>
                      Categories
                      <BsFillCaretDownFill />
                    </Link>
                    <div className='dropdown'>
                      <ul className='dropdown-menu'>
                        {categories.map((item, index) => {
                          return (
                            <li key={index}>
                              <a className='drowpdown-item' href='#'>
                                {item.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                  {/* <li className='nav-item px-lg-2 mx-lg-1'>
                    <a className='nav-link' href='/theme-two/product-details'>
                      Single product
                    </a>
                  </li> */}
                </ul>
              </Col>

              <Col
                lg={3}
                className='iconmenu d-flex justify-content-end align-items-center '
              >
                {/* <div className='icondiv'>
                  <BsSearch />
                </div> */}
                {/* <div className='icondiv'>
                  <BiUser />
                </div> */}
{/*
                <div className='icondiv'>
                  <FiHeart />
                  <span className='bg-black text-white'>22</span>
                </div> */}

                <Link href={`/${shopName}/checkout`}>
                  <div className='icondiv'>
                    <BsCart3 />
                    <span >{totalItem}</span>
                  </div>
                </Link>
                <p className='pt-2'>৳ {cartSubTotal}</p>
              </Col>
            </Row>
          </div>
        </Container>
      </header>
    </>
  );
};
// function Example() {
//   return (
//     <>
//       {options.map((props, idx) => (
//         <OffCanvasExample key={idx} {...props} />
//       ))}
//     </>
//   );
// }

export default Menubar;
