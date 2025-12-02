import Link from 'next/link';
import React from 'react';


// Css
import style from './tiny-footer.module.css';

const TinyFooter = ({footer_text_color}) => {

    const today = new Date();
    const year = today.getFullYear();

    return (

        <>

            {/* Tiny Footer */}
            <div id="tinyFooter" className={style.tinyFooter}>

                <div className={style.d_flex}>
                    <p style={{color: footer_text_color}}>	&copy; {year} All Rights Reserved </p>
                    <p style={{color: footer_text_color}}>Designed by <Link href='https://funnelliner.com/' style={{color: footer_text_color}}>Funnel Liner</Link> </p>
                </div>

            </div>

        </>

    )

}

export default TinyFooter
