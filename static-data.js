// Static data for portfolio - replaces backend API
const staticData = {
  profile: {
    name: "Ryan Edric Nashota",
    title: "Mechatronics Engineer",
    email: "rnashota@student.ubc.ca",
    phone: "+1-236-591-3939",
    location: "Vancouver, BC, Canada",
    about: "Passionate about creating intelligent and physically capable robots that can operate autonomously and safely in complex, human-centric environments. My research interests lie at the intersection of robot learning, control, and physical embodiment.",
    heroDescription: "Just your friendly neighborhood engineer who wants to make cool stuff. Nice meeting you!",
    education: "B.A.Sc. in Mechanical Engineering, Mechatronics Option, University of British Columbia",
    thesis: "Brushless DC Motor",
    researchInterests: [
      "Soft Robotics and Compliant Mechanisms",
      "Learning-based Control for Manipulation and Locomotion", 
      "Human-Robot Interaction and Haptics",
      "Robot Perception for Autonomous Navigation and Teleoperation"
    ]
  },
  projects: [
    {
      id: 1,
      title: "Line-Following Robot with Obstacle Avoidance",
      description: "Designing and building an autonomous line-following robot with integrated ultrasonic sensors for real-time obstacle detection and avoidance. Implementing path-tracking algorithms and motor control logic on a microcontroller to ensure smooth and accurate navigation.",
      technologies: ["Arduino", "Ultrasonic Sensors", "PID Control", "Motor Control", "C++"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      github: "https://github.com/AetheRZX/line-following-robot",
      live: "#",
      category: "Robotics",
      period: "Sep 2024 -- Present"
    },
    {
      id: 3,
      title: "Compliant Mechanism Design",
      description: "Designed and fabricated a series of monolithic compliant mechanisms (e.g., springs, clips, switches) using multi-material 3D printing. Engineered devices to be assembly-free, leveraging material elasticity to achieve precise, frictionless motion and multifunctional integration in a compact form factor.",
      technologies: ["3D Printing", "Compliant Mechanisms", "SolidWorks", "Multi-material", "Design"],
      image: "/Pic/compliant.jpg",
      github: "https://github.com/AetheRZX/compliant-mechanisms",
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
      github: "https://github.com/AetheRZX/uav-mission-planner",
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
      github: "https://github.com/AetheRZX/game-automation-bot",
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
      github: "https://github.com/AetheRZX/self-balancing-robot",
      live: "#",
      category: "Robotics",
      period: "Oct 2023 -- Dec 2023"
    },
    {
      id: 7,
      title: "Autonomous UAV",
      description: "Designed and built an autonomous UAV for the UBC AeroDesign competition. Implemented flight control algorithms, sensor fusion, and autonomous navigation systems. Achieved stable flight and autonomous waypoint following capabilities.",
      technologies: ["Flight Control", "Sensor Fusion", "Autonomous Navigation", "C++", "Python"],
      image: "/Pic/subbot.png",
      github: "https://github.com/AetheRZX/autonomous-uav",
      live: "#",
      category: "Robotics",
      period: "Sep 2023 -- Dec 2023"
    },
    {
      id: 8,
      title: "Maglev Device",
      description: "Designed and fabricated a magnetic levitation device for educational purposes. Implemented PID control for stable levitation and developed a user interface for real-time parameter adjustment.",
      technologies: ["Magnetic Levitation", "PID Control", "Electronics", "LabView", "SolidWorks"],
      image: "/Pic/maglev.png",
      github: "https://github.com/AetheRZX/maglev-device",
      live: "#",
      category: "Electronics",
      period: "Jan 2023 -- Apr 2023"
    },
    {
      id: 9,
      title: "Brachioarm Drawing Robot",
      description: "Designed and built a 6-DOF robotic arm capable of drawing and writing. Implemented inverse kinematics algorithms and developed a user interface for path planning and control.",
      technologies: ["Robotic Arm", "Inverse Kinematics", "Arduino", "3D Printing", "C++"],
      image: "/Pic/brachio.png",
      github: "https://github.com/AetheRZX/brachioarm-robot",
      live: "#",
      category: "Robotics",
      period: "May 2023 -- Aug 2023"
    }
  ],
  skills: {
    programming: ["Python (PyTorch, NumPy, SciPy, Pandas, Matplotlib)", "C++", "MATLAB", "Simulink", "ROS (Robot Operating System)", "JavaScript", "HTML/CSS", "SQL"],
    software: ["SolidWorks", "OnShape", "Catia","ANSYS", "Gazebo", "LabView", "Git", "Docker", "Linux", "Jupyter Notebooks", "VS Code", "Arduino IDE"],
    hardware: ["Arduino", "Raspberry Pi", "STM32", "ESP32", "Sensors (IMU, Ultrasonic, IR, Camera)", "Motors (DC, Servo, Stepper)", "3D Printing", "PCB Design", "Circuit Design", "Prototyping"],
    automation: ["PID Control", "State Machines", "Feedback Control", "Automation Systems", "Industrial Automation", "PLC Programming", "SCADA Systems", "HMI Design"],
    robotics: ["Robot Kinematics", "Path Planning", "SLAM", "Computer Vision", "Machine Learning", "Deep Learning", "Neural Networks", "Reinforcement Learning", "Robot Operating System (ROS)"],
    "data analysis": ["Statistical Analysis", "Data Visualization", "Machine Learning", "Signal Processing", "Image Processing", "Time Series Analysis", "Optimization Algorithms"],
    business: ["Financial Analysis", "Marketing Strategy", "Accounting Principles", "Business Development", "Market Research", "Project Management", "Strategic Planning", "Cost Analysis"]
  },
  experience: [
    {
      id: 1,
      title: "Research Assistant",
      company: "UBC Robotics Lab",
      period: "May 2024 - Present",
      description: "Working on soft robotics and compliant mechanisms research. Developing novel control algorithms for soft robotic systems and investigating applications in human-robot interaction.",
      achievements: [
        "Implemented novel control algorithms for soft robotic systems",
        "Published research findings in peer-reviewed journals",
        "Mentored undergraduate students in robotics projects"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Mechatronics Engineering Intern",
      company: "Tesla",
      period: "Jan 2024 - Apr 2024",
      description: "Worked on automation and robotics systems for manufacturing processes. Developed and implemented control systems for production line automation.",
      achievements: [
        "Improved production line efficiency by 15% through automation",
        "Developed custom control algorithms for robotic systems",
        "Collaborated with cross-functional teams on system integration"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Robotics Team Lead",
      company: "UBC AeroDesign",
      period: "Sep 2023 - Dec 2023",
      description: "Led the robotics team in designing and building autonomous UAV systems for competition. Managed team of 8 students and coordinated with other engineering teams.",
      achievements: [
        "Led team to 2nd place in national competition",
        "Implemented autonomous navigation system",
        "Mentored junior team members in robotics principles"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    }
  ],
  awards: [
    {
      title: "Dean's List, Faculty of Applied Science",
      year: "2024"
    },
    {
      title: "UBC Engineering Co-op Award",
      year: "2024"
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
  ],
  publications: [
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
    }
  ]
};

// Export for use in components
if (typeof module !== 'undefined' && module.exports) {
  module.exports = staticData;
} else {
  window.staticData = staticData;
} 