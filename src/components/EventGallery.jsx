import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';

const EventGallery = () => {
  const categories = ['All', 'Sports & NCC', 'Cultural', 'Events'];
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryItems = [
    { id: 1, src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0025.webp", category: "Sports & NCC", title: "International Yoga Day" },
    { id: 2, src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0026.webp", category: "Sports & NCC", title: "Yoga Session" },
    { id: 3, src: "/assets/optimized/Internation Yoga Day/IMG-20260704-WA0027.webp", category: "Sports & NCC", title: "Yoga Practice" },
    { id: 4, src: "/assets/optimized/Poster making competition as part of Ek Bharath, shresth Bharath/IMG-20260704-WA0013.webp", category: "Cultural", title: "EBSB Poster Making" },
    { id: 5, src: "/assets/optimized/Interaction with Ghantasala SI Chandana madam/IMG-20260704-WA0021.webp", category: "Events", title: "SI Chandana Interaction" },
    { id: 6, src: "/assets/optimized/Interaction with Ghantasala SI Chandana madam/IMG-20260704-WA0020.webp", category: "Events", title: "Guest Interaction" },
    { id: 7, src: "/assets/optimized/Welcoming newly joined to new academic year 2026-27/IMG-20260704-WA0016.webp", category: "Events", title: "Welcome Ceremony" },
    { id: 8, src: "/assets/optimized/YOGANDHRA '26/IMG-20260704-WA0003.webp", category: "Sports & NCC", title: "Yogandhra '26" },
    { id: 9, src: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.19 AM (1).webp", category: "Sports & NCC", title: "NCC & Scouts" },
    { id: 10, src: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.19 AM.webp", category: "Sports & NCC", title: "Scouts & Guides" },
    { id: 11, src: "/assets/optimized/NCC , scouts and guides/WhatsApp Image 2026-07-04 at 10.46.20 AM.webp", category: "Sports & NCC", title: "NCC Parade" },
    { id: 12, src: "/assets/optimized/pdf_page_08.webp", category: "Events", title: "Community Outreach" },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-badge bg-school-blue/10 text-school-blue">
            <Camera size={14} /> Media Gallery
          </span>
          <h2 className="section-title">School Activities</h2>
          <p className="section-desc">
            Glimpses of our vibrant campus life, celebrations, sports, and social initiatives.
          </p>
        </motion.div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-school-blue text-white shadow-md shadow-school-blue/20' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200 active:scale-95'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={item.id}
                className="relative group rounded-xl overflow-hidden bg-slate-100 aspect-square shadow-sm"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 md:transition-opacity md:duration-300 flex flex-col justify-end p-3">
                  <span className="text-school-gold text-[9px] font-bold uppercase tracking-wider mb-0.5">{item.category}</span>
                  <h4 className="text-white font-bold text-xs">{item.title}</h4>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2.5 md:hidden">
                  <h4 className="text-white font-semibold text-[10px] leading-tight">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default EventGallery;
