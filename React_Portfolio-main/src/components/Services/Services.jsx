import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Aloha PM Private Limited',
    period: 'September 25, 2025 – Present',
    details: [
      'Contributing to the ongoing development and enhancement of a healthcare application.',
      'Implementing new functionality and improving existing application features.',
      'Investigating assigned defects, debugging issues and implementing fixes.',
      'Working across Angular, AngularJS, Next.js, C#, .NET, .NET Core and MySQL.'
    ]
  },
  {
    role: 'Technical Training',
    company: 'Aloha PM Private Limited',
    period: 'March 4, 2025 – September 24, 2025',
    details: [
      'Completed six months of technical training before transitioning into the Associate Software Engineer role.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Legends Tech Solutions, Puducherry',
    period: 'March 2024 – August 2024',
    details: [
      'Developed responsive web interfaces using React, HTML, CSS and JavaScript.',
      'Contributed to website development and on-page SEO activities.',
      'Supported digital marketing and social media campaign activities.'
    ]
  },
  {
    role: 'MERN Stack Intern',
    company: 'HYSAS Technologies, Thoothukudi',
    period: 'January 2024 – March 2024',
    details: [
      'Worked on Talent Sync using MongoDB, Express, React and Node.js.',
      'Used Cloudinary for media handling and NodeMailer for email functionality.'
    ]
  },
  {
    role: 'Web Development / MERN Stack Intern',
    company: 'Legends Tech Solutions, Puducherry',
    period: 'September 4 – 22, 2023',
    details: [
      'Built web interface components using HTML, CSS, Bootstrap and React.',
      'Created a login page and photo gallery as part of the internship.'
    ]
  },
  {
    role: 'Freelance Web Developer',
    company: 'Edu Web Technologies, Chennai',
    period: 'Freelance',
    details: [
      'Developed the official website for St. Joseph’s Matriculation Higher Secondary School, Veerakoil, Thiruvallur.',
      'Built the responsive website using HTML5, CSS3, Bootstrap and media queries.'
    ],
    link: 'https://sjmhss.org'
  }
];

const Services = () => (
  <section className="services" id="experience">
    <div className="services-title">
      <h1>Experience</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="services-container">
      {experience.map((item, index) => (
        <article className="services-format experience-card" key={`${item.company}-${item.role}`}>
          <h3>{String(index + 1).padStart(2, '0')}</h3>
          <h2>{item.role}</h2>
          <h4>{item.company}</h4>
          <p className="experience-period">{item.period}</p>
          <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          {item.link && <a href={item.link} target="_blank" rel="noreferrer">Visit school website ↗</a>}
        </article>
      ))}
    </div>
  </section>
);

export default Services;
