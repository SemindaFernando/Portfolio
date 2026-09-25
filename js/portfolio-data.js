/**
 * ==========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * Edit your details, projects, skills, and experience here!
 * ==========================================================================
 */

const portfolioData = {
  // Personal & Brand Information
  personal: {
    name: "Seminda Fernando",
    initials: "SF",
    titles: [
      "Software Engineering Undergraduate",
      "Mobile App Developer",
      "Web & Full-Stack Developer",
      "Creative Problem Solver"
    ],
    greeting: "Hello, I am",
    bio: "Passionate Software Engineering undergraduate who enjoys building modern mobile and web applications. I’m focused on Full-Stack Development, creating user-friendly digital experiences, and turning creative ideas into real-world solutions.",
    aboutParagraphs: [
      "I’m a Software Engineering undergraduate at SLTC with a passion for building innovative and user-friendly digital solutions. My main interests are Mobile App Development, Web Development, and Full-Stack Development.",
      "I enjoy turning ideas into functional applications and exploring different technologies to solve real-world problems. I’m particularly interested in developing responsive interfaces, creating efficient backend systems, working with databases, and delivering smooth user experiences.",
      "As I continue my journey in software engineering, I’m constantly learning new technologies, improving my programming and problem-solving skills, and working on projects that allow me to gain practical experience. I’m always open to new challenges, collaboration, and opportunities to grow as a developer."
    ],
    interests: [
      "Mobile App Development",
      "Web Development",
      "Full-Stack Development",
      "Responsive UI/UX",
      "Backend & Databases"
    ],
    photoUrl: "assets/profile.jpg",
    location: "Sri Lanka (Open to Remote & Global Opportunities)",
    email: "semindadewruwan2003@gmail.com",
    phone: "+94 76 465 1136",
    status: "Open to Collaborations & Opportunities",
    resumeUrl: "C:\Users\semin\Downloads\New folder\assets\Seminda Fernando.pdf", // Replace with your resume PDF link or path
    socials: {
      github: "https://github.com/SemindaFernando",
      linkedin: "https://www.linkedin.com/in/semindafernando/",
      twitter: "https://twitter.com",
      email: "semindadewruwan2003@gmail.com"
    }
  },

  // Key Highlight Stats
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "5+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "1.2k+", label: "GitHub Contributions" }
  ],

  // What I Do / Core Services
  services: [
    {
      title: "Full-Stack Development",
      description: "End-to-end web engineering using modern frontend ecosystems and robust backend REST/GraphQL microservices.",
      icon: "code"
    },
    {
      title: "UI/UX & Design Systems",
      description: "Crafting accessible, pixel-perfect, responsive component libraries with subtle animations and design tokens.",
      icon: "palette"
    },
    {
      title: "Performance & SEO",
      description: "Optimizing Core Web Vitals, asset pipelines, caching layers, and search visibility for lightning-fast loads.",
      icon: "zap"
    },
    {
      title: "Cloud & DevOps",
      description: "Setting up CI/CD workflows, containerization with Docker, and scalable serverless deployments on cloud providers.",
      icon: "cloud"
    }
  ],

  // Skills & Technologies
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "React.js / Next.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js & Express", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Firebase / Firestore", level: "Advanced" },
        { name: "REST & GraphQL APIs", level: "Expert" }
      ]
    },
    {
      category: "DevOps, Tools & AI",
      items: [
        { name: "Git & GitHub Actions", level: "Expert" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS / Vercel / Cloudflare", level: "Advanced" },
        { name: "Figma", level: "Advanced" },
      ]
    }
  ],

  // Featured Portfolio Projects
  projects: [
    {
      id: "ai-saas-dashboard",
      title: "Nexus AI - Analytics Platform",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      description: "Real-time AI-powered customer sentiment analytics dashboard with live data streaming, role-based auth, and automated PDF reports.",
      details: "Nexus AI processes thousands of real-time incoming user feedback streams using sentiment analysis. Features interactive charts, WebSockets live feed, team workspaces, multi-tenant authentication, and exportable weekly executive summaries.",
      techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
      demoUrl: "https://example.com/nexus-ai",
      githubUrl: "https://github.com/example/nexus-ai",
      gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      badge: "Featured"
    },
    {
      id: "ecommerce-design-system",
      title: "Aura - Minimal E-Commerce",
      category: "frontend",
      categoryLabel: "Frontend & UI/UX",
      description: "Ultra-fast headless e-commerce store with smooth micro-interactions, dark mode, accessible cart drawer, and Stripe checkout.",
      details: "Built with a focus on 100/100 Google Lighthouse scores. Features server-driven filtering, localized currencies, predictive search autocomplete, and a persistent stateful cart drawer.",
      techStack: ["JavaScript", "HTML5", "Modern CSS", "Stripe API", "Vite"],
      demoUrl: "https://example.com/aura-store",
      githubUrl: "https://github.com/example/aura-store",
      gradient: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
      badge: "High Performance"
    },
    {
      id: "task-flow-collaboration",
      title: "Pulse - Team Workflow Suite",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      description: "Collaborative Kanban and sprint planner equipped with real-time multi-cursor updates, markdown docs, and Slack webhook alerts.",
      details: "Engineered to supercharge agile engineering teams. Integrates markdown document authoring with inline task tracking, customizable sprint velocity graphs, and automated GitHub PR hooks.",
      techStack: ["TypeScript", "Express", "MongoDB", "Redis", "Docker"],
      demoUrl: "https://example.com/pulse-flow",
      githubUrl: "https://github.com/example/pulse-flow",
      gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      badge: "Real-time"
    },
    {
      id: "crypto-portfolio-tracker",
      title: "Zenith - Asset Tracker & Widget",
      category: "frontend",
      categoryLabel: "Web App",
      description: "Interactive cryptocurrency and stock portfolio tracking application with historical chart overlays and price alert notifications.",
      details: "Fetches live market rates from public exchanges with zero API rate-limit bottlenecks via intelligent client-side caching. Features custom price threshold alerts and exportable tax summaries.",
      techStack: ["JavaScript", "Chart.js", "IndexedDB", "CSS3 Grid"],
      demoUrl: "https://example.com/zenith-tracker",
      githubUrl: "https://github.com/example/zenith-tracker",
      gradient: "linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)",
      badge: "Finance"
    },
    {
      id: "mobile-fitness-pwa",
      title: "Stride - Health & Routine PWA",
      category: "mobile",
      categoryLabel: "Mobile & PWA",
      description: "Offline-first Progressive Web App for workout scheduling, interval timers, and health metric tracking with haptic feedback.",
      details: "Works completely offline using Service Workers and Cache Storage. Supports push notifications for scheduled workouts and syncs seamlessly when network connectivity is restored.",
      techStack: ["PWA", "Service Workers", "Web Audio API", "Vanilla JS"],
      demoUrl: "https://example.com/stride-pwa",
      githubUrl: "https://github.com/example/stride-pwa",
      gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
      badge: "PWA"
    },
    {
      id: "developer-docs-engine",
      title: "Codex - Interactive API Docs",
      category: "frontend",
      categoryLabel: "Developer Tools",
      description: "Lightweight documentation generator with syntax-highlighted interactive playground, instant fuzzy search, and dark mode.",
      details: "Built to render complex OpenAPI and Markdown documentation in milliseconds with zero heavy build artifacts. Includes an in-browser request tester and code snippet generator in 6 languages.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Prism.js", "Algolia"],
      demoUrl: "https://example.com/codex-docs",
      githubUrl: "https://github.com/example/codex-docs",
      gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)",
      badge: "Open Source"
    }
  ],

  // Career Experience & Education Timeline
  timeline: [
    {
      period: "Present",
      role: "BSc (Hons) in Software Engineering Student",
      company: "SLTC Research University",
      description: "Undergraduate student focusing on software development, full-stack web architectures, mobile applications, and database management.",
      achievements: [
        "Specializing in Mobile App Development, Web Development, and Full-Stack Systems.",
        "Passionate about turning innovative ideas into practical, user-friendly digital applications."
      ]
    },
    {
      period: "2012-2021",
      role: "Student",
      company: "G/Karandeniya Central Collage",
      description: "Building responsive web interfaces, robust backend APIs, and modern mobile app experiences.",
      achievements: [
        "Crafted interactive full-stack and frontend web applications adhering to modern UI/UX standards.",
        "Integrated relational databases, authentication workflows, and performant RESTful APIs."
      ]
    }
  ]
};

// Export for module systems or attach to window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}
