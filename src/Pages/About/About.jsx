import React from 'react';

import './About.css'



function About() {
  return (
    <div>
      <section className="about-us py-5">
        <div className="container">
          <h2 className="display-4 text-center mb-4">About Us</h2>
          <p className="lead">
            Welcome to Skill Jobs! We are a platform dedicated to connecting talented individuals with job opportunities.
            Our mission is to help people at every stage of their career journey—from entry-level positions to senior roles.
            Whether you are just starting out or looking for a new challenge, Skill Jobs is here to guide you every step of the way.
          </p>
          
          <h4>Our Vision</h4>
          <p>
            At Skill Jobs, we envision a world where every skilled individual has the opportunity to showcase their talents and
            find a job that aligns with their passion and skills. We aim to bridge the gap between job seekers and recruiters,
            ensuring that the right talent is matched with the right opportunities.
          </p>

          <h4>Our Values</h4>
          <ul>
            <li>Integrity: We believe in honesty, transparency, and ethical practices in every aspect of our work.</li>
            <li>Innovation: We continuously strive to improve and adapt to the ever-changing job market.</li>
            <li>Inclusivity: We are committed to providing opportunities for everyone, regardless of background or experience.</li>
            <li>Collaboration: We work together with employers and job seekers to build strong partnerships.</li>
          </ul>

          <h4>Contact Us</h4>
          <p>If you have any questions or would like to learn more, feel free to reach out to us at <strong>contact@skilljobs.com</strong>.</p>
        </div>
      </section>
    </div>
  );
}

export default About;
