import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Ensure this is correct

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Annalakshmi</span>, Full Stack Developer based in INDIA.</h1>
        <p>Hi, I'm a full-stack developer specializing in the .NET stack. I create robust, user-friendly applications using C#, ASP.NET, and SQL Server. Passionate about writing clean, efficient code and solving complex problems, I'm always eager to learn and collaborate on impactful projects. Let's build something great together!</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href='https://drive.google.com/file/d/1aluAEpgi41V7enlrYhx1_cJj2VfCuNCf/view?usp=sharing' style={{textDecoration: 'none', color: 'white'}}>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero