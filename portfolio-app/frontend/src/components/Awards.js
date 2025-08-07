import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import './Awards.css';

const Awards = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/awards');
        const data = await response.json();
        setAwards(data);
      } catch (error) {
        console.error('Error fetching awards:', error);
        setAwards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  if (loading) {
    return (
      <section className="section" id="awards">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="awards">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Awards & Recognition</h2>
          <p>Honors and achievements throughout my academic journey</p>
        </motion.div>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="award-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="award-icon">
                <FaTrophy />
              </div>
              <div className="award-content">
                <h3>{award.title}</h3>
                <span className="award-year">{award.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 