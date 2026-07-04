import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

/* ─────────────────────────────────────────────
   EVENT GROUPS
   Each group has:
     id, title, category, emoji, cover (first photo shown on the card)
     photos: [ { src, caption } ]
───────────────────────────────────────────── */
const eventGroups = [
  {
    id: 'yoga-day',
    title: 'International Yoga Day',
    category: 'Sports & NCC',
    emoji: '🧘',
    cover: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0025.webp",
    photos: [
      { src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0024.webp", caption: "Yoga Session" },
      { src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0025.webp", caption: "International Yoga Day" },
      { src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0026.webp", caption: "Group Yoga" },
      { src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0027.webp", caption: "Yoga Practice" },
      { src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0028.webp", caption: "Yoga Demonstration" },
      { src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0029.webp", caption: "Yoga Closing" },
    ],
  },
  {
    id: 'yogandhra',
    title: "Yogandhra '26",
    category: 'Sports & NCC',
    emoji: '🏅',
    cover: "/assets/optimized/YOGANDHRA '26/IMG-20260704-WA0002.webp",
    photos: [
      { src: "/assets/optimized/YOGANDHRA '26/IMG-20260704-WA0002.webp", caption: "Yogandhra '26 – Opening" },
      { src: "/assets/optimized/YOGANDHRA '26/IMG-20260704-WA0003.webp", caption: "Yogandhra '26 – Performance" },
    ],
  },
  {
    id: 'ncc-scouts',
    title: 'NCC, Scouts & Guides',
    category: 'Sports & NCC',
    emoji: '🎖️',
    cover: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.19 AM (1).webp",
    photos: [
      { src: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.19 AM (1).webp", caption: "NCC & Scouts" },
      { src: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.19 AM.webp",    caption: "Scouts & Guides" },
      { src: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.20 AM.webp",    caption: "NCC Parade" },
    ],
  },
  {
    id: 'ebsb',
    title: 'Ek Bharat Shreshtha Bharat',
    category: 'Cultural',
    emoji: '🇮🇳',
    cover: "/assets/optimized/Poster making competition as part of Ek Bharath, shresth Bharath/IMG-20260704-WA0013.webp",
    photos: [
      { src: "/assets/optimized/Poster making competition as part of Ek Bharath, shresth Bharath/IMG-20260704-WA0013.webp", caption: "EBSB Poster Making Competition" },
      { src: "/assets/optimized/ebsb_page_01.webp", caption: "EBSB – Activity 1" },
      { src: "/assets/optimized/ebsb_page_02.webp", caption: "EBSB – Activity 2" },
      { src: "/assets/optimized/ebsb_page_03.webp", caption: "EBSB – Activity 3" },
      { src: "/assets/optimized/ebsb_page_04.webp", caption: "EBSB – Activity 4" },
      { src: "/assets/optimized/ebsb_page_05.webp", caption: "EBSB – Activity 5" },
    ],
  },
  {
    id: 'cultural-dance',
    title: 'Cultural Dance Performances',
    category: 'Cultural',
    emoji: '💃',
    cover: "/assets/optimized/cultural_dance_1.webp",
    photos: [
      { src: "/assets/optimized/cultural_dance_1.webp", caption: "Traditional Dance Performance" },
      { src: "/assets/optimized/cultural_dance_2.webp", caption: "Classical Solo Dance" },
      { src: "/assets/optimized/cultural_dance_3.webp", caption: "Group Cultural Dance" },
    ],
  },
  {
    id: 'annual-day',
    title: '80th Annual Day',
    category: 'Events',
    emoji: '🎉',
    cover: "/assets/optimized/annual_page_01.webp",
    photos: [
      { src: "/assets/optimized/annual_page_01.webp", caption: "Annual Day – Inauguration" },
      { src: "/assets/optimized/annual_page_02.webp", caption: "Annual Day – Programme" },
      { src: "/assets/optimized/annual_page_03.webp", caption: "Annual Day – Felicitation" },
      { src: "/assets/optimized/annual_page_04.webp", caption: "Annual Day – Performances" },
      { src: "/assets/optimized/annual_page_05.webp", caption: "Annual Day – Closing" },
    ],
  },
  {
    id: 'si-chandana',
    title: 'Interaction with SI Chandana Madam',
    category: 'Events',
    emoji: '🤝',
    cover: "/assets/optimized/Interaction with Ghantasala SI Chandana madam/IMG-20260704-WA0021.webp",
    photos: [
      { src: "/assets/optimized/Interaction with Ghantasala SI Chandana madam/IMG-20260704-WA0020.webp", caption: "Guest Interaction" },
      { src: "/assets/optimized/Interaction with Ghantasala SI Chandana madam/IMG-20260704-WA0021.webp", caption: "SI Chandana Interaction" },
      { src: "/assets/optimized/Interaction with Ghantasala SI Chandana madam/IMG-20260704-WA0022.webp", caption: "Felicitation Ceremony" },
    ],
  },
  {
    id: 'welcome-ceremony',
    title: 'Welcome – New Academic Year 2026-27',
    category: 'Events',
    emoji: '🌟',
    cover: "/assets/optimized/Welcoming newly joined to new academic year 2026-27/IMG-20260704-WA0016.webp",
    photos: [
      { src: "/assets/optimized/Welcoming newly joined to new academic year 2026-27/IMG-20260704-WA0016.webp", caption: "Welcome Ceremony" },
      { src: "/assets/optimized/Welcoming newly joined to new academic year 2026-27/IMG-20260704-WA0017.webp", caption: "New Students Welcome" },
      { src: "/assets/optimized/Welcoming newly joined to new academic year 2026-27/IMG-20260704-WA0018.webp", caption: "Academic Year Opening" },
      { src: "/assets/optimized/Welcoming newly joined to new academic year 2026-27/IMG-20260704-WA0019.webp", caption: "Welcome Gathering" },
    ],
  },
  {
    id: 'alumni',
    title: 'Alumni Visit',
    category: 'Events',
    emoji: '🎓',
    cover: "/assets/optimized/alumni_ranganath_babu.webp",
    photos: [
      { src: "/assets/optimized/alumni_ranganath_babu.webp", caption: "Notable Alumnus G. Ranganath Babu" },
      { src: "/assets/optimized/alumni_group_gate.webp",     caption: "Alumni Group at School Gate" },
    ],
  },
  {
    id: 'donations',
    title: 'Community Donations & Support',
    category: 'Events',
    emoji: '💻',
    cover: "/assets/optimized/computers_donor.webp",
    photos: [
      { src: "/assets/optimized/computers_donor.webp",   caption: "Computer Donor Felicitation" },
      { src: "/assets/optimized/computers_donor_2.webp", caption: "Computer Lab & Students" },
      { src: "/assets/optimized/water_plant_donor.webp", caption: "Water Plant Donation by G. Arun Kumar" },
    ],
  },
  {
    id: 'exposure-visit',
    title: 'Exposure Visit',
    category: 'Events',
    emoji: '🚌',
    cover: "/assets/optimized/exposure_visit_2.jpg",
    photos: [
      { src: "/assets/optimized/exposure_visit_1.jpg",  caption: "Students & Teachers on the Way – Bus Journey" },
      { src: "/assets/optimized/exposure_visit_2.jpg",  caption: "Group Photo at the Beach / Coastal Site" },
      { src: "/assets/optimized/exposure_visit_3.jpg",  caption: "Industrial Visit – Departure from School (NSQF)" },
      { src: "/assets/optimized/exposure_visit_4.jpg",  caption: "Computer Lab Session at the Visited Institution" },
      { src: "/assets/optimized/exposure_visit_5.jpg",  caption: "Orientation Session at the Computer Lab" },
      { src: "/assets/optimized/exposure_visit_6.jpg",  caption: "Excited Students & Teachers on Bus – Thumbs Up!" },
      { src: "/assets/optimized/exposure_visit_7.jpg",  caption: "Group Photo at the Harbour / Port" },
      { src: "/assets/optimized/exposure_visit_8.jpg",  caption: "Visit to Historical Monument" },
      { src: "/assets/optimized/exposure_visit_9.jpg",  caption: "Return Journey – Happy Faces on the Bus" },
      { src: "/assets/optimized/exposure_visit_10.jpg", caption: "Group Photo at Heritage Site" },
    ],
  },
  {
    id: 'xth-passout',
    title: 'Xth Pass-Out Batch',
    category: 'Events',
    emoji: '🎓',
    cover: "/assets/optimized/xth_passout_batch.jpg",
    photos: [
      { src: "/assets/optimized/xth_passout_batch.jpg", caption: "Class X Pass-Out Batch with Teachers – MGZPHS Ghantasala" },
    ],
  },
];

const CATEGORIES = ['All', 'Sports & NCC', 'Cultural', 'Events'];

const CATEGORY_COLORS = {
  'Sports & NCC': '#3b82f6',
  'Cultural':     '#a855f7',
  'Events':       '#f97316',
};

/* ─── Lightbox ─── */
function Lightbox({ group, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(group.photos.length - 1, c + 1)), [group.photos.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, onClose]);

  const photo = group.photos[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(8px)' }}
    >
      {/* ── TOP BAR: BACK BUTTON (always visible, prominent) ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0, background: 'rgba(0,0,0,0.4)' }}>
        {/* Back to Gallery — large tap target */}
        <button
          onClick={onClose}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: '#1e40af', color: 'white', border: 'none',
            borderRadius: '0.625rem', padding: '0.55rem 1rem',
            fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer',
            minHeight: 'unset', minWidth: 'unset',
            boxShadow: '0 2px 12px rgba(30,64,175,0.5)',
          }}
          aria-label="Back to Gallery"
        >
          <ChevronLeft size={18} />
          Back to Gallery
        </button>

        {/* Title + counter */}
        <div style={{ textAlign: 'right' }}>
          <p style={{ color: CATEGORY_COLORS[group.category] || '#fbbf24', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {group.emoji} {group.title}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', fontWeight: 600, marginTop: '1px' }}>
            Photo {current + 1} of {group.photos.length}
          </p>
        </div>
      </div>

      {/* ── Main image area ── */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0 3.5rem', minHeight: 0 }}>
        {/* Prev */}
        <button
          onClick={prev}
          disabled={current === 0}
          style={{ position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10, minHeight: 'unset', minWidth: 'unset', opacity: current === 0 ? 0.2 : 1 }}
          aria-label="Previous photo"
        >
          <ChevronLeft size={22} />
        </button>

        <AnimatePresence mode="wait">
          <motion.img
            key={photo.src}
            src={photo.src}
            alt={photo.caption}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            style={{ maxHeight: '58vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '0.75rem', boxShadow: '0 16px 48px rgba(0,0,0,0.6)' }}
          />
        </AnimatePresence>

        {/* Next */}
        <button
          onClick={next}
          disabled={current === group.photos.length - 1}
          style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10, minHeight: 'unset', minWidth: 'unset', opacity: current === group.photos.length - 1 ? 0.2 : 1 }}

          aria-label="Next photo"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Caption */}
      <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', fontSize: '0.8rem', padding: '0.4rem 1rem', flexShrink: 0 }}>
        {photo.caption}
      </p>

      {/* ── Thumbnail strip ── */}
      <div style={{ flexShrink: 0, width: '100%', maxWidth: '680px', margin: '0 auto', padding: '0 1rem 1rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '10px 12px' }}>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', justifyContent: 'flex-start' }} className="scrollbar-hide">
            {group.photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: '52px', height: '52px', flexShrink: 0, borderRadius: '0.5rem', overflow: 'hidden',
                  border: i === current ? '2.5px solid #fbbf24' : '2.5px solid transparent',
                  opacity: i === current ? 1 : 0.45,
                  transition: 'all 0.2s',
                  transform: i === current ? 'scale(1.08)' : 'scale(1)',
                  cursor: 'pointer',
                  minHeight: 'unset', minWidth: 'unset', padding: 0, background: 'none',
                }}
                aria-label={`Photo ${i + 1}`}
              >
                <img src={p.src} alt={p.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Event Card ─── */
function EventCard({ group, index, onOpen }) {
  const color = CATEGORY_COLORS[group.category] || '#64748b';
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={() => onOpen(group, 0)}
      className="relative group rounded-2xl overflow-hidden bg-slate-100 shadow-sm cursor-pointer"
      style={{ aspectRatio: '4/3' }}
    >
      {/* Cover image */}
      <img
        src={group.cover}
        alt={group.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)' }} />

      {/* Photo count badge */}
      <div
        className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full px-2 py-1"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)' }}
      >
        <Images size={11} color="white" />
        <span style={{ color: 'white', fontSize: '0.6rem', fontWeight: 700 }}>{group.photos.length}</span>
      </div>



      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 style={{ color: 'white', fontWeight: 700, fontSize: '0.82rem', lineHeight: 1.3 }}>{group.title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.65rem', marginTop: '3px' }}>
          Click to view all {group.photos.length} photos →
        </p>
      </div>

      {/* Hover glow ring */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 2.5px ${color}` }}
      />
    </motion.div>
  );
}

/* ─── Main Gallery ─── */
export default function EventGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null); // { group, startIndex }

  const filtered = activeCategory === 'All'
    ? eventGroups
    : eventGroups.filter(g => g.category === activeCategory);

  const openLightbox  = (group, startIndex) => setLightbox({ group, startIndex });
  const closeLightbox = () => setLightbox(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-badge bg-school-blue/10 text-school-blue">
            <Camera size={14} /> Media Gallery
          </span>
          <h2 className="section-title">School Activities</h2>
          <p className="section-desc">
            Glimpses of our vibrant campus life — click any event card to view all photos from that event.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="relative mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-school-blue text-white shadow-md shadow-school-blue/20'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 active:scale-95'
                }`}
              >
                {cat}
                <span className="ml-1.5 opacity-60">
                  ({cat === 'All' ? eventGroups.length : eventGroups.filter(g => g.category === cat).length})
                </span>
              </button>
            ))}
          </div>
          <div className="absolute top-0 right-0 bottom-2 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
        </div>

        {/* Event group grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((group, i) => (
              <EventCard key={group.id} group={group} index={i} onOpen={openLightbox} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Total count */}
        <p className="text-center text-slate-400 text-xs mt-6 font-medium">
          {filtered.reduce((acc, g) => acc + g.photos.length, 0)} photos across {filtered.length} events
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            group={lightbox.group}
            startIndex={lightbox.startIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
