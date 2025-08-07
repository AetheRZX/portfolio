import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaRobot, FaSyncAlt } from 'react-icons/fa';
import './Contact.css';

const ROBOT_EMOJIS = [
  '🤖', '🦾', '🦿', '👾', '🛸', '🔧', '⚙️', '💡', '🔋', '🛰️', '🚀', '🧠', '🦾🤖', '🤖🦿', '🤖💡', '🤖⚡', '🤖❤️', '🤖🎉', '🤖👾', '🤖🚀'
];
const ROBOT_QUOTES = [
  "Beep boop! I am always learning.",
  "Robots do it with precision!",
  "01101000 01101001 (hi in binary)",
  "I compute, therefore I am.",
  "My favorite color is #00d4ff.",
  "I never sleep, but I do dream of electric sheep.",
  "Powered by code and coffee!",
  "Robots: making life easier, one algorithm at a time.",
  "I love a good challenge—especially if it involves math!",
  "My circuits are always firing!",
  "I’m not just a pretty interface.",
  "Let’s automate something together!",
  "I can calculate pi to a million digits, but I still can’t taste pizza.",
  "Robots unite! 🤖🤖🤖",
  "I’m here to help, 24/7!"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Contact = () => {
  const [robot, setRobot] = useState(getRandomItem(ROBOT_EMOJIS));
  const [quote, setQuote] = useState(getRandomItem(ROBOT_QUOTES));
  const [animate, setAnimate] = useState(false);

  const handleGenerate = () => {
    setAnimate(true);
    setTimeout(() => {
      setRobot(getRandomItem(ROBOT_EMOJIS));
      setQuote(getRandomItem(ROBOT_QUOTES));
      setAnimate(false);
    }, 400);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Contact</h2>
          <p>Get in touch with me</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <strong>Email</strong>
                  <span>rnashota@student.ubc.ca</span>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone />
                <div>
                  <strong>Phone</strong>
                  <span>+1-236-591-3939</span>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <strong>Location</strong>
                  <span>Vancouver, BC, Canada</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/AetheRZX" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ryan-edric-nashota" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="robot-widget-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Robot Emoji Generator</h3>
            <motion.div
              className="robot-emoji"
              animate={animate ? { rotate: [0, 20, -20, 0], scale: [1, 1.2, 1.2, 1] } : {}}
              transition={{ duration: 0.4 }}
            >
              <span style={{ fontSize: '4rem', display: 'block' }}>{robot}</span>
            </motion.div>
            <motion.div
              className="robot-quote"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              key={quote}
            >
              <span>{quote}</span>
            </motion.div>
            <motion.button
              className="btn btn-primary robot-generate-btn"
              onClick={handleGenerate}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <FaSyncAlt /> Generate Robot
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 