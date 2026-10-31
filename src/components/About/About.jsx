import React from 'react';
import './About.css';
import about_profile from '../../assets/profile_img.jpeg';
import theme_pattern from '../../assets/theme_pattern.svg';

const skills = [
  'Angular', 'AngularJS', 'Next.js', 'React.js', 'JavaScript',
  'C#', '.NET', '.NET Core', 'Node.js', 'MySQL', 'PostgreSQL',
  'MongoDB', 'HTML5', 'CSS3', 'Bootstrap'
];

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="Annalakshmi N M" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an Associate Software Engineer at Aloha PM Private Limited,
              working on a healthcare application and contributing to its
              ongoing development and enhancement.
            </p>
            <p>
              My current work includes frontend development with Angular,
              AngularJS and Next.js, along with C#, .NET, .NET Core and MySQL.
              I work on implementing new functionality, improving existing
              features, investigating issues and fixing bugs. I also bring
              experience with React, Node.js, MongoDB and responsive web
              development.
            </p>
          </div>
          <div className="about-skill-tags">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achivement">
          <h1>Pat on the Back</h1>
          <p>Aloha PM · August 2026</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>First Rank Holder</h1>
          <p>Computer Science Department</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>State-Level Champion</h1>
          <p>Yoga · Cricket achievements</p>
        </div>
      </div>
    </div>
  );
};

export default About;
