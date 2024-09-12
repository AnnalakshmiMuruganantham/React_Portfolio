import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>MERN Full Stack Developer skilled in MongoDB, Express.js, React, and Node.js. I build responsive web apps with scalable back-end systems, focused on clean code and best practices. Let's collaborate!</p>
            </div>
            <div className="footer-top-right">
                 <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                 </div>
            <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Annalakshmi N M All Rights Reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer