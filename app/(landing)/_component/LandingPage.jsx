"use client";
import axios from "axios";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
const Footer = dynamic(() => import("../../Components/theme_1/Common/Footer"), {
  ssr: false,
});
const Header = dynamic(() => import("../../Components/theme_1/Common/Header"), {
  ssr: false,
});
const SocialMedia = dynamic(
  () => import("../../Components/theme_1/Common/SocialMedia"),
  {
    ssr: false,
  }
);
const TinyFooter = dynamic(
  () => import("../../Components/theme_1/Common/TinyFooter"),
  {
    ssr: false,
  }
);
const PageLoader = dynamic(
  () => import("../../Components/Common/PageLoader/PageLoader"),
  {
    ssr: false,
  }
);

const Landing_1 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-1"),
  { ssr: false }
);
const Landing_2 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-2"),
  { ssr: false }
);
const Landing_3 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-3"),
  { ssr: false }
);
const Landing_4 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-4"),
  { ssr: false }
);
const Landing_5 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-5"),
  { ssr: false }
);
const Landing_6 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-6"),
  { ssr: false }
);
const Landing_7 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-7"),
  { ssr: false }
);
const Landing_8 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-8"),
  { ssr: false }
);
const Landing_9 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-9"),
  { ssr: false }
);
const Landing_10 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-10"),
  { ssr: false }
);
const Landing_11 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-11"),
  { ssr: false }
);
const Landing_12 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-12"),
  { ssr: false }
);
const Landing_13 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-13"),
  { ssr: false }
);
const Landing_14 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-14"),
  { ssr: false }
);
const Landing_15 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-15"),
  { ssr: false }
);
const Landing_16 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-16"),
  { ssr: false }
);
const Landing_17 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-17"),
  { ssr: false }
);
const Landing_18 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-18"),
  { ssr: false }
);
const Landing_19 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-19"),
  { ssr: false }
);
const Landing_20 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-20"),
  { ssr: false }
);
const Landing_21 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-21"),
  { ssr: false }
);
const Landing_22 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-22"),
  { ssr: false }
);
const Landing_23 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-23"),
  { ssr: false }
);
const Landing_24 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-24"),
  { ssr: false }
);
const Landing_25 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-25"),
  { ssr: false }
);
const Landing_26 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-26"),
  { ssr: false }
);
const Landing_27 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-27"),
  { ssr: false }
);

const Landing_31 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-31"),
  { ssr: false }
);
const Landing_32 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-32"),
  { ssr: false }
);
const Landing_33 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-33"),
  { ssr: false }
);
const Landing_34 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-34"),
  { ssr: false }
);
const Landing_35 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-35"),
  { ssr: false }
);
const Landing_36 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-36"),
  { ssr: false }
);
const Landing_37 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-37"),
  { ssr: false }
);
const Landing_38 = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/landing-38"),
  { ssr: false }
);

//custom theme make for client

import { API_ENDPOINTS } from "../../config/ApiEndpoints";
const CustomLanding = dynamic(
  () => import("../../Components/NewLandingPage/LandingPages/CustomLanding"),
  { ssr: false }
);
import { GoogleTagManager } from "@next/third-parties/google";
import { tagManagerEvent } from "../../lib/TagManagerEvent";
import { BASE_URL_VISITOR, headerHostNname } from "../../constant";

