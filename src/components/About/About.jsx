import React from 'react';
import './About.css';
import about_profile from '../../assets/profile.png'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                        <div className="about-para">
                <p>I am a Full Stack Developer with expertise in C#, ASP.NET, .NET, React, MongoDB, JavaScript, MySQL, HTML5, CSS3, and Bootstrap.</p>
                <p>Passionate about building responsive, user-friendly applications and delivering efficient solutions. I am committed to continuous learning and growth to stay updated with the latest trends in technology.</p>
            </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>C#</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>ASP.NET</p><hr style={{width:"75%"}}/></div>
                    <div className="about-skill"><p>ADO.NET</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>My SQL</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achivement">
                <h1>Full Stack Developer and Digital Marketing</h1>
                <p>Legends Tech Solutions, Puducherry May 2024 – August 2024</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>Intern on MERN Stack</h1>
                <p>HYSAS Technologies, Thoothukudi January 2024 – March 2024</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>Intern on MERN <br />Stack</h1>
                <p>Legends Tech Solutions, Puducherry 04th September 2023 - 22nd September 2023</p>
            </div>
        </div>
    </div>
  )
}

export default About