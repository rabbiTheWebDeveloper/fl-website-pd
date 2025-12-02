import React, { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

//theme one components
import CheckOut from "../../Components/theme_1/CheckOut/CheckOut";

import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import PageLoader from "../../Components/Common/PageLoader/PageLoader";
import ThemeOneLayout from "../../Components/theme_1/ThemeOneLayout";

const checkout = () => {
  const [loading, setIsLoading] = useState(true);
  const [shopInfo, setShopInfo] = useState({});
  const [shippingSettings, setShippingSettings] = useState({});
  const router = useRouter();
  const { shopName } = router.query;
  const headers = {
    domain: shopName,
  };

  const getShopInfo = async () => {
    try {
      const shopInfo = await axios.get(
        `${process.env.API_URL}/shops/info`,
        { headers: headers }
      );
      const shopData = shopInfo?.data?.data;
      setShopInfo(shopData);
      setIsLoading(false);
    } catch (err) {
      setShopInfo({});
    }
  };

  const getShippingSettings = async (shopId) => {
    try {
      const shippingSetting = await axios.get(
        `${process.env.API_URL}/customer/shipping-setting/show`,
        {
          headers: {
            "shop-id": shopId,
          },
        }
      );

      const shippingData = shippingSetting?.data?.data;
      setShippingSettings(shippingData);
    } catch (err) {
      setShippingSettings({});
    }
  };

  useEffect(() => {
    if (shopName !== undefined) {
      getShopInfo();
    }
  }, [shopName]);

  useEffect(() => {
    if (shopInfo.shop_id) {
      getShippingSettings(shopInfo.shop_id);
    }
  }, [shopInfo]);

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

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Head>
        <title>{shopInfo?.shop_meta_title}</title>
        <meta name="description" content={shopInfo?.shop_meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={shopInfo?.shop_logo?.name} />
      </Head>

      {shopInfo?.theme_id == 201 && (
        <>
          <ThemeOneLayout shopInfo={shopInfo}>
            <CheckOut
              shopInfo={shopInfo}
              visitorID={visitorID}
              shippingSettings={shippingSettings}


               domainInfo={shopInfo}
           
           
            shopID={shopInfo?.shop_id}
            />
          </ThemeOneLayout>
        </>
      )}
    </>
  );
};

export default checkout;
