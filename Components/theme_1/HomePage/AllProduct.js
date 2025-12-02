import Link from "next/link";
import {
  Container,
  Card
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";

const axios = require("axios");


import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { API_ENDPOINTS } from "../../../config/ApiEndpoints";
import { ImageLoader, imagesSize } from "../../../utils/ImageLoader";
import { useHover } from "../../../hooks/UseHover";
import { useRouter } from "next/navigation";


const AllProduct = ({shopInfo}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [allProducts, setAllProducts] = useState([]);
  const [shop_name, setShop_name] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setShop_name(shopInfo?.domain);
    const fetchData = async () => {
      if (
        router?.query?.id !== undefined &&
        router?.query?.shop !== undefined
      ) {
        const response = await axios.get(
          `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.CATEGORY_PRODUCTS}/${router?.query?.id}`,
          {
            headers: {
              "shop-id": shopInfo?.shop_id,
            },
            
          }
        );
        if (response?.data?.success) {
          setAllProducts(response?.data?.data);
          setIsLoading(false)
        }
      } else if (router?.query?.search !== undefined) {
        const response = await axios.get(
          `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.PRODUCT_SEARCH}/?search=${router?.query?.search}`,
          {
            headers: {
              "shop-id": shopInfo?.shop_id,
            },
          }
        );
        if (response?.data?.success) {
          setAllProducts(response?.data?.data);
          setIsLoading(false)
        }
      } else {
        const response = await axios.get(
          `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS}`,
          {
            headers:{
              "shop-id": shopInfo?.shop_id,
            },
          }
        );
        if (response?.data?.success) {
          setAllProducts(response?.data?.data);
          setIsLoading(false)
        }
      }
    };

    fetchData();
  }, [router?.query?.id, router?.query?.shop]);

  const handleAddToCart = (product, detailsPageUrl) => {
    if (product?.attributes?.length) {
      router.push(detailsPageUrl)
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleBuyNow = (product, detailsPageUrl) => {
    if (product?.attributes?.length) {
      router.push(detailsPageUrl)
    } else {
      dispatch(addToCart(product));
      router.push(`/${shop_name}/checkout`)
    }
  };

  const colorFromAPI = shopInfo?.multipage_color;
  const { hoveredItemId, handleHover } = useHover();
  return (
    <section className="Multipage__1">
      <Container>
        <div className='Multipage__1__AllProductDiv'>
          <h2>All Products {router?.query?.category !== undefined ? `of ${router?.query?.category} Category` : null}</h2>
        </div>
        <div className="Multipage__1__grid-container">

          {allProducts?.length ?
            allProducts.map((item, index) => {
              return (
                <div className="Multipage__1__grid-item"
                  key={item.id}
                >
                  <div className="Multipage__1__grid-itemAbs">
                  </div>
                  <div className="Multipage__1__CardImgBox">
                    <Link href={`/${shop_name}/details/${item?.slug}?id=${item?.id}`}>
                      <img src={ImageLoader(item?.main_image, imagesSize.productMainImageWidth, imagesSize.productMainImageHeight)} alt={item?.product_name} />
                    </Link>
                  </div>
                  <div className="Multipage__1__CardTxtBox">
                    <h5> <Link href={`/${shop_name}/details/${item?.slug}?id=${item?.id}`}> {item?.product_name} </Link></h5>
                    <h4 style={{ color: colorFromAPI }}>৳ {item?.discounted_price}
                      {
                        item?.price > item?.discounted_price && <del>{item?.price}</del>
                      }
                    </h4>
                    <p>{
                      item?.product_qty > 0 ? <span>In stock</span> : <span className="outStock">Out of stock</span>
                    }
                    </p>
                    <div className="d_flex MultiDuelBtn">
                      <Link
                        onClick={() => handleAddToCart(item, `/${shop_name}/details/${item?.slug}?id=${item?.id}`)}
                        href='#'
                        scroll={false}
                        className="bg6"

                        style={{
                          backgroundColor: hoveredItemId === item.id ? colorFromAPI : '',
                          border: `2px solid ${colorFromAPI}`,
                          color:hoveredItemId === item.id ? "white" : colorFromAPI
                        }}
                        onMouseEnter={() => handleHover(item.id, true)}
                        onMouseLeave={() => handleHover(item.id, false)}
                      >
                        Add To Cart
                      </Link>

                      <Link onClick={() => handleBuyNow(item, `/${shop_name}/details/${item?.slug}?id=${item?.id}`)}
                        href="#"
                        className="bg5"
                        style={{ backgroundColor: colorFromAPI }}
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }) : <div style={{ width: "100%" }}>
              {
                isLoading ? <div className="Multipage__1__grid-container">
                  {
                    Array?.from({ length: 10 }, (_, index) => (
                      <CardSkeleton key={index} />
                    ))
                  }
                </div> : "Products Not Found"
              }
            </div>
          }

        </div>
      </Container>
    </section>
  );
};

export default AllProduct;
const CardSkeleton = () => {
  return (
    <div className=" Multipage__1__grid-item">
      <Card>
        <div className=" Multipage__1__CardImgBox">
          <img src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" />
        </div>
        <div className="Multipage__1__CardTxtBox">
          <div className="placeHolderSection"></div>
          <div className="placeHolderSection"></div>
          <div className="placeHolderSection"></div>
        </div>

      </Card>
    </div>
  )
}
