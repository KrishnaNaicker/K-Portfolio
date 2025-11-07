# 🚀 Krishna Naicker - AI/ML Engineer Portfolio

A modern, minimalistic portfolio website showcasing AI/ML projects, full-stack development skills, and professional experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Last Updated](https://img.shields.io/badge/Updated-November%202025-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- 🌫️ **Interactive 3D Fog Background** - Powered by Vanta.js with Three.js
- 🎨 **Modern Dark Theme** - Professional grayish/bluish color scheme
- 💻 **Terminal-Style About Section** - Live typing animation on scroll
- 🔵 **Bubble Tech Stack** - Interactive skill bubbles with hover effects
- 📂 **Dynamic Projects** - Auto-loaded from curated resume projects
- 📧 **Contact Form** - Integrated with Getform.io for email submissions
- 🎬 **Smooth Scroll Animations** - Intersection Observer API for performance
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Lightning Fast** - Optimized for speed and performance
- ♿ **Accessible** - Respects user motion preferences

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - ES6+, no frameworks
- **Google Fonts** - Inter & Space Mono

### Libraries & APIs
- **Vanta.js** - 3D background effects
- **Three.js** - WebGL rendering
- **Getform.io** - Contact form backend
- **Intersection Observer API** - Scroll animations

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet with animations
|   └──animations.css      # Animation keyframes
│   └── responsive.css     # Mobile responsiveness          # Main stylesheet with animations
├── js/
│   ├── main.js            # Core functionality & interactions
│   ├── vanta-config.js    # Fog background configuration
│   └── resume-sync.js     # Projects data management
├── assets/
│   └── resume.pdf         # Downloadable resume
└── README.md              # Project documentation
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/KrishnaNaicker/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # OR using Node.js
   npx serve
   
   # Then visit: http://localhost:8000
   ```

3. **Make changes**
   - Edit HTML, CSS, or JS files
   - Changes will reflect on refresh

### Environment Setup

1. **Get Getform Endpoint** (for contact form)
   - Sign up at [getform.io](https://getform.io)
   - Create a new form
   - Copy your endpoint URL
   - Update in `js/main.js`:
     ```javascript
     const response = await fetch('YOUR_GETFORM_ENDPOINT', {
     ```

2. **Add Your Resume**
   - Place your `resume.pdf` in the `assets/` folder
   - Or update the path in `index.html`

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch
   - Click Save

3. **Access your site**
   ```
   https://krishnanaicker.github.io/portfolio/
   ```

### Alternative Deployments

**Netlify**
```bash
# Drag & drop the portfolio folder to netlify.com
# Or connect GitHub repo for auto-deployment
```

**Vercel**
```bash
npm i -g vercel
vercel
```

## 🎨 Customization Guide

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --color-bg-primary: #0a0e27;      /* Main background */
    --color-accent: #00d9ff;          /* Accent/highlight color */
    --color-text-primary: #e4e4e7;    /* Main text */
    --color-text-secondary: #a1a1aa;  /* Secondary text */
}
```

### Fog Effect Speed

Edit `js/vanta-config.js`:

```javascript
speed: 1.80,  // Increase for faster, decrease for slower
```

### Typing Animation Speed

Edit `js/main.js`:

```javascript
const typingSpeed = 25; // Milliseconds per character
```

### Projects

Update your projects in `js/resume-sync.js`:

```javascript
const projects = [
    {
        title: 'Your Project',
        description: 'Project description',
        tags: ['Tech1', 'Tech2'],
        github: 'https://github.com/...',
        demo: 'https://...' // Optional
    }
];
```

## 📊 Performance

- ⚡ **Page Load**: ~1.5s on 4G
- 🎯 **Lighthouse Score**: 95+ Performance
- 📦 **Total Size**: ~500KB (including libraries)
- 🖼️ **First Contentful Paint**: <1s

## 🔧 Features Breakdown

### 1. Interactive Fog Background
- WebGL-powered 3D fog effect
- Responds to mouse movement
- Optimized for 60fps
- Faster fog speed (1.80x)

### 2. Navigation
- Transparent navbar with blue border
- Blinking blue underline on hover
- Smooth scroll to sections
- Active link highlighting
- Resume download link

### 3. Hero Section
- Gradient name animation
- Animated social icons with glow
- Responsive typography
- Clean, modern layout

### 4. Terminal About
- Mac-style terminal design
- Live typing effect on scroll
- Triggers when section is visible
- Monospace font for authenticity

### 5. Tech Stack Bubbles
- Circular skill icons
- Tooltip with skill name on hover
- Scale animation (1.3x)
- Positioned above to prevent overlap
- Staggered entrance animation

### 6. Featured Projects
- 6 curated projects from resume
- Proper titles (not repo names)
- Tech tags with styling
- GitHub + live demo links
- Slide-up animation on scroll

### 7. Contact Form
- Modal-based form
- Getform.io integration
- Form validation
- Success/error messages
- Email directly to inbox

### 8. Scroll Animations
- Intersection Observer based
- Staggered skill/project animations
- Fade-in effects for sections
- Performance optimized
- Respects reduced motion preference

## 📧 Contact Form Setup

The contact form uses Getform.io (free tier: 50 submissions/month).

**Setup Steps:**

1. Visit [getform.io](https://getform.io)
2. Sign up with your email
3. Create a new form
4. Copy the endpoint URL
5. Update `js/main.js` line 66:
   ```javascript
   const response = await fetch('https://getform.io/f/YOUR_FORM_ID', {
   ```

**What you'll receive:**
```
From: Getform.io
To: krishnanaicker2005@gmail.com
Subject: New form submission

name: John Doe
email: john@example.com
message: Hi Krishna! I'd love to collaborate...
```

## 🐛 Troubleshooting

### Fog not showing
- Check browser console for Three.js errors
- Ensure Vanta.js CDN is loading
- Try hard refresh: `Ctrl + F5`

### Animations not working
- Clear browser cache
- Check console for JavaScript errors
- Ensure all JS files are loaded

### Contact form not sending
- Verify Getform endpoint is correct
- Check browser console for fetch errors
- Test Getform form status in dashboard

### Skills/Projects not visible
- Clear cache and hard refresh
- Check z-index in CSS
- Verify JS files are loading in correct order

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Krishna Naicker**
- 🎓 Third-year Undergraduate
- 💼 Aspiring AI/ML Engineer & Full-Stack Developer
- 📧 Email: [krishnanaicker2005@gmail.com](mailto:krishnanaicker2005@gmail.com)
- 🔗 GitHub: [@KrishnaNaicker](https://github.com/KrishnaNaicker)
- 💼 LinkedIn: [krishnanaicker29](https://linkedin.com/in/krishnanaicker29)

## 🌟 Featured Projects

1. **RapiDoc** - LLM-powered medical documentation with RAG
2. **HealthEase** - Gemini Pro medical chatbot
3. **HealBERT** - Self-healing DAG system using BERT
4. **CareFlow** - Multi-agent healthcare AI system
5. **QuizSpark** - AI quiz generation with Claude API
6. **VERBALIZE** - Deep learning lip reading model

## 🙏 Acknowledgments

- **Vanta.js** - Amazing 3D backgrounds
- **Three.js** - WebGL rendering
- **Getform.io** - Simple form backend
- **Google Fonts** - Beautiful typography
- **DevIcons** - Tech stack icons

## 📈 Future Enhancements

- [ ] Add blog section for technical articles
- [ ] Integrate GitHub contribution graph
- [ ] Add project screenshots/demos
- [ ] Implement dark/light mode toggle
- [ ] Add analytics (Plausible or Google Analytics)
- [ ] Create case studies for major projects
- [ ] Add testimonials section
- [ ] Implement progressive web app (PWA)

## 🔄 Updates

### v1.0.0 (November 2025)
- ✅ Initial release
- ✅ Interactive fog background
- ✅ Terminal typing animation
- ✅ Bubble tech stack
- ✅ Contact form integration
- ✅ Scroll animations
- ✅ Responsive design
- ✅ Resume download

---

## 💻 Development

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Basic HTML/CSS/JS knowledge

### Scripts

**Start local server:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

**Build for production:**
No build step required - just deploy the files!

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Built with 💙 by Krishna Naicker**

[Live Demo](https://krishnanaicker.github.io/portfolio/) • [Report Bug](https://github.com/KrishnaNaicker/portfolio/issues) • [Request Feature](https://github.com/KrishnaNaicker/portfolio/issues)

</div>