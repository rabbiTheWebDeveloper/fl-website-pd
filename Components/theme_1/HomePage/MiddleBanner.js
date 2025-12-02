
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { ImageLoader, imagesSize } from "../../../utils/ImageLoader";
const MiddleBanner = ({ shopInfo }) => {

    return (
        <section>
            <Container>
                <Row>
                    {
                        shopInfo.banner !== null && shopInfo?.banner?.length > 0 && shopInfo?.banner?.map((item, index) => <Col key={index} lg={4}>
                            <div className='Multipage__1__CardDiv'>
                                <div className='Multipage__1__CardAbs'>
                                    <Link href={item?.link ? item?.link : '#'}
                                    >
                                        <img src={ImageLoader(item?.image, imagesSize.bannerWidth, imagesSize.bannerHeight)} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </Col>)
                    }
                    {
                        shopInfo?.banner === null || shopInfo?.banner?.length === 0 && <>
                            <Col lg={4} sm={4}>
                                <div className='Multipage__1__CardDiv'>
                                    <div className='Multipage__1__CardAbs'>
                                        <img src="/theme_1/images/banner/NoAdBanner.png" alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={4}>
                                <div className='Multipage__1__CardDiv'>
                                    <div className='Multipage__1__CardAbs'>
                                        <img src="/theme_1/images/banner/NoAdBanner.png" alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={4}>
                                <div className='Multipage__1__CardDiv'>
                                    <div className='Multipage__1__CardAbs'>
                                        <img src="/theme_1/images/banner/NoAdBanner.png" alt="" />
                                    </div>
                                </div>
                            </Col>
                        </>
                    }
                </Row>
            </Container>

        </section>
    );
};

export default MiddleBanner;
