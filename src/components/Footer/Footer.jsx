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
                <p>I am a .NET Full Stack Developer with expertise in C#, ASP.NET, ADO.NET, MySQL and React. I excel at developing responsive web applications with scalable back-end architectures, prioritizing clean code and industry best practices. Ready to collaborate and create impactful solutions!</p>
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