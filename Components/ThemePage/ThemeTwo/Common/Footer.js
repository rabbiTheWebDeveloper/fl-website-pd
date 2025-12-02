import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Link from 'next/link';
import {BsSearch,BsCart3,BsTwitter,BsInstagram,BsPinterest,BsYoutube} from 'react-icons/bs'
import {FiHeart} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import {SlSocialPintarest} from 'react-icons/sl'


const Footer = () => {

  return (

    <>
    <section id='top-footer'>
      <Container>
        <Row>
          <Col lg={8}>

            <Row>
              <Col lg={4}>
              <div className="widget1">
                <img src="../images/theme_2/logo-dark.png" alt="" />
                <p className="text">+880 02 223 344 , +880 123 456 789</p>
                <p>Level: 5, Road: 07, Block: C, <br />Niketan, Gulshan– 1, Dhaka – 1212</p>
              </div>
              </Col>
              <Col lg={4}>

              <div className='widget2'>
                  <h6>INFORMATION</h6>
                  <ul className="list-unstyled pt-4">
                    <li><Link href="./about-page.html">About Phonks</Link></li>
                    <li><Link href="./all-products">Shop Page</Link></li>
                    <li>FAQ</li>
                    <li>Desk Chair</li>
                    <li><Link href="./contact-us.html">Contact us</Link></li>
                    <li><Link href="./login.html">Log in</Link></li>
                    <li><Link href="./registration.html">Registration</Link></li>
                    
                </ul>
                </div>
              </Col>
              <Col lg={4}>
              <div className='widget3'>
                  <h6>CUSTOMER SERVICE</h6>
                  <ul className='list-unstyled pt-4'>
                    <li><Link href="./payment-page.html">Payment Methods</Link></li>
                    <li>Money-back guarantee!</li>
                    <li><Link href="./single-product.html"> Single Product</Link></li>
                    <li><Link href="./shipping-address-page.html">Shipping</Link></li>
                    <li><Link href="./cart-page.html">Cart Page</Link></li>
                    <li><Link href="./reset-password.html">Reset password</Link></li>
                    <li><Link href="./forgot-password.html">Forgot Password</Link></li>
                </ul>
                </div>
              </Col>
            </Row>



          </Col>
          <Col lg={4}>
          <div className="widget4">
              <h6>NEWSLETTER</h6>
              <form className="newsletter-search pt-lg-4 form-inline">
                <input className="form-control mr-lg-2" type="search" placeholder="Your email" aria-label="Search" />
                <button className="btn-subscribe" type="submit">Subscribe</button>
              </form>
              <ul className="social-icons list-inline pt-2">
                <li className="list-inline-item"><FaFacebookF/></li>
                <li className="list-inline-item"><BsTwitter/></li>
                <li className="list-inline-item"><BsInstagram/></li>
                <li className="list-inline-item"><BsPinterest/></li>
                <li className="list-inline-item"><BsYoutube /></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

    </section>





    {/* ---------------------Bottom Footer-------------- */}
    <section id="footer-section">
      <Container>
      <div className="DesktopMenu">
        <Row>
          <Col lg={6}>
          <div className="copyright">
              <p>@ 2021 - Phonks - Designed &amp; Develop by <a href="#"> Soft IT Care</a></p>
            </div>
          </Col>
          <Col lg={6}>
          <div className="payment">
            <ul className=" list-inline pt-2">
              <li className="list-inline-item"><img src="../images/theme_2/gateway1 (4).png" alt="" /></li>
              <li className="list-inline-item"><img src="../images/theme_2/gateway1 (3).png" alt="" /></li>
              <li className="list-inline-item"><img src="../images/theme_2/gateway1 (2).png" alt="" /></li>
              <li className="list-inline-item"><img src="../images/theme_2/gateway1 (1).png" alt="" /></li>
            </ul>
            </div>
          </Col>


        </Row>
        </div>

      </Container>

    </section>
    
    </>

  )

}

export default Footer