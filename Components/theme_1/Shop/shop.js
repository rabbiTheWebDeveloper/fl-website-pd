import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const axios = require("axios");
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import ReactPaginate from "react-paginate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const shop = () => {
  const searchString = useSelector((state) => state.searchInput.searchString);
  const router = useRouter();
  const queryData = router?.query?.data;
  const [allProducts, setAllProducts] = useState([]);
  const [shopId, setShopId] = useState();
  const [shopName, setShopName] = useState();
  const [notFound, setNotFOund] = useState(false);

  const dispatch = useDispatch();
  const handleFetchProduct = async (headers) => {
    try {
      let res = await axios({
        method: "post",
        url: `${process.env.API_URL}/customer/products/search`,
        headers,
      });
      setAllProducts(res.data.data);
    } catch (err) {
      setNotFOund(true);
      setAllProducts([]);
    }
  };

  useEffect(() => {
    const headers = {
      "shop-id": localStorage.getItem("shop_id"),
    };
    handleFetchProduct(headers);
    setShopId(localStorage.getItem("shop_id"));
    setShopName(localStorage.getItem("shop_name"));
  }, [searchString]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section className="Multipage__1">
      <Container>
        <div className="Multipage__1__AllProductDiv">
          <h2>All Products</h2>
        </div>
        <div className="Multipage__1__grid-container">
          {Array.isArray(allProducts)
            ? allProducts.map((item, index) => {
                return (
                  <div className="Multipage__1__grid-item" key={item.id}>
                    <div className="Multipage__1__grid-itemAbs"></div>
                    <div className="Multipage__1__CardImgBox">
                      <Link href={`${shop_name}/details/${item?.id}`}>
                        <img src={item?.main_image?.name} alt="" />
                      </Link>
                    </div>
                    <div className="Multipage__1__CardTxtBox">
                      <h4>
                        {item?.product_name}
                      </h4>
                      <h5>BDT {item?.price} </h5>
                      {/* <span>{item?.discount}</span> */}
                      <Link
                        onClick={() => handleAddToCart(item)}
                        href="#"
                        className="bg6"
                      >
                        {" "}
                        Add To Cart
                      </Link>
                      <Link
                        onClick={() => handleBuyNow(item)}
                        href={`/${shop_name}/checkout`}
                        className="bg5"
                      >
                        {" "}
                        Order Now
                      </Link>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </Container>
    </section>
  );
};

export default shop;
