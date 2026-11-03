const SITE = {
  displayName: "Chris", // Short first-name display
  email: "christopher.hitijahubessy@mail.utoronto.ca", // Public professional email
  github: "https://github.com/christdh00",
  linkedin: "https://www.linkedin.com/in/christdh/", // Public LinkedIn profile
};

// Update name wherever it is displayed.
document.querySelectorAll('[data-display-name]').forEach((el) => {
  el.textContent = SITE.displayName;
});
document.title = `Christopher Daniel Hitijahubessy | Data Science Portfolio`;
const ogTitle = document.querySelector('meta[property="og:title"]');
if (ogTitle) ogTitle.content = document.title;

// Contact links: reveal only those configured.
let configuredLinks = 0;
for (const [key, id, prefix] of [
  ['email', 'email-link', 'mailto:'],
  ['github', 'github-link', ''],
  ['linkedin', 'linkedin-link', ''],
]) {
  const value = SITE[key].trim();
  const el = document.getElementById(id);
  if (!value || !el) continue;
  const url = prefix ? `${prefix}${value}` : value;
  if (!prefix && !/^https:\/\//i.test(url)) continue;
  el.href = url;
  if (!prefix) {
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  }
  el.hidden = false;
  configuredLinks++;
}
if (configuredLinks) document.getElementById('contact-note').hidden = true;

// Theme switcher (dark is the default for new visitors).
const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
let savedTheme = null;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) { /* Storage can be unavailable */ }
if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
function syncThemeLabel() {
  themeButton.setAttribute('aria-label', `Switch to ${root.dataset.theme === 'dark' ? 'light' : 'dark'} theme`);
}
syncThemeLabel();


/* Smooth dark/light mode transition */

themeButton.addEventListener("click", () => {
  const newTheme =
    root.dataset.theme === "dark" ? "light" : "dark";

  root.dataset.theme = newTheme;

  try {
    localStorage.setItem("portfolio-theme", newTheme);
  } catch (_) {
    // Ignore storage errors
  }

  syncThemeLabel();
});

// Responsive menu.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');
function closeMenu() {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

// Filter projects by category.
const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('.project-card');
const emptyText = document.querySelector('.no-projects');
filterButtons.forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach((candidate) => {
    const active = candidate === button;
    candidate.classList.toggle('active', active);
    candidate.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  projectCards.forEach((card) => {
    const categories = (card.dataset.category || "").split(/\s+/);
    const show = filter === 'all' || categories.includes(filter);
    card.hidden = !show;
    if (show) count++;
  });
  emptyText.hidden = count !== 0;
}));

// Reveal sections only when visible; show immediately if motion is reduced.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const reveals = document.querySelectorAll('.reveal');
if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach((element) => observer.observe(element));
}

// Reading progress + active section navigation.
const progressBar = document.querySelector('.scroll-progress');
const sectionAnchors = Array.from(navLinks.querySelectorAll('a'));
const sections = sectionAnchors.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
let ticking = false;
function updateScrollUI() {
  const availableScroll = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${availableScroll > 0 ? (window.scrollY / availableScroll) * 100 : 0}%`;
  let active = null;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.34) active = `#${section.id}`;
  });
  sectionAnchors.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === active));
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(updateScrollUI); }
}, { passive: true });
window.addEventListener('resize', updateScrollUI);
updateScrollUI();

// Lightweight decorative particles (no dependencies, no network access).
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
if (ctx && !reduceMotion.matches) {
  let particles = [];
  let width = 0;
  let height = 0;
  let animationId = null;
  let frame = 0;
  function resizeCanvas() {
    width = Math.max(1, window.innerWidth);
    height = Math.min(850, Math.max(550, window.innerHeight));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const number = Math.min(58, Math.max(20, Math.round(width / 24)));
    particles = Array.from({length: number}, () => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
      radius: Math.random() * 1.1 + .5,
    }));
  }
  function renderParticles() {
    ctx.clearRect(0, 0, width, height);
    const color = root.dataset.theme === 'light' ? '52,80,138' : '128,167,233';
    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${color},.56)`; ctx.fill();
      if (frame % 2 === 0) {
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 105) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${color},${.14 * (1 - dist / 105)})`;
            ctx.lineWidth = .7; ctx.stroke();
          }
        }
      }
    });
    frame++;
    animationId = requestAnimationFrame(renderParticles);
  }
  resizeCanvas();
  renderParticles();
  window.addEventListener('resize', () => { resizeCanvas(); }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && animationId !== null) { cancelAnimationFrame(animationId); animationId = null; }
    else if (!document.hidden && animationId === null) renderParticles();
  });
}


/* ==========================================
   BILINGUAL TYPEWRITER
   Types BOTH the introduction and the role
   ========================================== */

(() => {
  const phrases = [
    { intro: "I'm a", role: "Project Analyst" },
    { intro: "Je suis", role: "analyste de projets" },
    { intro: "I'm a", role: "Math & Physics Tutor" },
    { intro: "Je suis", role: "tuteur en maths et physique" },
    { intro: "I'm a", role: "Statistics Student" },
    { intro: "Je suis", role: "étudiant en statistique" },
    { intro: "I'm a", role: "Pianist & Organist" },
    { intro: "Je suis", role: "pianist et organiste" }
  ];

  const intro = document.getElementById("role-intro");
  const role = document.getElementById("rotating-role");
  const cursor = document.querySelector(".typing-cursor");

  if (!intro || !role || !cursor) return;

  // Accessibility: keep text static for reduced motion.
  if (window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches) {
    intro.textContent = phrases[0].intro;
    role.textContent = phrases[0].role;
    cursor.style.display = "none";
    return;
  }

  const sleep = ms =>
    new Promise(resolve => setTimeout(resolve, ms));

  async function type(element, text, speed) {
    element.textContent = "";

    for (const letter of text) {
      element.textContent += letter;
      await sleep(speed);
    }
  }

  async function erase(element, speed) {
    while (element.textContent.length > 0) {
      element.textContent =
        element.textContent.slice(0, -1);

      await sleep(speed);
    }
  }

  async function animate() {
    let index = 0;

    while (true) {
      const current = phrases[index];

      // Clear previous text.
      intro.textContent = "";
      role.textContent = "";

      // Type "I'm a" or "Je suis".
      intro.after(cursor);
      await type(intro, current.intro, 90);

      await sleep(200);

      // Type the professional role.
      role.after(cursor);
      await type(role, current.role, 65);

      // Display complete phrase.
      await sleep(2200);

      // Erase role first.
      await erase(role, 35);

      // Then erase introduction.
      intro.after(cursor);
      await erase(intro, 45);

      await sleep(300);

      index = (index + 1) % phrases.length;
    }
  }

  animate();
})();
