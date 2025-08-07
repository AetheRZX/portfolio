# Portfolio Content Editing Guide

This guide shows you exactly where and how to edit all the content in your portfolio website.

## 📝 Quick Reference - What to Edit Where

| Content | File Location | Line Numbers |
|---------|---------------|--------------|
| **Profile Info** | `backend/server.js` | Lines 20-30 |
| **Projects** | `backend/server.js` | Lines 50-150 |
| **Skills** | `backend/server.js` | Lines 200-250 |
| **Experience** | `backend/server.js` | Lines 150-200 |
| **Awards** | `backend/server.js` | Lines 250-300 |
| **Publications** | `backend/server.js` | Lines 300-350 |
| **Contact Info** | `frontend/src/components/Contact.js` | Lines 10-20 |
| **Social Links** | `frontend/src/components/Navbar.js` | Lines 50-60 |
| **Hero Section** | `frontend/src/components/Hero.js` | Lines 15-25 |

## 🎯 1. Personal Profile Information

**File:** `backend/server.js` (around lines 20-30)

```javascript
const profile = {
  name: "Ryan Edric Nashota",           // ← Change your name
  title: "Mechatronics Engineer",       // ← Change your title
  email: "rnashota@student.ubc.ca",     // ← Change your email
  location: "Vancouver, BC, Canada",    // ← Change your location
  about: "I am a passionate mechatronics engineer...", // ← Change your bio
  github: "https://github.com/rnashota", // ← Change your GitHub
  linkedin: "https://linkedin.com/in/ryan-nashota", // ← Change your LinkedIn
  image: "/images/profile.jpg"          // ← Change your photo path
};
```

## 🚀 2. Projects Section

**File:** `backend/server.js` (around lines 50-150)

### Add a New Project:
```javascript
{
  id: 5, // ← Increment this number
  title: "Your Project Title",
  description: "Detailed description of your project...",
  technologies: ["Python", "ROS", "Computer Vision"],
  image: "/images/your-project.jpg",
  github: "https://github.com/yourusername/project",
  live: "https://your-project-demo.com", // ← Optional: remove if no live demo
  category: "Robotics" // ← Choose: "Robotics", "IoT", "Industrial Automation"
}
```

### Edit Existing Project:
```javascript
// Find the project you want to edit and change these fields:
{
  id: 1,
  title: "Updated Project Title",       // ← Change title
  description: "Updated description...", // ← Change description
  technologies: ["New", "Technologies"], // ← Change technologies
  image: "/images/new-image.jpg",       // ← Change image
  github: "https://github.com/new-link", // ← Change GitHub link
  live: "https://new-demo-link.com",    // ← Change live demo link
  category: "IoT"                       // ← Change category
}
```

## 💡 3. Skills Section

**File:** `backend/server.js` (around lines 200-250)

### Add New Skill Category:
```javascript
const skills = {
  programming: ["Python", "C++", "MATLAB"],
  software: ["SolidWorks", "ANSYS"],
  // ... existing categories
  new_category: ["Skill 1", "Skill 2", "Skill 3"] // ← Add new category
};
```

### Edit Existing Skills:
```javascript
const skills = {
  programming: ["Your", "Programming", "Skills"], // ← Change programming skills
  software: ["Your", "Software", "Skills"],       // ← Change software skills
  fabrication: ["Your", "Fabrication", "Skills"], // ← Change fabrication skills
  robotics: ["Your", "Robotics", "Skills"],       // ← Change robotics skills
  simulation: ["Your", "Simulation", "Skills"],   // ← Change simulation skills
  automation: ["Your", "Automation", "Skills"],   // ← Change automation skills
  electronics: ["Your", "Electronics", "Skills"], // ← Change electronics skills
  data_analysis: ["Your", "Data", "Skills"],      // ← Change data analysis skills
  business: ["Your", "Business", "Skills"]        // ← Change business skills
};
```

## 💼 4. Work Experience

**File:** `backend/server.js` (around lines 150-200)

### Add New Experience:
```javascript
{
  id: 3, // ← Increment this number
  title: "Your Job Title",
  company: "Company Name",
  location: "City, Country",
  duration: "2023 - Present",
  description: "Detailed job description...",
  achievements: [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ]
}
```

### Edit Existing Experience:
```javascript
{
  id: 1,
  title: "Updated Job Title",           // ← Change job title
  company: "Updated Company",           // ← Change company
  location: "Updated Location",         // ← Change location
  duration: "Updated Duration",         // ← Change duration
  description: "Updated description...", // ← Change description
  achievements: [                       // ← Change achievements
    "Updated Achievement 1",
    "Updated Achievement 2"
  ]
}
```

