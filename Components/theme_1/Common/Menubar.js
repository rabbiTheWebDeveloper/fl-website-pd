import Link from "next/link";
import { Container, Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useEffect } from "react";

import { GoSearch } from "react-icons/go";
import {
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineShop,
} from "react-icons/ai";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import { ImageLoader, imagesSize } from "../../../utils/ImageLoader";
import { useRouter } from "next/navigation";

const Menubar = ({ shopInfo }) => {
  const { fb, instagram, youtube, twitter } = shopInfo;
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //category list
  const [categories, setCategories] = useState([]);

  async function handleFetchCategories(headers) {
    const response = await fetch(`${process.env.API_URL}/customer/categories`, {
      headers: headers,
    });
    const data = await response.json();

    if (data.success === true) {
      setCategories(data?.data);
    }
  }

  useEffect(() => {
    const headers = {
      "shop-id": shopInfo?.shop_id,
    };
    handleFetchCategories(headers);
  }, []);

  //add to cart total item count
  const [cart1, setCart1] = useState([]);
  const carts = useSelector((state) => state.cart);
  useEffect(() => {
    setCart1(carts?.cartItems);
  }, [carts]);
  const cartQuantitys = [];
  cart1.map((item, index) => {
    return [cartQuantitys.push(item.cartQuantity)];
  });
  const totalItem = cartQuantitys.reduce((partialSum, a) => partialSum + a, 0);

  const colorFromAPI = shopInfo.multipage_color;

  return (
    <>
      {/* Desktop Version */}
      <div className="Multipage__1__DextopVs">
        <Container>
          <div className="Multipage__1__ManubarDiv">
            <div className="Multipage__1__ManubarItem1">
              {/* { shopInfo?.shop_logo} */}
              <Link href={`/${shopInfo?.domain}`}>
                <img
                  src={ImageLoader(
                    shopInfo?.shop_logo,
                    imagesSize?.logoImageWidth
                  )}
                  alt="Shop Logo"
                />
              </Link>
            </div>
            <div className="Multipage__1__ManubarItem2">
              <div
                className="Multipage__1__ManubarInputDiv"
                style={{ border: `1px solid ${colorFromAPI}` }}
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                  onClick={() =>
                    router.push(
                      `/${shopInfo?.domain}/shop?search=${searchInput}`
                    )
                  }
                  type="button"
                  style={{ backgroundColor: colorFromAPI }}
                >
                  <GoSearch />
                </button>
              </div>
            </div>
            <div className="Multipage__1__ManubarItem3">
              <ul>
                <li>
                  <Link href={`/${shopInfo?.domain}/checkout`}>
                    <AiOutlineShoppingCart className="Multipage__1__menuicon"></AiOutlineShoppingCart>
                  </Link>
                  <div
                    className="Multipage__1__TopNum"
                    style={{ backgroundColor: colorFromAPI }}
                  >
                    {totalItem}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="Multipage__1__HrDiv"></div>
        <Container>
          <div className="Multipage__1__MenubarDiv2">
            <div className="Multipage__1__MenubarDiv2Item">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <div
                    className="Multipage__1__MenubarImgDiv"
                    style={{ backgroundColor: colorFromAPI }}
                  >
                    <img src="/images/multipage-1/img.png" alt="" />
                    <span>Browse Categories</span>
                    <div>
                      {" "}
                      <IoIosArrowDown />{" "}
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div
                    className="Multipage__1__DropItem"
                    style={{ color: "black" }}
                  >
                    {categories?.map((item, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          onClick={() =>
                            router.push(
                              `/${shopInfo?.domain}/shop?category=${item.name
                                .split(" ")
                                .join("-")}&shop=${item?.shop_id}&id=${
                                item?.id
                              }`
                            )
                          }
                        >
                          {item.name}
                        </Dropdown.Item>
                      );
                    })}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <div className="Multipage__1__MenuDiv">
                <Link href={`/${shopInfo?.domain}`}>Home</Link>
                <Link href={`/${shopInfo?.domain}/shop`}>Shop</Link>
                <Link href={`/${shopInfo?.domain}/about_us`}>About Us</Link>
              </div>
            </div>
            <div className="Multipage__1__MenubarDiv2Item2">
              <Link
                href={fb ? fb : "https://www.facebook.com/"}
                target="_blank"
              >
                {" "}
                <FaFacebookF />{" "}
              </Link>
              <Link
                href={instagram ? instagram : "https://www.instagram.com/"}
                target="_blank"
              >
                {" "}
                <FaInstagram />{" "}
              </Link>
              <Link
                href={youtube ? youtube : "https://www.youtube.com/"}
                target="_blank"
              >
                {" "}
                <FaYoutube />{" "}
              </Link>
              <Link
                href={twitter ? twitter : "https://twitter.com/"}
                target="_blank"
              >
                {" "}
                <FaTwitter />{" "}
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Version */}
      <div className="Multipage__1__MobileVs" style={{ paddingBottom: "60px" }}>
        {/* Top Search and Social Bar */}
        <div
          className="Multipage__1__MobileVsBg"
          style={{
            backgroundColor: colorFromAPI,
            padding: "10px 0",
          }}
        >
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                  }}
                >
                  <IoIosMenu style={{ color: "#fff", fontSize: "24px" }} />
                </Button>
              </div>

              <Link href={`/${shopInfo?.domain}`}>
                <img
                  style={{
                    height: "30px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                  src={ImageLoader(
                    shopInfo?.shop_logo,
                    imagesSize?.logoImageWidth
                  )}
                  alt="Shop Logo"
                />
              </Link>

              <Link
                href={`/${shopInfo?.domain}/checkout`}
                style={{ position: "relative" }}
              >
                <AiOutlineShoppingCart
                  style={{ color: "#fff", fontSize: "24px" }}
                />
                {totalItem > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      backgroundColor: "#fff",
                      color: colorFromAPI,
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {totalItem}
                  </div>
                )}
              </Link>
            </div>

            {/* <div style={{ marginTop: "10px" }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  onChange={(e) => setSearchInput(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    padding: "8px 12px",
                    outline: "none",
                  }}
                />
                <button
                  onClick={() =>
                    router.push(
                      `/${shopInfo?.domain}/shop?search=${searchInput}`
                    )
                  }
                  type="button"
                  style={{
                    backgroundColor: colorFromAPI,
                    // color: "black",
                    border: "none",
                    padding: "0 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GoSearch />
                </button>
              </div>
            </div> */}
          </Container>
        </div>

        {/* Bottom Navigation Bar */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-around",
            padding: "10px 0",
          }}
        >
          <Link
            href={`/${shopInfo?.domain}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#333",
              textDecoration: "none",
              fontSize: "12px",
            }}
          >
            <AiOutlineHome style={{ fontSize: "20px", marginBottom: "4px" }} />
            Home
          </Link>

          <Dropdown align="end">
            <Dropdown.Toggle
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "black",
                fontSize: "12px",
                padding: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IoIosMenu style={{ fontSize: "20px", marginBottom: "4px" }} />
                Categories
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                width: "90vw",
                maxHeight: "60vh",
                overflowY: "auto",
                marginTop: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#fff",
                border: "1px solid #eee",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                padding: "0",
              }}
            >
              {categories?.length > 0 ? (
                categories.map((item, index) => (
                  <Dropdown.Item
                    as="button"
                    key={index}
                    onClick={() => {
                      router.push(
                        `/${shopInfo?.domain}/shop?category=${item.name
                          .split(" ")
                          .join("-")}&shop=${item?.shop_id}&id=${item?.id}`
                      );
                    }}
                    style={{
                      padding: "12px 15px",
                      color: "#333",
                      backgroundColor: "#fff",
                      borderBottom: "1px solid #f5f5f5",
                      fontSize: "14px",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    {item.name}
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item
                  as="div"
                  disabled
                  style={{ padding: "12px", fontSize: "14px", color: "#777" }}
                >
                  No Categories Found
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Link
            href={`/${shopInfo?.domain}/shop`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#333",
              textDecoration: "none",
              fontSize: "12px",
            }}
          >
            <AiOutlineShop style={{ fontSize: "20px", marginBottom: "4px" }} />
            Shop
          </Link>

          <Link
            href={`/${shopInfo?.domain}/about_us`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#333",
              textDecoration: "none",
              fontSize: "12px",
            }}
          >
            <FaUserAlt style={{ fontSize: "20px", marginBottom: "4px" }} />
            About
          </Link>
        </div>

        {/* Mobile Menu Offcanvas */}
        <Offcanvas show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header
            closeButton
            style={{ borderBottom: "1px solid #eee" }}
          >
            <Offcanvas.Title>
              <Link href={`/${shopInfo?.domain}`}>
                <img
                  style={{ height: "30px" }}
                  src={shopInfo?.shop_logo}
                  alt="Shop Logo"
                />
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ padding: 0 }}>
            <div style={{ padding: "15px", borderBottom: "1px solid #eee" }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  onChange={(e) => setSearchInput(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    padding: "10px 15px",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                />
                <button
                  
                  onClick={() => {
                    router.push(
                      `/${shopInfo?.domain}/shop?search=${searchInput}`
                    );
                    handleClose();
                  }}
                  type="button"
                  style={{
                    backgroundColor: colorFromAPI ? colorFromAPI :  "#3bb77e",
                    color: "#fff",
                    border: "none",
                    padding: "0 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GoSearch />
                </button>
              </div>
            </div>

            <div style={{ padding: "15px 0" }}>
              <Link
                href={`/${shopInfo?.domain}`}
                style={{
                  display: "block",
                  padding: "12px 20px",
                  color: "#333",
                  textDecoration: "none",
                  borderLeft: `4px solid ${colorFromAPI}`,
                  fontWeight: "500",
                }}
              >
                Home
              </Link>

              <Link
                href={`/${shopInfo?.domain}/shop`}
                style={{
                  display: "block",
                  padding: "12px 20px",
                  color: "#333",
                  textDecoration: "none",
                }}
              >
                Shop
              </Link>

              <Link
                href={`/${shopInfo?.domain}/about_us`}
                style={{
                  display: "block",
                  padding: "12px 20px",
                  color: "#333",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </div>

            <div
              style={{
                padding: "20px",
                borderTop: "1px solid #eee",
                marginTop: "20px",
              }}
            >
              <h6 style={{ marginBottom: "15px", color: "#666" }}>Follow Us</h6>
              <div style={{ display: "flex", gap: "15px" }}>
                <Link
                  href={fb ? fb : "https://www.facebook.com/"}
                  target="_blank"
                  style={{
                    color: colorFromAPI,
                    fontSize: "20px",
                  }}
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href={instagram ? instagram : "https://www.instagram.com/"}
                  target="_blank"
                  style={{
                    color: colorFromAPI,
                    fontSize: "20px",
                  }}
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={youtube ? youtube : "https://www.youtube.com/"}
                  target="_blank"
                  style={{
                    color: colorFromAPI,
                    fontSize: "20px",
                  }}
                >
                  <FaYoutube />
                </Link>
                <Link
                  href={twitter ? twitter : "https://twitter.com/"}
                  target="_blank"
                  style={{
                    color: colorFromAPI,
                    fontSize: "20px",
                  }}
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Menubar;
