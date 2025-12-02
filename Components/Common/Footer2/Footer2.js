import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

import style from "./style.module.css";
import { Box } from "@mui/material";
export const Footer2 = () => {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <Container>
          <div className={style.row}>
            <div>
              <div className={style.footeritem}>
                <h1>Contact Us</h1>
                <ul className={style.contact}>
                  <li>
                    <Link href="tel:0963-888-8881"> 0963-888-8881 </Link>
                  </li>
                  <li>
                    <Link href="mailto:support@funnelliner.com">
                      support@funnelliner.com
                    </Link>
                  </li>
                  <li>
                    <h3>Corporate Office</h3>
                    <p>
                      Level-5, House No-13, Road No-07, Block- F, Banani,
                      Dhaka-1213
                    </p>
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
                    <Link
                      href="https://roadmap.funnelliner.com/roadmap"
                      target="_blank"
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link href="https://affiliation.funnelliner.com" target="_blank">
                    Join as an Affiliate
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
                    {" "}
                    <Link href="/terms">Terms & Conditions</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/privacy">Privacy Policy</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/">Contact </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/">FAQ </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className={style.info}>
              <h1>Stay Connected</h1>
              <div className={style.social}>
                <div className={style.icon}>
                  <Link
                    href="https://www.facebook.com/funnelliner"
                    target="_blank"
                  >
                    <FaFacebookF></FaFacebookF>
                  </Link>
                  <Link href="" className={style.instagram}>
                    <RiInstagramFill></RiInstagramFill>
                  </Link>
                  <Link
                    className={style.whatsapp}
                    href="https://api.whatsapp.com/send/?phone=8801894844452&text&type=phone_number&app_absent=0"
                  >
                    <RiWhatsappFill></RiWhatsappFill>
                  </Link>
                  <Link
                    className={style.youtube}
                    href="https://www.youtube.com/@funnelliner"
                  >
                    <FaYoutube></FaYoutube>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Box>
        <div className={style.copyright}>
          Copyright 2024 <Link href="">Funnel Liner</Link> | All Rights Reserved
        </div>
      </Box>
    </footer>
  );
};
