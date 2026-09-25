/**
 * ==========================================================================
 * MAIN PORTFOLIO CONTROLLER
 * Handles animations, dynamic rendering, themes, filtering, and interactions
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure portfolio data is loaded
  const data = window.portfolioData || {};

  /* --------------------------------------------------------------------------
     1. Theme Management (Dark / Light)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('portfolio-theme') || (prefersDark ? 'dark' : 'dark');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      themeToggleBtn.innerHTML = theme === 'dark'
        ? `<svg class="theme-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg class="theme-icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  }

  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  /* --------------------------------------------------------------------------
     2. Interactive Particle Constellation Canvas
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('bg-canvas');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);

    const mouse = { x: null, y: null, radius: 120 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.8 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse reaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const dirX = dx / dist;
            const dirY = dy / dist;
            this.x -= dirX * force * 3;
            this.y -= dirY * force * 3;
          }
        }
      }

      draw() {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        ctx.fillStyle = isDark ? 'rgba(129, 140, 248, 0.45)' : 'rgba(99, 102, 241, 0.35)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            const opacity = (1 - distance / 130) * 0.2;
            ctx.strokeStyle = isDark
              ? `rgba(99, 102, 241, ${opacity})`
              : `rgba(99, 102, 241, ${opacity * 0.7})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connectParticles();
      requestAnimationFrame(animate);
    }

    initParticles();
    animate();
  }

  /* --------------------------------------------------------------------------
     3. Hero Dynamic Typing Effect
     -------------------------------------------------------------------------- */
  const typedTarget = document.getElementById('typed-title');
  if (typedTarget && data.personal && data.personal.titles && data.personal.titles.length > 0) {
    const titles = data.personal.titles;
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeLoop() {
      const currentTitle = titles[titleIndex];
      if (isDeleting) {
        typedTarget.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 45;
      } else {
        typedTarget.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 105;
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typeSpeed = 1800; // Pause before delete
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 400; // Pause before next title
      }

      setTimeout(typeLoop, typeSpeed);
    }

    typeLoop();
  }

  /* --------------------------------------------------------------------------
     4. Dynamic Data Rendering
     -------------------------------------------------------------------------- */
  // Personal Info Bindings
  if (data.personal) {
    document.querySelectorAll('[data-bind="name"]').forEach(el => el.textContent = data.personal.name);
    document.querySelectorAll('[data-bind="initials"]').forEach(el => el.textContent = data.personal.initials);
    document.querySelectorAll('[data-bind="greeting"]').forEach(el => el.textContent = data.personal.greeting);
    document.querySelectorAll('[data-bind="bio"]').forEach(el => el.textContent = data.personal.bio);
    document.querySelectorAll('[data-bind="status"]').forEach(el => el.textContent = data.personal.status);
    document.querySelectorAll('[data-bind="location"]').forEach(el => el.textContent = data.personal.location);
    document.querySelectorAll('[data-bind="email"]').forEach(el => {
      el.textContent = data.personal.email;
      if (el.tagName === 'A') el.href = `mailto:${data.personal.email}`;
    });
    document.querySelectorAll('[data-bind="phone"]').forEach(el => {
      el.textContent = data.personal.phone;
      if (el.tagName === 'A') el.href = `tel:${data.personal.phone.replace(/[^0-9+]/g, '')}`;
    });

    const cvBtn = document.getElementById('btn-download-cv');
    if (cvBtn && data.personal.resumeUrl) {
      cvBtn.href = data.personal.resumeUrl;
    }

    // Social Links
    if (data.personal.socials) {
      const gitLink = document.getElementById('link-github');
      if (gitLink) gitLink.href = data.personal.socials.github;
      const linkedinLink = document.getElementById('link-linkedin');
      if (linkedinLink) linkedinLink.href = data.personal.socials.linkedin;
      const twitterLink = document.getElementById('link-twitter');
      if (twitterLink) twitterLink.href = data.personal.socials.twitter;
      const emailLink = document.getElementById('link-email');
      if (emailLink) emailLink.href = data.personal.socials.email;
    }
  }

  // Render Stats
  const statsContainer = document.getElementById('stats-container');
  if (statsContainer && data.stats) {
    statsContainer.innerHTML = data.stats.map(s => `
      <div class="stat-card">
        <span class="stat-number">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }

  // Render Services / What I Do
  const servicesContainer = document.getElementById('services-container');
  if (servicesContainer && data.services) {
    const iconSVGs = {
      code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path></svg>`,
      zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
      cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
    };

    servicesContainer.innerHTML = data.services.map(srv => `
      <div class="glass-card service-card">
        <div class="service-icon">
          ${iconSVGs[srv.icon] || iconSVGs.code}
        </div>
        <h3 class="service-title">${srv.title}</h3>
        <p class="service-desc">${srv.description}</p>
      </div>
    `).join('');
  }

  // Render Skills
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer && data.skills) {
    skillsContainer.innerHTML = data.skills.map(cat => `
      <div class="glass-card skill-category-card">
        <div class="skill-category-header">
          <div class="skill-category-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <h3 class="skill-category-title">${cat.category}</h3>
        </div>
        <div class="skill-items-grid">
          ${cat.items.map(item => `
            <div class="skill-pill" title="Proficiency: ${item.level}">
              <span class="skill-icon-dot"></span>
              <span>${item.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Projects
  const projectsContainer = document.getElementById('projects-container');
  function renderProjects(filterCategory = 'all') {
    if (!projectsContainer || !data.projects) return;

    const filtered = filterCategory === 'all'
      ? data.projects
      : data.projects.filter(p => p.category === filterCategory);

    projectsContainer.innerHTML = filtered.map(p => `
      <article class="glass-card project-card" data-id="${p.id}">
        <div class="project-thumbnail" style="background: ${p.gradient}">
          <div style="font-size: 2.5rem; color: rgba(255,255,255,0.85); font-weight: 800;">
            ${p.title.split(' ')[0]}
          </div>
          <div class="project-thumbnail-overlay">
            <button class="btn btn-sm btn-primary view-project-btn" data-id="${p.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Quick View
            </button>
          </div>
        </div>
        <div class="project-body">
          <div class="project-badge-row">
            <span class="project-category">${p.categoryLabel || p.category}</span>
            <span class="tech-tag" style="background: var(--accent-gradient-subtle); color: var(--accent-primary);">${p.badge || 'Live'}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tech-stack">
            ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link">
              <span>Live Preview</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>Source</span>
            </a>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listeners for quick view
    document.querySelectorAll('.view-project-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  renderProjects('all');

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });

  // Render Timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer && data.timeline) {
    timelineContainer.innerHTML = data.timeline.map(item => `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="glass-card timeline-content">
          <div class="timeline-header">
            <h3 class="timeline-role">${item.role}</h3>
            <span class="timeline-period">${item.period}</span>
          </div>
          <div class="timeline-company">${item.company}</div>
          <p class="timeline-desc">${item.description}</p>
          <ul class="timeline-achievements">
            ${item.achievements.map(ach => `<li>${ach}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     5. Project Details Modal
     -------------------------------------------------------------------------- */
  const modalBackdrop = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-project-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectModal(id) {
    if (!data.projects) return;
    const p = data.projects.find(proj => proj.id === id);
    if (!p || !modalBackdrop || !modalBody) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem; height: 180px; border-radius: 14px; background: ${p.gradient}; display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 2.2rem; font-weight: 800; color: #fff;">${p.title}</span>
      </div>
      <span class="project-category">${p.categoryLabel || p.category}</span>
      <h2 style="margin: 0.5rem 0 1rem; font-size: 1.75rem;">${p.title}</h2>
      <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${p.details || p.description}</p>
      
      <h4 style="margin-bottom: 0.75rem; font-size: 1rem;">Technologies Used:</h4>
      <div class="project-tech-stack" style="margin-bottom: 2rem;">
        ${p.techStack.map(t => `<span class="tech-tag" style="background: var(--bg-tertiary); padding: 0.35rem 0.8rem; font-size: 0.85rem;">${t}</span>`).join('')}
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Visit Live Demo
        </a>
        <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 1;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          View Source Code
        </a>
      </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* --------------------------------------------------------------------------
     6. Copy to Clipboard Utility & Toast System
     -------------------------------------------------------------------------- */
  function showToast(message, duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-copy-target');
      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        const text = targetEl.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Copied to clipboard: ${text}`);
        }).catch(() => {
          showToast('Failed to copy to clipboard');
        });
      }
    });
  });

  /* --------------------------------------------------------------------------
     7. Contact Form Submission (Client Simulation)
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const msgInput = document.getElementById('contact-message');
      const submitBtn = document.getElementById('contact-submit-btn');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !msgInput.value.trim()) {
        showToast('Please fill out all required fields.');
        return;
      }

      // Simple email check
      if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
        showToast('Please enter a valid email address.');
        return;
      }

      // Simulated sending state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"></path>
        </svg>
        Sending...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast('Message sent! Thank you, I will reply soon.');
        contactForm.reset();
      }, 1000);
    });
  }

  /* --------------------------------------------------------------------------
     8. Navbar Scroll Behavior & Scroll-Spy
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Sticky Navbar style
    if (navbar) {
      if (scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll Spy active link
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     9. Mobile Menu Drawer
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-links');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});
