import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMedia = ({ shopInfo }) => {
  const { fb, instagram, youtube, twitter, domain } = shopInfo;

  return (
    <section className="SocialMedia">
      {/* <Container>
        <Row className="justify-content-md-center">
          
          <Col xs={12} lg={6}>
            <div className="SocialMediaContent text-center">
              <h2>Join Us On Social Media</h2>
              <div className="SocailIcon">
                <Link href={fb ? fb : "https://www.facebook.com/"} target="_blank">
                  <FaFacebookF />
                </Link>
                <Link href={instagram ? instagram : "https://www.instagram.com/"} target="_blank">
                  <FaInstagram />
                </Link>
                <Link href={youtube ? youtube : "https://www.youtube.com/"} target="_blank">
                  <FaYoutube />
                </Link>
                <Link href={twitter ? twitter : "https://twitter.com/"} target="_blank">
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}

      <div className="Multipage__1__SocialMedia">
        <Link href={`/${domain}/privacy`}>
          Privacy Policy
        </Link>
        <Link href={`/${domain}/terms`}>
          Terms and Conditions
        </Link>
        <br /><br />
        <h2>Join Us On Social Media</h2>
        <div className="Multipage__1__SocialMediaLinkDiv">
          <Link href={fb ? fb : "https://www.facebook.com/"} target="_blank">
            <FaFacebookF />
          </Link>
          <Link href={instagram ? instagram : "https://www.instagram.com/"} target="_blank">
            <FaInstagram />
          </Link>
          <Link href={youtube ? youtube : "https://www.youtube.com/"} target="_blank">
            <FaYoutube />
          </Link>
          <Link href={twitter ? twitter : "https://twitter.com/"} target="_blank">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;