import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Skeleton from '../../../Components/Common/Skeleton/Skeleton';
import { Col, Container, Row } from 'react-bootstrap';

function index() {
    const router = useRouter();
    const [shop_info, setShopInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const shopDomainName = router.query.shopName;
    const headers = {
        domain: shopDomainName,
    };
    const getShopInfo = async () => {
        try {
            const shopInfo = await axios.get(
                `${process.env.API_URL}/shops/info`,
                { headers: headers }
            );
            const shopData = shopInfo?.data?.data;
            setShopInfo(shopData)
            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            setShopInfo({})       
        }
    };
    useEffect(() => {
        if (shopDomainName) {
            getShopInfo();
        }
    }, [shopDomainName]);

    if (isLoading) {
        return <Skeleton />
    }
    return (
        <>
            <Head>
                <title>{shop_info?.shop_meta_title}</title>
                <meta name='description' content={shop_info?.shop_meta_description} />
                <meta name='viewport' content='width=device-width, user-scalable=no' />
                <link rel='icon' href={shop_info?.shop_favicon} />
            </Head>

            <Container>
                <Row>
                    <Col lg={12}>
                        <div>
                            <h1 style={{ background: "#894BCA", padding: "20px", color: "white", fontWeight: "600" }} align={"center"}>Terms&condition</h1>
                            <div style={{ width: "900px", margin: "50px auto" }}>
                                {
                                    shop_info?.tos !== null && shop_info?.tos !== undefined && <div dangerouslySetInnerHTML={{ __html: shop_info?.tos }} />
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default index