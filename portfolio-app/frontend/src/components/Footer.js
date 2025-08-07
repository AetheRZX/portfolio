import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Ryan Edric Nashota</h3>
            <p>Mechatronics Engineer</p>
            <p>Passionate about robotics and automation</p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/AetheRZX" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ryan-edric-nashota" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:rnashota@student.ubc.ca">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Ryan Edric Nashota. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 