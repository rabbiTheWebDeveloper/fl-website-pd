import moment from 'moment';
import { Col, Container, Placeholder, Row } from "react-bootstrap";
const OrderSuccess = ({ orderDetails }) => {
    return (
        <>
            <section className='SuccessFullPage'>

                <Container>

                    <Row className="justify-content-md-center">

                        <Col lg={12}>

                            <div className="Header">
                                <h2>Thank You For Purchasing</h2>
                                <p>Thank you. Your order has been received.</p>

                            </div>

                            <div className="SuccessFullPageContent">

                                <div className="TitlePart">

                                    <ul>

                                        <li> <h5>- Order number:</h5>
                                            {
                                                orderDetails?.order_no === undefined && <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                            }
                                            {
                                                orderDetails?.order_no && <span>{orderDetails?.order_no}</span>
                                            }
                                        </li>
                                        <li>  <h5>- Date:</h5>
                                            {
                                                orderDetails?.created_at === undefined && <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                            }
                                            {
                                                orderDetails?.created_at && <span>{moment(orderDetails?.created_at).format("DD/MM/YYYY")}</span>
                                            }
                                        </li>
                                        <li>  <h5>- Payment method:</h5>
                                            {
                                                orderDetails?.id === undefined && <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                            }
                                            {
                                                orderDetails?.id && <span>Cash on delivery</span>
                                            }

                                        </li>
                                        <li>  <h5>- Total:</h5>
                                            {
                                                orderDetails?.pricing?.grand_total === undefined && <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                            }
                                            {
                                                orderDetails?.pricing?.grand_total && <span>{parseInt(orderDetails?.pricing?.grand_total) + parseInt(orderDetails?.pricing?.shipping_cost)} TK</span>
                                            }
                                        </li>
                                    </ul>
                                </div>
                                <div className="OrderDetail">
                                    <h3>Order Details</h3>
                                    <table className='Table striped bordered' responsive>

                                        <thead>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </thead>
                                

                                        <tbody>
                                            {
                                                orderDetails?.order_details?.map((item, index) => {
                                                    return (
                                                        <tr key={item?.id}>
                                                            <td>
                                                                <img src={item.product?.main_image} alt={item?.product?.product_name} />
                                                                <span >{item?.product?.product_name}</span><span>X </span><span >{item?.product_qty}</span>
                                                            </td>
                                                            <td>
                                                                <div className='d_flex'>
                                                                    <span> ৳{item?.product_qty*item?.unit_price}</span>                                                              
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                            <tr>
                                                <td>Shipping Cost</td>
                                                <td>৳ {orderDetails?.pricing?.shipping_cost === 0 ? "Free delivery" : orderDetails?.pricing?.shipping_cost}</td>
                                            </tr>

                                            <tr>
                                                <td> <h4>Subtotal</h4> </td>
                                                <td>৳ {orderDetails?.pricing?.grand_total}</td>
                                            </tr>

                                            <tr>
                                                <td> <h4>Payment Method</h4> </td>
                                                <td><p>Cash on delivery</p></td>
                                            </tr>

                                            <tr>
                                                <td> <h4>Total</h4> </td>
                                                <td> <h4>৳ {orderDetails?.pricing?.grand_total + parseInt(orderDetails?.pricing?.shipping_cost)}</h4> </td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>


                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>


        </>

    );

};

export default OrderSuccess;
