import { CopyText } from "../CopyText/CopyText";
import { Card, CardContent, CardHeader, CardTitle, Title, TitleWrapper } from "../ui/card"
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
const ProductInfo=({orderTracking})=>{
    const {product_names, quantity, grand_total, advanced, discount, shipping_cost } = orderTracking;
      return (
             <Card>
              <CardContent>
                <TitleWrapper>
                  <Title>Product Info</Title>
                </TitleWrapper>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Product Name</TableCell>
                      <TableCell>
                         {
                            product_names?.map((item, index)=> <div key={index}>
                             {item}
                             <CopyText text={item} />
                            </div>)
                         }
                       
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Quantity</TableCell>
                      <TableCell>
                        <div>
                          {quantity}
                          <CopyText text= {quantity} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Price</TableCell>
                      <TableCell>
                        <div>
                           ৳ {grand_total}
                          <CopyText text={`৳${grand_total}`} />
                        </div>
                      </TableCell>
                    </TableRow>
                    {
                       advanced > 0 &&<TableRow>
                       <TableCell>Advance</TableCell>
                       <TableCell>
                         <div>
                           ৳ {advanced}
                           <CopyText text={`৳ ${advanced}`} />
                         </div>
                       </TableCell>
                     </TableRow>
                    }

                    {
                        discount > 0 &&  <TableRow>
                        <TableCell>Discount</TableCell>
                        <TableCell>
                          <div>
                            ৳{discount}
                            <CopyText text={discount} />
                          </div>
                        </TableCell>
                      </TableRow>
                    }

                    <TableRow>
                      <TableCell>Shipping Cost</TableCell>
                      <TableCell>
                        <div>
                          ৳ {shipping_cost}
                          <CopyText text={shipping_cost} />
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
    )
}

export default ProductInfo;