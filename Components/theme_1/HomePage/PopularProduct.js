
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import { baseUrl } from "../../../constant/constant";
import { useRouter } from "next/router";

import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import Context from "../../Context";

const axios = require("axios");
const PopularProduct = () => {
  
 
  const dispatch = useDispatch();
  const router = useRouter();


 
  const [popularProducts, setPopularProducts] = useState([]);
  const [shopId, setShopId] = useState();

  

  return (
    <section className='PopularProduct'>
      <Container>
        <Row>

          <Col xs={12}>
            
          <h2>Porpuler</h2>
          </Col>
        </Row>
        <div className='PopularProductContent'>
         
          <Row>
            {popularProducts.map((pd, index) => {
              return (
                <Col key={pd.id} md={3}>
                  <Link href={`theme_1/${shopId}/${pd?.slug}`}>
                    <div className='PopularProductItem'>
                      <div className='img'>
                        <img src={pd?.product_image} alt='' />
                      </div>
                      <div className='text'>
                        <h3>
                          BDT {pd?.price} <del>{pd?.discount}</del>
                        </h3>
                        <p>{pd?.short_description}</p>
                        <div className='duelButton'>
                          <Link
                            href=''
                            onClick={() => handleAddToCart(pd)}
                            className='addToCart'
                          >
                            Add To Cart
                          </Link>

                          <Link onClick={() => handleBuyNow(pd)} href=''>
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PopularProduct;
