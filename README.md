# Mechatronics Engineer Portfolio

A modern, responsive portfolio website for a mechatronics engineer built with React, Node.js, and modern web technologies. Features a sleek design with robotics and automation themes, smooth animations, and a fully functional contact form.

## 🚀 Features

- **Modern Design**: Clean, professional design with a mechatronics/robotics theme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: 
  - Animated robot arm in hero section
  - Interactive skill progress bars
  - Project filtering system
  - Contact form with validation
- **Backend API**: Node.js/Express server with RESTful endpoints
- **Real-time Features**: Live contact form submission
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with CSS variables

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Nodemailer** - Email functionality (ready for production)

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Node.js backend
│   ├── index.js
│   └── package.json
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the frontend (React) and backend (Node.js) servers:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Alternative Manual Setup

If the `install-all` script doesn't work, you can install dependencies manually:

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Go back to root
cd ..
```

## 📝 Configuration

### Personal Information

Update the following files with your personal information:

1. **Server data** (`server/index.js`):
   - Update project data in the `projects` array
   - Modify skills data in the `skills` object
   - Update profile information in the `/api/profile` endpoint

2. **Client components**:
   - Update contact information in `Contact.js`
   - Modify social media links in `Navbar.js` and `Footer.js`
   - Update personal details in `Hero.js` and `About.js`

### Environment Variables

Create a `.env` file in the server directory for production settings:

```env
PORT=5000
NODE_ENV=production
```

## 🎨 Customization

### Colors and Themes

The color scheme is defined in CSS variables in `client/src/index.css`:

```css
:root {
  --primary-color: #00d4ff;
  --secondary-color: #0099cc;
  --accent-color: #ff6b35;
  --background-dark: #0a0a0a;
  --background-light: #1a1a1a;
  /* ... more variables */
}
```

### Adding Projects

Add new projects by updating the `projects` array in `server/index.js`:

```javascript
{
  id: 5,
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  image: "/images/your-project.jpg",
  github: "https://github.com/yourusername/project",
  live: "https://your-project-demo.com",
  category: "Robotics" // or "IoT", "Industrial Automation"
}
```

### Modifying Skills

Update skills in `server/index.js`:

```javascript
const skills = {
  programming: ["Your", "Programming", "Skills"],
  software: ["Your", "Software", "Skills"],
  hardware: ["Your", "Hardware", "Skills"],
  automation: ["Your", "Automation", "Skills"]
};
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the React app:
   ```bash
   cd client
   npm run build
   ```

2. Deploy the `build` folder to your preferred hosting service

### Backend Deployment (Heroku/Railway)

1. Deploy the `server` folder to your backend hosting service
2. Update the API base URL in the frontend if needed

### Environment Variables for Production

Set up environment variables for email functionality:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Key Features Explained

### Animated Robot Arm
The hero section features an animated 6-axis robotic arm built with CSS animations, representing the mechatronics theme.

### Skill Progress Bars
Interactive skill bars with animated progress indicators and shimmer effects.

### Project Filtering
Filter projects by category (Robotics, IoT, Industrial Automation) with smooth transitions.

### Contact Form
Fully functional contact form with validation and real-time feedback.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons from React Icons
- Animations powered by Framer Motion
- Design inspiration from modern portfolio trends
- Color scheme inspired by tech/robotics themes

## 📞 Support

If you have any questions or need help with customization, feel free to reach out!

---

**Built with ❤️ for the mechatronics community** 