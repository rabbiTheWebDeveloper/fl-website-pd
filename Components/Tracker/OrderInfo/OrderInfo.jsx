import { CopyText } from "../CopyText/CopyText"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import style from '../style.module.css';

const OrderInfo =({orderTracking})=>{
    const {order_tracking_code ,grand_total, due,order_no,customer_name, phone, address } = orderTracking;
     return(
        <Card>
        <CardHeader>
          <CardTitle>
              {order_tracking_code}
            <CopyText text={order_tracking_code} />
          </CardTitle>
          <Badge color="#fd3419" className={style.status}>
            Processing
          </Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Order Id</TableCell>
                <TableCell>
                  <div>
                    {order_no}
                    <CopyText text={order_no} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow highlight>
                <TableCell>COD</TableCell>
                <TableCell>
                  <div>
                    ৳ {due}
                    <CopyText text={`৳${due}`} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>
                  <div>
                    {customer_name}
                    <CopyText text={customer_name} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone No.</TableCell>
                <TableCell>
                  <div>
                    {phone}
                    <CopyText text={phone} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Address</TableCell>
                <TableCell>
                  <div>
                    <p>{address}</p>
                    <CopyText text={address} />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
}
export default OrderInfo;