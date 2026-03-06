import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin, Github, Mail,
  ArrowRight, Copy, Check, ExternalLink,
  Github as GithubIcon, Database, Globe, Cpu, Code2,
  GraduationCap, Briefcase, Phone, ChevronUp,
  Menu, X, Maximize2, Download, Eye, DownloadCloud,
  ChevronLeft, ChevronRight
} from 'lucide-react';

import profileImg from './assets/images/profil.jpeg';
import arch1 from './assets/images/Archeo-IT-1.png';
import arch2 from './assets/images/Archeo-IT-2.png';
import arch3 from './assets/images/Archeo-IT-3.png';
import arch4 from './assets/images/Archeo-IT-4.png';
import arch5 from './assets/images/Archeo-IT-5.png';
import arch6 from './assets/images/Archeo-IT-6.png';
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
    primary: "bg-accent text-black hover:bg-accent/90 shadow-[0_0_20px_rgba(0,245,212,0.3)]",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 backdrop-blur-md",
    outline: "bg-transparent text-[#00f5d4] border border-[#00f5d4]/50 hover:bg-[#00f5d4]/10"
  };

  return (
    <button
      className={`px-6 py-2.5 rounded-full font-bold transition-all active:scale-95 flex items-center gap-2 ${variants[variant]} ${className}`}
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
    { name: 'Projets', href: '#projets' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Formation', href: '#formation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`w-full flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-3' : 'py-8'}`}>
      {/* Left side: Minimalist email and buttons */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-bold text-gray-500 hidden xl:inline tracking-tight">{email}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={copyEmail}
            className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-accent hover:text-black transition-all"
          >
            {copied ? 'Copié !' : 'Copier'}
          </button>
          <a
            href={cvFile}
            download="CV_FRANCK_FONE_FOTSI.pdf"
            className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
          >
            CV
          </a>
        </div>
      </div>

      {/* Right side: Desktop Menu & Hamburger button */}
      <div className="flex gap-8 items-center">
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-black text-gray-400 hover:text-accent transition-colors tracking-widest uppercase">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex gap-6 items-center border-l border-white/10 pl-6">
          <a href="https://www.linkedin.com/in/franck-fone-fotsi-381ba42b5/" className="text-sm font-black text-gray-400 hover:text-accent transition-colors tracking-widest uppercase">LinkedIn</a>
          <a href="https://github.com/franckfone" className="text-gray-400 hover:text-accent transition-colors group">
            <GithubIcon size={16} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden lg:hidden z-50 flex flex-col items-center py-8 gap-6 shadow-2xl rounded-b-4xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-gray-400 hover:text-[#00f5d4] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="w-12 h-px bg-white/5 my-2"></div>
            <div className="flex gap-10">
              <a href="https://www.linkedin.com/in/franck-fone-fotsi-381ba42b5/" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/franckfone" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
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
      <div className="relative mb-10 mx-auto group">
        {/* Animated Heartbeat Rings */}
        <div className="absolute inset-0 rounded-full bg-accent/20 animate-heartbeat scale-150 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute inset-0 rounded-full border border-accent/30 animate-ping -z-10"></div>

        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_20px_rgba(0,245,212,0.3)] relative z-10 transition-transform group-hover:scale-110 duration-500">
          <img
            src={profileImg}
            alt="Franck Fone Fotsi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-1 -right-16 bg-surface/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center gap-2 z-20">
          <span className="text-[10px] font-black text-white tracking-widest uppercase flex items-center gap-2">
            Franck <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          </span>
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <div className="relative">
        {/* Data Scan Effect */}
        <div className="absolute -inset-x-20 h-px bg-gradient-to-r from-transparent via-accent to-transparent top-1/2 animate-data-scan pointer-events-none opacity-50 blur-[1px]"></div>

        <h1 className="text-2xl md:text-5xl font-black italic tracking-normal max-w-4xl leading-[1.4] mb-6 px-5 pr-10 relative z-10">
          C'est <span className="text-gradient p-2">Franck Fone</span><br />
          <span className="text-white/90">Développeur Full Stack</span> <span className="text-accent">&</span> <span className="text-white/90">Data Analyst.</span>
        </h1>

        {/* Decorative Floating Nodes - Divergent Swarm */}
        <div className="absolute top-0 -left-20 w-3 h-3 rounded-full bg-accent animate-float-1"></div>
        <div className="absolute bottom-10 -right-20 w-4 h-4 rounded-full border-2 border-accent animate-float-2"></div>
        <div className="absolute -top-10 right-20 w-2 h-2 rounded-full bg-accent animate-float-3"></div>
        <div className="absolute -bottom-20 left-10 w-2 h-2 rounded-full border border-accent animate-float-4 [animation-delay:1s] opacity-80"></div>
        <div className="absolute top-1/2 -right-32 w-2 h-2 rounded-full bg-accent animate-float-1 [animation-delay:3s] blur-[1px]"></div>
        <div className="absolute -top-20 left-1/4 w-3 h-3 rounded-full bg-accent animate-float-2 [animation-delay:1.5s]"></div>
        <div className="absolute top-full right-1/3 w-4 h-4 rounded-full border-2 border-accent animate-float-3 [animation-delay:2.5s]"></div>
        <div className="absolute top-10 left-1/2 w-2 h-2 rounded-full bg-accent animate-float-4 [animation-delay:0.5s]"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-accent animate-float-1 [animation-delay:3.5s]"></div>
        <div className="absolute -top-5 -right-10 w-3 h-3 rounded-full border-2 border-accent animate-float-2 [animation-delay:4.5s]"></div>
        <div className="absolute top-2/3 -left-40 w-2 h-2 rounded-full bg-accent animate-float-3 [animation-delay:1.2s] opacity-80"></div>
        <div className="absolute top-1/4 -right-40 w-2 h-2 rounded-full bg-accent animate-float-4 [animation-delay:2.2s] opacity-80"></div>
        <div className="absolute -bottom-10 right-10 w-2 h-2 rounded-full border border-accent animate-float-1 [animation-delay:3.2s]"></div>
        <div className="absolute -top-16 right-1/4 w-3 h-3 rounded-full bg-accent animate-float-2 [animation-delay:0.8s]"></div>
        <div className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full bg-accent animate-float-3 [animation-delay:1.9s]"></div>
        <div className="absolute -bottom-5 right-1/2 w-2 h-2 rounded-full border border-accent animate-float-4 [animation-delay:2.7s]"></div>
      </div>
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
  <section id="about" className="py-20 px-6 md:px-12 relative overflow-hidden bg-accent/5 backdrop-blur-3xl border-y border-white/5">
    <div className="max-w-6xl mx-auto z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#00f5d4] mb-6 inline-block">À propos de moi</span>
          <h2 className="text-4xl font-black italic mb-6 leading-tight">L'art de coder avec <span className="text-[#00f5d4]">précision</span> et évolutivité.</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Développeur passionné par la création d'interfaces fluides et performantes. Mon approche combine rigueur technique et sensibilité stratégique pour offrir des produits qui se démarquent par leur architecture.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Actuellement en Master CTO & Tech Lead, je me spécialise dans les écosystèmes Java/Spring et DevOps, transformant des données complexes en solutions robustes.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: '5+ Ans', sub: 'Passion Tech' },
            { label: 'Full Stack', sub: 'Java / React' },
            { label: 'DevOps', sub: 'CI/CD & Docker' },
            { label: 'Stats %', sub: 'Expert Data' }
          ].map((stat, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="p-8 glow-card rounded-3xl h-full flex flex-col justify-center border-white/5">
                <div className="text-2xl font-black text-white mb-1">{stat.label}</div>
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{stat.sub}</div>
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
    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#00f5d4] mb-4 inline-block">{tag}</span>
    <h2 className="text-3xl md:text-5xl font-black italic max-w-4xl mx-auto leading-[1.3] mb-4 px-4">
      {title}
    </h2>
    {description && <p className="text-gray-400 text-sm max-w-xl mx-auto font-medium">{description}</p>}
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
    <section id="expertises" className="py-20 px-6 md:px-12 border-t border-white/5">
      <Reveal>
        <SectionHeader
          tag="Ma Stack Technique"
          title="Des outils modernes pour des solutions à la pointe."
        />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {expertises.map((exp, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className="flex flex-col gap-6 p-8 glow-card rounded-3xl h-full group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all">
                <exp.icon size={28} className="text-white group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">{exp.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedProject]);

  const projects = [
    {
      title: "Archeo-IT",
      tag: "Patrimoine & Numérique",
      description: "Plateforme web pour une association dédiée à l'archéologie. Promotion du patrimoine français via des fouilles, conférences mensuelles et stages d'expérimentation.",
      tech: ["HTML", "CSS", "JS", "PHP"],
      images: [arch1, arch2, arch3, arch4, arch5, arch6]
    },
    {
      title: "Data Tracker Pro",
      tag: "Analyse de Données",
      description: "Outil interne de suivi et de fiabilisation des flux de données opérationnels. Dashboard interactif et reporting automatisé.",
      tech: ["Python", "SQL", "React"],
      images: []
    },
    {
      title: "Cloud Infrastructure",
      tag: "DevOps",
      description: "Architecture de déploiement continu utilisant Docker et GitHub Actions pour des applications à haute disponibilité.",
      tech: ["Docker", "YAML", "CI/CD"],
      images: []
    }
  ];

  const handleDownload = (imgUrl) => {
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = `project-image-${currentImgIndex + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="projets" className="py-20 px-6 md:px-12 bg-accent/5 backdrop-blur-3xl border-y border-white/5">
      <Reveal>
        <SectionHeader tag="Mes Réalisations" title="Projets Professionnels." />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className="glow-card rounded-[2.5rem] overflow-hidden group h-full flex flex-col border border-white/5">
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                {project.images.length > 0 ? (
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center opacity-10">
                    <Database size={64} />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  {project.images.length > 0 && (
                    <Button variant="outline" className="scale-75 group-hover:scale-100 transition-transform duration-500" onClick={() => {
                      setSelectedProject(project);
                      setCurrentImgIndex(0);
                    }}>
                      <Maximize2 size={16} /> Regarder les images
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-4 block">{project.tag}</span>
                <h3 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-black px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/98 border-none flex flex-col items-center justify-start p-4 md:p-10 pt-32 overflow-y-auto"
          >
            <button
              className="fixed top-24 right-6 md:top-32 md:right-12 w-16 h-16 rounded-full bg-accent text-black shadow-[0_0_50px_rgba(0,245,212,0.6)] flex items-center justify-center z-[9999] transition-all hover:scale-110 active:scale-95 group border-none"
              onClick={() => setSelectedProject(null)}
              title="Fermer"
            >
              <X size={32} strokeWidth={3} className="transition-transform group-hover:rotate-90" />
            </button>

            <div className="w-full max-w-6xl relative">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                <img
                  src={selectedProject.images[currentImgIndex]}
                  className="w-full h-full object-contain"
                  alt={`Project image ${currentImgIndex + 1}`}
                />

                <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                  <button
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-accent hover:text-black transition-all"
                    onClick={() => setCurrentImgIndex(prev => (prev > 0 ? prev - 1 : selectedProject.images.length - 1))}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-accent hover:text-black transition-all"
                    onClick={() => setCurrentImgIndex(prev => (prev < selectedProject.images.length - 1 ? prev + 1 : 0))}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                <div>
                  <h4 className="text-2xl font-black mb-2">{selectedProject.title}</h4>
                  <p className="text-gray-400 text-sm">Image {currentImgIndex + 1} sur {selectedProject.images.length}</p>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="h-12 px-8" onClick={() => handleDownload(selectedProject.images[currentImgIndex])}>
                    <DownloadCloud size={18} /> Télécharger
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <section id="experience" className="py-20 px-6 md:px-12 border-y border-white/5">
      <Reveal>
        <SectionHeader tag="Expériences" title="Parcours Professionnel." />
      </Reveal>
      <div className="max-w-6xl mx-auto space-y-8">
        {jobs.map((job, i) => (
          <Reveal key={i} y={50}>
            <div className="flex flex-col md:flex-row justify-between gap-6 p-10 glow-card rounded-[2.5rem] group">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black text-[#00f5d4] uppercase tracking-widest">{job.period}</span>
                  <span className="text-[10px] font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">{job.type}</span>
                </div>
                <h3 className="text-2xl font-black mb-1 group-hover:text-gradient transition-all">{job.role}</h3>
                <p className="text-sm font-bold text-gray-400 mb-6">{job.company}</p>
                <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">{job.details}</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-start">
                <div className="w-12 h-12 bg-[#00f5d4]/10 rounded-2xl flex items-center justify-center border border-[#00f5d4]/20">
                  <Briefcase size={22} className="text-[#00f5d4]" />
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
    <section id="formation" className="py-20 px-6 md:px-12 bg-accent/5 backdrop-blur-3xl border-y border-white/5">
      <Reveal>
        <SectionHeader tag="Formation" title="Cursus Académique." />
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {degrees.map((edu, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className={`p-8 rounded-3xl border h-full transition-all group hover:-translate-y-2 ${edu.current ? 'border-[#00f5d4]/50 bg-[#00f5d4]/5 shadow-[0_0_30px_rgba(0,245,212,0.1)]' : 'border-white/5 bg-white/5'} flex flex-col justify-between`}>
              <div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 block">{edu.year}</span>
                <h4 className="text-xl font-black mb-2 leading-tight group-hover:text-[#00f5d4] transition-colors">{edu.title}</h4>
              </div>
              <div className="mt-8">
                <p className="text-sm font-bold text-gray-400">{edu.school}</p>
                {edu.current && <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-[#00f5d4]"><div className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] animate-pulse" /> ACTUEL</div>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 px-6 md:px-12 border-white/5 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-[#00f5d4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
    <Reveal>
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <div className="w-20 h-20 bg-[#00f5d4]/10 rounded-3xl flex items-center justify-center mb-10 border border-[#00f5d4]/20 shadow-[0_0_30px_rgba(0,245,212,0.1)]">
          <Mail size={36} className="text-[#00f5d4]" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-7xl font-black italic mb-8 tracking-normal px-4 pr-10 leading-[1.4]">
          Prêt à <span className="text-gradient p-3">collaborer ?</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-md mx-auto font-medium text-lg leading-relaxed">
          Que ce soit pour un nouveau projet web ou pour renforcer votre infrastructure, je suis à votre écoute.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button className="px-12 h-14 text-lg" onClick={() => window.location.href = 'mailto:franckfone10@gmail.com'}>M'envoyer un mail</Button>
          <Button variant="secondary" className="px-12 h-14 text-lg" onClick={() => window.location.href = 'tel:+33620005429'}>
            <Phone size={18} className="mr-2" /> Appelez-moi
          </Button>
        </div>
      </div>
    </Reveal>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center bg-black border-t border-white/5 gap-8">
    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">© {new Date().getFullYear()} Franck Fone. SYSTEM_INIT_SUCCESS</p>
    <div className="flex gap-10">
      {[
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/franck-fone-fotsi-381ba42b5/' },
        { name: 'Github', url: 'https://github.com/franckfone' },
        { name: 'Instagram', url: '#' }
      ].map((social) => (
        <a key={social.name} href={social.url} className="text-xs font-black text-gray-400 hover:text-[#00f5d4] transition-colors tracking-widest uppercase">{social.name}</a>
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
      className="w-14 h-14 bg-[#00f5d4] text-black rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,245,212,0.3)] hover:scale-110 transition-all active:scale-95"
      style={{ pointerEvents: show ? 'auto' : 'none' }}
    >
      <ChevronUp size={28} strokeWidth={3} />
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
      <div className="fixed top-0 left-0 right-0 z-100 flex justify-center pointer-events-none">
        <div
          className={`w-full max-w-[1440px] pointer-events-auto px-4 md:px-8 transition-all duration-500 border
            ${scrolled
              ? 'bg-[#08080a]/80 backdrop-blur-xl border-white/5 shadow-2xl mx-0 rounded-none border-t-0'
              : 'bg-transparent backdrop-blur-none border-transparent shadow-none mx-0 rounded-full'
            }`}
        >
          <Navbar scrolled={scrolled} />
        </div>
      </div>

      {/* Main Content with padding for the fixed navbar */}
      <div className="w-full flex flex-col items-center pt-8">
        <div className="main-container shadow-[0_0_100px_rgba(0,0,0,1)]">
          <div className="grid-overlay"></div>
          <div className="grain pointer-events-none opacity-20"></div>
          <Hero />
          <About />
          <Services />
          <Projects />
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
