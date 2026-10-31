import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const work = [
  {
    title: 'School Website',
    type: 'Freelance Web Development',
    description: 'Official website for St. Joseph’s Matriculation Higher Secondary School, Veerakoil, Thiruvallur. Built with HTML5, CSS3, Bootstrap and media queries.',
    link: 'https://sjmhss.org',
    label: 'Visit website'
  },
  {
    title: 'Healthcare Application',
    type: 'Professional Project · Aloha PM',
    description: 'Contributing to an existing healthcare application through feature enhancements, maintenance, debugging and bug fixes.',
    note: 'Project details are kept confidential.'
  },
  {
    title: 'Talent Sync',
    type: 'MERN Stack Project · Internship',
    description: 'A web application developed during the HYSAS Technologies internship using MongoDB, Express, React, Node.js, Cloudinary and NodeMailer.'
  },
  {
    title: 'Yoga Website',
    type: 'Web Development · Legends Tech Solutions',
    description: 'Responsive frontend development using React, HTML, CSS and JavaScript.'
  }
];

const MyWork = () => (
  <section className="mywork" id="work">
    <div className="mywork-title">
      <h1>Selected Work</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="mywork-container">
      {work.map((item) => (
        <article className="work-card" key={item.title}>
          <span>{item.type}</span>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {item.link && <a href={item.link} target="_blank" rel="noreferrer">{item.label} ↗</a>}
          {item.note && <small>{item.note}</small>}
        </article>
      ))}
    </div>
  </section>
);

export default MyWork;
