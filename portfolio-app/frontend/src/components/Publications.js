import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';
import './Publications.css';

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/publications');
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error('Error fetching publications:', error);
        setPublications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  if (loading) {
    return (
      <section className="section" id="publications">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="publications">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Publications</h2>
          <p>My research contributions and academic publications</p>
        </motion.div>

        <div className="publications-list">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="publication-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="publication-icon">
                <FaFileAlt />
              </div>
              <div className="publication-content">
                <h3>{pub.title}</h3>
                <p className="publication-authors">{pub.authors}</p>
                <p className="publication-journal">{pub.journal}</p>
                <div className="publication-meta">
                  <span className="publication-year">{pub.year}</span>
                  <span className="publication-status">{pub.status}</span>
                  {pub.location && <span className="publication-location">{pub.location}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications; 