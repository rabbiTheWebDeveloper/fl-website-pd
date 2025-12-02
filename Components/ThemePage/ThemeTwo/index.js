import Head from 'next/head';
import Menubar from './Common/Menubar';
import Hero from './Common/Hero';
import Service from './Common/Service';
import Footer from './Common/Footer';
import CategoryImage from './HomePage/CategoryImage';
import ProductCarousel from './HomePage/ProductCarousel';
import ProductBanner from './HomePage/ProductBanner';
import ProductListCarousel from './HomePage/ProductListCarousel';
import Cookies from 'js-cookie'



export default function Home() {
  const shop_meta_title = Cookies.get('shop_title')
  const shop_meta_description = Cookies.get('shop_meta_description')
  const shop_logo = Cookies.get('shop_logo')

  return (
    <div className='ThemeTwo'>
      <Head>
        <title>{shop_meta_title}</title>
        <meta name="description" content={shop_meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={shop_logo} />
      </Head>
      <main>

        <Menubar></Menubar>
        <Hero></Hero>
        <Service></Service>
        <CategoryImage/>
        <ProductCarousel/>
        <ProductBanner/>
        <ProductListCarousel/>
        <Footer></Footer>

      </main>

    </div>
  )
}



