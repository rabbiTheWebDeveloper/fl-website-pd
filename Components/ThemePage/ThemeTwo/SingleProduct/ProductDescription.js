import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

const ProductDescription = ({data}) => {
  return (
    <>
      <section className='ProductDetails'>
        <Container>
          {/* ProductTabs */}
          <div className='ProductTabs'>
            <Tabs
              defaultActiveKey='profile'
              id='uncontrolled-tab-example'
              className='mb-3'
            >
              <Tab eventKey='Description' title='Description'>
                <div className='TabsItem'>
                  <p>{data?.short_description}</p>
                </div>
              </Tab>

              {/* <Tab eventKey="Additional information" title="Additional information">

                <div className="TabsItem">

                    <div className="TabsItemList d_flex d_justify">
                    <h4>Weight</h4>
                    <h5>1 kg</h5>
                    </div>

                    <div className="TabsItemList d_flex d_justify">
                    <h4>Dimensions</h4>
                    <h5>224 × 65 × 564 cm</h5>
                    </div>

                    <div className="TabsItemList d_flex d_justify">
                    <h4>Brand</h4>
                    <h5>Evoylink</h5>
                    </div>

                </div>

                </Tab> */}
            </Tabs>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDescription;
