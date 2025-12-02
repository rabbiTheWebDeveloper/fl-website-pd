
import { Container, } from "react-bootstrap";

// Import Swiper React components
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation, FreeMode } from "swiper";

import { ImageLoader, imagesSize } from "../../../utils/ImageLoader";
import { useRouter } from "next/navigation";



const Category = ({ shopInfo }) => {
  const router = useRouter();
  const [categories, setCategories] = useState([])

  async function handleFetchCategories(headers) {
    const response = await fetch(
      `${process.env.API_URL}/customer/categories`, { headers: headers }
    );
    const data = await response.json();
    if (data.success === true) {
      setCategories(data?.data)
    }
  }
  useEffect(() => {
    const headers = {
      "shop-id": shopInfo.shop_id,
    }
    handleFetchCategories(headers).then(r => console.log())
  }, [])

  return (

    <section>
      <Container>
        <div className='Multipage__1__CategoriesDiv'>
          <h2>Categories</h2>
          <div>
            <Swiper
              slidesPerView={7}
              spaceBetween={30}
              slidesPerGroup={1}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper2"
              navigation={true}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                575: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },

                1280: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },

                1480: {
                  slidesPerView: 7,
                  spaceBetween: 30,
                },

              }}
            >
              {categories?.map((item, index) => {
                return (

                  <SwiperSlide key={item.id}>

                    <div onClick={() => router.push(`/${shopInfo?.domain}/shop?category=${item.name.split(" ").join("-")}&shop=${item?.shop_id}&id=${item?.id}`)} style={{ cursor: 'pointer' }}>

                      <div className='Multipage__1__Categories__Slider__Div'>

                        <div className='Multipage__1__Categories__Slider__Div_Dflex'>

                          <div className='Multipage__1__Categories__Slider__ImgDiv'>

                            <img src={ImageLoader(item?.image, imagesSize.categoryIconWidth, imagesSize.categoryIconWidth)} />

                          </div>

                        </div>

                        <h4>{item?.name} </h4>

                      </div>

                    </div>

                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Category;
