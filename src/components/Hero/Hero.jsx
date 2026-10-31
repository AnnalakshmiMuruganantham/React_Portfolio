import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Annalakshmi N M profile illustration" />
      <h1><span>I'm Annalakshmi N M</span>, Associate Software Engineer &amp; Full Stack Developer.</h1>
      <p>
        I build and enhance web applications using Angular, AngularJS, Next.js,
        C#, .NET, .NET Core and MySQL. I enjoy solving technical challenges,
        improving existing applications and creating reliable, user-friendly
        software.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor" offset={50} href="#contact">Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="https://github.com/AnnalakshmiMurugananthan" target="_blank" rel="noreferrer"
             style={{textDecoration: 'none', color: 'white'}}>GitHub Profile</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
