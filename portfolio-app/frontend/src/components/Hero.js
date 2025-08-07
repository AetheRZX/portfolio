import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaRobot, FaCog, FaMicrochip } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/profile');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Fallback data
        setProfile({
          name: "Ryan Edric Nashota",
          title: "Mechatronics Engineer",
          heroDescription: "Innovative mechatronics engineer specializing in robotics, automation, and intelligent systems. Combining mechanical design, electronics, and software to create cutting-edge solutions for real-world challenges.",
          email: "rnashota@student.ubc.ca"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section className="hero">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <motion.div
            className="shape shape-1"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaRobot />
          </motion.div>
          <motion.div
            className="shape shape-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaCog />
          </motion.div>
          <motion.div
            className="shape shape-3"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaMicrochip />
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ whiteSpace: 'nowrap' }}
            >
              {profile?.name || "Ryan Edric Nashota"}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              {profile?.title || "Mechatronics Engineer"}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-description"
            >
              {profile?.heroDescription || "Innovative mechatronics engineer specializing in robotics, automation, and intelligent systems. Combining mechanical design, electronics, and software to create cutting-edge solutions for real-world challenges."}
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                className="btn btn-primary"
                onClick={() => {
                  document.getElementById('about').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                About Me
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Contact
              </button>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="https://github.com/rnashota" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ryan-nashota" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={`mailto:${profile?.email || 'rnashota@student.ubc.ca'}`}>
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-image">
              <img 
                src="/Pic/1_headshot.jpg" 
                alt="Headshot" 
                className="hero-headshot" 
              />
              <div className="image-overlay">
                <div className="overlay-text">
                  <span>Robotics</span>
                  <span>Automation</span>
                  <span>Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => {
          document.getElementById('about').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero; 