import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import ImageSliderComponent from "../ImageSliderComponent";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { useState } from "react";
import ProductVariation from "./ProductVariation";
import { useToast } from "../../../hooks/useToast";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";


import { findMinMaxPrice } from "../../../utils/findMinMaxPrice";
import Link from "next/link";
import { useHover } from "../../../hooks/UseHover";


const ProductDescription = ({
  data,
  pageUrl,
  shopInfo,
  orderPermision,
  relatedProducts,
}) => {
  const ShopID = Cookies.get("shop_id");
  const dispatch = useDispatch();
  const showToast = useToast();
  const router = useRouter();
  const [selectedVariation, setSelectedVariation] = useState([]);
  const [fetchedVariantProduct, setFetchedVariantProduct] = useState({});
  const [currentPrice, setCurrentPrice] = useState(null);

  const handleAddToCart = (product, isNavigate) => {
    if (data?.attributes === null || data?.attributes.length === 0) {
      dispatch(addToCart(product));
   
      if (isNavigate === "navigateToCart") {
           router.replace(`/${router?.query?.shopName}/checkout`)
      }
    }
    if (data?.attributes?.length > 0) {
      if (selectedVariation?.length !== data?.attributes?.length) {
        showToast("Please select all variations", "error");
        return;
      } else if (fetchedVariantProduct.id) {
        const updatedProduct = {
          ...product,
          variant: fetchedVariantProduct?.variant,
          discounted_price: fetchedVariantProduct?.price,
          variant_id: fetchedVariantProduct?.id,
        };
        dispatch(addToCart(updatedProduct));
    
        if (isNavigate === "navigateToCart") {
           router.replace(`/${router?.query?.shopName}/checkout`)
        }
      }
    }
  };

  const productFetchByVariants = async (reqBody) => {
    const headers = {
      "shop-id": ShopID,
    };
    try {
      let response = await axios({
        method: "post",
        url: `${process.env.API_URL}/customer/product-combined-price`,
        headers,
        data: reqBody,
      });
      setFetchedVariantProduct(response?.data?.data);
      setCurrentPrice(response?.data?.data?.price);
    } catch (error) {
      setFetchedVariantProduct({});
      setCurrentPrice(null);
    }
  };

useEffect(() => {
  if (
    data?.attributes?.length > 0 &&
    Object.keys(selectedVariation).length === data.attributes.length
  ) {
    let attributes = data.attributes.map((attribute) => {
      // Find the selected attribute value object that matches this attribute's key
      const selectedAttr = selectedVariation.find(
        item => item.attribute_id === attribute.id
      );
      
      if (selectedAttr) {
        // Find the matching value in the attribute's values
        const valueObj = attribute.values.find(
          val => val.id === selectedAttr.attribute_value_id
        );
        return valueObj ? valueObj.value : null;
      }
      return null;
    });

    // Check if all attributes were found
    if (attributes.every(attr => attr !== null)) {
      const variantPattern = attributes.join("-");
      const postBody = {
        variant: variantPattern,
        product_id: parseInt(router.query.id),
      };
      productFetchByVariants(postBody);
    }
  }
}, [selectedVariation, data, router.query.id]);

  const { minPrice, maxPrice } = findMinMaxPrice(data?.variations);

  const colorFromAPI = shopInfo?.multipage_color;
  const { hoveredItemId, handleHover } = useHover();
  const stockStyles = {
    color: colorFromAPI,
  };
  console.log("data", data)
  return (
    <>
      <section className="ProductDetails">
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className="ProductDetailsLeft">
                <div className="ProductDetailsSlider">
                  <ImageSliderComponent data={data}></ImageSliderComponent>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={6}>
              <div className="ProductDetailsRight">
                <h4 className={`${data?.product_qty < 1 && "outStock"}`}>
                  {data?.product_qty > 0 ? "In Stock" : "Out of Stock"}
                </h4>
                <h3 style={{ color: colorFromAPI }}>{data?.product_name}</h3>
                <h3>
                  {currentPrice ? (
                    `৳ ${currentPrice}`
                  ) : data?.variations?.length ? (
                    <>
                      ৳ {minPrice}{" "}
                      {maxPrice > minPrice ? `- ৳ ${maxPrice}` : ""}
                    </>
                  ) : fetchedVariantProduct?.price ? (
                    `৳ ${fetchedVariantProduct.price}`
                  ) : (
                    `৳ ${data?.discounted_price}`
                  )}

                  {data?.price > data?.discounted_price && (
                    <del
                      style={{
                        marginLeft: "20px",
                        fontSize: "20px",
                        color: "red",
                      }}
                    >
                      {data?.price}
                    </del>
                  )}
                </h3>
                {data?.short_description != null && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.short_description,
                    }}
                  />
                )}
                {data?.variations?.length > 0 && (
                  <ProductVariation
                    colorFromAPI={colorFromAPI}
                    product={data}
                    setSelectedVariation={setSelectedVariation}
                    selectedVariation={selectedVariation}
                  />
                )}

                {/* AddCart */}
                {orderPermision ? (
                  <div className="AddCart mt-5">
                    <button
                      style={{
                        backgroundColor: colorFromAPI,
                        border: `1px solid ${colorFromAPI}`,
                      }}
                      className="Multipage__1__CartButtonDivbtn1"
                      onClick={() => handleAddToCart(data)}
                    >
                      {" "}
                      <AiOutlineShoppingCart /> ADD TO CART
                    </button>

                    <button
                      onClick={() => handleAddToCart(data, "navigateToCart")}
                      className="Multipage__1__CartButtonDivbtn2"
                      style={{
                        backgroundColor:
                          hoveredItemId === "id_BTN2" ? colorFromAPI : "",
                        border: `2px solid ${colorFromAPI}`,
                        color:
                          hoveredItemId === "id_BTN2" ? "white" : colorFromAPI,
                      }}
                      onMouseEnter={() => handleHover("id_BTN2", true)}
                      onMouseLeave={() => handleHover("id_BTN2", false)}
                    >
                      {" "}
                      <BsCart4 /> Buy Now
                    </button>
                  </div>
                ) : data?.product_qty > 0 ? (
                  <div className="AddCart mt-5">
                    <button
                      style={{
                        backgroundColor: colorFromAPI,
                        border: `1px solid ${colorFromAPI}`,
                      }}
                      className="Multipage__1__CartButtonDivbtn1"
                      onClick={() => handleAddToCart(data)}
                    >
                      {" "}
                      <AiOutlineShoppingCart /> ADD TO CART
                    </button>

                    <button
                      onClick={() => handleAddToCart(data, "navigateToCart")}
                      className="Multipage__1__CartButtonDivbtn2"
                      style={{
                        backgroundColor:
                          hoveredItemId === "id_BTN2" ? colorFromAPI : "",
                        border: `2px solid ${colorFromAPI}`,
                        color:
                          hoveredItemId === "id_BTN2" ? "white" : colorFromAPI,
                      }}
                      onMouseEnter={() => handleHover("id_BTN2", true)}
                      onMouseLeave={() => handleHover("id_BTN2", false)}
                    >
                      {" "}
                      <BsCart4 /> Buy Now
                    </button>
                  </div>
                ) : (
                  ""
                )}

                <div className="social_share_section">
                  <div>
                    <FacebookShareButton url={pageUrl}>
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                  </div>
                  <div>
                    <WhatsappShareButton url={pageUrl}>
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                  </div>
                  <div>
                    <TwitterShareButton url={pageUrl}>
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* ProductTabs */}
          <div className="ProductTabs">
            <Tabs
              defaultActiveKey="Description"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Description" title="Description">
                <div className="TabsItem">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.long_description ?? data?.long_description,
                    }}
                  />
                </div>
              </Tab>
            </Tabs>
          </div>

          {/* Related Products Section */}
          {relatedProducts && relatedProducts.length > 0 && (
            <div className="related-products" style={{ marginTop: "50px" }}>
              <h3
                style={{
                  marginBottom: "30px",
                  paddingBottom: "15px",
                  borderBottom: `2px solid ${colorFromAPI}`,
                  color: colorFromAPI,
                }}
              >
                Related Products
              </h3>
              <Row>
                {relatedProducts.map((product) => (
                  <Col
                    key={product.id}
                    xs={6}
                    md={3}
                    style={{ marginBottom: "20px" }}
                  >
                    <div
                      style={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "15px",
                        height: "100%",
                        transition: "all 0.3s ease",
                        ":hover": {
                          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Link
                        href={`/details/${product?.slug}?id=${product?.id}`}
                      >
                        <span
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <div
                            style={{
                              height: "180px",
                              overflow: "hidden",
                              marginBottom: "15px",
                            }}
                          >
                            <img
                              src={
                                product?.main_image ||
                                "/placeholder-product.jpg"
                              }
                              alt={product.product_name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                          <h5
                            style={{
                              fontSize: "16px",
                              marginBottom: "10px",
                              height: "40px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: "2",
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {product.product_name}
                          </h5>
                          <div
                            style={{
                              fontWeight: "bold",
                              color: colorFromAPI,
                              fontSize: "18px",
                            }}
                          >
                            ৳ {product.discounted_price}
                            {product.price > product.discounted_price && (
                              <span
                                style={{
                                  fontSize: "14px",
                                  color: "#999",
                                  textDecoration: "line-through",
                                  marginLeft: "8px",
                                }}
                              >
                                ৳ {product.price}
                              </span>
                            )}
                          </div>
                        </span>
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default ProductDescription;
