import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-top-left">
        <img src={logo} alt="Annalakshmi logo" />
        <p>
          Associate Software Engineer and Full Stack Developer focused on
          building, enhancing and maintaining web applications with modern
          frontend and .NET technologies.
        </p>
      </div>
      <div className="footer-top-right footer-socials">
        <a href="https://github.com/AnnalakshmiMurugananthan" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://sjmhss.org" target="_blank" rel="noreferrer">Featured freelance website ↗</a>
      </div>
    </div>
    <hr />
    <div className="footer-bottom">
      <p className="footer-bottom-left">© {new Date().getFullYear()} Annalakshmi N M. All Rights Reserved.</p>
      <div className="footer-bottom-right"><a href="#home">Back to top ↑</a></div>
    </div>
  </footer>
);

export default Footer;
