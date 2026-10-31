import React from 'react';
import './Education.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const education = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Saradha Gangadharan College, Puducherry',
    period: 'October 2021 – May 2024',
    result: 'CGPA: 8.4'
  },
  {
    degree: 'Higher Secondary (CBSE)',
    institution: 'Amrita Vidyalayam, Ramanathapuram',
    period: 'April 2020 – March 2021',
    result: '93%'
  },
  {
    degree: 'Secondary School (CBSE)',
    institution: 'Amrita Vidyalayam, Ramanathapuram',
    period: 'April 2018 – March 2019',
    result: '80%'
  }
];

const awards = [
  'Pat on the Back Award – Aloha PM (August 2026)',
  'First Rank Holder – Computer Science Department',
  'Individual Championship Award of the Year – 2022, 2023 and 2024',
  'Selected for Tamil Nadu State Cricket Team',
  'Represented Pondicherry State Cricket Team',
  'State-Level Yoga Champion',
  'Best Student of the Year – 2020 (Sports and Volunteering)'
];

const Education = () => (
  <section className="education-section" id="education">
    <div className="education-title">
      <h1>Education &amp; Achievements</h1>
      <img src={theme_pattern} alt="" />
    </div>
    <div className="education-grid">
      {education.map((item) => (
        <article className="education-card" key={item.degree}>
          <h2>{item.degree}</h2>
          <h3>{item.institution}</h3>
          <p>{item.period}</p>
          <strong>{item.result}</strong>
        </article>
      ))}
    </div>
    <div className="awards-list">
      {awards.map((award) => <div className="award-item" key={award}>{award}</div>)}
    </div>
    <div className="certifications">
      <h2>Certifications &amp; Training</h2>
      <p>PostgreSQL Certification – Simplilearn</p>
      <p>Full Stack .NET Developer Training – Besant Technologies</p>
    </div>
  </section>
);

export default Education;
