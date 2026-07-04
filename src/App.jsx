import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { schoolData } from './data/schoolData';
import { ExternalLink, ChevronUp, Menu, X } from 'lucide-react';
import AboutSchool from './components/AboutSchool';
import HMProfile from './components/HMProfile';
import FacilitiesGrid from './components/FacilitiesGrid';
import EventGallery from './components/EventGallery';
import Achievements from './components/Achievements';
import ContactSection from './components/ContactSection';
import './index.css';

const TICKER_ITEMS = [
  '🎓 PM SHRI Model School of Excellence',
  '📚 SSC 100% Pass Rate 2024',
  '🖥️ PAL Computer Lab',
  '🔬 Science & Chemistry Labs',
  '🤝 NCC · Scouts & Guides',
  '🇮🇳 Ek Bharat Shreshtha Bharat',
  '🌿 Green School Initiative',
];

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#infrastructure', label: 'Infrastructure' },
  { href: '#results', label: 'Results' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-school-light flex flex-col font-sans">

      {/* ════════════ HEADER ════════════ */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100" style={{ backdropFilter: 'blur(12px)' }}>
        <div className="container-custom py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5" style={{ minHeight: 'auto' }}>
            <img src="/assets/optimized/logo.png" alt="PM SHRI MGZPHS Logo" className="w-10 h-10 object-contain shrink-0" />
            <div>
              <p className="text-sm font-bold text-school-navy leading-tight tracking-tight">MGZPHS GHANTASALA</p>
              <p className="text-yellow-500 font-semibold tracking-wider uppercase" style={{ fontSize: '10px' }}>DISE: {schoolData.diseCode}</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-1">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-school-blue hover:bg-blue-50 rounded-lg transition-all" style={{ minHeight: 'auto', minWidth: 'auto' }}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors" aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden" style={{ background: 'rgba(0,0,0,0.5)' }} onClick={() => setMobileMenuOpen(false)}>
            <motion.nav initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full bg-white shadow-2xl flex flex-col" style={{ width: '280px' }}
              onClick={e => e.stopPropagation()}
            >
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <span className="font-bold text-school-navy">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100"><X size={20} /></button>
              </div>
              <div className="flex-1 p-4 space-y-1">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3.5 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-school-blue rounded-xl transition-all">
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="p-4 border-t border-slate-100 text-center">
                <p className="text-slate-400" style={{ fontSize: '10px' }}>PM SHRI Model School of Excellence</p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════ MAIN ════════════ */}
      <main className="flex-grow">

        {/* ══════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════ */}
        <section id="home" className="relative overflow-hidden" style={{ minHeight: '100vh', color: 'white' }}>

          {/* BG image */}
          <div className="absolute inset-0">
            <img src="/assets/hero_bg.png" alt="" className="w-full h-full object-cover object-center" style={{ filter: 'brightness(0.32)' }} />
          </div>

          {/* Gradient overlay — heavy left, fades right */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, rgba(15,23,42,0.98) 0%, rgba(15,23,42,0.88) 40%, rgba(15,23,42,0.50) 75%, rgba(15,23,42,0.2) 100%)' }} />
          {/* Bottom fade */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 55%)' }} />
          {/* Subtle dot grid */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

          {/* ── Indian Tricolor stripe at top */}
          <div className="absolute top-0 left-0 right-0 z-20 flex" style={{ height: '4px' }}>
            <div className="flex-1" style={{ background: '#FF9933' }} />
            <div className="flex-1 bg-white" />
            <div className="flex-1" style={{ background: '#138808' }} />
          </div>

          {/* ── HERO CONTENT ── */}
          <div className="relative z-10 container-custom flex flex-col justify-center" style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">

              {/* LEFT: 3 cols text */}
              <div className="lg:col-span-3">

                {/* Scheme badge */}
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="flex items-center gap-3 mb-7">
                  <div className="rounded-full flex items-center justify-center shrink-0" style={{ width: '48px', height: '48px', border: '1.5px solid rgba(251,191,36,0.45)', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', padding: '6px' }}>
                    <img src="/assets/optimized/logo.png" alt="PM SHRI" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p style={{ color: '#fbbf24', fontSize: '10px', fontWeight: '800', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '2px' }}>PM SHRI Scheme 2023</p>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Pradhan Mantri Schools for Rising India</p>
                  </div>
                </motion.div>

                {/* Gold rule */}
                <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ height: '2px', width: '56px', background: 'linear-gradient(to right, #fbbf24, transparent)', marginBottom: '24px', transformOrigin: 'left' }} />

                {/* Title */}
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }}>
                  <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(1.85rem, 4.5vw, 3.5rem)', lineHeight: '1.1', marginBottom: '0.15em' }}>
                    Mahatma Gandhi
                  </h1>
                  <h1 className="font-heading font-black text-white" style={{ fontSize: 'clamp(1.85rem, 4.5vw, 3.5rem)', lineHeight: '1.1', marginBottom: '0.15em' }}>
                    Zilla Parishad High School
                  </h1>
                  <h1 className="font-heading font-black" style={{ fontSize: 'clamp(1.85rem, 4.5vw, 3.5rem)', lineHeight: '1.1', marginBottom: '1.5rem', color: '#fbbf24' }}>
                    Ghantasala
                  </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.25 }} style={{ color: 'rgba(203,213,225,0.9)', fontSize: '0.9375rem', lineHeight: '1.75', maxWidth: '480px', marginBottom: '2rem' }}>
                  Empowering rural education with modern infrastructure, technology-driven classrooms, and the National Education Policy — proudly serving the community since <strong style={{ color: 'white' }}>{schoolData.established}</strong>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.35 }} className="flex flex-wrap gap-3 mb-10">
                  <a href="#about" className="btn-primary">Explore School</a>
                  <a href="#gallery" className="btn-ghost">View Gallery</a>
                </motion.div>

                {/* Stats Grid */}
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.45 }} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {schoolData.stats.map((stat, i) => (
                    <div key={i} className="rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.13)', padding: '16px 8px' }}>
                      <div className="font-heading font-black leading-none mb-1.5" style={{ fontSize: '1.8rem', color: '#fbbf24' }}>
                        {stat.prefix || ''}{stat.value}{stat.suffix || ''}
                      </div>
                      <div style={{ color: 'rgba(148,163,184,0.9)', fontSize: '9px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: '1.3' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT: Logo medallion — desktop only */}
              <motion.div initial={{ opacity: 0, scale: 0.88, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.2 }} className="hidden lg:flex lg:col-span-2 flex-col items-center gap-6">
                {/* Glow + Logo circle */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(251,191,36,0.15)', filter: 'blur(40px)', transform: 'scale(1.3)' }} />
                  <div style={{ position: 'relative', width: '260px', height: '260px', borderRadius: '50%', border: '2px solid rgba(251,191,36,0.4)', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', padding: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/assets/optimized/logo.png" alt="MGZPHS Ghantasala PM SHRI" className="w-full h-full object-contain" style={{ filter: 'drop-shadow(0 0 24px rgba(251,191,36,0.4))' }} />
                  </div>
                </div>
                {/* Info card */}
                <div className="w-full max-w-xs rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', padding: '18px 24px' }}>
                  <p style={{ color: '#fbbf24', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>Government of Andhra Pradesh</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px' }}>
                    <p style={{ color: 'white', fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>DISE: {schoolData.diseCode}</p>
                    <p style={{ color: 'rgba(148,163,184,0.9)', fontSize: '11px' }}>Krishna District · Est. {schoolData.established}</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ── Ticker Strip */}
          <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden" style={{ background: 'rgba(251,191,36,0.97)', padding: '10px 0' }}>
            <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" style={{ color: '#0f172a', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <React.Fragment key={i}>
                  <span className="shrink-0">{item}</span>
                  <span className="shrink-0 opacity-30">◆</span>
                </React.Fragment>
              ))}
            </div>
          </div>

        </section>
        {/* ══════════════════════════════════════ */}

        <AboutSchool />
        <HMProfile />
        <FacilitiesGrid />
        <Achievements />
        <EventGallery />
        <ContactSection />
      </main>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="bg-slate-900 text-slate-400 pt-12 pb-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/assets/optimized/logo.png" alt="" className="w-8 h-8" />
                <span className="text-white font-bold text-sm">MGZPHS Ghantasala</span>
              </div>
              <p className="text-xs leading-relaxed">A PM SHRI Model School serving the community since {schoolData.established}.</p>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Navigate</h4>
              <ul className="space-y-2 text-xs">
                {navLinks.slice(0, 4).map(l => <li key={l.href}><a href={l.href} className="hover:text-yellow-400 transition-colors">{l.label}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Sections</h4>
              <ul className="space-y-2 text-xs">
                {navLinks.slice(4).map(l => <li key={l.href}><a href={l.href} className="hover:text-yellow-400 transition-colors">{l.label}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Official Portals</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="https://pmshrischools.education.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors inline-flex items-center gap-1">PM SHRI Portal <ExternalLink size={10} /></a></li>
                <li><a href="https://www.education.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors inline-flex items-center gap-1">Ministry of Education <ExternalLink size={10} /></a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-800 text-center" style={{ fontSize: '10px', color: '#64748b' }}>
            © {new Date().getFullYear()} {schoolData.name}. DISE: {schoolData.diseCode}
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-5 right-5 bg-school-navy text-white rounded-full shadow-xl flex items-center justify-center hover:bg-school-blue transition-colors z-40"
            style={{ width: '44px', height: '44px' }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
