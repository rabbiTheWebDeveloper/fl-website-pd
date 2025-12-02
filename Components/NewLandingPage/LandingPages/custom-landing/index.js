import React from 'react';
import Order from '../../CommonLandingComponent/Order/Order';
import CustomerReview from '../../CommonLandingComponent/CustomerReview/CustomerReview';
import Footer1 from '../../CommonLandingComponent/Footer1/Footer1';
import Footer2 from '../../CommonLandingComponent/Footer2/Footer2';
import Footer3 from '../../CommonLandingComponent/Footer3/Footer3';
import Footer4 from '../../CommonLandingComponent/Footer4/Footer4';


const CustomLending = ({ shop_info, pageInfo, product, visitorID, }) => {
  const { checkout_b_color, checkout_button_color, checkout_button_text_color, checkout_text_color, footer, order_title, checkout_button_text } = pageInfo
  return (

    <div className="custom__landing">

      {
        pageInfo?.page_content !== null && <div dangerouslySetInnerHTML={{ __html: pageInfo?.page_content }} />
      }

      {
        pageInfo?.page_content === null && <>

          <CustomerReview />

        </>}

      <section className="section_gaps"></section>

      <section id="placeAnOrder">

        <Order default_delivery_location={shop_info?.default_delivery_location} checkout_button_text={checkout_button_text} order_title={order_title} backgroundColor={checkout_b_color} fontColor={checkout_text_color} btnColor={checkout_button_color} btnTextColor={checkout_button_text_color}
          product={product} visitorID={visitorID} />

      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Banner  -- Footer
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      {
        footer?.footer_id == 4 && <Footer1 domainName={shop_info?.domain} pageInfo={pageInfo} />
      }
      {
        footer?.footer_id == 5 && <Footer2 domainName={shop_info?.domain} pageInfo={pageInfo} />
      }
      {
        footer?.footer_id == 6 && <Footer3 domainName={shop_info?.domain} pageInfo={pageInfo} />
      }
      {
        footer?.footer_id == 7 && <Footer4 domainName={shop_info?.domain} pageInfo={pageInfo} />
      }

    </div>
  )

}

export default CustomLending
