import React from 'react'
import '../Footer/Footer.css'
import email_logo from '../../images/email-img.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
            <h2>Ayesha <span>Siyal</span></h2>
            <p>I'am a front-end developer From Sindh pakistan 2 years of Experience in online work like remote job or internship</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={email_logo} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
               2023 Ayehsa. All rights reserved
            </p>
            <div className="footer-bottom-right">
                <p>Terms of services</p>
                <p> privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer