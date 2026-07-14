import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import {
  Mail,
  Menu,
  X,
  ExternalLink,
  Download,
  ArrowDown,
  Code2,
  Database,
  Wrench,
  Layers,
  Terminal,
  Send,
} from "lucide-react";

/* lucide-react dropped brand/logo icons in newer versions, so these
   two are simple hand-rolled replacements. */
const Github = ({ size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

const Linkedin = ({ size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="7" y1="10" x2="7" y2="17" />
    <circle cx="7" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    <path d="M11 17v-4.2c0-1.5 1-2.3 2.2-2.3 1.2 0 2 .8 2 2.3V17" />
    <line x1="11" y1="10" x2="11" y2="17" />
  </svg>
);


  const WhatsApp = ({ size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a9 9 0 0 0-7.75 13.55L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
    <path
      d="M8.3 8.7c.15-.5.4-.5.6-.5h.45c.15 0 .35 0 .5.4.2.5.65 1.7.7 1.8.05.1.1.25 0 .4-.1.15-.15.25-.3.4-.15.15-.3.3-.15.55.4.7.9 1.35 1.55 1.9.7.6 1.3.9 1.55 1.05.25.15.4.1.55-.05.15-.15.6-.7.75-.95.15-.25.3-.2.5-.1.2.05 1.25.6 1.45.7.2.1.35.15.4.25.05.1.05.6-.15 1.15-.2.55-1.15 1.05-1.6 1.1-.4.05-.9.1-3.3-.9-2.4-1-3.7-3.15-3.85-3.4-.15-.25-1.1-1.6-1.1-3s.75-2.1.95-2.35Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  DATA — edit this block to make the site yours                     */
/* ------------------------------------------------------------------ */

const NAME = "Sudhanshu Anand";
const FOOTER_NAME = "CODEWITHSUDHANSHU";
const ROLES = [
  "MERN stack Developer",
  "Wordpress Web Desinger",
  "3D Web Enthusiast",
  "UX/UI Designer",
];

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Log" },
  { id: "contact", label: "Contact" },
];

const STATS = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Shipped", value: "30+" },
  { label: "Companies", value: "2" },
  { label: "Coffee / Day", value: "2" },
];

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Frontend",
    items: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Three.js",
    ],
  },
  {
    icon: Wrench,
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Python",
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: [
      "MongoDB",
      "MySQL",
    ],
  },
  {
    icon: Layers,
    title: "Tools & Cloud",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "AWS EC2",
      "AWS S3",
      "WordPress",
      "Photoshop",
    ],
  },
];

const PROJECTS = [
  {
    code: "01",
    name: "WORDPRESS WEBSITE",
    desc: "Designed and developed responsive, SEO-friendly WordPress websites with custom themes, plugin integration, and optimized performance for business and client requirements.",
    tags: ["WordPress", "PHP", "Elementor", "CSS"],
    glow: "cyan",
  },
  {
    code: "02",
    name: "PHILIPPINES TAT DASHBOARD",
    desc: "Built a real-time analytics dashboard to monitor TAT metrics, visualize operational data, and generate business insights with interactive charts and responsive UI.",
    tags: ["React", "JavaScript", "REST API", "Charts"],
    glow: "violet",
  },
  {
    code: "03",
    name: "MOTOR INSURANCE AI-INTEGRATED REAL-TIME DASHBOARD",
    desc: "Developed an AI-integrated insurance dashboard featuring secure authentication, real-time data visualization, policy management, and responsive enterprise-grade interfaces.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    glow: "green",
  },
  {
    code: "04",
    name: "THAI & FILIPINO DELIVERY SYSTEM",
    desc: "Developed and maintained a delivery management system for Thailand and the Philippines, enabling real-time order tracking, operational workflows, and efficient delivery monitoring.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    glow: "cyan",
  },
];

const EXPERIENCE = [
  {
    year: "2025 — Present",
    role: "MERN Stack Developer",
    org: "Constem-AI Pvt Lmt Noida-52 IND",
    desc: "Leading the platform team rebuilding the core product on React and TypeScript, cutting load times by 60%.",
  },
  {
    year: "2025 — Present",
    role: "Freelance Web Designer",
    org: "Websart Digital Agency DELHI IND",
    desc: "Shipped client products end to end, from API design to pixel-perfect, animated interfaces.",
  },
  {
    year: "2024 — 2025",
    role: "Junior Software Developer",
    org: "Geincept Pvt Lmt Ghaziabaad, IND",
    desc: "Started out building internal tools and dashboards, and picked up React, Node and cloud infra fast.",
  },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/CAIcodewithsudhanshu", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sudhanshu-anand-ab26a6232/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:anandsudhanshu008@gmail.com", label: "Email" },
  { icon: WhatsApp, href: "https://wa.me/91XXXXXXXXXX", label: "WhatsApp" },
];

/* ------------------------------------------------------------------ */
/*  Global styles                                                     */
/* ------------------------------------------------------------------ */

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

    .portfolio-root {
      --bg: #05050a;
      --surface: #0c0c16;
      --surface-2: #12121f;
      --border: #1d2035;
      --cyan: #2dd9ff;
      --violet: #b16bff;
      --green: #3dffa0;
      --text: #dfe4f2;
      --muted: #7783a1;
      --font-display: 'Orbitron', sans-serif;
      --font-body: 'Space Grotesk', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      background: var(--bg);
      color: var(--text);
      font-family: var(--font-body);
      position: relative;
      overflow-x: hidden;
    }

    .portfolio-root * { box-sizing: border-box; }

    .font-display { font-family: var(--font-display); }
    .font-mono { font-family: var(--font-mono); }

    .bg-surface { background: var(--surface); }
    .bg-surface-2 { background: var(--surface-2); }
    .bg-surface-80 { background: rgba(12, 12, 22, 0.8); }
    .bg-surface-95 { background: rgba(12, 12, 22, 0.95); }
    .bg-surface-60 { background: rgba(12, 12, 22, 0.6); }
    .bg-surface-40 { background: rgba(12, 12, 22, 0.4); }
    .border-hud { border-color: var(--border); }

    .text-cyan { color: var(--cyan); }
    .text-violet { color: var(--violet); }
    .text-green { color: var(--green); }
    .text-muted { color: var(--muted); }

    .grid-overlay {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      background-image:
        linear-gradient(to right, rgba(45, 217, 255, 0.045) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(45, 217, 255, 0.045) 1px, transparent 1px);
      background-size: 44px 44px;
      mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%);
    }

    .scanlines {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 2;
      background: repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.018) 0px,
        rgba(255,255,255,0.018) 1px,
        transparent 1px,
        transparent 3px
      );
      opacity: 0.5;
    }

    .glow-cyan { box-shadow: 0 0 0 1px rgba(45,217,255,0.25), 0 0 30px -6px rgba(45,217,255,0.35); }
    .glow-violet { box-shadow: 0 0 0 1px rgba(177,107,255,0.25), 0 0 30px -6px rgba(177,107,255,0.35); }
    .glow-green { box-shadow: 0 0 0 1px rgba(61,255,160,0.25), 0 0 30px -6px rgba(61,255,160,0.35); }

    .text-glow-cyan { text-shadow: 0 0 18px rgba(45,217,255,0.55); }

    .hud-corner {
      position: relative;
    }
    .hud-corner::before, .hud-corner::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      border-color: var(--cyan);
      opacity: 0.7;
    }
    .hud-corner::before {
      top: -1px; left: -1px;
      border-top: 2px solid; border-left: 2px solid;
    }
    .hud-corner::after {
      bottom: -1px; right: -1px;
      border-bottom: 2px solid; border-right: 2px solid;
    }

    .btn-primary {
      font-family: var(--font-mono);
      background: linear-gradient(120deg, rgba(45,217,255,0.14), rgba(177,107,255,0.14));
      border: 1px solid rgba(45,217,255,0.5);
      color: var(--cyan);
      transition: all 0.25s ease;
    }
    .btn-primary:hover {
      background: rgba(45,217,255,0.16);
      box-shadow: 0 0 24px -4px rgba(45,217,255,0.6);
      transform: translateY(-2px);
    }

    .btn-ghost {
      font-family: var(--font-mono);
      border: 1px solid var(--border);
      color: var(--text);
      transition: all 0.25s ease;
    }
    .btn-ghost:hover {
      border-color: var(--muted);
      transform: translateY(-2px);
    }

    .nav-link {
      position: relative;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      letter-spacing: 0.05em;
      color: var(--muted);
      transition: color 0.2s ease;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      left: 0; bottom: -6px;
      width: 0%;
      height: 1px;
      background: var(--cyan);
      transition: width 0.25s ease;
    }
    .nav-link:hover { color: var(--text); }
    .nav-link:hover::after { width: 100%; }
    .nav-link.active { color: var(--cyan); }
    .nav-link.active::after { width: 100%; }

    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
    }

    .project-card {
      background: var(--surface);
      border: 1px solid var(--border);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      transform-style: preserve-3d;
      will-change: transform;
    }
    .project-card:hover { border-color: rgba(45,217,255,0.4); }

    .terminal-dot { width: 10px; height: 10px; border-radius: 999px; }

    .skill-chip {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      border: 1px solid var(--border);
      color: var(--muted);
      transition: all 0.2s ease;
    }
    .skill-chip:hover {
      border-color: var(--cyan);
      color: var(--cyan);
      transform: translateY(-1px);
    }

    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .reveal.in-view {
      opacity: 1;
      transform: translateY(0);
    }

    .blink-cursor {
      display: inline-block;
      width: 2px;
      background: var(--cyan);
      margin-left: 4px;
      animation: blink 1s steps(1) infinite;
    }
    @keyframes blink { 50% { opacity: 0; } }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 26s linear infinite;
    }
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    .timeline-line {
      background: linear-gradient(to bottom, var(--cyan), var(--violet), transparent);
    }

    input, textarea {
      background: var(--surface-2);
      border: 1px solid var(--border);
      color: var(--text);
      font-family: var(--font-mono);
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    input:focus, textarea:focus {
      border-color: var(--cyan);
      box-shadow: 0 0 0 3px rgba(45,217,255,0.12);
    }
    input::placeholder, textarea::placeholder { color: var(--muted); }

    ::selection { background: rgba(45,217,255,0.3); color: #fff; }

    @media (prefers-reduced-motion: reduce) {
      .marquee-track { animation: none; }
      .blink-cursor { animation: none; }
      .reveal { transition: none; opacity: 1; transform: none; }
    }

    @media (max-width: 640px) {
      .grid-overlay { background-size: 28px 28px; }
    }
  `}</style>
);

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll hook                                             */
/* ------------------------------------------------------------------ */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Three.js hero scene                                                */
/* ------------------------------------------------------------------ */

function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Central wireframe icosahedron
    const geo = new THREE.IcosahedronGeometry(2.4, 1);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x2dd9ff,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const core = new THREE.Mesh(geo, mat);
    scene.add(core);

    const geo2 = new THREE.IcosahedronGeometry(3.1, 0);
    const mat2 = new THREE.MeshBasicMaterial({
      color: 0xb16bff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const shell = new THREE.Mesh(geo2, mat2);
    scene.add(shell);

    // Particle field
    const particleCount = 260;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 5 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x8fe9ff,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      const speed = prefersReduced ? 0.15 : 1;

      core.rotation.x = t * 0.15 * speed;
      core.rotation.y = t * 0.22 * speed;
      shell.rotation.x = -t * 0.08 * speed;
      shell.rotation.y = -t * 0.12 * speed;
      particles.rotation.y = t * 0.03 * speed;

      camera.position.x += (mouseX * 1.1 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 1.1 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      geo.dispose();
      mat.dispose();
      geo2.dispose();
      mat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

/* ------------------------------------------------------------------ */
/*  Tilt project card                                                  */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateX(${(-y * 8).toFixed(
        2
      )}deg) rotateY(${(x * 10).toFixed(2)}deg) translateZ(6px)`,
    });
  }, []);

  const handleLeave = () => {
    setStyle({
      transform:
        "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    });
  };

  const glowClass =
    project.glow === "cyan"
      ? "glow-cyan"
      : project.glow === "violet"
      ? "glow-violet"
      : "glow-green";
  const accent =
    project.glow === "cyan"
      ? "text-cyan"
      : project.glow === "violet"
      ? "text-violet"
      : "text-green";

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`project-card reveal rounded-xl p-6 sm:p-7 hover:${glowClass}`}
    >
      <div className="flex items-start justify-between mb-6">
        <span className={`font-mono text-xs ${accent}`}>{project.code}</span>
        <ExternalLink size={16} className="text-muted" />
      </div>
      <h3 className={`font-display text-xl sm:text-2xl mb-3 ${accent}`}>
        {project.name}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-6">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="skill-chip px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useReveal();

  // Typewriter effect cycling through roles
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const currentRole = ROLES[roleIndex];
      if (!deleting) {
        charIndex++;
        setTypedText(currentRole.slice(0, charIndex));
        if (charIndex === currentRole.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        setTypedText(currentRole.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 35 : 65);
    };

    timeoutId = setTimeout(tick, 400);
    return () => clearTimeout(timeoutId);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.id)
    ).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };


  return (
    <div className="portfolio-root min-h-screen">
      <GlobalStyles />
      <div className="grid-overlay" />
      <div className="scanlines" />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 mt-4">
          <div className="hud-corner bg-surface-80 backdrop-blur-md border border-hud rounded-lg px-5 py-3 flex items-center justify-between">
            <button
              onClick={() => scrollTo("home")}
              className="font-display text-sm sm:text-base tracking-widest text-cyan text-glow-cyan"
            >
              &lt;Codewithsudhanshu/&gt;
            </button>

            <nav className=" md:flex items-center gap-8 max-md:hidden">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className={`nav-link uppercase ${
                    activeSection === l.id ? "active" : ""
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <button
              className="md:hidden text-cyan"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-2 bg-surface-95 backdrop-blur-md border border-hud rounded-lg p-4 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className={`nav-link uppercase text-left ${
                    activeSection === l.id ? "active" : ""
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <HeroScene />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 60%, var(--bg) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 w-full pt-24">
          <p className="font-mono text-xs sm:text-sm text-muted mb-4">
            <span className="text-green">$</span> who_am_i
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-tight mb-4 text-glow-cyan">
            {NAME}
          </h1>
          <div className="font-mono text-lg sm:text-2xl text-violet mb-6 h-8">
            {typedText}
            <span className="blink-cursor h-5 align-middle" />
          </div>
          <p className="max-w-xl text-muted text-sm sm:text-base leading-relaxed mb-10 color">
            I build scalable web applications, enterprise ERP solutions, real-time analytics dashboards, immersive 3D interfaces, 
            and secure authentication systems using React and Tailwind CSS—delivering production-ready solutions for businesses and freelance clients.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("work")}
              className="btn-primary px-6 py-3 rounded-lg text-sm uppercase tracking-wide"
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-ghost px-6 py-3 rounded-lg text-sm uppercase tracking-wide flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted hover:text-cyan transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </section>

      {/* TECH MARQUEE */}
      <div className="relative border-y border-hud bg-surface-60 py-3 overflow-hidden">
        <div className="marquee-track font-mono text-xs sm:text-sm text-muted gap-10 pr-10">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10 shrink-0">
              {[
                "REACT",
                "NEXT.JS",
                "THREE.JS",
                "NODE.JS",
                "WORDPRESS",
                "CORELDRAW",
                "ADOBE PHOTOSHOP",
                "CANVA",
                "JAVASCRIPT",
                "AWS S3",
                "TAILWIND CSS",
                "MY SQL",
                "MONGO DB",
                "ELEMENTOR",
                "API INTEGRATION",
                "MAILCHIP INTEGRATION",
                "POSTMAN",
                "HTML/CSS",
                "BOOTSTRAP",
              ].map((tech) => (
                <span key={tech + i} className="tracking-widest">
                  {tech} <span className="text-cyan">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-start">
          <div className="reveal">
            <p className="font-mono text-xs text-green mb-3">// about</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">
              Developer <span className="text-cyan">Overview</span>
            </h2>

            <div className="bg-surface border border-hud rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-hud">
                <span className="terminal-dot" style={{ background: "#ff5f56" }} />
                <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                <span className="terminal-dot" style={{ background: "#27c93f" }} />
                <span className="font-mono text-xs text-muted ml-2">
                  about.txt
                </span>
              </div>
              <div className="p-5 sm:p-6 font-mono text-sm leading-relaxed text-muted">
                <p className="mb-3">
                  <span className="text-cyan">&gt;</span> Full-stack developer
                  with 2+ years turning ambitious ideas into performant,
                  production-grade products.
                </p>
                <p className="mb-3">
                  <span className="text-cyan">&gt;</span> Frontend Developer turning real-world business requirements into performant, production-ready web applications.
                </p>
                <p>
                  <span className="text-cyan">&gt;</span> Currently exploring
                  real-time 3D on the web and shipping tools other
                  developers actually enjoy using.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="card rounded-xl p-6 hover:glow-cyan"
              >
                <div className="font-display text-3xl sm:text-4xl text-cyan mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-muted uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 sm:py-32 px-5 sm:px-8 bg-surface-40">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs text-green mb-3 reveal">
            // capabilities
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-14 reveal">
            Tech <span className="text-violet">Stack</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILL_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="card reveal rounded-xl p-6 hover:glow-violet"
                >
                  <Icon size={22} className="text-violet mb-4" />
                  <h3 className="font-display text-base mb-4">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="skill-chip px-2.5 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs text-green mb-3 reveal">
            // selected work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-14 reveal">
            Featured <span className="text-cyan">Projects</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.code} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section
        id="experience"
        className="py-24 sm:py-32 px-5 sm:px-8 bg-surface-40"
      >
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs text-green mb-3 reveal">
            // change log
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-14 reveal">
            Career <span className="text-green">Log</span>
          </h2>

          <div className="relative pl-8 sm:pl-10">
            <div className="timeline-line absolute left-0 top-1 bottom-1 w-px" />
            <div className="flex flex-col gap-12">
              {EXPERIENCE.map((exp) => (
                <div key={exp.role} className="relative reveal">
                  <div
                    className="absolute -left-8 sm:-left-10 top-1 w-4 h-4 rounded-full border-2"
                    style={{
                      borderColor: "var(--cyan)",
                      background: "var(--bg)",
                    }}
                  />
                  <p className="font-mono text-xs text-cyan mb-2">
                    {exp.year}
                  </p>
                  <h3 className="font-display text-lg sm:text-xl mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-muted text-sm mb-3">{exp.org}</p>
                  <p className="text-muted text-sm leading-relaxed max-w-xl">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs text-green mb-3 reveal">
            // get in touch
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-14 reveal">
            Send a <span className="text-cyan">Transmission</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 bg-surface border border-hud rounded-xl overflow-hidden reveal">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-hud">
                <Terminal size={14} className="text-cyan" />
                <span className="font-mono text-xs text-muted">
                  Let's Discuss Your Project
                </span>
              </div>
              <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
                <div>
                  <label className="font-mono text-xs text-muted block mb-2">
                    name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted block mb-2">
                    email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="your@mail.com"
                    className="w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted block mb-2">
                    message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Let's build something..."
                    className="w-full rounded-lg px-4 py-2.5 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-3 rounded-lg text-sm uppercase tracking-wide flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  {sent ? "Message Sent" : "Execute"}
                </button>
                {sent && (
                  <p className="font-mono text-xs text-green">
                    &gt; message queued — response ETA 24hrs
                  </p>
                )}
              </form>
            </div>

            <div className="md:col-span-2 flex flex-col gap-4 reveal">
              <div className="card rounded-xl p-6">
                <p className="font-mono text-xs text-muted mb-2">
                  direct line
                </p>
                <p className="text-sm break-all">codewithsudhanshu943@gmail.com</p>
              </div>
              <div className="card rounded-xl p-6">
                <p className="font-mono text-xs text-muted mb-4">
                  find me elsewhere
                </p>
                <div className="flex gap-3">
                  {SOCIALS.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="w-10 h-10 rounded-lg border border-hud flex items-center justify-center text-muted hover:text-cyan hover:border-cyan transition-colors"
                      >
                        <Icon size={17} />
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="card rounded-xl p-6">
                <p className="font-mono text-xs text-muted">status</p>
                <p className="text-sm mt-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green inline-block" />
                  Available for select projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-hud px-5 sm:px-8 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {FOOTER_NAME}. All systems operational.
          </p>
          <p className="font-mono text-xs text-muted">
            Built with <span className="text-cyan">React</span> ·{" "}
            <span className="text-violet">Three.js</span> ·{" "}
            <span className="text-green">Tailwind</span>
          </p>
        </div>
      </footer>
    </div>
  );
}