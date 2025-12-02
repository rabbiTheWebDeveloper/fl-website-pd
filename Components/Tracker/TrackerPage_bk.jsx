import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { globalStyle } from './style';
import style from './style_bk.module.css';

import { Card, CardContent, CardHeader, CardTitle, Title, TitleWrapper } from './ui/card';
import { CopyText } from './CopyText/CopyText';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableRow } from './ui/table';
import { Timeline, TimelineItem, TimelineWrapper, Timestamp } from './ui/timeline';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ExternalIcon } from './ui/icons';
import { open } from './utils';
import logo from './Header/logo.png';
import Image from 'next/image';

export const TrackerPage = () => {
  const trackingElementRef = useRef();

  const handlePopup = () => {
    if (trackingElementRef.current) {
      open(trackingElementRef.current);
    }
  };
  return (
    <div id="__app" className={style.app}>
      <style>{globalStyle}</style>
      <Header />
      <main className={`${style.main} container`}>
        <Card>
          <CardHeader>
            <CardTitle>
              #DG2403242XSXXL
              <CopyText text="DG2403242XSXXL" />
            </CardTitle>
            <Badge color="#fd3419" className={style.status}>
              Processing
            </Badge>
          </CardHeader>
          <CardContent>
            <TitleWrapper>
              <Title>Product Info</Title>
            </TitleWrapper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Order Id</TableCell>
                  <TableCell>
                    <div>
                      #EFDEFE573EFCE
                      <CopyText text="#EFDEFE573EFCE" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow highlight>
                  <TableCell>COD</TableCell>
                  <TableCell>
                    <div>
                      ৳ 10,800
                      <CopyText text="৳ 10,800" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>
                    <div>
                      Laptop
                      <CopyText text="Laptop" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quantity</TableCell>
                  <TableCell>
                    <div>
                      2500
                      <CopyText text="2500" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>
                    <div>
                      ৳ 10,800
                      <CopyText text="৳ 10,800" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Advance</TableCell>
                  <TableCell>
                    <div>
                      ৳ 10,800
                      <CopyText text="৳ 10,800" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Discount</TableCell>
                  <TableCell>
                    <div>
                      ৳ 0
                      <CopyText text="৳ 0" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shipping Cost</TableCell>
                  <TableCell>
                    <div>
                      ৳ 20
                      <CopyText text="৳ 20" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Information</CardTitle>
          </CardHeader>
          <CardContent>
            <TitleWrapper>
              <Title>Customer Info</Title>
            </TitleWrapper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>
                    <div>
                      John Doe
                      <CopyText text="John Doe" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Phone No.</TableCell>
                  <TableCell>
                    <div>
                      +880 123456789
                      <CopyText text="+880 123456789" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Address</TableCell>
                  <TableCell>
                    <div>
                      <p>Wabda road, Rampura Dhaka, 1219</p>
                      <CopyText text="Wabda road, Rampura Dhaka, 1219" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <TitleWrapper>
              <Title>Seller Info</Title>
            </TitleWrapper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Company Name</TableCell>
                  <TableCell highlight>
                    <div>
                      Gift Valley
                      <CopyText text="Gift Valley" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <TitleWrapper>
              <Title>Rider Info</Title>
            </TitleWrapper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>
                    <div>
                      Sarah Miller
                      <CopyText text="Sarah Miller" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Phone</TableCell>
                  <TableCell>
                    <div>
                      <a href="tel:+880 123456789">+880 123456789</a>
                      <CopyText text="+880 123456789" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card ref={trackingElementRef} id="tracking-card">
          <CardHeader id="tracking-card-header">
            <CardTitle className={style.cardTitle}>
              <Image src={logo} alt="Funnel Liner" style={{ height: '20px', width: 'auto', display: 'none' }} id="logo" />
              Tracking Updates
            </CardTitle>
            <Button id="popout-button" className={style.popoutButton} onClick={handlePopup}>
              Open in Pop-Out
              <ExternalIcon className={style.externalIcon} />
            </Button>
          </CardHeader>
          <CardContent className={style.timeline} id="timeline">
            <TimelineWrapper>
              <Timeline>
                <Timestamp>
                  <h1>Mar 13</h1>
                  <h2>10:30 AM</h2>
                </Timestamp>
                <TimelineItem>
                  <p>Consignment has been marked as delivered by rider.</p>
                </TimelineItem>
              </Timeline>
              <Timeline>
                <Timestamp>
                  <h1>Mar 13</h1>
                  <h2>10:30 AM</h2>
                </Timestamp>
                <TimelineItem>
                  <p>Rider Note: "প্রাপক ফোন রিসিভ করেন নি"</p>
                </TimelineItem>
              </Timeline>
              <Timeline>
                <Timestamp>
                  <h1>Mar 13</h1>
                  <h2>10:30 AM</h2>
                </Timestamp>
                <TimelineItem>
                  <p>Assigned to rider.</p>
                </TimelineItem>
              </Timeline>
              <Timeline>
                <Timestamp>
                  <h1>Mar 13</h1>
                  <h2>10:30 AM</h2>
                </Timestamp>
                <TimelineItem>
                  <p>Received at SHAHRASTI (CHANDPUR).</p>
                </TimelineItem>
              </Timeline>
              <Timeline>
                <Timestamp>
                  <h1>Mar 13</h1>
                  <h2>10:30 AM</h2>
                </Timestamp>
                <TimelineItem>
                  <p>Received at HAJIGANJ (CHANDPUR).</p>
                </TimelineItem>
              </Timeline>
              <Timeline>
                <Timestamp>
                  <h1>Mar 13</h1>
                  <h2>10:30 AM</h2>
                </Timestamp>
                <TimelineItem>
                  <p>Received at HAJIGANJ (CHANDPUR).</p>
                </TimelineItem>
              </Timeline>
              <Timeline>
                <Timestamp>
                  <h1>Mar 13</h1>
                  <h2>10:30 AM</h2>
                </Timestamp>
                <TimelineItem>
                  <p>Received at HAJIGANJ (CHANDPUR).</p>
                </TimelineItem>
              </Timeline>
              <Timeline>
                <Timestamp>
                  <h1>Mar 13</h1>
                  <h2>10:30 AM</h2>
                </Timestamp>
                <TimelineItem>
                  <p>Received at HAJIGANJ (CHANDPUR).</p>
                </TimelineItem>
              </Timeline>
              {Array.from({ length: 55 }, (_, index) => (
                <Timeline key={index}>
                  <Timestamp>
                    <h1>Mar 13</h1>
                    <h2>10:30 AM</h2>
                  </Timestamp>
                  <TimelineItem>
                    <p>Received at HAJIGANJ (CHANDPUR).</p>
                  </TimelineItem>
                </Timeline>
              ))}
            </TimelineWrapper>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};
