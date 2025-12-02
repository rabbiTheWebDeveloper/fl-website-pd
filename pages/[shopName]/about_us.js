import React from 'react'
import AboutUs from '../../Components/theme_1/Common/AboutUs'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import PageLoader from '../../Components/Common/PageLoader/PageLoader'
import ThemeOneLayout from '../../Components/theme_1/ThemeOneLayout'

const index = () => {
  const [loading, setIsLoading] = useState(true)
  const [shopInfo, setShopInfo] = useState({});
  const router = useRouter();
  const { shopName } = router.query;
  const headers = {
    domain: shopName,
  };

  const getShopInfo = async () => {
    try {
      const shopInfo = await axios.get(
        `${process.env.API_URL}/shops/info`,
        { headers: headers }
      );
      const shopData = shopInfo?.data?.data;
      setShopInfo(shopData);
      setIsLoading(false)
    } catch (err) {
      setShopInfo({})
    }
  };
  useEffect(() => {
    if (shopName !== undefined) {
      getShopInfo();
    }
  }, [shopName]);

  if (loading) {
    return <PageLoader />
  }
  return (
    <div className='Multipage__1'>
      {shopInfo?.theme_id == 201 &&
        <ThemeOneLayout shopInfo={shopInfo}>
          <AboutUs shopInfo={shopInfo} />
        </ThemeOneLayout>
      }
    </div>
  )
}

export default index