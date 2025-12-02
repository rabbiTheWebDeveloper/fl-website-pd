import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// Css
import style from './socia-media.module.css';
const SocialMedia = ({fb,twitter, linkedin, instagram, youtube, footer_text_color}) => {
    return (
        <div className='SocialMedia'>
            <div id="SocialMediaContent" className={style.SocialMediaContent}>
                <Link style={{color:footer_text_color}} href={fb ? fb:"#"} target="_blank" className={style.FB}> <FaFacebookF /> </Link>
                <Link style={{color:footer_text_color}} href={instagram ? instagram:"#"}  target="_blank" className={style.INS}> <FaInstagram /> </Link>
                <Link  style={{color:footer_text_color}} href={youtube ? youtube:"#"} target="_blank" className={style.YT}> <FaYoutube /> </Link>
                <Link style={{color:footer_text_color}} href={twitter ? twitter:"#"} target="_blank" className={style.TW}> <FaTwitter /> </Link>
            </div>
        </div >
    )
}

export default SocialMedia
