import Head from "next/head";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderSuccess from "../../../Components/Common/OrderSuccess/OrderSuccess";

const index = () => {
  const shop_meta_title = Cookies.get("shop_title");
  const shop_logo = Cookies.get("shop_logo");

  const [orderDetails, setOrderDetails] = useState({});
  const router = useRouter();
  const orederdID = router.query.orederdID?.toString().trim();
  const shop_id = Cookies.get("shop_id");
  const orderInfoDetails = () => {
    axios
      .get(`${process.env.API_URL}/customer/order/${orederdID}/details`, {
        headers: { "shop-id": shop_id },
      })
      .then((res) => {
        setOrderDetails(res?.data?.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    if (orederdID && Number(orederdID) > 0) {
      orderInfoDetails();
    }
  }, [orederdID, shop_id]);
  return (
    <>
      <Head>
        <title>{shop_meta_title}</title>
        <link rel="icon" href={shop_logo} />
        <meta name="description" content={shop_meta_title} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <OrderSuccess orderDetails={orderDetails} />
      </main>
    </>
  );
};

export default index;
