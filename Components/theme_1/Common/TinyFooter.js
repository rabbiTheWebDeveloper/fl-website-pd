import Image from "next/image";
import Link from "next/link";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { BiCategory } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";



const TinyFooter = () => {

    return (
        
        <section className="TinyFooter">

            <Container>

                <Row className="justify-content-md-center">

                    <Col xs={12} lg={6}>

                        <div className="TinyFooterItem">
                            
                            <p>© 2023 All Rights Reserved <br/> System developed by <Link href="https://funnelliner.com/">Funnel Liner</Link> </p>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

};

export default TinyFooter;
