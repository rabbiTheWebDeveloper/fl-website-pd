"use client"
import Banner from "./HomePage/Banner";
import Category from "./HomePage/Category";
import MiddleBanner from "./HomePage/MiddleBanner";
import AllProduct from "./HomePage/AllProduct";
import ThemeOneLayout from "./ThemeOneLayout";

const index = ({ shopInfo }) => {
  return (
    <div className="Theme__1">
      <main>
        <ThemeOneLayout shopInfo={shopInfo}>
          <Banner shopInfo={shopInfo} />
          <Category shopInfo={shopInfo} />
          <MiddleBanner shopInfo={shopInfo} />
          <AllProduct shopInfo={shopInfo} />
        </ThemeOneLayout>
      </main>
    </div>
  );
};

export default index;
