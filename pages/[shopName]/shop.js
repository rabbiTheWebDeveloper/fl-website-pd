import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
const axios = require("axios");
import { useRouter } from "next/router";
import Head from 'next/head'
import PageLoader from "../../Components/Common/PageLoader/PageLoader";
import AllProduct from "../../Components/theme_1/HomePage/AllProduct";
import ThemeOneLayout from "../../Components/theme_1/ThemeOneLayout";

const shop = () => {
  const [loading, setIsLoading] = useState(true)
  const [shopInfo, setShopInfo] = useState({});
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
      Cookies.set("shop_id", shopData.shop_id);
      setShopInfo(shopData);
      setIsLoading(false)
    } catch (err) {
      setShopInfo({})
    }
  };
  useEffect(() => {
    if (shopName !== undefined) {
      getShopInfo();
    }
  }, [shopName]);

  if (loading) {
    return <PageLoader />
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
        <div>
          <ThemeOneLayout shopInfo={shopInfo}>
            <AllProduct shopInfo={shopInfo} />
          </ThemeOneLayout>
        </div>
      )}

    </>
  );
};

export default shop;
