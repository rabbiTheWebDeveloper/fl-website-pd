import Link from 'next/link'
import React from 'react'
import TinyFooter from '../TinyFooter/TinyFooter'
import SocialMedia from '../SocialMedia/SocialMedia'
import { Container } from 'react-bootstrap'

function MainFooter({ shop_info }) {
    return (
        <Container>
            <div className='Landing__25__FooterDiv'>
                <div className='Landing__25__FooterItem'>
                    <h4>Contact Us</h4>
                    <ul>
                        <li> <img src="/images/landing-25/img34.png" /> <Link href=""> {shop_info?.phone}</Link></li>
                        <li>  <img src="/images/landing-25/img35.png" /> <Link href="">{shop_info?.email}</Link></li>
                    </ul>
                </div>
                <div className='Landing__25__FooterItem'>
                    <img className='Landing__25__FooterItemImg' src={shop_info?.shop_logo?.name} alt="" />
                </div>
                <div className='Landing__25__FooterItem'>
                    <h4>Important Link</h4>
                    <ul>
                        <li> <img src="/images/landing-25/img33.png" alt="" />  <Link href={`/${domain}/terms`}> Refund Policy </Link></li>
                        <li> <img src="/images/landing-25/img33.png" alt="" /> <Link href={`/${domain}/privacy`}>Privacy Policy</Link></li>
                        <li> <img src="/images/landing-25/img33.png" alt="" /> <Link href={`/${domain}/terms`}>Terms and Conditions</Link></li>
                    </ul>
                </div>
            </div>
            <div className="Landing__25__TinyFooter">
                <TinyFooter></TinyFooter>
            </div>
            <SocialMedia></SocialMedia>
        </Container>
    )
}

export default MainFooter