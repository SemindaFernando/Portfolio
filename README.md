# 🚀 Modern Personal Portfolio

A sleek, responsive, zero-dependency personal portfolio website built with modern **HTML5**, **CSS3 Custom Properties (CSS Variables)**, and vanilla **ES6+ JavaScript**.

---

## ✨ Key Features

- 🌓 **Dark & Light Mode**: Smooth theme toggling with `localStorage` persistence and system color-scheme detection.
- 🌌 **Interactive Constellation Canvas**: Background particle mesh reacting to mouse movement and window resizing.
- ⚡ **Zero Dependencies**: No `npm install`, Node.js, or complex build steps required. Runs out-of-the-box in any browser.
- 🎛️ **Centralized Configuration (`js/portfolio-data.js`)**: Update your name, job titles, bio, skills, projects, and work history in one single file!
- 🔍 **Interactive Project Filter & Modal**: Filter works by category (*Full-Stack*, *Frontend*, *Mobile/PWA*) and click "Quick View" to inspect project case studies in a modal.
- 📋 **1-Click Copy to Clipboard**: Instant copy for your direct email address and phone number with animated toast notifications.
- 📱 **Fully Responsive**: Crafted with mobile-first layouts, hamburger drawer navigation, and accessible touch targets.

---

## 📂 Project Structure

```
New folder/
├── index.html              # Main semantic HTML structure & markup
├── README.md               # Quick start & customization instructions
├── css/
│   └── style.css           # Glassmorphism, CSS variables, dark/light themes & animations
└── js/
    ├── portfolio-data.js   # 🛠️ EDIT HERE: Your personal bio, skills, projects & timeline
    └── main.js             # Canvas animation, typing effect, theme switcher & form logic
```

---

## 🚀 How to Run & Preview

1. **Direct Preview**: Double-click [`index.html`](file:///c:/Users/semin/Downloads/New%20folder/index.html) to open it in your default web browser (Chrome, Edge, Firefox, Safari).
2. **VS Code Live Server (Optional)**: If you use VS Code, right-click `index.html` and select **"Open with Live Server"**.
3. **Python Local Server (Optional)**:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

---

## 🛠️ How to Customize Your Information

All your personal information is separated into [`js/portfolio-data.js`](file:///c:/Users/semin/Downloads/New%20folder/js/portfolio-data.js):

1. **Name & Titles**:
   ```javascript
   personal: {
     name: "Your Name",
     initials: "YN",
     titles: ["Full-Stack Developer", "UI/UX Designer", ...],
     bio: "A short summary about what you build...",
     email: "your.email@example.com",
     phone: "+1 (555) 000-0000",
     location: "City, Country",
     ...
   }
   ```
2. **Profile Photo**:
   Place your photo file named `profile.jpg` (or `profile.png`) into the `assets/` folder. It will immediately show up framed inside your About section!
3. **Social Profiles**:
   Update links in `personal.socials` (GitHub, LinkedIn, Twitter/X, Email).
3. **Skills**:
   Edit or add categories and skills under `portfolioData.skills`.
4. **Projects**:
   Add your real projects in `portfolioData.projects` with GitHub URLs, live links, and tech tags.
5. **Experience & Education**:
   Update your career history and degrees under `portfolioData.timeline`.

---

## 🌐 Deploy to Free Web Hosting

### Option 1: GitHub Pages (Recommended)
1. Create a repository on GitHub (e.g. `username.github.io`).
2. Upload these files to the `main` branch.
3. In GitHub repo settings, go to **Pages** -> Select branch `main` -> Save.
4. Your portfolio is live at `https://username.github.io`!

### Option 2: Netlify / Vercel
- Drag and drop this folder directly onto [Netlify Drop](https://app.netlify.com/drop) or import into [Vercel](https://vercel.com).
