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
    photoUrl: "Seminda .png",
    location: "Sri Lanka (Open to Remote & Global Opportunities)",
    email: "semindadewruwan2003@gmail.com",
    phone: "+94 76 465 1136",
    status: "Open to Collaborations & Opportunities",
    resumeUrl: "assets/Seminda Fernando.pdf",
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
      id: "FOUND-IT",
      title: "Found-it - Lost & Found App",
      category: "mobile",
      categoryLabel: "Mobile App",
      description: "A campus-focused Lost & Found mobile app that helps students and staff report, discover, and recover lost items through photos, item details, and direct contact.",
      details: "FindItApp is a cross-platform mobile application developed using React Native (Expo SDK 54) and TypeScript, designed to help users report, search, and recover lost and found personal belongings. The app features intuitive bottom-tab and modal navigation built on Expo Router, responsive UI components with dynamic Dark and Light mode support, and smooth micro-interactions powered by React Native Reanimated and Expo Haptics. Architected with a modular service layer ready for Google Firebase & Cloud Firestore, FindItApp delivers a seamless, high-performance native experience on both Android and iOS devices.",
      techStack: ["React Native" , "Expo (SDK 54)" , "TypeScript" , "React 19" , "Expo Router" , "React Native Reanimated" , "Firebase Firestore" , "React Native Web"],
      githubUrl: "https://github.com/SemindaFernando/FindIt-Lost-AndFoundApp",
      image: "Find.jpg",
      badge: "Featured"
    },
    {
      id: "Social Media Content Management Platform",
      title: "SMCMP - Grand Azure Resort & Spa — Social Media Content Management Platform",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      description: "Grand Azure SMCMP is an enterprise-grade full-stack platform designed to streamline social media workflows for a luxury 5-star resort. The platform addresses multi-channel marketing challenges across Instagram, Facebook, TikTok, LinkedIn, X (Twitter), and YouTube",
      details: "A full-stack Social Media Content Management Platform designed for the hospitality industry, featuring role-based access control, content creation and approval workflows, post scheduling, campaign management, analytics dashboards, and guest photo consent tracking. Built with Node.js, Express.js, Firebase, JavaScript, Bootstrap, and Chart.js.",
      techStack: ["JavaScript", "HTML5", "Modern CSS", "Firebase",],
      demoUrl: "https://social-media-content-management-pla-seven.vercel.app/",
      githubUrl: "https://github.com/SemindaFernando/Social-Media-Content-Management-Platform-SMCMP-",
      image: "SMCMP.png",
      badge: "High Performance"
    },
    {
      id: "SmartCare Hospital",
      title: "SmartCare Hospital — AI-Powered 30-Day Patient Readmission Prediction",
      category: "AI / Machine Learning",
      categoryLabel: "AI / Machine Learning",
      description: "The system predicts whether a hospital patient is likely to be readmitted within 30 days of discharge. SmartCare combines data preprocessing, machine learning, model evaluation, and Explainable AI (XAI) to transform patient information into understandable and actionable insights.",
      details: " SmartCare AI is an AI-powered healthcare application that predicts the likelihood of hospital patient readmission within 30 days of discharge. It combines data preprocessing, machine learning, model evaluation, and Explainable AI (XAI) to generate predictions with understandable explanations. The interactive Streamlit web application allows users to enter patient information, view predicted readmission risks, and understand the factors influencing the results.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SHAP", "Streamlit", "Matplotlib", "Plotly", "Joblib", "Jupyter Notebook"],
      demoUrl: "https://i7j6zly2spyf5kxtor9znp.streamlit.app/",
      githubUrl: "https://github.com/MalshaniDissanayaka/SmartCare-AI-Coursework",
      image: "SmartCare Hospital.png",
      badge: "Real-time"
    },
    
    {
      id: "xai-vehicle-failure-3d",
      title: "XAI Vehicle Failure Management - Toyota Aqua",
      category: "ai-ml",
      categoryLabel: "fullstack",
      description: "(Ongoing Project) Explainable AI framework that turns black-box engine fault predictions into role-specific alerts and an interactive 3D visualization of the affected engine component.",
      details: "Predicts engine overheating and low oil pressure faults for the Toyota Aqua (Prius C) using Random Forest and XGBoost trained on synthetic fault sequences. SHAP and LIME explanations are adapted for drivers, technicians, and technically oriented users, then mapped to cooling and lubrication components in a Three.js 3D engine simulation. Evaluated through a user study (SUS, trust, decision accuracy, response time) against traditional text-based warnings.",
      techStack: ["Python", "Random Forest", "XGBoost", "SHAP", "LIME", "Flask", "Three.js", "Blender"],
      demoUrl: "",
      githubUrl: "",
      image: "XAI.jpeg",
      badge: "XAI"
    },
    {
      id: "bike-parts-pos",
      title: "MotoParts POS - Bike Shop Management System",
      category: "desktop",
      categoryLabel: "fullstack",
      description: "(Ongoing Project) Complete point-of-sale system for a motorcycle parts shop with inventory tracking, fast billing, credit sales management and daily sales reports.",
      details: "Built for a real client to replace manual bill books. Includes part number and bike model search, low stock alerts, supplier purchases (GRN), customer credit tracking, thermal receipt printing, barcode scanning, role-based login (owner / cashier) and automatic daily database backups. Packaged as a Windows installer so the shop needs no extra setup.",
      techStack: ["Java", "JavaFX", "Spring Boot", "MySQL", "JDBC"],
      demoUrl: "#",
      githubUrl: "#",
      gradient: "linear-gradient(135deg, #f97316 0%, #dc2626 100%)",
      badge: "Client Project"
    }
  ],

  // Career Experience & Education Timeline
  timeline: [
    {
      period: "2023-Present",
      role: "BSc (Hons) in Software Engineering Student",
      company: "SLTC Research University",
      description: "Currently pursuing a BSc (Hons) in Software Engineering at SLTC Research University, developing skills in software development, mobile applications, and modern web technologies.",
      achievements: [
        "Building practical experience through academic projects and personal software development projects.",
        "Exploring full-stack development, mobile application development, and AI-powered solutions."
      ]
    },
    {
      period: "2012-2021",
      role: "Student",
      company: "G/Karandeniya Central Collage",
      description: "Completed school education from 2012 to 2021, including the G.C.E. Ordinary Level and Advanced Level examinations.",
      achievements: [
                      "Completed G.C.E. Ordinary Level (O/L) examination in 2018.",
                      "Completed G.C.E. Advanced Level (A/L) examination in 2021."
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
