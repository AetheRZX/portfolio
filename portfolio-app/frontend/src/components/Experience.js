import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/experience');
        const data = await response.json();
        setExperience(data);
      } catch (error) {
        console.error('Error fetching experience:', error);
        setExperience([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading) {
    return (
      <section className="section" id="experience">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience</h2>
          <p>My professional journey and research experience</p>
        </motion.div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience-item experience-${index % 2 === 0 ? 'right' : 'left'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`experience-image-outer experience-image-${index % 2 === 0 ? 'right' : 'left'}`}>
                <img src={exp.image} alt="Experience" className="experience-image-timeline" />
              </div>
              <div className={`experience-content`}>
                <div className="experience-details">
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <span className="experience-year">{exp.year}</span>
                  </div>
                  <div className="experience-company">{exp.company}</div>
                  {exp.advisor && <div className="experience-advisor">Advisor: {exp.advisor}</div>}
                  <p>{exp.description}</p>
                  <div className="experience-achievements">
                    {exp.achievements.map((achievement, achIndex) => (
                      <span key={achIndex} className="achievement-tag">{achievement}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 