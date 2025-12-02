import Link from 'next/link'
import React from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import {IoIosArrowForward } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { BiMailSend,BiPhoneCall,BiLocationPlus } from "react-icons/bi";

const Contact = () => {

  return (

        
        <div className='AboutUsMultipage  ContactUsMultipage'>


          {/* ===================================================================================================
                              ContactUs banner
          ========================================================================================================*/}



            <div className="AboutUsMultipage__bannerBg">

                <img src="/images/multipage-1/contactbg.png" alt="" />

                <div className='AboutUsMultipage__bannerTxtDiv'>

                    <Container>

                        <Row>

                            <Col>

                                    <div className='AboutUsMultipage__bannerTxt'>

                                        <h2>About Iconic</h2>

                                        <h4><Link href="/multipage-1">Home <IoIosArrowForward/> </Link> <Link href="/multipage-1/aboutus">Contact</Link></h4>
                                        
                                    </div>

                            </Col>

                        </Row>
                        
                    </Container>

                </div>

          
            </div>


            <div className="Section__Gaps"></div>


          {/* ===================================================================================================
                              ContactUs Map
          ========================================================================================================*/}


          <section>

            <Container>

              <Row>

                 <Col sm={12} lg={4}>


                  <div className='ContactUsMultipage__Mapdiv'>

                    <h4>Stay Connected </h4>


                    <div className='ContactUsMultipage__MapdivBox'>

                        <div className='ContactUsMultipage__MapTxt'>

                          <h5>contact@softitcare.com</h5>

                          <h5>+8801799733234</h5>

                        </div>

                        <div className='ContactUsMultipage__MapIcon__Div'>

                            <BiMailSend/>

                        </div>

                    </div>



                    <div className='ContactUsMultipage__MapdivBox'>

                        <div className='ContactUsMultipage__MapTxt'>

                          <h5>+880 123 456 789</h5>

                          <h5>+9987574</h5>

                        </div>

                        <div className='ContactUsMultipage__MapIcon__Div'>

                            <BiPhoneCall/>

                        </div>

                    </div>



                    <div className='ContactUsMultipage__MapdivBox'>

                        <div className='ContactUsMultipage__MapTxt'>

                          <h5>Digital Agency Network 2021 Eastbourne</h5>

                        </div>

                        <div className='ContactUsMultipage__MapIcon__Div'>

                            <BiLocationPlus/>

                        </div>

                    </div>



                  </div>

                 
                 </Col>

                 <Col sm={12} lg={8}>

                      <div className='ContactUsMultipage__Mapdiv'>

                       <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d165155.9406856077!2d90.26338829448414!3d23.83761008296193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssoft%20it%20Care!5e0!3m2!1sen!2sbd!4v1686389823561!5m2!1sen!2sbd" style={{width:"300", height:"720", border:"0"  }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                      </div>
                 
                 </Col>

              </Row>

            </Container>

          </section>


          <div className="Section__Gaps"></div>

          {/* ===================================================================================================
                              ContactUs Map
          ========================================================================================================*/}

        <section>

          <Container>

            <Row>

              <Col>

                  <div className='ContactUsMultipage__FromDiv'>

                    <div className='ContactUsMultipage__FromD__Contant__Div'>

                      <h4>Drop Us a Line</h4>

                      <p>Your email address will not be published. Required fields are marked.</p>

                      <Form>

                          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Enter Your name" />
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Phone number" />
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Email Address" />
                          </Form.Group>
                          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Message" rows={5} />
                          </Form.Group>

                          <div className="d-grid gap-2">

                            <Button  size="lg">
                             SUBMIT
                            </Button>
                  
                          </div>

                      </Form>


                    </div>


              


                  </div>

              </Col>

            </Row>
            
          </Container>

        </section>









          <div className="Section__Gaps"></div>

          {/* ===================================================================================================
                              ContactUs Map
          ========================================================================================================*/}












        </div>


  )
  
}

export default Contact