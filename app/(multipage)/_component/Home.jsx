
import Head from "next/head";
import DefaultTheme from "../../../Components/DefaultTheme/DefaultTheme";
import Theme1 from "../../../Components/theme_1/index";
import PageLoader from "../../../Components/Common/PageLoader/PageLoader";


const Home = ({ shopInfo = {} }) => {

  return (
    <>
      <Head>
        <title>{shopInfo?.shop_meta_title}</title>
        <meta name="description" content={shopInfo?.shop_meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={shopInfo?.shop_logo?.name} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {!shopInfo && <PageLoader />}
      {shopInfo.theme_id == 201 && <Theme1 shopInfo={shopInfo} />}

      {(shopInfo.theme_id === "null" || shopInfo.theme_id === null) && (
        <DefaultTheme />
      )}
    </>
  );
};

export default Home;
