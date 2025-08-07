import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './About.css';

const About = () => {
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
        setProfile({
          name: "Ryan Edric Nashota",
          title: "Mechatronics Engineer",
          about: "Passionate about creating intelligent and physically capable robots that can operate autonomously and safely in complex, human-centric environments.",
          education: "B.A.Sc. in Mechanical Engineering, Mechatronics Option, University of British Columbia (Expected May 2026)",
          gpa: "90.4%",
          thesis: "Brushless DC Motor",
          researchInterests: [
            "Soft Robotics and Compliant Mechanisms",
            "Learning-based Control for Manipulation and Locomotion", 
            "Human-Robot Interaction and Haptics",
            "Robot Perception for Autonomous Navigation and Teleoperation"
          ],
          email: "rnashota@student.ubc.ca",
          phone: "+1-236-591-3939",
          location: "Vancouver, BC, Canada"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section className="section" id="about">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{profile?.name}</h3>
            <p className="about-description">{profile?.about}</p>
            
            <div className="about-details">
              <div className="detail-item">
                <FaGraduationCap />
                <div>
                  <strong>Education:</strong>
                  <span>{profile?.education}</span>
                </div>
              </div>
              

              
              <div className="detail-item">
                <FaUser />
                <div>
                  <strong>Thesis:</strong>
                  <span>{profile?.thesis}</span>
                </div>
              </div>
              
              <div className="detail-item">
                <FaMapMarkerAlt />
                <div>
                  <strong>Location:</strong>
                  <span>{profile?.location}</span>
                </div>
              </div>
              
              <div className="detail-item">
                <FaEnvelope />
                <div>
                  <strong>Email:</strong>
                  <span>{profile?.email}</span>
                </div>
              </div>
              
              <div className="detail-item">
                <FaPhone />
                <div>
                  <strong>Phone:</strong>
                  <span>{profile?.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-research"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Research Interests</h3>
            <div className="research-interests">
              {profile?.researchInterests?.map((interest, index) => (
                <motion.div
                  key={index}
                  className="research-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="research-icon"></div>
                  <span>{interest}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 