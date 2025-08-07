import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import './Skills.css';

const sortCategories = (skills) => {
  const keys = Object.keys(skills);
  const sorted = keys.filter(k => k === 'automation')
    .concat(keys.filter(k => k !== 'automation').sort());
  return sorted;
};

const SkillPopover = ({ show, anchorRect, skillList, onMouseEnter, onMouseLeave, alignLeft }) => {
  if (!show || !anchorRect || typeof window === 'undefined') return null;
  const style = {
    position: 'fixed',
    top: anchorRect.top,
    left: alignLeft ? anchorRect.left - 340 : anchorRect.right + 12,
    minWidth: 340,
    zIndex: 9999,
  };
  return ReactDOM.createPortal(
    <motion.div
      className="skill-popover"
      initial={{ opacity: 0, x: alignLeft ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: alignLeft ? -20 : 20 }}
      transition={{ duration: 0.25 }}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {skillList.map((skill, skillIndex) => (
        <div key={skillIndex} className="skill-item">
          {skill}
        </div>
      ))}
    </motion.div>,
    document.body
  );
};

const Skills = () => {
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popoverIndex, setPopoverIndex] = useState(null);
  const [anchorRect, setAnchorRect] = useState(null);
  const [isPopoverHovered, setIsPopoverHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [alignLeft, setAlignLeft] = useState(false);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/skills');
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
        setSkills({
          programming: ["Python (PyTorch, NumPy, SciPy)", "C++", "MATLAB", "Simulink", "ROS (Robot Operating System)"],
          software: ["SolidWorks", "OnShape", "ANSYS", "Gazebo", "LabView", "Git"],
          fabrication: ["3D Printing (FDM, SLA, PolyJet)", "CNC Machining", "Laser Cutting", "PCB Design (KiCad)", "Soldering"],
          robotics: ["Kinematics & Dynamics", "Control Theory (PID, LQR, MPC)", "Motion Planning (RRT, A*)", "Reinforcement Learning", "Computer Vision (OpenCV)", "SLAM", "Sensor Integration"],
          languages: ["English (Fluent)", "Indonesian (Native)", "Japanese (Conversational)", "Chinese (Intermediate)"]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const handleMouseEnter = (index) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setPopoverIndex(index);
    if (categoryRefs.current[index]) {
      const rect = categoryRefs.current[index].getBoundingClientRect();
      setAnchorRect(rect);
      // Check if popup would go off the right edge
      const popupWidth = 360; // a bit more than minWidth for margin
      const rightEdge = rect.right + 12 + popupWidth;
      setAlignLeft(rightEdge > window.innerWidth);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      if (!isPopoverHovered) {
        setPopoverIndex(null);
        setAnchorRect(null);
      }
    }, 120);
    setHoverTimeout(timeout);
  };

  const handlePopoverEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsPopoverHovered(true);
  };
  const handlePopoverLeave = () => {
    setIsPopoverHovered(false);
    setPopoverIndex(null);
    setAnchorRect(null);
  };

  if (loading) {
    return (
      <section className="section" id="skills">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </section>
    );
  }

  const sortedCategories = sortCategories(skills);

  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <p>My technical skills and competencies</p>
        </motion.div>

        <div className="skills-grid">
          {sortedCategories.map((category, index) => {
            const skillList = [...skills[category]].sort();
            return (
              <motion.div
                key={category}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}
                ref={el => categoryRefs.current[index] = el}
              >
                <div className="skill-header">
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <span className="skill-count">{skillList.length} skills</span>
                </div>
                <div className="skill-preview">
                  <span>{skillList[0]}</span>
                  {skillList.length > 1 && <span>+{skillList.length - 1} more</span>}
                </div>
              </motion.div>
            );
          })}
        </div>
        <SkillPopover 
          show={popoverIndex !== null} 
          anchorRect={anchorRect} 
          skillList={popoverIndex !== null ? [...skills[sortedCategories[popoverIndex]]].sort() : []} 
          onMouseEnter={handlePopoverEnter}
          onMouseLeave={handlePopoverLeave}
          alignLeft={alignLeft}
        />
      </div>
    </section>
  );
};

export default Skills; 