const Page = ({ domain_verify, fb_pixel, domain }) => {
  const router = useRouter();
  const { page } = router.query;
  const [loading, setIsLoading] = useState(false);
  const [shopId, setShopId] = useState("");
  const [pageInfo, setPageInfo] = useState({});
  const [domainInfo, setDomainInfo] = useState({});
  const [fbPixelFirstTime, setFbPixelFirstTime] = useState("");

  const getPageInfo = async (page) => {
    setIsLoading(true);
    const pageInformation = await axios.get(
      `${process.env.API_URL}/page/${shopId}/${page}`
    );
    if (pageInformation?.data?.success === false) {
      router.push("/404");
    }
    setPageInfo(pageInformation.data.data);
    setIsLoading(false);
  };

  const getShopInfo = useCallback(async () => {
    try {
      const shopInfo = await axios.get(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.DOMAIN}`,
        {
          headers: {
            domain:
              typeof window !== "undefined" &&
              window.location.host === "localhost:3000"
                ? headerHostNname
                : window.location.host,
          },
        }
      );
      const shopData = shopInfo?.data?.data;
      console.log("shopData", shopData);
      setDomainInfo(shopData);
      setShopId(shopData?.shop_id);
      localStorage.setItem("shop_id", shopData.shop_id);
      localStorage.setItem("shop_name", shopData.domain);
      localStorage.setItem("theme_id", shopData.theme_id);
      localStorage.setItem("landing", shopData.landing);
      Cookies.set("shop_id", shopData.shop_id);
      Cookies.set("shop_title", shopData.shop_meta_title);
      Cookies.set("shop_meta_description", shopData.shop_meta_description);
      Cookies.set("shop_logo", shopData?.shop_logo?.name);
      Cookies.set("privacy_policy", shopData?.privacy_policy);
      Cookies.set("facebook-pixel", shopData?.fb_pixel);
      setFbPixelFirstTime(shopData?.fb_pixel);
    } catch (err) {}
  }, []);

  useEffect(() => {
    getShopInfo();
  }, [page]);

  useEffect(() => {
    if (page !== undefined && shopId) {
      getPageInfo(page);
    }
  }, [page, shopId]);

  //visitor id generate
  const [visitorID, setVisitorID] = useState("");
  const setFp = async () => {
    const fp = await FingerprintJS.load();
    const { visitorId } = await fp.get();
    setVisitorID(visitorId);
  };
  useEffect(() => {
    setFp();
  }, []);

  useEffect(() => {
    if (pageInfo.product && (fbPixelFirstTime !== null || fb_pixel !== null)) {
      const timeoutId = setTimeout(() => {
        import("react-facebook-pixel")
          .then((x) => x.default)
          .then((ReactPixel) => {
            ReactPixel.init(
              `${fb_pixel !== fbPixelFirstTime ? fbPixelFirstTime : fb_pixel}`
            ); // facebookPixelId
            if (ReactPixel) {
              ReactPixel.track("InitiateCheckout", {
                category_name: "Uncategorized",
                content_ids: [pageInfo?.product?.id],
                content_name: pageInfo?.product?.product_name,
                content_type: pageInfo?.product,
                contents: pageInfo?.product,
                currency: "BDT",
                event_url: "Show",
                num_items: 1,
                subtotal: pageInfo?.product?.product?.discount,
                user_role: "guest",
                currency: "BDT",
                software: "Funnel Liner",
                software_link: "https://funnelliner.com/",
              });
              ReactPixel.track("AddToCart", {
                category_name: "Uncategorized",
                content_ids: [pageInfo?.product?.id],
                content_name: pageInfo?.product?.product_name,
                content_type: pageInfo?.product,
                contents: pageInfo?.product,
                currency: "BDT",
                num_items: 1,
                subtotal: pageInfo?.product?.product?.discount,
                user_role: "guest",
                currency: "BDT",
                software: "Funnel Liner",
                software_link: "https://funnelliner.com/",
              });
            }
          });
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [pageInfo.product, fbPixelFirstTime, fb_pixel]);

  useEffect(() => {
    if (pageInfo?.product && domainInfo?.other_script?.gtm_head) {
      tagManagerEvent(
        "begin_checkout",
        pageInfo?.product?.discounted_price,
        pageInfo?.product
      );
    }
  }, [pageInfo]);

  useEffect(() => {
    const trackVisitorDay = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL_VISITOR}shop/landing-page/update`,
          {
            shopId: pageInfo?.shop_id,
            landingPageId: pageInfo?.id,
            landingPageSlug: pageInfo?.slug,
            type: "landing",
          }, // This is the data payload
          {
            // This is the config object which includes headers
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {}
    };

    const activeUsers = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL_VISITOR}landing-page/active-users`,
          {
            shopId: pageInfo?.shop_id,
            landingPageId: pageInfo?.id,
            landingPageSlug: pageInfo?.slug,
            type: "landing",
          }, // This is the data payload
          {
            // This is the config object which includes headers
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {}
    };

    if (typeof window !== "undefined") {
      if (
        window.performance.getEntriesByType("navigation")[0].type === "navigate"
      ) {
        if (pageInfo?.shop_id) {
          trackVisitorDay();
          activeUsers();
        }
      }
    }
  }, [pageInfo?.shop_id]);

  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable Ctrl+C and other key combinations
    const handleKeyDown = (e) => {
      // Check if "Ctrl" or "Command" (for Mac) is pressed along with "C"
      if ((e.ctrlKey || e.metaKey) && e.key === "c") {
        e.preventDefault();
        // alert("Copying is disabled.");
      }
    };

    // Attach event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Clean up on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return pageInfo?.theme === null ? (
    <>
      <Header />
      <section className="MiddleBanner">
        <Container>
          <div className="overlay_text">
            <h1>{pageInfo?.title}</h1>
            <p>{pageInfo?.page_content}</p>
          </div>
        </Container>
      </section>
      <Footer />
      <SocialMedia />
      <TinyFooter />
    </>
  ) : (
    <>
      <Head>
        <title>{pageInfo?.title}</title>
        <meta name="description" content={pageInfo?.descriptions} />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href={pageInfo.shop_favicon || pageInfo.shop_logo} />
        <meta name="facebook-domain-verification" content={domain_verify} />
        <meta property="og:url" content={domain_verify} />
        <meta property="og:type" content="landing-page" />
        <meta property="og:title" content={pageInfo?.title} />
        <meta property="og:description" content={pageInfo?.descriptions} />
        <meta
          property="og:image"
          content={pageInfo.shop_favicon || pageInfo.shop_logo}
        />
        <meta
          property="og:image:secure_url"
          content={pageInfo.shop_favicon || pageInfo.shop_logo}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </Head>

      {loading && <PageLoader />}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 1 && (
        <Landing_1
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* ProbashiPackage -2 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 2 && (
        <Landing_2
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* mango -3 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 3 && (
        <Landing_3
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* green tea-4  */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 4 && (
        <Landing_4
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* bike store -5 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 5 && (
        <Landing_5
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* dron -6 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 6 && (
        <Landing_6
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* hafsa  -7*/}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 7 && (
        <Landing_7
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* mani bag -8  */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 8 && (
        <Landing_8
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* sarii -9 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 9 && (
        <Landing_9
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* hunny -10 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 10 && (
        <Landing_10
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* Sundorbon Hunny honney -11  */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 11 && (
        <Landing_11
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* hunny nut -12 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 12 && (
        <Landing_12
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* hunny nut B -13 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 13 && (
        <Landing_13
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* //mosla-14 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 14 && (
        <Landing_14
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* /T-Price  -15*/}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 15 && (
        <Landing_15
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* //jenish pant -16 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 16 && (
        <Landing_16
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* //shoes boys -17 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 17 && (
        <Landing_17
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* //ladish bag -18  */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 18 && (
        <Landing_18
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* // cream -19  */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 19 && (
        <Landing_19
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* landing 20 watch*/}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 20 && (
        <Landing_20
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {/* daymond -21  */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 21 && (
        <Landing_21
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* sarisa oil -22 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 22 && (
        <Landing_22
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* smart watch -23 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 23 && (
        <Landing_23
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* panjabi -24 * */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 24 && (
        <Landing_24
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* kajur -25 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 25 && (
        <Landing_25
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* food submimednt -26 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 26 && (
        <Landing_26
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {/* lunge -27 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 27 && (
        <Landing_27
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {/* Landing-31 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 31 && (
        <Landing_31
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {/* Landing-32 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 32 && (
        <Landing_32
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {/* Landing-33 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 33 && (
        <Landing_33
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {/* Landing-34 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 34 && (
        <Landing_34
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {/* Landing-35 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 35 && (
        <Landing_35
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {pageInfo.themes !== null && pageInfo?.themes?.name == 555 && (
        <CustomLanding
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {/* Landing-36 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 36 && (
        <Landing_36
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {/* Landing-37 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 37 && (
        <Landing_37
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}

      {/* Landing-38 */}
      {pageInfo.themes !== null && pageInfo?.themes?.name == 38 && (
        <Landing_38
          domainInfo={domainInfo}
          pageInfo={pageInfo}
          product={pageInfo.product}
          visitorID={visitorID}
        />
      )}
      {domainInfo?.other_script?.gtm_head && (
        <>
          <GoogleTagManager gtmId={domainInfo?.other_script?.gtm_head} />
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const host = context.req.headers.host || "localhost:3000";
    const domainResponse = await axios.get(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.DOMAIN}`,
      {
        headers: {
          domain: host === "localhost:3000" ? headerHostNname : host,
        },
      }
    );

    const shopInfo = await axios.get(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.SHOP.INFO}`,
      {
        headers: {
          domain: domainResponse.data.data.domain,
        },
      }
    );

    console.log("domainResponse", domainResponse.data.data.domain);
    console.log("domainResponse", domainResponse.data.data.fb_pixel);
    console.log("domainResponse", domainResponse.data.data.domain_verify);
    return {
      props: {
        domain_verify: domainResponse.data.data.domain_verify,
        fb_pixel: shopInfo.data.data.fb_pixel,
        domain: domainResponse.data.data.domain,
      },
    };
  } catch (error) {
    return {
      props: {
        domain_verify: "",
        fb_pixel: "",
        domain: "",
      },
    };
  }
}

export default Page;
