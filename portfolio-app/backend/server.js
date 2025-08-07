const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ryan Edric Nashota's CV Data
const profile = {
  name: "Ryan Edric Nashota",
  title: "Mechatronics Engineer",
  email: "rnashota@student.ubc.ca",
  phone: "+1-236-591-3939",
  location: "Vancouver, BC, Canada",
  about: "Passionate about creating intelligent and physically capable robots that can operate autonomously and safely in complex, human-centric environments. My research interests lie at the intersection of robot learning, control, and physical embodiment.",
  heroDescription: "Just your friendly neighborhood engineer who wants to make cool stuff. Nice meeting you!",
  education: "B.A.Sc. in Mechanical Engineering, Mechatronics Option, University of British Columbia",
  // gpa: "90.4%",
  thesis: "Brushless DC Motor",
  researchInterests: [
    "Soft Robotics and Compliant Mechanisms",
    "Learning-based Control for Manipulation and Locomotion", 
    "Human-Robot Interaction and Haptics",
    "Robot Perception for Autonomous Navigation and Teleoperation"
  ]
};

const projects = [
  {
    id: 1,
    title: "Line-Following Robot with Obstacle Avoidance",
    description: "Designing and building an autonomous line-following robot with integrated ultrasonic sensors for real-time obstacle detection and avoidance. Implementing path-tracking algorithms and motor control logic on a microcontroller to ensure smooth and accurate navigation.",
    technologies: ["Arduino", "Ultrasonic Sensors", "PID Control", "Motor Control", "C++"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    github: "https://github.com/rnashota/line-following-robot",
    live: "#",
    category: "Robotics",
    period: "Sep 2024 -- Present"
  },
  // {
  //   id: 2,
  //   title: "Computational Fluid Dynamics (CFD) Analysis",
  //   description: "Conducted CFD simulations using ANSYS Fluent to analyze and optimize the hydrodynamic performance of a torpedo, improving design reliability by 25%. Implemented drag reduction strategies based on simulation results, increasing vehicle speed by 30% and accuracy by 20%.",
  //   technologies: ["ANSYS Fluent", "CFD", "Hydrodynamics", "Simulation", "Optimization"],
  //   image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
  //   github: "https://github.com/rnashota/cfd-torpedo",
  //   live: "#",
  //   category: "Simulation",
  //   period: "July 2024 -- Aug 2024"
  // },
  {
    id: 3,
    title: "Compliant Mechanism Design",
    description: "Designed and fabricated a series of monolithic compliant mechanisms (e.g., springs, clips, switches) using multi-material 3D printing. Engineered devices to be assembly-free, leveraging material elasticity to achieve precise, frictionless motion and multifunctional integration in a compact form factor.",
    technologies: ["3D Printing", "Compliant Mechanisms", "SolidWorks", "Multi-material", "Design"],
    image: "/Pic/compliant.jpg",
    github: "https://github.com/rnashota/compliant-mechanisms",
    live: "#",
    category: "Mechanical Design",
    period: "Jan 2024 -- Apr 2024"
  },
  {
    id: 4,
    title: "Autonomous UAV Mission Planner",
    description: "Developed a mission planning and control system for a UAV (drone) within the ROS 2 framework. Integrated navigation algorithms for autonomous waypoint following and sensor data processing for robust flight control.",
    technologies: ["ROS 2", "UAV", "Navigation", "Python", "Autonomous Systems"],
    image: "/Pic/mission_planner.png",
    github: "https://github.com/rnashota/uav-mission-planner",
    live: "#",
    category: "Robotics",
    period: "Jan 2024 -- Apr 2024"
  },
  {
    id: 5,
    title: "Game Automation Bot",
    description: "Developed a Python bot to automate gameplay, using OpenCV for real-time object recognition and PyAutoGUI for autonomous character control. Architected the code with Object-Oriented principles for modularity and integrated a Google Apps Script for automated daily tasks.",
    technologies: ["Python", "OpenCV", "PyAutoGUI", "Object-Oriented Design", "Google Apps Script"],
    image: "Pic/python.jpg",
    github: "https://github.com/rnashota/game-automation-bot",
    live: "#",
    category: "Automation",
    period: "Dec 2023 -- Feb 2024"
  },
  {
    id: 6,
    title: "Self-Balancing Robot",
    description: "Designed and built a two-wheeled robot, implementing a PID controller on a microcontroller to achieve 98% stability by fusing accelerometer and gyroscope data. Integrated a Bluetooth module to enable remote control from a smartphone, improving user accessibility and operational accuracy by 20%.",
    technologies: ["PID Control", "Arduino", "Bluetooth", "IMU Sensors", "C++"],
    image: "/Pic/self_balancing.jpg",
    github: "https://github.com/rnashota/self-balancing-robot",
    live: "#",
    category: "Robotics",
    period: "Oct 2023 -- Dec 2023"
  },
  {
    id: 7,
    title: "Magnetic Levitation (MagLev) Device",
    description: "Designed, fabricated, and assembled a stable magnetic levitation device from scratch, creating mechanical drawings (ANSI standards) and 3D models in SolidWorks. Soldered and integrated the control circuit, using an operational amplifier and Hall effect sensor for closed-loop feedback control.",
    technologies: ["SolidWorks", "PCB Design", "Electronics", "Control Systems", "3D Modeling"],
    image: "/Pic/maglev.png",
    github: "https://github.com/rnashota/maglev-device",
    live: "#",
    category: "Electronics",
    period: "Aug 2023 -- Sep 2023"
  },
  {
    id: 8,
    title: "Controlling Industrial Robotic Arm with RoboDK ",
    description: "Used RoboDK to control an industrial robotic arm, creating a simulation environment and programming the arm to perform tasks such as picking and placing objects. The project involved setting up the simulation environment, programming the arm's movements to perform various movements and pick up objects.",
    technologies: ["RoboDK", "Python", "Electronics", "Control Systems", "Industrial Robotics"],
    image: "/Pic/RoboDK.png",
    github: "https://github.com/rnashota/maglev-device",
    live: "#",
    category: "Robotics",
    period: "Dec 2024"
  }, 
  {
    id: 9,
    title: "FPGA Development with VHDL, Quartus and Assembly",
    description: "Programmed an DE01 Using VHDL and Assembly language to create various devices such as a 7-segment display, a digital clock, etc.",
    technologies: ["FPGA", "Assembly", "VHDL", "Quartus", "Logic Gates"],
    image: "/Pic/DE01.jpg",
    github: "https://github.com/rnashota/maglev-device",
    live: "#",
    category: "Electronics",
    period: "Jan 2025 -- Apr 2025"
  }, 
  {
    id: 10,
    title: "Firefighting Remote Controlled Car ",
    description: "Engineered a remote-controlled car with servo, pressured bottle and valves to compete in the annual UBC Mechanical Design Project Competition",
    technologies: ["Machining", "Electronics"],
    image: "/Pic/RCcar.png",
    github: "https://github.com/rnashota/maglev-device",
    live: "#",
    category: "Robotics",
    period: "Aug 2023 --Apr 2024"
  }, 

  {
    id: 11, // use a unique ID
    title: "Brachioarm Drawing Robot",
    description: "A robotic arm project that draws images using servo motors and Raspberry Pi. Designed and built from scratch, including hardware and control algorithms.",
    technologies: ["Arduino", "Servo Motors", "Raspberry Pi"],
    image: "/Pic/brachio.png", // make sure this matches your image filename
    live: "", // or a YouTube/video/demo link if you have one
    category: "Robotics",
    period: "Apr 2024 -- July 2024"
  }
];

const skills = {
  programming: ["Python (PyTorch, NumPy, SciPy, Pandas, Matplotlib)", "C++", "MATLAB", "Simulink", "ROS (Robot Operating System)", "JavaScript", "HTML/CSS", "SQL"],
  software: ["SolidWorks", "OnShape", "Catia","ANSYS", "Gazebo", "LabView", "Git", "Docker", "Linux", "Jupyter Notebooks", "VS Code", "Arduino IDE"],
  fabrication: ["3D Printing (FDM, SLA, PolyJet)", "CNC Machining", "Laser Cutting", "PCB Design (Altium)", "Soldering", "Welding", "Milling", "Turning", "Sheet Metal Work"],
  robotics: ["Kinematics & Dynamics", "Control Theory (PID, LQR, MPC)", "Motion Planning (RRT, A*)", "Reinforcement Learning", "Computer Vision (OpenCV)", "SLAM", "Sensor Integration", "Robot Operating System (ROS)", "Gazebo Simulation", "MoveIt"],
  simulation: ["ANSYS Fluent", "ANSYS Mechanical", "MATLAB Simulink", "Gazebo", "COMSOL", "CFD Analysis", "FEA Analysis", "Thermal Analysis", "Structural Analysis"],
  automation: ["PLC Programming", "Industrial Automation", "SCADA Systems", "HMI Design", "Process Control", "Automation Scripts", "Test Automation"],
  electronics: ["Circuit Design", "PCB Layout", "Microcontroller Programming", "Sensor Integration", "Power Electronics", "Signal Processing", "Embedded Systems"],
  "data analysis": ["Data Visualization", "Fourier and Wavelet Transform", "Statistical Analysis", "Machine Learning", "Deep Learning", "Neural Networks", "Data Processing", "Experimental Design"],
  business: ["Financial Analysis", "Marketing Strategy", "Accounting Principles", "Business Development", "Market Research", "Project Management", "Strategic Planning", "Cost Analysis"]
};

const experience = [
  {
    year: 'Jan 2025 -- Present',
    title: 'Research Assistant',
    company: "Sheldon's Lubrication Lab, UBC",
    advisor: 'Prof. Sheldon G.',
    description: 'Modeled the dynamics of a cylinder rolling over viscous fluid using Navier-Stokes and Reynolds equations, resulting in a 40% cost reduction and 20% performance improvement. Developed laboratory automation software using LabView, Simulink, and Python (NumPy, Polars, Matplotlib) to streamline data analysis, increasing workflow efficiency by 30%.',
    achievements: ['40% cost reduction', '20% performance improvement', '30% workflow efficiency increase'],
    image: '/Pic/cheng.png' // Lab
  },
  {
    year: 'May 2024 -- Dec 2024',
    title: 'Research Assistant',
    company: 'Applied Fluid Mechanics Laboratory, UBC',
    advisor: 'Prof. Boris S., Prof. Sheldon G.',
    description: 'Investigated methods to enhance deposition efficiency of jetted particles for industrial train tracks, achieving a 5% friction reduction and a 30% cost saving. Conducted and analyzed experiments by varying parameters (voltage, flow rate, nozzle geometry) to optimize system design, leading to a 50% improvement. Engineered an automated data analysis pipeline using MATLAB, Python, and Arduino, boosting data processing efficiency by 500%. Designed and machined custom sensor mounts, improving experimental measurement accuracy by 20%.',
    achievements: ['5% friction reduction', '30% cost saving', '50% system improvement', '500% data processing efficiency', '20% measurement accuracy improvement'],
    image: '/Pic/applied_fluid.jpg' // Fluid
  },
  {
    year: 'Aug 2023 -- Present',
    title: 'Design Team Lead',
    company: 'UBC Subbots',
    description: 'Mentor a team of 5 junior engineering students on mechanical design, CAD, and fabrication principles. Lead the development of the AUV\'s manipulator and torpedo systems, resulting in a top 10 finish at the RoboSub international competition. Hosted tutorial sessions which included topics for FEA, CFD, CAD, and Programming.',
    achievements: ['Top 10 finish at RoboSub', 'Mentored 5 students', 'Hosted tutorial sessions'],
    image: '/Pic/subbot.png' // AUV
  },
  {
    year: 'May 2025 -- Present',
    title: 'Product Engineering Intern',
    company: 'Xergy Tech',
    description: 'Contributed to the end-to-end mechanical design of a lower-body exoskeleton for mobility assistance. Performed FEA on critical joint components using SolidWorks Simulation to optimize the strength-to-weight ratio, resulting in a 15% weight reduction. Prototyped and tested a novel compliant hip joint mechanism, improving user comfort scores by 30% in early trials.',
    achievements: ['15% weight reduction', '30% comfort improvement', 'FEA optimization'],
    image: '/Pic/fit_hv.png' // Engineering
  }
];

const awards = [
  {
    title: "Charles Nesbitt Memorial Scholarship in Mechanical Engineering",
    year: "2024"
  },
  {
    title: "Dean's Honour List, University of British Columbia",
    year: "2022 - 2025"
  },
  {
    title: "University of BC Scholarship",
    year: "2023"
  },
  {
    title: "Thomas Beeching Scholarship, University of British Columbia",
    year: "2023"
  },
  {
    title: "Top 8 YVR Hackathon, Neural Network Monitoring Camera",
    year: "2023"
  },
  {
    title: "Outstanding International Student Award",
    year: "2022"
  },
  {
    title: "Beasiswa Indonesia Maju (Indonesian Government Advanced Scholarship)",
    year: "2022 - 2026"
  },
  {
    title: "Silver Medal in National Astronomy Olympiad",
    year: "2022"
  },
  {
    title: "3rd Place in Food Technology Journalistic Competition",
    year: "2021"
  }
];

const publications = [
  {
    title: "Electrostatic spray deposition efficiency optimization",
    authors: "Rowsell, Christian",
    journal: "UBC Theses and Dissertations",
    year: "2025",
    status: "Graduate Thesis",
    link: "https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0448098"
  },
  {
    title: "Title",
    authors: "Nashota, R. E., and Jatskevitch, J.",
    journal: "Proc. of the IEEE (Institute of Electrical and Electronics Engineers)",
    year: "2025",
    status: "Peer-Reviewed",
    location: "Abu Dhabi, UAE"
  },
  {
    title: "Design of the Steelhead Mini Autonomous Underwater Vehicle for the International RoboSub Competition 2024",
    authors: "Nashota, R. E. et al.",
    journal: "RoboSub 2023",
    year: "2023",
    status: "Submitted",
    doi: "Robonation",
    link: "https://robonation.org/app/uploads/sites/4/2024/07/RS24_TDR_UBCSubbots.pdf"
  },
];

// API Routes
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.get('/api/experience', (req, res) => {
  res.json(experience);
});

app.get('/api/awards', (req, res) => {
  res.json(awards);
});

app.get('/api/publications', (req, res) => {
  res.json(publications);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });

    // Check if email credentials are configured
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass || emailUser === 'your-email@gmail.com') {
      console.log('Email not configured - logging contact form submission only');
      // For now, just log the submission and return success
      // In production, you'd want to configure proper email credentials
      res.json({ 
        success: true, 
        message: 'Message received! (Email not configured - check server logs)' 
      });
      return;
    }

    // Create transporter for Outlook/Hotmail
    const transporter = nodemailer.createTransporter({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPass
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: 'rnashota@student.ubc.ca', // Your email where you want to receive messages
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Sent from your portfolio website</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
}); 