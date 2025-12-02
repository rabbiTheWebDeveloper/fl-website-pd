
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import SocialMedia from "./SocialMedia";
import TinyFooter from "./TinyFooter";



const Footer = ({ shopInfo }) => {

    return (
    
        <div>

            {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                    Delivary
              -----------------------------------------------------------------------------------------------------------------------------------------------------*/}

            <section className="Multipage__1__Delivary">

                <Container>

                    <div className="Multipage__1__HrDiv  Multipage__1__HrDivht"></div>

                    {/* Address */}

                    <div className='Multipage__1__AddressDiv'>

                        <div className="Multipage__1__AddressDivItem ">

                            <div className="Multipage__1__text">
                            <img src={shopInfo?.shop_logo} alt="Shop Logo" />
                            </div>

                            <div className="Multipage__1__text2">
                                <h3>Store Address</h3>
                                <p>{shopInfo?.address}</p>
                            </div>

                            <div className="Multipage__1__text2">
                                <h3>Contact No.</h3>
                                <p>{shopInfo?.phone}</p>
                               
                            </div>

                        </div>

                    </div>


                    <div className="Multipage__1__HrDiv  Multipage__1__HrDivht"></div>


                    <SocialMedia shopInfo={shopInfo} />


                    {/* Tiney Footer */}

                    <div className='Multipage__1__Tiney'>

                        <TinyFooter />

                    </div>


                </Container>

            </section>



        </div>

    );

};

export default Footer;
