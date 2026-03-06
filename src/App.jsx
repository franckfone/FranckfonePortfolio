import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin, Github, Mail,
  ArrowRight, Copy, Check, ExternalLink,
  Github as GithubIcon, Database, Globe, Cpu, Code2,
  GraduationCap, Briefcase, Phone, ChevronUp,
  Menu, X
} from 'lucide-react';

import profileImg from './assets/images/profil.jpeg';
import cvFile from './assets/CV_FRANCK_FONE_FOTSI @.pdf';

// --- Components ---

const Reveal = ({ children, delay = 0, y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50",
    outline: "bg-transparent text-black border border-black hover:bg-black hover:text-white"
  };

  return (
    <button
      className={`px-6 py-2.5 rounded-full font-medium transition-all active:scale-95 flex items-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Navbar = ({ scrolled }) => {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const email = "franckfone10@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Expertises', href: '#expertises' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Formation', href: '#formation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`w-full flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-3' : 'py-8'}`}>
      {/* Left side: Minimalist email and buttons */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-500 hidden xl:inline">{email}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={copyEmail}
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-gray-100 transition-colors"
          >
            {copied ? 'Copié !' : 'Copier'}
          </button>
          <a
            href={cvFile}
            download="CV_FRANCK_FONE_FOTSI.pdf"
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
          >
            CV
          </a>
        </div>
      </div>

      {/* Right side: Desktop Menu & Hamburger button */}
      <div className="flex gap-8 items-center">
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-bold text-gray-400 hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex gap-6 items-center border-l border-gray-100 pl-6">
          <a href="https://linkedin.com/in/franckfone" className="text-sm font-bold text-gray-400 hover:text-black transition-colors">LinkedIn</a>
          <a href="https://github.com/franckfone" className="text-gray-400 hover:text-black transition-colors group">
            <GithubIcon size={16} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-black hover:bg-gray-50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden lg:hidden z-50 flex flex-col items-center py-8 gap-6 shadow-xl rounded-b-4xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-gray-500 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="w-12 h-px bg-gray-100 my-2"></div>
            <div className="flex gap-10">
              <a href="https://linkedin.com/in/franckfone" className="text-gray-400 hover:text-black transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/franckfone" className="text-gray-400 hover:text-black transition-colors">
                <GithubIcon size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-12 pb-20 px-6 text-center flex flex-col items-center">
    <Reveal>
      <div className="relative mb-10 mx-auto">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
          <img
            src={profileImg}
            alt="Franck Fone Fotsi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-1 -right-14 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
          <span className="text-[10px] font-bold">Franck 👋</span>
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <h1 className="text-3xl md:text-6xl font-bold italic tracking-tight max-w-4xl leading-[1.1] mb-6">
        Développeur Full Stack <br /> & Data Analyst.
      </h1>
    </Reveal>

    <Reveal delay={0.3}>
      <p className="max-w-xl text-gray-500 text-base mb-6 leading-relaxed">
        En recherche d'une alternance ou d’un stage de fin d’études. Expert en conception,
        automatisation CI/CD et fiabilisation des données.
      </p>
    </Reveal>

    <Reveal delay={0.4}>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {['Adaptabilité', 'Esprit d\'équipe', 'Curiosité technique'].map(skill => (
          <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-full border border-gray-100 italic">
            {skill}
          </span>
        ))}
      </div>
    </Reveal>

    <Reveal delay={0.5}>
      <Button className="pl-6 pr-5 text-sm" onClick={() => window.location.href = '#contact'}>
        Me contacter <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 ml-2"><ArrowRight size={10} /></div>
      </Button>
    </Reveal>
  </section>
);

const About = () => (
  <section id="about" className="py-20 px-6 md:px-12 bg-gray-50/20">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 bg-gray-50 px-2 py-1 rounded-full mb-6 inline-block">À propos de moi</span>
          <h2 className="text-3xl font-bold italic mb-6 leading-tight">Passionné par le développement et l'architecture des systèmes.</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Je suis Franck Fone Fotsi, un développeur Full Stack & Data Analyst actuellement en Master CTO & Tech Lead chez HETIC. Mon parcours est marqué par une volonté constante de concevoir des architectures logicielles robustes et évolutives.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Spécialisé dans l'écosystème Java/Spring et les environnements DevOps, je m'efforce de transformer des besoins complexes en solutions techniques performantes et fiables, tout en gardant une vision stratégique sur la qualité des données.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: '5+ Ans', sub: 'Passion Tech' },
            { label: 'Full Stack', sub: 'Java / React' },
            { label: 'DevOps', sub: 'CI/CD & Docker' },
            { label: 'Data', sub: 'Analyse & SQL' }
          ].map((stat, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm h-full">
                <div className="text-lg font-bold mb-1">{stat.label}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SectionHeader = ({ tag, title, description }) => (
  <div className="text-center mb-16">
    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 bg-gray-50 px-2 py-1 rounded-full mb-4 inline-block">{tag}</span>
    <h2 className="text-2xl md:text-3xl font-bold italic max-w-2xl mx-auto leading-tight mb-3">
      {title}
    </h2>
    {description && <p className="text-gray-500 text-xs max-w-lg mx-auto">{description}</p>}
  </div>
);

const Services = () => {
  const expertises = [
    {
      title: "Backend & DevOps",
      description: "Spring Boot, Spring Batch, Django, Docker, GitHub Actions CI/CD.",
      icon: Cpu
    },
    {
      title: "Frontend & Mobile",
      description: "React JS, Angular, TypeScript, Ionic (3 & 4), TailwindCSS.",
      icon: Globe
    },
    {
      title: "Data Analysis",
      description: "Fiabilisation de données, SQL (MySQL, Postgres), NoSQL, MERISE & UML.",
      icon: Database
    },
    {
      title: "Développement",
      description: "Java EE, Python, PHP, JavaScript, YAML, MERISE, Architecture logicielle.",
      icon: Code2
    }
  ];

  return (
    <section id="expertises" className="py-20 px-6 md:px-12">
      <Reveal>
        <SectionHeader
          tag="Expertises"
          title="Maîtrise technique pour des solutions performantes."
        />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {expertises.map((exp, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className="flex flex-col gap-6 service-card">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                <exp.icon size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">{exp.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">{exp.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const jobs = [
    {
      company: "La Poste Groupe",
      role: "Pilotage des données opérationnelles",
      period: "Août 2025 — Déc 2025",
      type: "CDD",
      details: "Analyse des flux opérationnels, fiabilisation des données et amélioration du tri automatisé."
    },
    {
      company: "FYVES Consulting",
      role: "Développeur Intégrateur",
      period: "Fév 2024 — Oct 2024",
      type: "CDD",
      details: "Développement d’applications de gestion, mise en place Docker et pipelines CI/CD."
    },
    {
      company: "Freelance",
      role: "Développeur Web",
      period: "2022 — 2023",
      type: "Projets",
      details: "Développement backend et API REST avec Django, déploiement Nginx et GitHub Actions."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-gray-50/30">
      <Reveal>
        <SectionHeader tag="Expérience" title="Mon parcours professionnel." />
      </Reveal>
      <div className="max-w-6xl mx-auto space-y-12">
        {jobs.map((job, i) => (
          <Reveal key={i} y={50}>
            <div className="flex flex-col md:flex-row justify-between gap-4 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{job.period}</span>
                  <span className="text-[10px] font-bold text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">{job.type}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                <p className="text-sm font-semibold text-gray-600 mb-4">{job.company}</p>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{job.details}</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-start">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                  <Briefcase size={18} />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  const degrees = [
    {
      year: "2025/2026",
      title: "Master — CTO & Tech Lead",
      school: "HETIC, Paris",
      current: true
    },
    {
      year: "2024/2025",
      title: "Master 1 (Architecte SI)",
      school: "Ecole IT, Orléans"
    },
    {
      year: "2023/2024",
      title: "Licence 3 (Architecte SI)",
      school: "Ecole IT, Orléans"
    },
    {
      year: "2022/2023",
      title: "Licence Génie Logiciel",
      school: "IUT"
    }
  ];

  return (
    <section id="formation" className="py-20 px-6 md:px-12">
      <Reveal>
        <SectionHeader tag="Formation" title="Mon cursus académique." />
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {degrees.map((edu, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className={`p-8 rounded-3xl border h-full ${edu.current ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-100 bg-white text-black'} flex flex-col justify-between transition-all hover:scale-[1.02]`}>
              <div>
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-4 block ${edu.current ? 'text-gray-400' : 'text-gray-400'}`}>{edu.year}</span>
                <h4 className="text-lg font-bold mb-2 leading-tight">{edu.title}</h4>
              </div>
              <div>
                <p className={`text-sm font-medium ${edu.current ? 'text-gray-400' : 'text-gray-500'}`}>{edu.school}</p>
                {edu.current && <div className="mt-4 flex items-center gap-2 text-[10px] font-bold"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> En cours</div>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 px-6 md:px-12 bg-gray-50/50 rounded-[3rem] mx-6 mb-8">
    <Reveal>
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 border border-gray-100">
          <Mail size={32} strokeWidth={1.5} />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold italic mb-8 tracking-tight">
          Lançons votre <br /> prochain projet.
        </h2>
        <p className="text-gray-500 mb-12 max-w-md mx-auto">
          Contactez-moi directement par mail ou par téléphone pour discuter de vos besoins ou de toute opportunité d'alternance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="px-10" onClick={() => window.location.href = 'mailto:franckfone10@gmail.com'}>Email Me</Button>
          <Button variant="secondary" className="px-10" onClick={() => window.location.href = 'tel:+33620005429'}>
            <Phone size={14} className="mr-2" /> +33 6 20 00 54 29
          </Button>
        </div>
      </div>
    </Reveal>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center bg-white border-t border-gray-100 gap-6">
    <p className="text-xs text-gray-400 font-medium">© {new Date().getFullYear()} Franck Fone Fotsi. Tous droits réservés.</p>
    <div className="flex gap-8">
      {[
        { name: 'LinkedIn', url: 'https://linkedin.com/in/franckfone' },
        { name: 'Github', url: 'https://github.com/franckfone' },
        { name: 'Instagram', url: '#' }
      ].map((social) => (
        <a key={social.name} href={social.url} className="text-xs font-medium text-gray-400 hover:text-black transition-colors">{social.name}</a>
      ))}
    </div>
  </footer>
);

const ScrollToTop = ({ show }) => (
  <motion.div
    className="fixed bottom-8 right-8 z-110"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.5 }}
    transition={{ duration: 0.3 }}
  >
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-gray-800 transition-all hover:-translate-y-1 active:scale-95"
      style={{ pointerEvents: show ? 'auto' : 'none' }}
    >
      <ChevronUp size={24} />
    </button>
  </motion.div>
);

const App = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <ScrollToTop show={scrolled} />
      {/* Stationary Header at the very top */}
      <div className={`fixed top-0 left-0 right-0 z-100 flex justify-center pointer-events-none transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-0'}`}>
        <div
          className={`w-full max-w-[1440px] pointer-events-auto px-4 md:px-8 transition-all duration-500 border rounded-full
            ${scrolled
              ? 'bg-white/80 backdrop-blur-xl border-gray-100 shadow-sm mx-4 md:mx-12'
              : 'bg-white/0 backdrop-blur-none border-transparent shadow-none mx-0 md:mx-0'
            }`}
        >
          <Navbar scrolled={scrolled} />
        </div>
      </div>

      {/* Main Content with padding for the fixed navbar */}
      <div className="w-full flex flex-col items-center pt-16">
        <div className="main-container shadow-2xl">
          <div className="grain hidden md:block"></div>
          <Hero />
          <About />
          <Services />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
