import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import style from './style.module.css';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Timeline, TimelineItem, TimelineWrapper, Timestamp } from './ui/timeline';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ExternalIcon } from './ui/icons';
import { formatMonth, formatTime, open } from './utils';
import Image from 'next/image';
import logo from './Header/logo.png';
import Head from 'next/head';
import { globalStyle } from './style';
import OrderInfo from './OrderInfo/OrderInfo';
import ProductInfo from './ProductInfo/ProductInfo';
import ShopInfo from './ShopInfo/ShopInfo';

export const TrackerPage = ({orderTracking, isLoading}) => {
  const trackingElementRef = useRef();

  const handlePopup = () => {
    if (trackingElementRef.current) {
      open(trackingElementRef.current);
    }
  };

  return (
    <>
      <Head>
        <style global jsx>
          {globalStyle}
        </style>
      </Head>
      <div id="__app" className={style.app}>
        <Header />
        <main className={`${style.main} container`}>
          <div className={style.info}>
          <OrderInfo orderTracking={orderTracking}/>
          <ProductInfo orderTracking={orderTracking}/>
          <ShopInfo orderTracking={orderTracking}/>  
           
          </div>

          <div className={style.timelineContainer}>
            <Card ref={trackingElementRef} id="tracking-card">
              <CardHeader id="tracking-card-header">
                <CardTitle>
                  <Image src={logo} alt="Funnel Liner" style={{ height: '20px', width: 'auto', display: 'none' }} id="logo" />
                  Tracking Details
                </CardTitle>
                <Button id="popout-button" className={style.popoutButton} onClick={handlePopup}>
                  Open in Full Page
                  <ExternalIcon className={style.externalIcon} />
                </Button>
              </CardHeader>
              <CardContent className={style.timeline} id="timeline">
                <TimelineWrapper>

                  {
                    orderTracking?.tracker_timeline?.map((item, index)=><Timeline key={index}>
                    <Timestamp >
                      <h1>{formatMonth(item?.created_at)}</h1>
                      <h2>{formatTime(item?.created_at)}</h2>
                    </Timestamp>
                    <TimelineItem>
                      <p>{item?.note}</p>
                    </TimelineItem>
                  </Timeline>)

                  }
                </TimelineWrapper>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