## 🏆 5. Awards & Achievements

**File:** `backend/server.js` (around lines 250-300)

### Add New Award:
```javascript
{
  id: 3, // ← Increment this number
  title: "Award Title",
  organization: "Organization Name",
  year: "2023",
  description: "Description of the award..."
}
```

### Edit Existing Award:
```javascript
{
  id: 1,
  title: "Updated Award Title",         // ← Change award title
  organization: "Updated Organization", // ← Change organization
  year: "Updated Year",                 // ← Change year
  description: "Updated description..." // ← Change description
}
```

## 📚 6. Publications

**File:** `backend/server.js` (around lines 300-350)

### Add New Publication:
```javascript
{
  id: 3, // ← Increment this number
  title: "Publication Title",
  authors: "Your Name, Co-author Name",
  journal: "Journal Name",
  year: "2023",
  doi: "10.1000/doi-link",
  abstract: "Publication abstract..."
}
```

### Edit Existing Publication:
```javascript
{
  id: 1,
  title: "Updated Publication Title",   // ← Change title
  authors: "Updated Authors",           // ← Change authors
  journal: "Updated Journal",           // ← Change journal
  year: "Updated Year",                 // ← Change year
  doi: "Updated DOI",                   // ← Change DOI
  abstract: "Updated abstract..."       // ← Change abstract
}
```

## 📧 7. Contact Information

**File:** `frontend/src/components/Contact.js` (around lines 10-20)

```javascript
const contactInfo = {
  email: "your.email@example.com",      // ← Change your email
  linkedin: "https://linkedin.com/in/your-profile", // ← Change LinkedIn
  github: "https://github.com/your-username"        // ← Change GitHub
};
```

## 🔗 8. Social Media Links

**File:** `frontend/src/components/Navbar.js` (around lines 50-60)

```javascript
// Update these links in the navbar
<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
  <FaGithub />
</a>
<a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
  <FaLinkedin />
</a>
<a href="mailto:your.email@example.com">
  <FaEnvelope />
</a>
```

**File:** `frontend/src/components/Footer.js` (around lines 15-25)

```javascript
// Update these links in the footer too
<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
  <FaGithub />
</a>
<a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
  <FaLinkedin />
</a>
<a href="mailto:your.email@example.com">
  <FaEnvelope />
</a>
```

## 🖼️ 9. Images and Photos

### Profile Photo:
1. **Add your photo** to `frontend/public/images/`
2. **Update the path** in `backend/server.js`:
   ```javascript
   image: "/images/your-photo.jpg"
   ```

### Project Images:
1. **Add project images** to `frontend/public/images/`
2. **Update project image paths** in `backend/server.js`:
   ```javascript
   image: "/images/your-project-image.jpg"
   ```

## 🎨 10. Styling and Colors

**File:** `frontend/src/index.css` (around lines 1-20)

```css
:root {
  --primary-color: #00d4ff;      /* ← Change main blue color */
  --secondary-color: #0099cc;    /* ← Change darker blue */
  --accent-color: #ff6b35;       /* ← Change orange accent */
  --background-dark: #0a0a0a;    /* ← Change dark background */
  --background-light: #1a1a1a;   /* ← Change light background */
  --text-primary: #ffffff;       /* ← Change primary text color */
  --text-secondary: #cccccc;     /* ← Change secondary text color */
}
```

## 🔄 11. After Making Changes

### 1. Save all files
### 2. Restart the servers:
```bash
# Terminal 1 - Backend
cd portfolio-app/backend
node server.js

# Terminal 2 - Frontend
cd portfolio-app/frontend
npm start
```

### 3. Check your changes at http://localhost:3000

## ⚠️ Important Notes

1. **Always backup** your original files before making changes
2. **Check syntax** - missing commas or brackets will break the site
3. **Image paths** should start with `/images/` and be relative to the public folder
4. **Links** should be complete URLs (https://...)
5. **Categories** for projects must be: "Robotics", "IoT", or "Industrial Automation"

## 🛠️ Common Issues

### Site Not Loading:
- Check for syntax errors in `backend/server.js`
- Make sure both servers are running
- Check browser console (F12) for errors

### Images Not Showing:
- Verify image files exist in `frontend/public/images/`
- Check image paths start with `/images/`
- Ensure image file names match exactly (case-sensitive)

### Links Not Working:
- Verify URLs are complete (include https://)
- Check that social media profiles exist
- Test links in a new tab

---

**Need Help?** If something breaks, you can always restore from your backup or ask for help! 