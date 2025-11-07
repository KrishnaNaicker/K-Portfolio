# 🚀 Krishna Naicker - Portfolio

A stunning, interactive portfolio website with auto-syncing GitHub data and mesmerizing Vanta.js fog background effects.

![Portfolio Preview](https://via.placeholder.com/800x400/0f172a/6366f1?text=Portfolio+Preview)

## ✨ Features

- 🌫️ **Interactive Vanta.js FOG Background** - Mesmerizing animated fog that responds to cursor movement
- 🎨 **Glassmorphism Design** - Modern, translucent cards with backdrop blur effects
- 🖱️ **Custom Cursor** - Game-like interactive cursor with magnetic effects
- 📱 **Fully Responsive** - Looks amazing on all devices
- 🔄 **Auto-Sync with GitHub** - Automatically updates projects from your GitHub repos
- ⚡ **Smooth Animations** - GSAP-powered scroll animations
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant with ARIA labels
- 🚀 **Fast Loading** - Optimized performance with lazy loading

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No heavy frameworks
- **GSAP** - Professional animations
- **Vanta.js** - 3D background effects
- **Three.js** - WebGL rendering
- **GitHub API** - Dynamic data fetching

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles
│   ├── animations.css     # Animation keyframes
│   └── responsive.css     # Mobile responsiveness
├── js/
│   ├── main.js           # Core functionality
│   ├── vanta-config.js   # Vanta.js setup
│   ├── cursor-effects.js # Custom cursor
│   └── resume-sync.js    # GitHub API integration
├── assets/
│   ├── images/           # Images and icons
│   └── fonts/            # Custom fonts
├── data/
│   └── resume.json       # Resume data
└── README.md             # This file
```

## 🚀 Quick Start

### 1. Clone or Download

```bash
# Clone this repository
git clone https://github.com/KrishnaNaicker/portfolio.git

# Navigate to the project
cd portfolio
```

### 2. Add Vanta.js CDN

Open `index.html` and add this line **before** `vanta-config.js`:

```html
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></script>
```

Your scripts section should look like:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<!-- ADD THIS LINE -->
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></script>
<!-- -->
<script src="js/vanta-config.js"></script>
<script src="js/cursor-effects.js"></script>
<script src="js/resume-sync.js"></script>
<script src="js/main.js"></script>
```

### 3. Customize Your Info

#### Update Personal Information

Edit `index.html`:
- Change your name in the hero section
- Update email in the contact section
- Update social media links

#### Update GitHub Username

Edit `js/resume-sync.js`:

```javascript
const GITHUB_USERNAME = 'KrishnaNaicker'; // Change to your username
```

#### Update Resume Data

Edit `data/resume.json` with your information:
- Personal details
- Skills
- Experience
- Education
- Projects

### 4. Open in Browser

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🎨 Customization

### Change Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --color-primary: #6366f1;     /* Main brand color */
    --color-secondary: #8b5cf6;   /* Secondary color */
    --color-accent: #06b6d4;      /* Accent color */
    --color-highlight: #f59e0b;   /* Highlight color */
}
```

### Customize Vanta.js Background

Edit `js/vanta-config.js`:

```javascript
VANTA.FOG({
    highlightColor: 0x6366f1,  // Change colors (hex format)
    midtoneColor: 0x8b5cf6,
    speed: 1.5,                // Change animation speed
    zoom: 1.2,                 // Change zoom level
    blurFactor: 0.6           // Change blur amount
})
```

### Change Fonts

Update Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Then update in `css/style.css`:

```css
--font-primary: 'YourFont', sans-serif;
```

## 📊 GitHub Resume Auto-Sync

### How It Works

1. The portfolio automatically fetches your latest GitHub repositories
2. Projects are sorted by last update date
3. Top 6 repos are displayed with:
   - Repository name
   - Description
   - Languages/topics as tags
   - Stars and forks count
   - Links to repo and live demo (if available)

### Sync from .typst Resume

To automatically update from your `.typst` resume file:

1. Create a public GitHub repository
2. Upload your `resume.typst` file
3. The script will detect and parse it automatically

### Manual Project Control

To manually control which projects appear:

1. Add topics to your GitHub repos
2. Pin repositories on your GitHub profile
3. Or edit `data/resume.json` directly

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to GitHub
git push origin gh-pages
```

Then enable GitHub Pages in repository settings.

### Deploy to Netlify

1. Drag and drop the `portfolio` folder to [Netlify](https://app.netlify.com)
2. Your site is live! 🎉

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (limited support)

## 🐛 Troubleshooting

### Vanta.js not working?

Make sure you've added the CDN link:
```html
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></script>
```

### Custom cursor not showing?

Check browser console for errors. Custom cursor is disabled on mobile devices.

### GitHub projects not loading?

1. Check your GitHub username in `js/resume-sync.js`
2. Make sure your repos are public
3. Check browser console for API errors

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - Feel free to use this for your own portfolio!

## 🙏 Credits

- **Vanta.js** - [https://www.vantajs.com/](https://www.vantajs.com/)
- **GSAP** - [https://greensock.com/gsap/](https://greensock.com/gsap/)
- **Three.js** - [https://threejs.org/](https://threejs.org/)
- **Google Fonts** - [https://fonts.google.com/](https://fonts.google.com/)

## 📧 Contact

**Krishna Naicker**
- GitHub: [@KrishnaNaicker](https://github.com/KrishnaNaicker)
- Email: krishna@example.com

---

Made with ❤️ and lots of ☕

⭐ Star this repo if you found it helpful!