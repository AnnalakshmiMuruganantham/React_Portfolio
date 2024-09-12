import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Ensure this is correct

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Annalakshmi</span>, Full Stack Developer based in INDIA.</h1>
        <p>Hi, I'm a full-stack developer specializing in the MERN stack. I build dynamic, user-friendly applications using React, Node.js, and MongoDB. Passionate about clean code and solving challenges, I'm always eager to learn and collaborate on exciting projects. Let's create something amazing!</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero