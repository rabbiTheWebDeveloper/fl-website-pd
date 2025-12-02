import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LiaFacebook } from 'react-icons/lia';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';

import style from './style.module.css';
import { Box } from '@mui/material';
export const Footer1 = () => {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <Container>
          <div className={style.row}>
            <div className={style.info}>
              <div className={style.footerlogo}>
                <img src="/images/home_page/light-logo.png" alt="" />
              </div>
              <p>The First Ever Automated E-Commerce Sales Funnel. Create Your Own Online Shop,Decorate Your Shop, Boost Up Your Sales !</p>

              <div className={style.social}>
                <h1>Follow Us</h1>
                <div className={style.icon}>
                  <Link href="https://www.facebook.com/funnelliner" target="_blank">
                    <LiaFacebook></LiaFacebook>
                  </Link>
                  <Link href="" className={style.instagram}>
                    <FaInstagram></FaInstagram>
                  </Link>
                  <Link className={style.whatsapp} href="https://api.whatsapp.com/send/?phone=8801894844452&text&type=phone_number&app_absent=0">
                    <FaWhatsapp></FaWhatsapp>
                  </Link>
                  <Link className={style.youtube} href="https://www.youtube.com/@funnelliner">
                    <FiYoutube></FiYoutube>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className={style.footeritem}>
                <h1>Contact Us</h1>

                <ul className={style.contact}>
                  <li>
                    House No # 17, Road No # 8/A, Nikunja #1, Dhaka - 1229, <br />
                    Bangladesh
                  </li>
                  <li>
                    Email: <Link href="mailto:support@funnelliner.com">support@funnelliner.com</Link>
                  </li>
                  <li>
                    Phone: <Link href="tel:0963-888-8881"> 0963-888-8881 </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={style.feature}>
              <div className={style.footeritem}>
                <h1>Feature</h1>

                <ul>
                  <li>
                    <Link href="/">Website Theme</Link>
                  </li>
                  <li>
                    <Link href="/">Website Builder</Link>
                  </li>
                  <li>
                    <Link href="/">Landing Page</Link>
                  </li>
                  <li>
                    <Link href="https://roadmap.funnelliner.com/roadmap" target="_blank">
                      Roadmap
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className={style.footeritem}>
                <h1>About</h1>

                <ul>
                  <li>
                    {' '}
                    <Link href="/terms">Terms & Conditions</Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href="/privacy">Privacy Policy</Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href="/">Contact </Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href="/">FAQ </Link>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Box>
        <div className={style.copyright}>
          Copyright 2024 <Link href="">Funnel Liner</Link>. All Rights Reserved
        </div>
      </Box>
    </footer>
  );
};
