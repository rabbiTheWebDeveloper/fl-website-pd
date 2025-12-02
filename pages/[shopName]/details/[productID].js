import React from "react";

import ProductDescription from "../../../Components/theme_1/ProductDetails/ProductDescription";
import Head from "next/head";
import ThemeOneLayout from "../../../Components/theme_1/ThemeOneLayout";
import { API_ENDPOINTS } from "../../../config/ApiEndpoints";
const axios = require("axios");
const index = ({ shopInfo, product, orderPermision, relatedProduct , pageUrl }) => {
  return (
    <>
      <Head>
        <title>{product?.product_name}</title>
        <meta property="og:title" content={product?.product_name} />
        <meta property="og:image" content={product?.main_image} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="product" />
      </Head>

      {shopInfo?.theme_id === 201 ||
        (shopInfo?.theme_id === "201" && (
          <main>
            <ThemeOneLayout shopInfo={shopInfo}>
              <ProductDescription
                data={product}
                pageUrl={pageUrl}
                shopInfo={shopInfo}
                orderPermision={orderPermision}
                relatedProducts={relatedProduct}
              />
            </ThemeOneLayout>
          </main>
        ))}
    </>
  );
};



export async function getServerSideProps(context) {
  const { query, params, req } = context;
  const pageUrl = req.headers.referer || null;
  const productId = query.id?.toString().trim();
  const shopDomain = params.shopName;

  try {
    // Step 1: Get shop info
    const shopInfoRes = await axios.get(
      `${process.env.API_URL}/shops/info`,
      {
        headers: { domain: shopDomain },
      }
    );
    const shopInfo = shopInfoRes?.data?.data || {};
    const userId = shopInfoRes?.data?.data?.user_id;
    const shopId = shopInfo?.shop_id;

    // Step 2: Get product info (if valid ID)
    let product = {};
    if (productId && Number(productId) > 0) {
      try {
        const productRes = await axios.get(
          `${process.env.API_URL}/customer/products/${productId}`,
          {
            headers: { "shop-id": shopId },
          }
        );
        product = productRes?.data?.data || {};
      } catch (err) {
        console.error("Product fetch error:", err);
      }
    }

    // Step 3: Get related products (if category_id exists)
    let relatedProduct = [];
    if (product?.category_id) {
      try {
        const relatedRes = await axios.get(
          `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.CATEGORY_PRODUCTS}/${product.category_id}?page=1`,
          {
            headers: {
              "shop-id": shopId,
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );
        relatedProduct = relatedRes?.data?.data || [];
      } catch (err) {
        console.error("Related products fetch error:", err);
      }
    }

    // Step 4: Order permission
    let orderPermStatus = null;
    try {
      const permissionRes = await axios.get(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.ORDER_PERMISION}`,
        {
          headers: {
            "shop-id": shopId,
            id: userId,
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      );
      orderPermStatus = permissionRes?.data?.data?.order_perm_status ?? null;
    } catch (err) {
      console.error("Order permission fetch error:", err);
    }

    return {
      props: {
        shopInfo,
        product,
        relatedProduct,
        orderPermision: orderPermStatus,
        pageUrl,
      },
    };
  } catch (error) {
    console.error("Main fetch error:", error);
    return {
      props: {
        shopInfo: {},
        product: {},
        relatedProduct: [],
        orderPermision: null,
        pageUrl,
      },
    };
  }
}


export default index;
