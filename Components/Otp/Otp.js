import { Link } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import { useToast } from '../../hooks/useToast';
import Loader from '../NewLandingPage/CommonLandingComponent/Order/loader';

const Otp = ({ phone }) => {
    const router = useRouter()
    const showToast = useToast()
    const [code, setcode] = useState(new Array(6).fill(""));
    const [verifyOTPLoading, setVerifyOTPLoading] = useState(false);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setcode([...code.map((d, indx) => (indx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const verifyOtp = () => {
        const areAllItemsNotEmpty = Object.values(code).every(item => item !== "");
        if (verifyOTPLoading) {
            return
        }
        if (areAllItemsNotEmpty === false) {
            showToast("6 digit OTP code required", "error")
            return
        }
        setVerifyOTPLoading(true)
        const data = {
            otp: code.toString().replaceAll(',', ''),
            phone: phone
        }
        axios.post(process.env.API_URL + '/auth/verify', data).then((response) => {
            if (response.data.success === true) {
                showToast(response.data.message)
                localStorage.clear()
                localStorage.setItem('user', JSON.stringify(response.data.data))
                localStorage.setItem('token', response.data.data.api_token)
                router.replace('https://dashboard.funnelliner.com').then(r => console.log('connected'))
                setVerifyOTPLoading(false)
            } else {
                showToast(response.data.message, "error")
                setVerifyOTPLoading(false)
            }
        }).catch(errors => {
            setVerifyOTPLoading(false)
            showToast("Something went wrong", "error")
        })

    }

    const resendOtp = () => {
        axios.post(process.env.API_URL + '/resend/otp', { phone: phone }).then((response) => {
            if (response.data.success === true) {
                showToast(response.data.message)
            } else {
                showToast(response.data.message, "error")
            }
        }).catch(errors => {
            showToast("Something went wrong", "error")
        })
    }

    return (

        <>

            <div style={{ background: "#f6f6f6" }} className="Otp">

                <div className="OtpContent">

                    <div className="Logo">
                        <img src="images/logo_1.svg" alt="" />
                    </div>

                    <h4>Confirm OTP</h4>

                    <div className="OtpCode">
                        <label>OTP has been send to given number, please enter the OTP to verify</label>

                        {code.map((data, index) => {
                            return (
                                <input
                                    type="text"
                                    className="otp-field"
                                    name="otp"
                                    maxLength={1}
                                    key={index}
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={(e) => e.target.select}
                                    autoFocus={index === 0}
                                    required={true}
                                />
                            );
                        })}
                    </div>
                    <p>Did you get the code? <Link onClick={resendOtp}>Resend Code</Link></p>
                    {
                        verifyOTPLoading ? <button key="otp_loader" className="sign_up_otp_submit_btn" type="submit" disabled>
                            <Loader key="user_verify_loading" color="#fff" />
                            Submit
                        </button> : <button key="user_otp_submit_btn" className="sign_up_otp_submit_btn" type="submit" onClick={verifyOtp}>                         
                            Submit
                        </button>
                    }
                </div>

            </div>

        </>

    )

}

export default Otp
