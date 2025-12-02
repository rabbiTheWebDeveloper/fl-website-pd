import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { Card, CardContent, CardHeader, CardTitle, Title, TitleWrapper } from "../ui/card";
import { CopyText } from '../CopyText/CopyText';

const ShopInfo =({orderTracking})=>{
  const {rider_name, rider_number}=orderTracking;
    return (
        <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent>
          <TitleWrapper>
            <Title>Seller Info</Title>
          </TitleWrapper>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell highlight>
                  <div>
                    {orderTracking?.shop_name}
                    <CopyText text={orderTracking?.shop_name} />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

     {
     rider_name && <><TitleWrapper>
     <Title>Rider Info</Title>
     </TitleWrapper>
     <Table>
     <TableBody>
    {
      rider_name && <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>
        <div>
          {rider_name}
          <CopyText text= {rider_name} />
        </div>
      </TableCell>
      </TableRow>
      }
      {
      rider_number && <TableRow>
       <TableCell>Phone</TableCell>
       <TableCell>
        <div>
          <a href={`tel:${rider_number}`}>{rider_number}</a>
          <CopyText text={rider_number} />
        </div>
       </TableCell>
       </TableRow>
       } 
    </TableBody>
     </Table></>
   }
          
        </CardContent>
      </Card>
    )
}

export default ShopInfo;