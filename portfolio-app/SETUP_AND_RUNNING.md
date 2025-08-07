# Portfolio Setup and Running Guide

This guide will help you set up, run, and customize your mechatronics engineering portfolio website.

## 📁 Project Structure

```
portfolio-app/
├── backend/           # Node.js/Express server
│   ├── server.js      # Main server file with API endpoints
│   ├── package.json   # Backend dependencies
│   └── node_modules/  # Backend dependencies
└── frontend/          # React application
    ├── src/           # React source code
    │   ├── components/ # React components
    │   ├── App.js     # Main App component
    │   └── index.js   # React entry point
    ├── public/        # Static files
    ├── package.json   # Frontend dependencies
    └── node_modules/  # Frontend dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Step 1: Install Dependencies

Open a terminal and navigate to the project root:

```bash
cd portfolio-app
```

Install backend dependencies:
```bash
cd backend
npm install
```

Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Step 2: Start the Servers

**Terminal 1 - Start Backend Server:**
```bash
cd portfolio-app/backend
node server.js
```
The backend will start on http://localhost:5000

**Terminal 2 - Start Frontend Server:**
```bash
cd portfolio-app/frontend
npm start
```
The frontend will start on http://localhost:3000

### Step 3: View Your Portfolio

Open your browser and go to http://localhost:3000

## 🛠️ Customization Guide

### 1. Personal Information

**Update Profile Data** (`backend/server.js`):
```javascript
// Around line 20-30, update your profile information
const profile = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  location: "Your Location",
  about: "Your personal description...",
  // ... other fields
};
```

**Update Contact Information** (`frontend/src/components/Contact.js`):
```javascript
// Update email and social links
const contactInfo = {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username"
};
```

### 2. Projects

**Add/Edit Projects** (`backend/server.js`):
```javascript
// Around line 50-150, update the projects array
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    image: "/images/your-project.jpg",
    github: "https://github.com/yourusername/project",
    live: "https://your-project-demo.com",
    category: "Robotics" // or "IoT", "Industrial Automation"
  },
  // ... more projects
];
```

### 3. Skills

**Update Skills** (`backend/server.js`):
```javascript
// Around line 200-250, update the skills object
const skills = {
  programming: ["Your", "Programming", "Skills"],
  software: ["Your", "Software", "Skills"],
  fabrication: ["Your", "Fabrication", "Skills"],
  robotics: ["Your", "Robotics", "Skills"],
  // ... other categories
};
```

### 4. Experience

**Update Work Experience** (`backend/server.js`):
```javascript
// Around line 150-200, update the experience array
const experience = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    location: "Location",
    duration: "2023 - Present",
    description: "Job description...",
    achievements: ["Achievement 1", "Achievement 2"]
  },
  // ... more experience
];
```

### 5. Awards & Publications

**Update Awards** (`backend/server.js`):
```javascript
// Around line 250-300, update the awards array
const awards = [
  {
    id: 1,
    title: "Award Title",
    organization: "Organization Name",
    year: "2023",
    description: "Award description..."
  },
  // ... more awards
];
```

**Update Publications** (`backend/server.js`):
```javascript
// Around line 300-350, update the publications array
const publications = [
  {
    id: 1,
    title: "Publication Title",
    authors: "Your Name, Co-author Name",
    journal: "Journal Name",
    year: "2023",
    doi: "10.1000/doi-link",
    abstract: "Publication abstract..."
  },
  // ... more publications
];
```

### 6. Styling and Colors

**Update Color Scheme** (`frontend/src/index.css`):
```css
:root {
  --primary-color: #00d4ff;      /* Main blue color */
  --secondary-color: #0099cc;    /* Darker blue */
  --accent-color: #ff6b35;       /* Orange accent */
  --background-dark: #0a0a0a;    /* Dark background */
  --background-light: #1a1a1a;   /* Light background */
  /* ... other colors */
}
```

### 7. Images and Assets

**Add Your Images:**
1. Place your profile photo in `frontend/public/images/`
2. Update the image path in `frontend/src/components/Hero.js`
3. Add project images to `frontend/public/images/`
4. Update project image paths in the backend data

## 🔧 Troubleshooting

### Common Issues

**1. Port Already in Use**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

**2. Module Not Found Errors**
```bash
# Reinstall dependencies
cd backend && rm -rf node_modules package-lock.json && npm install
cd ../frontend && rm -rf node_modules package-lock.json && npm install
```

**3. API Connection Issues**
- Make sure both servers are running
- Check that backend is on port 5000
- Check browser console for CORS errors

**4. Build Errors**
```bash
# Clear React cache
cd frontend
npm run build -- --reset-cache
```

### Development Tips

1. **Hot Reload**: Both servers support hot reloading - changes will appear automatically
2. **Console Logs**: Check browser console (F12) for frontend errors
3. **Server Logs**: Check terminal for backend errors
4. **API Testing**: Test API endpoints at http://localhost:5000/api/profile

## 📝 File Locations Summary

| Component | File Location |
|-----------|---------------|
| Profile Data | `backend/server.js` (lines 20-30) |
| Projects | `backend/server.js` (lines 50-150) |
| Skills | `backend/server.js` (lines 200-250) |
| Experience | `backend/server.js` (lines 150-200) |
| Awards | `backend/server.js` (lines 250-300) |
| Publications | `backend/server.js` (lines 300-350) |
| Contact Info | `frontend/src/components/Contact.js` |
| Styling | `frontend/src/index.css` |
| Hero Section | `frontend/src/components/Hero.js` |

## 🎯 Next Steps

1. Customize all your personal information
2. Add your own projects and experience
3. Update skills to match your expertise
4. Add your profile photo and project images
5. Test all functionality
6. Deploy to hosting service (see DEPLOYMENT.md)

---

**Need Help?** Check the browser console (F12) for error messages or review the server logs in your terminal. 